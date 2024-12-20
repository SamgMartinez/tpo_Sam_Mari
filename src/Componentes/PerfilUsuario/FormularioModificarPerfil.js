import React, {useEffect, useState} from 'react';
import {TextField, DialogActions, DialogContent, DialogTitle, Dialog, Button} from '@mui/material';
import { modificarPerfilUsuario } from '../../Api/apiUsuarios';

export default function FormularioModificarPerfil({vistaFormulario, setVistaFormulario, usuario, actualizarPagina}) {
    const [nuevoNombre, setNuevoNombre] = useState(usuario.nombre);
    const [nuevaEdad, setNuevaEdad] = useState(usuario.edad);
    const [nuevoEmail, setNuevoEmail] = useState(usuario.email);
    const [nuevaFechaNacimiento, setNuevaFechaNacimiento] = useState(usuario.fechaNacimiento);

    useEffect(() => {
        setNuevoNombre(usuario.nombre);
        setNuevaEdad(usuario.edad);
        setNuevoEmail(usuario.email);
        setNuevaFechaNacimiento(usuario.fechaNacimiento);
    }, [usuario]);
        
    const botonCerrar = () => {
        setNuevoNombre(usuario.nombre);
        setNuevaEdad(usuario.edad);
        setNuevoEmail(usuario.email);
        setVistaFormulario(false);
    };
    const botonEditar = async () => {
        try{
            await modificarPerfilUsuario(nuevoNombre,nuevaEdad,nuevoEmail,nuevaFechaNacimiento);
            actualizarPagina();
        }catch(error){
            console.log("## ERROR en el try/botonEditar/FormularioModificarPerfil");
        }
        setNuevoNombre(usuario.nombre);
        setNuevaEdad(usuario.edad);
        setNuevoEmail(usuario.email);
        setVistaFormulario(false);
        botonCerrar();
    };

    return(<Dialog open={vistaFormulario} onClose={botonCerrar}>
        <DialogTitle>Editar Datos Personales</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                label="Nombre"
                type="text"
                fullWidth
                variant="outlined"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
            />
            <TextField
                margin="dense"
                label="Edad"
                type="number"
                fullWidth
                variant="outlined"
                value={nuevaEdad}
                onChange={(e) => setNuevaEdad(e.target.value)}
            />
            <TextField
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={nuevoEmail}
                onChange={(e) => setNuevoEmail(e.target.value)}
            />
            <TextField
                margin="dense"
                label="Fecha de Nacimiento"
                type="date"
                fullWidth
                variant="outlined"
                value={nuevaFechaNacimiento}
                onChange={(e) => setNuevaFechaNacimiento(e.target.value)}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={botonCerrar} color="">
                Cancelar
            </Button>
            <Button onClick={botonEditar} color="">
                Confirmar
            </Button>
        </DialogActions>
    </Dialog>);
}