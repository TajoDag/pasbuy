import {
  FileTextOutlined,
  IssuesCloseOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import React from "react";
import { SlSupport } from "react-icons/sl";
import TranslateTing from "../../../components/Common/TranslateTing";

const Service = () => {
  return (
    <section className="service_section">
      <div className="service">
        <div className="service_item">
          <FileTextOutlined className="icon" />
          <p>
            <TranslateTing text="Terms & Conditions" />
          </p>
        </div>
        <div className="service_item">
          <RetweetOutlined className="icon" />
          <p>
            <TranslateTing text="Return Policy" />
          </p>
        </div>
        <div className="service_item">
          <SlSupport className="icon" />
          <p>
            <TranslateTing text="Support Policy" />
          </p>
        </div>
        <div className="service_item">
          <IssuesCloseOutlined className="icon" />
          <p>
            <TranslateTing text="Privacy Policy" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
