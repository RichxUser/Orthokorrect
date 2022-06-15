import React from "react";
import { Button, styled } from "@mui/material";


export default function BouttonContacter() {

    const BootstrapButton2 = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 20,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#ffffff',
        textTransform: "uppercase",
        color: '#4B3C99',
        borderColor: '#4B3C99',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#F1EFFC',
            borderColor: '#4B3C99',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#4B3C99',
            borderColor: '#4B3C99',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });

    return (
        <div>
            <BootstrapButton2 variant="contained" disableRipple>
                Nous Contacter
            </BootstrapButton2>
        </div>
    );
}

