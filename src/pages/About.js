import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


export default class About extends Component {
  render() {
    return (
      <body className = "bodyabout">
        <Header></Header>
        <div className ="container">
          
          
          <h1 className="Text-aboutup">GALIH AJI PAMBUDI</h1>
          <h2 className="Text-about">Saya adalah Seorang Mahasiswa</h2>
          <h5 className="Text-aboutbottom">Jurusan Teknik Elektro FT UNTIRTA</h5>
          <p className="motto">
            Saya adalah seorang mahasiswa teknik dari Jurusan Teknik Elektro angkatan 2018 FT UNTIRTA. 
            Saya berkeahlian dibidang Software Development terutama pada Android Apps.
            Meskipun begitu, saya adalah seorang ambisius yang tertarik untuk menjadi seseorang yang multi-talenta
            dibidang apapun. 
          
          </p>

        </div>
        

        <MDBFooter color="bg-transparent">
          <div className="Text-footer-copyright">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright <a > UNTRON </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </body>
    );
  }
}