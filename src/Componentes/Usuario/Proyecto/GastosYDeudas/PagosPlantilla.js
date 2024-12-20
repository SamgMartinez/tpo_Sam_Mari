import { Typography } from '@mui/material';
import React from 'react';
import { nombreDelUsuarioPorID } from '../../../../Servicios/ProyectosFunciones';
import ImagenButton from './ImagenButton';
    
export default function GastoPlantilla ({pago, borrar, proyecto}) {
    return (
        <li>
            <ImagenButton imagen={pago.imagen}/>
            <Typography variant='subtitle1' 
                sx={{flex: 1 }}
            >
                De: {nombreDelUsuarioPorID(proyecto, pago.deudorId)}
            </Typography>
            <Typography variant='subtitle1' 
                sx={{flex: 1 }}
            >
                Para: {nombreDelUsuarioPorID(proyecto, pago.cobradorId)}
            </Typography>
            <Typography variant='subtitle2' 
                sx={{flex: 1 }}
            >
                {pago.createdAt.slice(0, 10)}
            </Typography>
            <Typography variant='subtitle2' 
                sx={{flex: 1 }}
            >
                % = {(pago.porcentaje * 100).toFixed(1)}
            </Typography>
            <Typography variant='h5' 
                sx={{ flex: 1,}}
            >
                ${pago.monto}
            </Typography>
        </li>
    )
}