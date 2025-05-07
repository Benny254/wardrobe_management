'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/register/', {
                username,
                email,
                password,
            });
            alert('Registration successful!');
        } catch (error) {
            alert('Registration failed!');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}