import React from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material"
import BouttonDevis from "../Homepage/BouttonDevis/BouttonDevis";
import "./Demo.css"

export default function Demo() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));


    return (

        <div className="Demo">


            {isMatch ? (
                <>
                    <div className="DomoMobile">
                        <div className="TarifTitle">
                            <p>Demo</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="DomoWeb">
                        <div className="gauche">
                            <p>Demo Web</p>
                            
                        </div>
                        <div className="droite">
                            
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}

