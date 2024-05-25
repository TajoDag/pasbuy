import React from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";
import BasicInfo from "../EForm/BasicInfo";
import Address from "../EForm/Address";
import Email from "../EForm/Email";

export const Manage = () => {
  return (
    <div className="manage_container">
      <h2>
        <TranslateTing text="Manage Profile" />
      </h2>
      <BasicInfo />
      <Address />
      <Email />
    </div>
  );
};
