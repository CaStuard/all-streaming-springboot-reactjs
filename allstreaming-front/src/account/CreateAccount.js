import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateAccount() {

    let navigate = useNavigate()

    const [account, setAccount] = useState({
        accountName: "",
        accountType: "",
        accountState: ""
    });

    const { accountName, accountType, accountState } = account;

    const states = ["Disponible", "En Uso", "Bloqueada"];

    const [accType, setAccType] = useState({
        accTypeName: ""
    });

    useEffect(() => {
        loadAccTypes();
    }, []);

    const loadAccTypes = async () => {
        const result = await axios.get(`http://localhost:8080/accounttypes`);
        setAccType(result.data);
        //console.log(Object.entries(result.data));
    }

    const onInputChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/account", account);
        navigate("/");
    };

    return <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
                <h2 className="text-center m-4">Create Account</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Account Name"
                            name="accountName"
                            value={accountName}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Type" className="form-label">
                            Type
                        </label>                        
                        <select className="form-control" name="accountType" value={accountType} onChange={(e) => onInputChange(e)}>
                            {
                                Object.entries(accType).map((opt, index) => <option key={index}>{opt[1].accTypeName}</option>)
                            }
                        </select>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="State" className="form-label">
                            State
                        </label>
                        <select className="form-control" name="accountState" value={accountState} onChange={(e) => onInputChange(e)}>
                            {
                                states.map(opt => <option>{opt}</option>)
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <Link className="btn btn-outline-danger mx-1" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>;
}
