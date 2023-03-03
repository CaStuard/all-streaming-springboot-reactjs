import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateAccount() {

    let navigate = useNavigate()

    const { id } = useParams()

    const [account, setAccount] = useState({
        accountName: "",
        accountType: "",
        accountState: ""
    });

    const { accountName, accountType, accountState } = account;
    
    const states = ["Disponible", "En Uso", "Bloqueada"];

    const onInputChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadAccount();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/account/${id}`, account);
        navigate("/");
    };

    const loadAccount = async () => {
        const result = await axios.get(`http://localhost:8080/account/${id}`)
        setAccount(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
                    <h2 className="text-center m-4">Update Account</h2>
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
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Account Type"
                                name="accountType"
                                value={accountType}
                                onChange={(e) => onInputChange(e)}
                            />
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
        </div>
    );
}
