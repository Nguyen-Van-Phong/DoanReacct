import React, { useState } from 'react'
import app from "../firebase/firebase.config"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/DangNhap.css"
// import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const DangNhap = () => {
    const [inforuser, setUser] = useState(null)
    const navigate = useNavigate();
    console.log(inforuser);

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>

            <div className='All text-center' >
                <h2>Have an account</h2> <br></br>
                <h3>Log in With Googel</h3>

                {
                    inforuser && <div>
                        <img src={inforuser.photoURL} alt="" />
                        <h4>{inforuser.displayName}</h4>
                        <h4>{inforuser.email}</h4>
                    </div>
                }

                
                <button className='mt-5 butoon' onClick={handleLogin}>Google Sign In</button>

                <button className='mt-5 butoon' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default DangNhap
// export default app;