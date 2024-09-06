// client/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('candidate');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/register', { name, email, password, role });
            alert('Registration successful');
        } catch (error) {
            alert('Error in registration');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="candidate">Candidate</option>
                <option value="employer">Employer</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
