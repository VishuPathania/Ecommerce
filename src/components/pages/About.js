import React from "react";
import Image1 from "../../image/ecomerce.jpg";
import "../../App.css";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <section>
      <div className="generic-section">
        <h1>The Generics</h1>
      </div>
      <h2
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "70px",
          fontStyle: "cursive",
          fontFamily: "Black Ops One",
        }}
      >
        About
      </h2>
      <div>
        <div>
          {" "}
          <div style={{ textAlign: "center" }}>
            {" "}
            <img src={Image1} style={{ width: "40%" }} />
          </div>
        </div>
        <p className="a">
          "Welcome to the heart and soul of our musical journey! At our Music
          Tour Booking, we're not just about events; we're about creating
          unforgettable experiences that resonate with your love for music. As
          passionate music enthusiasts ourselves, we understand the magic that
          happens when artists and audiences come together. Our mission is to
          bridge the gap between fans and their favorite artists by curating
          exceptional music tours that take you on a melodic adventure like
          never before."
        </p>
      </div>
    </section>
  );
};

export default About;
