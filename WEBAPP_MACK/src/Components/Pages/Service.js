import React, {useState, useRef} from 'react';
import {Card, Button, Alert, Form} from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

const Service = props => {
    const nameRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {currentUser} = useAuth();
    const history = useHistory();

    const addOrEdit = (data) => {
        
    }

    const onDelete = id => {

    }

    async function handleSubmit(){
        
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Serviços</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>                       
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" ref={nameRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100">+</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Service;