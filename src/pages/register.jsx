
import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";

const login = () => {
    return (
        <container>
            <div id="login-box">
                <div className="left">
                    <h1>Sign up</h1>
                    <input type="text" id="email" name="email" placeholder="E-mail" />
                    <input type="password" id="password" name="password" placeholder="Password" />
                    <input type="submit" id="saveData" name="signup_submit" value="Remove" />
                </div>
                <div className="right">
                    <span className="loginwith">Sign in with <br />social network</span>
                    <button className="social-sign facebook">Login in with facebook</button>
                    <button className="social-sign twitter">Login in with twitter</button>
                    <button className="social-sign google">Login in with Google+</button>
                </div>
                <div className="or">OR</div>
            </div>
        </container>

    )
}

export default login