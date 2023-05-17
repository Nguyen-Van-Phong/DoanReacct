import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, FormGroup, Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { auth } from "../firebase.config"


import '../styles/login.css'
const Signup = () => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [file, setFile] = useState('null')
    const [loading, setLoading] = useState(false)

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, username, email, password)(
                auth,
                username,
                email,
                password
            )

            const user = userCredential.user
            console.log(user)
        } catch (error) {

        }
    }

    return <Helmet title='Signup'>
        <section>
            <Row>
                <Col lg='6' className='m-auto text-center'>
                    <h3 className='fw-bold mb-4'>Signup</h3>

                    <Form className='auth__form' onSubmit={signup}>
                        <FormGroup className='auth__form'>
                            <input className='inputt' type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                        </FormGroup>
                        <FormGroup className='auth__form'>
                            <input className='inputt' type="email" placeholder='Enter your Email' value={email} onChange={e => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup className='auth__form'>
                            <input className='inputt' type="password" placeholder='Enter your Password' value={password} onChange={e => setPassword(e.target.value)} />
                        </FormGroup>
                        <FormGroup className='auth__form'>
                            <input className='inputt' type="file" onChange={e => setFile(e.target.files[0])} />
                        </FormGroup>

                        <button type='submit' className='duy__btn auth__btn'>Create an Account</button>
                        <p>Already have an account? <Link to='./login'>Login</Link></p>
                    </Form>
                </Col>
            </Row>
        </section>

    </Helmet>
}

export default Signup