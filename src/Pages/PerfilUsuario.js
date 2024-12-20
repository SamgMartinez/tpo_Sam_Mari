import React, { useState, useEffect, useCallback} from 'react';
import "../Componentes/PerfilUsuario/style.css";
import {Button, Typography, CardContent, Card} from '@mui/material'; 
import FormularioModificarPerfil from '../Componentes/PerfilUsuario/FormularioModificarPerfil';
import { getUsuarioLogeado } from '../Api/apiUsuarios';
import perfilEnBlanco from '../imagenes/FotoPerfilEnBlanco.jpg';
import FotoDePerfil from '../Componentes/PerfilUsuario/FotoDePerfil';


export default function PerfilUsuario() {
    const [vistaFormulario, setVistaFormulario] = useState(false);
    const [usuario, setUsuario] = useState([]);
    const [fotoPerfil, setFotoPerfil] = useState(perfilEnBlanco);
    
    const cargarUsuario = useCallback(async () => {
        try {
            const usuarioAux = await getUsuarioLogeado();
            setUsuario(usuarioAux);
            if(usuarioAux.imagen !== ""){
                setFotoPerfil(usuarioAux.imagen);
            }
        } catch (error) {
            console.log("### ERROR ###\n### en el useEffect, de la page PerfilUsuario ###\n### Tratando de getUsuarioLogeado\n");
        }
    }, []);
    
    useEffect(() => {
        cargarUsuario();
    },[cargarUsuario]);

    const abrirFormulario = () => {
        setVistaFormulario(true);
    };

    const actualizarPagina = () => {
        cargarUsuario();
    }

    return (
        <div className="perfil-container">
            <FotoDePerfil fotoPerfil={fotoPerfil} setFotoPerfil={setFotoPerfil} actualizarPagina={actualizarPagina} />
            <Card className="perfil-card">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Datos Personales
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Nombre: {usuario.nombre}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Edad: {usuario.edad}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Email: {usuario.email}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Fecha de Nacimiento: {usuario.fechaNacimiento}
                    </Typography>
                    <Button 
                        variant="outlined" 
                        color="" 
                        onClick={abrirFormulario}
                        sx={{ marginTop: 2 }}
                    >
                        Editar
                    </Button>
                </CardContent>
            </Card>
            <FormularioModificarPerfil vistaFormulario={vistaFormulario} setVistaFormulario={setVistaFormulario} usuario={usuario} actualizarPagina={actualizarPagina} />
        </div>
    );
}
