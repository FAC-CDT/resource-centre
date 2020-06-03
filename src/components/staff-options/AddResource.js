import React from "react";
import Navbar from "../navbar/StaffNavbar.js";

const AddResource = () => {
  return (
    <>
      <Navbar />
      <iframe
	  title="Add resource form"
        class="airtable-embed"
        src="https://airtable.com/embed/shrHMAeoZxLhFovmG?backgroundColor=red"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style={{background: 'transparent', border: '1px solid #ccc'}}
      ></iframe>
    </>
  );
};

export default AddResource;
