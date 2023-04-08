import React from "react";
import EmailText from "../emailText";
import "./index.css";
const EmailInformation = () => {
  return (
    <div className="informationContainer">
      <div className="nameIcon">A</div>
      <div className="emailLeftHeader">
        <p className="nameEmail">Lorem Ipsum &lt;no_reply@loremipsum.com&gt;</p>
        <div >
          <EmailText text ='Thu 6/18/2020 4:49 PM' />
          <div className="to">
            <p>To:</p>
            <EmailText text='You'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInformation;
