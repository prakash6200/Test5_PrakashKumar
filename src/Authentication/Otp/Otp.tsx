import React from "react";
import "./Otp.css";


const Otp: React.FC = () => {

    return (
        <>
            <div className="form">

                <div className="form-heading">
                    <h1> OTP Verification </h1>
                    <p>Complete the OneStep verification to proceed. It is important<br /> for account verification </p>
                    <p id="otp-para"> Enter the OTP verification code sent you </p>
                </div>
                <div className="border">
                </div>
                <div className="box-div">
                    <p> 10 Minutes </p>
                    <div className="boxes">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>

                    </div>
                </div>

                <div className="proceed-center">
                    <div className="proceed-button">
                        <button> PROCEED </button>
                        <p>Didn't recieve your OTP? <u>&nbsp;Reset OTP </u></p><i className="fa-thin fa-right-to-bracket"></i>
                    </div>

                </div>
            </div>
            <div className="terms-conditions">
                <p>By using Login you agree to our <u>&nbsp;Terms & Privacy Policy.</u></p>
            </div>
        </>

    )

}




export default Otp;