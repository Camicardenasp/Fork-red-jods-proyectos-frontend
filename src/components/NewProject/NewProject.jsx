import React from 'react';
import Box from '@mui/material/Box';
import Decoración from '/src/assets/img//Decoración.png'
import FormPart2 from './FormPart2/FormPart2'

export default function NewProject() {
    return (
        <div>
            {/* This elements are displayed when screen is medium or large */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <h1 style={{ padding: "40px 40px 0px 40px" }}>Crear Proyecto</h1>
                <img src={Decoración} alt="" style={{ padding: "0 0 40px 40px" }} />
            </Box>

            {/* This elements are displayed when screen is small */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <h1 style={{ padding: "10px 10px 0px 10px" }}>Crear Proyecto</h1>
                <img src={Decoración} alt="" style={{ padding: "0 0 10px 10px", maxWidth: "280px" }} />
            </Box>
            <FormPart2 />
           
        </div>
    )
}


