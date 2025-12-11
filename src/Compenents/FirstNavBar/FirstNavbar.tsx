import React, { useState } from "react";
import {
  LockClosedIcon,
  KeyIcon,
  HeartIcon,
  LockOpenIcon,
} from "@heroicons/react/24/solid";
import "./FirstNavbar.css";

const FirstNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleLoginOpen = () => setLoginModalOpen(true);
  const handleLoginClose = () => setLoginModalOpen(false);
  const handleRegisterOpen = () => setRegisterModalOpen(true);
  const handleRegisterClose = () => setRegisterModalOpen(false);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <div className="first-navbar">
        <div className="navbar-container">
          {/* Desktop View */}
          <div className="desktop-view">
            {/* Left Side - Contact Info */}
            <div className="contact-info">
              <span className="contact-text">+91 99873 18251</span>
              <a href="mailto:info@simplevedas.com" className="contact-text">
                info@simplevedas.com
              </a>
            </div>

            {/* Right Side - Login/Register/Support or Logout/Support */}
            {!isLoggedIn ? (
              <div className="auth-actions">
                {/* Login */}
                <div className="action-item" onClick={handleLoginOpen}>
                  <LockClosedIcon className="icon maroon-icon" />
                  <span className="action-text maroon-text">Login</span>
                </div>

                {/* Register */}
                <div className="action-item" onClick={handleRegisterOpen}>
                  <KeyIcon className="icon gray-icon" />
                  <span className="action-text gray-text">Register</span>
                </div>

                {/* Support Us */}
                <div className="action-item">
                  <HeartIcon className="icon maroon-icon" />
                  <span className="action-text maroon-text support-text">
                    Support Us
                  </span>
                </div>
              </div>
            ) : (
              <div className="auth-actions">
                {/* Logout */}
                <div className="action-item" onClick={handleLogout}>
                  <LockOpenIcon className="icon gray-icon" />
                  <span className="action-text gray-text">Logout</span>
                </div>

                {/* Support Us */}
                <div className="action-item">
                  <HeartIcon className="icon maroon-icon" />
                  <span className="action-text maroon-text support-text">
                    Support Us
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Mobile View - Register/Login on Left, Support on Right */}
          <div className="mobile-view">
            {!isLoggedIn ? (
              <>
                {/* Left Side - Phone Number, Register and Login */}
                <div className="mobile-left">
                  <span className="contact-text">+91 99873 18251</span>
                  <div className="mobile-auth-group">
                    {/* Register */}
                    <div className="action-item" onClick={handleRegisterOpen}>
                      <KeyIcon className="icon gray-icon" />
                      <span className="action-text gray-text">Register</span>
                    </div>

                    {/* Login */}
                    <div className="action-item" onClick={handleLoginOpen}>
                      <LockClosedIcon className="icon maroon-icon" />
                      <span className="action-text maroon-text">Login</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Support Us */}
                <div className="action-item">
                  <HeartIcon className="icon maroon-icon" />
                  <span className="action-text maroon-text support-text">
                    Support Us
                  </span>
                </div>
              </>
            ) : (
              <>
                {/* Left Side - Phone Number and Logout */}
                <div className="mobile-left">
                  <span className="contact-text">+91 99873 18251</span>
                  <div className="action-item" onClick={handleLogout}>
                    <LockOpenIcon className="icon gray-icon" />
                    <span className="action-text gray-text">Logout</span>
                  </div>
                </div>

                {/* Right Side - Support Us */}
                <div className="action-item">
                  <HeartIcon className="icon maroon-icon" />
                  <span className="action-text maroon-text support-text">
                    Support Us
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstNavbar;