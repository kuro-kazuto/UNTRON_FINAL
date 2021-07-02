import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../UNTRON.png";
import bgn from "../background.jpg";
export default class Help extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div class="jumbotron text-center" style={{ backgroundImage: `url(${bgn})` }} >  
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="Text-bgn">ANDA PUNYA MASALAH ?</h1>
            <p className="Text-bgn">Berikut Adalah Beberapa Solusi Yang Bisa Kami Tawarkan</p>
          </div>
        <div className = "jumbotron">
          <div class="container">
            <div class="row">
              <div>
			          <div>
				          <h5 class="h5">
                    Berikut ini adalah beberapa pertanyaan yang paling sering ditanyakan 
                    oleh beberapa orang yang sebenarnya sepele, namun tidak mengerti jawabannya
                  </h5>
		          	</div>
		          </div>

              <div class="col-md-12 my-2 card">
                <div class="card-body">
                  <h5 class="h5"><font color="red">Q1 = Kapan Terakhir Saya Mandi ?</font><br></br></h5>
                  <p><font color="green">A1 = Mungkin kemarin ataupun lusa. Coba anda teliti kembali melalui bau tubuh anda</font></p>
                </div>
              </div>
              <div class="col-md-12 my-2 card">
                <div class="card-body">
                  <h5 class="h5"><font color="red">Q2 = Apakah Bumi Itu Bulat ?</font><br></br></h5>
                  <p><font color="green">A2 = Anda jangan terhasut oleh teori konspirasi bumi datar, tetaplah konsisten dengan komitmen anda</font></p>
                </div>
              </div>
              <div class="col-md-12 my-2 card">
                <div class="card-body">
                  <h5 class="h5"><font color="red">Q3 = Apakah Manusia Adalah Benda ?</font><br></br></h5>
                  <p><font color="green">A3 = Betul sekali, manusia digolongkan kedalam kategori benda hidup.</font></p>
                </div>
              </div>
              <div class="col-md-12 my-2 card">
                <div class="card-body">
                  <h5 class="h5"><font color="red">Q4 = Saya Siapa ?</font><br></br></h5>
                  <p><font color="green">A4 = Coba anda ingat kembali, jika tidak kami menyarankan anda untuk pergi ke dokter spesialis psikologi.</font></p>
                </div>
              </div>
              <div class="col-md-12 my-2 card">
                <div class="card-body">
                  <h5 class="h5"><font color="red">Q5 = Apakah Saya Manusia?</font><br></br></h5>
                  <p><font color="green">A5 = Jika anda melihat diri anda transparan, maka sudah dipastikan anda adalah hantu.</font></p>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div class="container">
            <div class="row">
              <h5 class="h5"><font color="red">*</font> Tuliskan Keluhan Anda Disini</h5>
            </div>
            <br></br>
            <div class="row">
                <div class="col-md-6">
                    
                <form action="" class="form">

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control"></input>
                </div>

                <div class="form-group">
                    <label for="email">Message</label>
                    <textarea name="message" class="form-control" id="" cols="30" rows="10"></textarea>
                </div>
                    
                <div class="form-group">
                    <input type="submit" value="Kirim" class="btn btn-primary btn-block"></input>
                </div>

                </form>

                </div>
            </div>
        </div>

        
        </div>
        <Footer></Footer>
      </>
    );
  }
}