import React from 'react';
import "../styles/header.css"
class Header extends React.Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <div className="container-fluid">
                        <a className="navbar-brand ms-5 fw-bold text-warning" href="#">VOCAVOCA</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarScroll">
                            <ul className="navbar-nav d-flex  text-center me-auto ms-auto  navbar-nav-scroll" >
                                <li className="nav-item">
                                    <a className="nav-link text-warning fw-bold" aria-current="page" href="#">Hơn 1000 từ vựng Toeic</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-warning fw-bold" href="#">Phrasal Verbs & IDIOM</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-warning " href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Khác
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><a className="dropdown-item text-success" href="#">1000 Từ cơ bản</a></li>
                                        <li><a className="dropdown-item text-success" href="#">Tiếng anh CNTT</a></li>
                                        <li><a className="dropdown-item text-success" href="#">Tiếng anh công sở</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-warning" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </>
        );

    }
}
export default Header;


