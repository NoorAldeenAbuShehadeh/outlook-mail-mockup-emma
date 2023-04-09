import React from "react";
import "./index.css";
import HiImage from "../../../assets/HiImage.png";
import EmailText from "../emailText";
const EmailContentBody = () => {
  return (
    <div className="ContentBody">
      <img src={HiImage} />
      <EmailText text='jermy'/>
      <div className="emailBodyText">
        <EmailText text='lorem ipsum dolor ....'/>
      </div>
    </div>
  );
};

export default EmailContentBody;
