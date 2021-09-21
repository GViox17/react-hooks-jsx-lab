import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    About
    <h2>
      About Me
    </h2>
    <p>
    What you know about me? Watchchu, Whatchu know about me?
    </p>
    <img src={image} alt="I made this">

    </img>
    </div>;
}

export default About;
