import React, {useRef, useState} from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

const UpdateProfile = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {currentUser, updateEmail, updatePassword} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        const promises = [];
        setError('');
        setLoading(true);
        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        
        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('As senhas nao coincidem');
        }

        Promise.all(promises)
        .then(() => {
            setMessage('Alterado com Sucesso');
            history.push('/');
        })
        .catch(() => {
            setError('Failed to update account');
        }).finally(() => {
            setLoading(false);
        });      
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Atualizar Perfil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirmar Senha</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100">Atualizar</Button>
                    </Form>                   
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancelar</Link>
            </div>
        </>
    );
};

export default UpdateProfile;