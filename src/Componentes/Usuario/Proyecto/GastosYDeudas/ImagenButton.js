import React, { useState } from 'react';
import {Button} from '@mui/material';

export default function ImagenButton({imagen}) {
    const [vistaImagen, setVistaImagen] = useState(false);

    const cerrarImagen = () => {
        setVistaImagen(false);
    }
    
    return(<>
        <Button variant='text'
            sx={{
                borderColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onClick={() => setVistaImagen(true)}
        >
            <figure>
                <img src={imagen} alt='ticket de compra'/>
            </figure>
        </Button>
        {vistaImagen &&
            <div className='vistaImagen'>
                <figure>
                    <img className='imgDesplegada' src={imagen} alt='ticket de compra'/>
                </figure>
                <button onClick={cerrarImagen}>
                    Cerrar
                </button>
            </div>
        }
    </>)
}