import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Button, Stack, styled, useMediaQuery, useTheme } from "@mui/material";
import "./Header.css"
import DrawerComponent from "../Drawer/DrawerComponent";
import { Link, Routes, Route } from "react-router-dom";

import Uploader from "../Uploader/Uploader";
import Homepage from "../Homepage/Homepage";



export default function Header() {
    const BootstrapButton1 = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 12,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#4B3C99',
        textTransform: "uppercase",
        borderColor: '#0063cc',
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

    const BootstrapButton2 = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 12,
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

    const PAGES = ["Notre agence", "Service traduction", "Tarifs"];

    const LIENS =  [{
        id: 1,
        linkName: "Notre Agence",
        link: "/NotreAgence"
      },
      {
        id: 2,
        linkName: "Service traduction",
        link: "/ServiceTraduction"
      },
      {
        id: 3,
        linkName: "Tarifs",
        link: "/Tarifs"
      }];
   

    const [indicatorColorState, setindicatorColorState] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <nav>
            <AppBar sx={{ background: '#ffffff' }}>
                <Toolbar>
                    <img src="./images/logo.svg" className="logo" alt="" />
                    {isMatch ? (
                        <>
                            <DrawerComponent />
                        </>
                    ) : (
                        <>
                            <div className="Parser">
                                <p>Professional Documents Human Parser</p>
                            </div>
                            <Tabs sx={{ marginLeft: 'auto' }} value={indicatorColorState} onChange={(e, indicatorColorState) => setindicatorColorState(indicatorColorState)} indicatorColor="secondary" >
                                {
                                    LIENS.map((page, index) => (
                                        <Link  to={page.link} >
                                        <Tab key={index} label={<span style={{ color: '#4B3C99', fontSize: 12 }}>{page.linkName}</span>} />
                                        </Link>
                                    ))
                                }

                            </Tabs>
                            <Stack spacing={2} direction="row">
                                <Link to="/Uploader">
                                    <BootstrapButton2 variant="contained" disableRipple>
                                        Nous Contacter
                                    </BootstrapButton2>
                                </Link>
                                <Link  to="/Uploader" >
                                    <BootstrapButton1 variant="contained" disableRipple>
                                        Devis immédiat
                                    </BootstrapButton1>
                                </Link>
                            </Stack>
                            <img src="./images/maleUser.svg" className="signUp" alt="" />
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/Uploader" element={<Uploader />} />
            </Routes>
        </nav>
        
    );
}