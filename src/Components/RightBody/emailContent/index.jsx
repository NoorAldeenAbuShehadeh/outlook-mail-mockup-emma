import React from "react";
import EmailHeader from "../emailHeader";
import EmailContentBody from "../EmailContentBody";
import './index.css' 
const EmailContent = () => {
  return (
    <div className="ContentContainer">
      <EmailHeader />
      <EmailContentBody />
    </div>
  );
};

export default EmailContent;
