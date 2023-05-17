import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, FormGroup, Form } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../styles/login.css'
const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return <Helmet title='Login'>
        <section>
            <Row>
                <Col lg='6' className='m-auto text-center'>
                    <h3 className='fw-bold mb-4'>Login</h3>

                    <Form className='auth__form'>
                        <FormGroup className='auth__form'>
                            <input className='inputt' type="email" placeholder='Enter your Email' value={email} onChange={e => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup className='auth__form'>
                            <input className='inputt' type="password" placeholder='Enter your Password' value={password} onChange={e => setPassword(e.target.value)} />
                        </FormGroup>

                        <button type='submit' className='duy__btn auth__btn'>Login</button>
                        <p>Don't have an account? <Link to='./signup'>Create</Link></p>
                    </Form>
                </Col>
            </Row>
        </section>

    </Helmet>
}

export default Login