import React from "react";
import Header from "../Header/Header";
import "./Uploader.css";

export default function Uploader() {
    function insertFile(){

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
                            <div className="UploaderFrameDepoFichier">
                                <p className="Glissez-deposez">Glissez-déposez le document ici ou</p>
                                <div className="UploaderVotreDocumentIci" name="submit" type="file" >
                                    <p  className="UploaderVotreDocumentIci1">Uploader votre document ici</p>
                                    <input type="file" name="file" onChange={insertFile}/>
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