import React from "react";
import "./Modal.css";

const Modal = () => (
    <div id="login" className="modal">
        <div className="modal-content">
            <h4 className="center-align">Sign In or Sign Up</h4>
            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="Your Email" id="emailInput" type="email" className="validate"></input>
                    <label for="emailInput">Your Email</label>
                </div>
                <div className="input-field col s12">
                    <input placeholder="password" id="passwordInput" type="password" className="validate"></input>
                    <label for="passwordInput">Password</label>
                </div>
                <div className="row">
                    <div className="col s4 center-align">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Login
                            <i className="material-icons right">person</i>
                        </button>
                    </div>
                    <div className="col s4 center-align">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Logout
                            <i className="material-icons right">person</i>
                        </button>
                    </div>
                    <div className="col s4 center-align">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Sign Up
                            <i className="material-icons right">person_add</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <p>etc, etc, etc</p>
        </div>
    </div>
)

export default Modal;