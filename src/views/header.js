import React from 'react';
import "../styles/header.css"
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../firebase.js"
import {
    Link,
} from "react-router-dom";
import ReduxToeic from '../redux/Redux_toeic';
class Header extends React.Component {

    async load_DM_KH() {
        const dbRef = ref(getDatabase());
        await get(child(dbRef, `DM_KH`)).then((snapshot) => {
            if (snapshot.exists()) {
                //console.log(snapshot.val().K1.TEN_KH);
                document.getElementById("K1").innerHTML = snapshot.val().K1.TEN_KH;
                document.getElementById("K2").innerHTML = snapshot.val().K2.TEN_KH;
                document.getElementById("K3").innerHTML = snapshot.val().K3.TEN_KH;
                document.getElementById("K4").innerHTML = snapshot.val().K4.TEN_KH;
                document.getElementById("K5").innerHTML = snapshot.val().K5.TEN_KH;
                // console.log("ok")

            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    handelclick = () => {
        ReduxToeic();
    }
    render() {
        window.addEventListener("load", this.load_DM_KH());
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <div className="container-fluid">
                        <Link className="navbar-brand ms-5 fw-bold text-warning" to="/">VOCAVOCA</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarScroll">
                            <ul className="navbar-nav d-flex  text-center me-auto ms-auto  navbar-nav-scroll" >
                                <li className="nav-item">
                                    {/* <a className="nav-link text-warning fw-bold" id="K1" aria-current="page" href="#"></a> */}
                                    <Link className="nav-link active text-warning fw-bold" id="K1" onClick={this.handelclick} aria-current="page" to="/Toeic"></Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-warning fw-bold" id="K2" href="#"></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-warning " href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Khác
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><a className="dropdown-item text-success" id="K3" href="#"></a></li>
                                        <li><a className="dropdown-item text-success" id="K4" href="#"></a></li>
                                        <li><a className="dropdown-item text-success" id="K5" href="#"></a></li>
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


