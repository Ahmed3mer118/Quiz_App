import axios from "axios";
import React, { useState } from "react";

function Delete({ handleDelete }) {
  const [showDelete, setShowDelete] = useState(false);
  const handleHidden = (e) => {
    e.preventDefault();
    setShowDelete(true);
  };
  
  return (
    <>
    
    </>
  );
}

export default Delete;
