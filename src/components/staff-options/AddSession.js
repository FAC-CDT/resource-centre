import React from "react";
import Navbar from "../navbar/StaffNavbar.js";

const AddSession = () => {
  return (
    <>
      <Navbar />
      <iframe
	  title="Add session form"
        className="airtable-embed"
        src="https://airtable.com/embed/shrHYoQOPzZW2ZDFQ?backgroundColor=red"
        frameBorder="0"
        width="100%"
        height="533"
        style={{background: 'transparent', border: '1px solid #ccc'}}
      ></iframe>
    </>
  );
};

export default AddSession;
