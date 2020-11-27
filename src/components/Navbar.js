import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container">
                <a className="navbar-brand" href="#">Admin</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <a className="navbar-brand" href="#">Admin</a>
                </button>
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pet">Lista de Pets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dono">Lista de Donos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
