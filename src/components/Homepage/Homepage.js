import React from "react";
import Header from "../Header/Header";
import SectionServices from "../SectionServices/SectionServices";
import SectionAbout from "./SectionAbout/SectionAbout";
import SectionTarifs from "../SectionTarifs/SectionTarifs";
import Demo from "../Demo/Demo";
import Uploader from "../Uploader/Uploader";

export default function Homepage() {
  return (
    <div>
      <Header />
      <SectionAbout />
      <SectionServices />
      <SectionTarifs />
      <Demo />
    </div>
  );
}
