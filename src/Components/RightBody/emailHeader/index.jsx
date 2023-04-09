import React from "react";
import EmailIcons from "../emailIcons";
import EmailInformation from "../emailInfo/index";
import './index.css'
const EmailHeader = () => {
  return (
    <div className="HeaderContainer">
      <EmailInformation />
      <EmailIcons/>
      
    </div>
  );
};

export default EmailHeader;
