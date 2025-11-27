import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homeIcon from "../../assets/finalbuttons/home.png";
import logoutIcon from "../../assets/finalbuttons/logout.png";

export default function Header() {
  const navigate = useNavigate();

  const [userSession, setUserSession] = useState({
    client_name: "",
    company_name: "",
    profile_picture: "",
    client_unique_id: "",
    company_id: "",
    client_type: ""
  });

  useEffect(() => {
    const sessionData = sessionStorage.getItem("userSession");
    if (sessionData) {
      setUserSession(JSON.parse(sessionData));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center px-4 py-3">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          {userSession.profile_picture ? (
            <img
              src={userSession.profile_picture}
              alt="Profile"
              className="h-16 w-16 rounded-lg object-cover bg-white p-1 shadow-md"
            />
          ) : (
            <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
              <span className="text-orange-600 font-bold text-xl">
                {userSession.client_name?.charAt(0) ||
                  userSession.company_name?.charAt(0) ||
                  "U"}
              </span>
            </div>
          )}

          <div className="text-black">
            {/* <h2 className="text-lg md:text-xl font-bold">
             Company Name : {userSession.company_name || "Company Name"}
            </h2> */}
            <p className="text-md md:text-xl font-bold">
             Client Name : {userSession.client_name || "Client Name"}
            </p>

            {userSession.client_type && (
              <p className="text-xs opacity-75 capitalize">
                {userSession.client_type}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex gap-1">
          <button
            onClick={handleGoBack}
            className="  "
          >
            <img src={homeIcon} className="h-16 w-16" />
          </button>

          <button
            onClick={handleLogout}
            className="  "
          >
            <img src={logoutIcon} className="h-16 w-16" />
          </button>
        </div>

      </div>
      <h1 className="text-center text-xl md:text-2xl font-bold p-2 text-white bg-orange-600">
          <p className="text-lg md:text-xl font-bold">
             Company Name : {userSession.company_name || "Company Name"}
            </p>
      </h1>
    </div>
  );
}
