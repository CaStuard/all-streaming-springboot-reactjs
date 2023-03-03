import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">All Streaming</Link>
                    <div class="d-flex flex-row bd-highlight">
                        <Link className="btn btn-outline-light mx-2" to="/createaccount">Create Account</Link>
                        <Link className="btn btn-outline-dark" to="/createaccounttype">Create Account Type</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
