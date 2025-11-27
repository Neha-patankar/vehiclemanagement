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
              className="h-16 w-16 rounded-full object-cover bg-white p-1 shadow-md"
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
            <h2 className="text-lg md:text-xl font-bold">
              {userSession.company_name || "Company Name"}
            </h2>
            <p className="text-sm md:text-base opacity-90">
              {userSession.client_name || "Client Name"}
            </p>

            {userSession.client_type && (
              <p className="text-xs opacity-75 capitalize">
                {userSession.client_type}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={handleGoBack}
            className="bg-white rounded-full p-2 hover:bg-orange-100 transition-all shadow-md"
          >
            <img src={homeIcon} className="h-10 w-10" />
          </button>

          <button
            onClick={handleLogout}
            className="bg-white rounded-full p-2 hover:bg-red-100 transition-all shadow-md"
          >
            <img src={logoutIcon} className="h-10 w-10" />
          </button>
        </div>

      </div>
    </div>
  );
}
