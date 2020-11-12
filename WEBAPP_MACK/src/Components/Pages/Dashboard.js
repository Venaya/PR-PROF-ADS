import React, {useState} from 'react';
import {Card, Button, Alert} from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

const Dashboard = props => {
    const [error, setError] = useState('');
    const {currentUser, signout} = useAuth();
    const history = useHistory();

    async function handleLogout(){
        setError('');

        try{
            await signout();
            history.push('/signin');
        }catch{
            setError('Failed to Logout');
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Perfil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Atualizar Perfil</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Logout</Button>
            </div>
        </>
    );
}

export default Dashboard;