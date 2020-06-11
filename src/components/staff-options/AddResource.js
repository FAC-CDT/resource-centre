import React from "react";
import Navbar from "../navbar/Navbar.js";

const AddResource = () => {
  return (
    <>
      <Navbar />
      <iframe
	      title="Add resource form"
        className="airtable-embed"
        src="https://airtable.com/embed/shrHMAeoZxLhFovmG?backgroundColor=red"
        frameBorder="0"
        width="100%"
        height="533"
        style={{background: 'transparent', border: '1px solid #ccc'}}
      ></iframe>
    </>
  );
};

export default AddResource;
