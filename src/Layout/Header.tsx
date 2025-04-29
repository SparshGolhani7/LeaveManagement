import React from 'react';
import './Header.css';
import { RxDashboard } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { MdOutlineContactMail } from "react-icons/md"; 
import { useNavigate } from 'react-router-dom';   
import logo from '../assets/images/nuance_infotech_logo.jpg';

const Header: React.FC = () => {
  const navigate = useNavigate(); 
  return (
    <header>
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        
          <h4 onClick={() => navigate('/')}><RxDashboard /> Dashboard</h4>      
          <h4 onClick={() => navigate('/employees')}><IoPersonOutline /> Employees</h4> 
          <h4 onClick={() => navigate('/services')}><MdOutlineMiscellaneousServices /> Services</h4>
          <h4 onClick={()=>navigate('/contactUs')}><MdOutlineContactMail /> Contact Us</h4>
          <h4 onClick={()=>navigate('/aboutUs')}><AiOutlineInfoCircle /> About Us</h4>
        
      </div>
      <div className="header-right">
        <button className="icon-button">
          <i className="fas fa-search"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-bell"></i>
        </button>
        <div className="profile">
          <img
            src="https://via.placeholder.com/40" 
            alt="Profile"
            className="profile-icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
