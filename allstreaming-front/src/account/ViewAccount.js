import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

export default function ViewAccount() {

    const { id } = useParams();

    const [account, setAccount] = useState({
        accountName: "",
        accountType: "",
        accountState: ""
    });
    
    useEffect(() => {
        loadAccount();
    }, []);

    const loadAccount = async () => {
        const result = await axios.get(`http://localhost:8080/account/${id}`);
        setAccount(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
                    <h2 className="text-center m-4">Account Review</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of Account id : {account.accountId}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Account Name:</b>
                                    {account.accountName}
                                </li>
                                <li className="list-group-item">
                                    <b>Account Type:</b>
                                    {account.accountType}
                                </li>
                                <li className="list-group-item">
                                    <b>Account State:</b>
                                    {account.accountState}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>Home</Link>
                </div>
            </div>
        </div>
    );
}
