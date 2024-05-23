import { FileTextOutlined, IssuesCloseOutlined, RetweetOutlined } from '@ant-design/icons'
import React from 'react'
import { SlSupport } from 'react-icons/sl'

const Service = () => {
    return (
        <section className="service_section">
            <div className="service">
                <div className="service_item">
                    <FileTextOutlined className="icon" />
                    <p>Terms & Conditions</p>
                </div>
                <div className="service_item">
                    <RetweetOutlined className="icon" />
                    <p>Return Policy</p>
                </div>
                <div className="service_item">
                    <SlSupport className="icon" />
                    <p>Support Policy</p>
                </div>
                <div className="service_item">
                    <IssuesCloseOutlined className="icon" />
                    <p>Privacy Policy</p>
                </div>
            </div>
        </section>
    )
}

export default Service
