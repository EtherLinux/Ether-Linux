import React from "react";
import People from "../../components/people";

export default function Team() {
  return (
    <>
      <div
        className="ether_downloads section_padding"
        id="features"
        data-aos="zoom-in"
      >
        <div className="etherlinux_feature_heading">
          <h1 className="gradient_text" id="etherteam">
            Who is involved in this project?
          </h1>
        </div>
      </div>
      <div className="container">
        <People
          Name="Faiz"
          Title="Leader project | Tools Packaging | Ether Configuration"
          Img="1.jpg"
          Github="https://github.com/FaizTechIndo"
          Twitt="/404"
          Ig="/404"
        />
        <People
          Name="Keitaro"
          Title="Design Linux | ISO Image Development Section"
          Img="2.jpg"
          Github="https://github.com/tarokeitaro"
          Twitt="https://twitter.com/KeitaroSnbl"
          Ig="https://www.instagram.com/k_tarro/"
        />
        <People
          Name="Adyuta"
          Title="Web Designer | Stylist Tools | Web Revisitor"
          Img="3.jpg"
          Github="https://github.com/adyuta447"
          Twitt="https://twitter.com/Kooceng_Peduli"
          Ig="https://instagram.com/atuuuy_"
        />
        <People
          Name="GetRektBoy"
          Title="Malware Dev | Tools Maker | Stylist Tools"
          Img="4.jpg"
          Github="https://github.com/GetRektBoy724"
          Twitt="/404"
          Ig="https://www.instagram.com/GetRektBoy724_/"
        />
        <People
          Name="Yanakumara"
          Title="Tools Maker | Stylist Tools"
          Img="5.jpg"
          Github="https://github.com/KuMarayana"
          Twitt="/404"
          Ig="https://www.instagram.com/kumarayana._/?igshid=YmMyMTA2M2Y="
        />
        <People
          Name="Shiro"
          Title="Beta Tester | ISO Image Development Section"
          Img="6.jpg"
          Github="https://github.com/shin-exe"
          Twitt="/404"
          Ig="/404"
        />
        <People
          Name="NekoIceCream"
          Title="Github Management | Beta Tester"
          Img="7.jpg"
          Github="https://github.com/NekoIceCream"
          Twitt="https://twitter.com/IceCream2053"
          Ig="https://instagram.com/neko_icecream?igshid=YmMyMTA2M2Y="
        />
        <People
          Name="Fooster"
          Title="Beta Tester"
          Img="8.jpg"
          Github="https://github.com/fooster1337"
          Twitt="/404"
          Ig="https://instagram.com/alfrdzi_azl?igshid=YmMyMTA2M2Y="
        />
      </div>
    </>
  );
}
