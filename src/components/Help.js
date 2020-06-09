import React from "react";
import Navbar from "./navbar/PartNavbar.js";
import "./Help.css";

const Help = () => {
  return (
    <>
      <Navbar />
      <h1> This is the help page </h1>
      <section className="iframe-container">
        <iframe
          title="help video"
          src="https://www.loom.com/embed/d15fb531f14d42a589ff5fa11ae897ae"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          className="iframe"
        ></iframe>
      </section>
			<section className="iframe-container">
			  <iframe
				  title="help video"
			    src="https://www.loom.com/embed/7466df3c64ca4da29a60df0d484869c8"
			    frameborder="0"
			    webkitallowfullscreen
			    mozallowfullscreen
			    allowfullscreen
					className="iframe"
			  ></iframe>
			</section>
    </>
  );
};

export default Help;
;
