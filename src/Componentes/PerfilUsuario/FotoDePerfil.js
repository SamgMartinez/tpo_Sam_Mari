import React from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {Button} from '@mui/material'; 
import subirImagenACloudinary from '../../Servicios/SubirImagen';
import { modificarImagenUsuario } from '../../Api/apiUsuarios';

export default function FotoDePerfil({fotoPerfil, setFotoPerfil, actualizarPagina}){
    
    const editarImagen = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try{
                const imagenUrl = await subirImagenACloudinary(file);
                setFotoPerfil(imagenUrl);
                await modificarImagenUsuario(imagenUrl);
                actualizarPagina();
            }catch(error){
                console.log("## Error en editarImagen/fotodeperfil.js ##");
            }
        }
    };
    
    return(
        <div className="perfil-image" style={{ position: 'relative' }}>
            <img 
                src={fotoPerfil} 
                alt="User profile" 
                className="circular-image" 
            />
            <input 
                type="file" 
                accept="image/*" 
                style={{ display: 'none' }} 
                id="file-input"
                onChange={editarImagen}
            />
            <label htmlFor="file-input">
                <Button 
                    variant="contained" 
                    color="" 
                    component="span"
                    sx={{ position: 'absolute', 
                        top: '20px', 
                        right: '20px',
                        borderRadius: '50%', 
                        padding: '10px'
                            }}
                >
                    <PhotoCamera />
                </Button>
            </label>
        </div>
    );
}