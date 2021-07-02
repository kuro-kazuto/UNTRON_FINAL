import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import ReactDOM from "react-dom";
import Clock from "../parts/Clock";
import logo from "../UNTRON.png";
import bgn from "../background.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
export default class News extends Component {
  render() {
    return (
      <>
        <Header></Header>
        
        <div class="jumbotron text-center" style={{ backgroundImage: `url(${bgn})` }} >
            
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="Text-bgn">ADA BERITA APA HARI INI ?</h1>
            <p className="Text-bgn">Berita Seputar Teknologi dan Informasi</p>
        </div>
          <div className="News">
            <h1 className="Text-black">JAM DUNIA</h1>
            <p className="Text-black">Sekarang Jam Berapa?, Cek Sekarang !</p>
            <div className="row" style={{ marginLeft : "90px", marginRight : "30px", marginTop :"30px", marginBottom :"30px" }}>
                  <div>
                      <div className="thumbnail" >
                        <Clock title="Jakarta" datediff={0} ></Clock>
                      </div>
                  </div>
                  <div>
                      <div className="thumbnail" >
                        <Clock title="GMT" datediff={-7} />
                      </div>
                  </div>
                  <div>
                      <div className="thumbnail" >
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div className="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                      </div>
                  </div>
                  <div>
                      <div className="thumbnail" >                        
                        <Clock title="GMT" datediff={-7} />
                      </div>
                  </div>
                  <div>
                      <div className="thumbnail" >
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div className="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                      </div>
                  </div>
                  <div>
                      <div className="thumbnail" >
                        <Clock title="GMT" datediff={-7} />
                      </div>
                  </div>
                  <div>
                      <div className="thumbnail" >
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
            </div>  
          </div>
          <div>
            <hr></hr>
            <div className="jumbotron text-center">
              <h1>OOPS...SEDANG DALAM PERBAIKAN !</h1>
              <p>SILAHKAN DATANG KEMBALI LAIN WAKTU</p>
            </div>
          
          </div>
      
        <Footer></Footer>
      </>
    );
  }
}


