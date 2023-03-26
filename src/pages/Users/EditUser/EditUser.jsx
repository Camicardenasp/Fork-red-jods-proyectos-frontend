import React, {useState, useEffect, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AuthContext } from '../../../contexts/AuthContext';
import api from "../../../services/api/index";
import users from "../../../services/api/index";
import { useNavigate } from 'react-router-dom'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>{'Copyright © '}
            <Link color="inherit" href="https://redJODS.netlify.app">
                RedJODS
            </Link>{' '}{new Date().getFullYear()}{'.'}
        </Typography>
    );
}

const theme=createTheme();

export default function EditUser() {

    // //Using AuthContext information
    const { authData, setAuthData }=useContext(AuthContext);
    const { token, id }=authData;

    // Hook de react router dom para navegar al darle submit
    const navigate=useNavigate();

    const [name, setName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [role, setRole]=useState('');
    const [userData, setUserData]=useState({});

    useEffect(() => {
        setName(id.name);
        setLastName(id.last_name);
        setEmail(id.email);
        setPhone(id.phone);
        setRole(id.role);
    }, [userData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data={
            name: name,
            last_name: lastName,
            email: email,
            phone: phone,
            role: role,
            state: true
        };

        let res=await users.put(`/Api/v1/user/${id._id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(res.data);
        swal({
            title: "Edición de Usuario",
            text: `El usuario ${id.name} fue modificado exitosamente`,
            icon: "sucess",
            button: "Aceptar"
        });
        navigate("/users");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="last_name">Apellido:</label>
                <input type="text" id="last_name" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="phone">Teléfono:</label>
                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div>
                <label htmlFor="role">Rol:</label>
                <select id="role" value={role} onChange={e => setRole(e.target.value)}>
                    <option value="">Seleccionar un rol...</option>
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                </select>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}