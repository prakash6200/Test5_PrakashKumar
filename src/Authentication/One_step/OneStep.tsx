import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OneStep.css';
import assets from '../../assets/vecteezy_telegram-circle-icon-for-web-design_20964381-removebg-preview.png';


const OneStep: React.FC = () => {

    const handleSendMessage = () => {
        toast.success("OTP has been sent!", {
            position: "top-center",
            autoClose: 3000, // Closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src={assets} width="50" alt="Telegram" />
                        <p>Telegram</p>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <button className="download">Download</button>
                    </ul>
                </div>
            </nav>

            <div className="popup">
                <h2>OneStep ID</h2>
                <p>@OneStepID_Bot</p>
                <p id="steppara">Authorize OneStep to send you a message on <br /> your Telegram account.</p>

                <Link to="/Otp">
                    <button onClick={handleSendMessage}>SEND MESSAGE</button>
                </Link>
            </div>
        </>
    );
}

export default OneStep;
