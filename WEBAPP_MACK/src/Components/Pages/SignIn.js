import React, {useRef, useState} from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {signin} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    async function handleSubmit(e){
        e.preventDefault();

        try{
            setError('');
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value);
            history.push('/')
        }catch{
            setError('Falha do Login');
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100">Login</Button>
                    </Form>
                    <div className="w-100 text-right mt-3">
                        <Link to="/forgot-password">Esqueceu sua Senha?</Link>
                    </div>
                </Card.Body>              
            </Card>
            <div className="w-100 text-center mt-2">
                Nao possui uma conta? <Link to="/signup">Cadastrar</Link>
            </div>
        </>
    );
};

export default SignIn;