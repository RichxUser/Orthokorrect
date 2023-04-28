import React, { useState } from "react";
import Header from "../Header/Header";
import "./Uploader.css";
import { useDropzone } from "react-dropzone";

export default function Uploader() {

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({});
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));



    function insertFile() {
    }
    return (
        <div >
            <Header />
            <div className="UploaderSection">
                <div className="UploaderImage">
                    <img src="./images/Uploardbanner.png" alt="" />
                    <div className="UploaderTraitement">
                        <div className="UploaderTitle">
                            <p>Uploader & tarif</p>
                        </div>
                        <div className="UploaderFrame">
                            <p className="Uploader-1-1-title">1.1 Uploader le fichier</p>
                            <p className="conditionsGenerales" >En téléversant un fichier, vous vous soumettez à nos <a href="/">conditions générales</a> Consultez également <a href="/">notre <br />Accord</a> sur le traitement des données pour savoir comment nous traitons vos fichiers.</p>
                            
                            <div className="UploaderFrameDepoFichier" {...getRootProps()} >
                                <p className="Glissez-deposez">Glissez-déposez le document ici ou</p>
                                <div className="UploaderVotreDocumentIci" name="submit" type="file" onClick={insertFile} >
                                    <input className="TypeFile" type="file" name="file" onChange={insertFile} {...getInputProps()} />
                                    <label className="UploaderVotreDocumentIci1">Uploader votre document ici</label>
                                    
                                    <aside>
                                        <ul>{files}</ul>
                                    </aside>
                                    
                                </div>
                            </div>

                        </div>
                        <div className="UploaderFrameApercu">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}