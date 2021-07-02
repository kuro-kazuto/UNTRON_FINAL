import React from "react";
import { Nav } from "react-bootstrap";
import { InfoSquareFill } from 'react-bootstrap-icons';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    
    <MDBFooter color="bg-primary">
      <div className="Text-footer-copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright <a > UNTRON </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;