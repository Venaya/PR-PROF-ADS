import React, {useRef, useState} from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import {Link } from 'react-router-dom';

const ForgotPassword = () => {
    const emailRef = useRef();
    //const passwordRef = useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Cheque sua caixa de e-mail para as devidas instruçoes');
        }catch{
            setError('Falha ao resetar a Senha');
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Esqueci Minha Senha</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100">Resetar Senha</Button>
                    </Form>
                    <div className="w-100 text-right mt-3">
                        <Link to="/signin">Login</Link>
                    </div>
                </Card.Body>              
            </Card>
            <div className="w-100 text-center mt-2">
                Nao possui uma conta? <Link to="/signup">Cadastrar</Link>
            </div>
        </>
    );
};

export default ForgotPassword;