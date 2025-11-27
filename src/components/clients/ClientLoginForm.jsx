// import React, { useState } from "react";
// import { Phone, Lock, ArrowRight, Check } from "lucide-react";
// import bgImage from "../../assets/login/IMG-20251122-WA0006.jpg";

// export default function ClientLoginForm() {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSendOtp = async () => {
//     if (!mobile || mobile.length < 10) {
//       setMessage("Please enter a valid 10-digit mobile number");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/clientmaster/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ client_mobile: mobile }),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         setMessage(data.message || "OTP sent successfully!");
//         setOtpSent(true);
//       } else {
//         setMessage(data.message || "Error sending OTP");
//       }
//     } catch (err) {
//       console.error("Send OTP Error:", err);
//       setMessage("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     if (!otp || otp.length < 4) {
//       setMessage("Please enter a valid OTP");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(
//         "http://localhost:5000/api/clientmaster/verify-otp",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ mobile, otp }),
//         }
//       );
//       const data = await res.json();

//       if (res.ok) {
//         setMessage(data.message || "Login successful!");

//         // Store client data in memory (localStorage not supported in Claude.ai)
//         const clientData = JSON.stringify(data.client);

//         if (data.redirectTo) {
//           setTimeout(() => {
//             window.location.href = data.redirectTo;
//           }, 1000);
//         } else {
//           setTimeout(() => {
//             setOtpSent(false);
//             setMobile("");
//             setOtp("");
//             setMessage("");
//           }, 2000);
//         }
//       } else {
//         setMessage(data.message || "Invalid OTP");
//       }
//     } catch (err) {
//       console.error("Verify OTP Error:", err);
//       setMessage("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyPress = (e, action) => {
//     if (e.key === "Enter") {
//       action();
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('src/assets/login/IMG-20251121-WA0040.jpg')`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-900/60 to-indigo-900/70 backdrop-blur-xs"></div>
//       </div>

//       {/* Animated Gradient Orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//         <div
//           className="absolute w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       {/* Main Container */}
//       <div className="relative w-full max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">

//           <div className="w-full max-w-2xl mx-auto lg:mx-0">
//           <div
//             className="backdrop-blur-2xl rounded-3xl shadow-2xl border  overflow-hidden"
//             // style={{
//             //   backgroundImage: `url('src/assets/login/IMG-20251122-WA0009.jpg')`,
//             // }}
//           >
//             {/* Overlay for better readability */}
//             <div className="absolute inset-0  backdrop-blur-sm rounded-3xl"></div>

//             {/* Content wrapper */}
//             {/* <div
//               className="relative z-10 p-6"
//               style={{
//                 backgroundImage: `url(${bgImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             > */}

//                <div
//               className="relative z-10 p-4"
//               style={{
//                 backgroundImage: `url(${bgImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="text-center  ">
//                 <div className="text-center">
//                   <img src="src/assets/login/aanshi_logo.png " className=""></img>
//                 </div>

//               <h2 className="text-4xl font-bold text-yellow-400 mb-2 mt-8  ">Sign In</h2>
//               <p className="text-white text-sm">Enter your credentials to continue</p>
//               </div>
//               {/* Logo/Icon */}
//               <div className="text-center mb-2 p-20">

//                 <div className="inline-flex items-center justify-center ounded-2xl mb-4 backdrop-blur-sm border border-white/20 shadow-lg">
//                   {/* <Lock className="w-10 h-10 text-white" /> */}
//                 </div>
//                 {/* <h2 className="text-3xl font-bold text-white mb-2 mt-8  ">Sign In</h2>
//               <p className="text-white text-sm">Enter your credentials to continue</p> */}
//               </div>

//               {/* Form */}
//               <div className="space-y-5">
//                 {!otpSent ? (
//                   <>
//                     {/* Mobile Input */}
//                     <div className="space-y-2">
//                       <label className=" text-white font-bold  text-lg block pl-1">
//                         Mobile Number
//                       </label>
//                       <div className="relative">
//                         <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
//                           <Phone className="w-5 h-5 text-white font-bold" />
//                         </div>
//                         <input
//                           type="tel"
//                           placeholder="Enter 10-digit number"
//                           value={mobile}
//                           onChange={(e) =>
//                             setMobile(
//                               e.target.value.replace(/\D/g, "").slice(0, 10)
//                             )
//                           }
//                           onKeyPress={(e) => handleKeyPress(e, handleSendOtp)}
//                           maxLength="10"
//                           className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white font-bold focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 text-lg"
//                         />
//                       </div>
//                     </div>

//                     {/* Send OTP Button */}
//                     <button
//                       onClick={handleSendOtp}
//                       disabled={loading}
//                       className="w-full py-4 bg-blue-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-orange-600 hover:to-orange-300 transition-all   shadow-lg hover:bg-orange-500  mt-6"
//                     >
//                       {loading ? (
//                         <div className="w-5 h-5 border-2  border-white/30 border-t-white rounded-full animate-spin"></div>
//                       ) : (
//                         <>
//                          <span className="text-xl font-bold"> Send OTP</span>
//                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                         </>
//                       )}
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {/* Success Badge */}
//                     <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-xl p-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center flex-shrink-0">
//                           <Check className="w-6 h-6 text-green-300" />
//                         </div>
//                         <div>
//                           <p className="text-white font-bold text-lg">
//                             OTP Sent!
//                           </p>
//                           <p className="text-white/70 text-sm">
//                             Code sent to +91 {mobile}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* OTP Input */}
//                     <div className="space-y-2">
//                       <label className="text-white/80 text-sm font-medium block pl-1">
//                         Enter OTP
//                       </label>
//                       <div className="relative">
//                         <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
//                           <Lock className="w-5 h-5 text-purple-300" />
//                         </div>
//                         <input
//                           type="text"
//                           placeholder="6-digit code"
//                           value={otp}
//                           onChange={(e) =>
//                             setOtp(
//                               e.target.value.replace(/\D/g, "").slice(0, 6)
//                             )
//                           }
//                           onKeyPress={(e) => handleKeyPress(e, handleVerifyOtp)}
//                           maxLength="6"
//                           className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 tracking-widest text-center text-2xl font-semibold"
//                         />
//                       </div>
//                     </div>

//                     {/* Verify Button */}
//                     <button
//                       onClick={handleVerifyOtp}
//                       disabled={loading}
//                       className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50 transform hover:scale-[1.02] mt-6"
//                     >
//                       {loading ? (
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                       ) : (
//                         <>
//                           Verify & Login
//                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                         </>
//                       )}
//                     </button>

//                     {/* Back Button */}
//                     <button
//                       onClick={() => {
//                         setOtpSent(false);
//                         setOtp("");
//                         setMessage("");
//                       }}
//                       className="w-full py-3 text-white/70 hover:text-white text-sm transition-colors font-medium"
//                     >
//                       ← Change mobile number
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* Message Display */}
//               {message && (
//                 <div
//                   className={`mt-5 p-4 rounded-xl backdrop-blur-sm border ${
//                     message.includes("success") || message.includes("sent")
//                       ? "bg-green-500/20 border-green-300/30 text-green-100"
//                       : "bg-red-500/20 border-red-300/30 text-red-100"
//                   } text-sm text-center font-medium animate-fadeIn`}
//                 >
//                   {message}
//                 </div>
//               )}

//               {/* Footer */}
//               <div className="mt-2 text-center bg-white/20 p-4">
//                 <p className="text-black font-bold  text-md">
//                   Powered by Aanshi Soluntions • Terms & Privacy Policy
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Left Side - Branding */}
//         <div className="hidden lg:block text-white space-y-6 animate-fadeIn">
//           <div className="space-y-4">
//             <h1 className="text-3xl font-bold leading-tight">
//               Welcome to
//               <br />
//               <span className="bg-gradient-to-r from-yellow-400 to-yellow-400 bg-clip-text text-transparent">
//                 Fleet Management system
//               </span>
//             </h1>
//             <p className="text-xl text-white leading-relaxed  font-bold">
//              Manage your Vehicle Transactions with  ease of Mobile
//             </p>
//           </div>

//           <div className="space-y-4 pt-8">
//             <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
//               <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
//                 <Lock className="w-6 h-6 text-purple-300" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">Secure Login</h3>
//                 <p className="text-white/70 text-sm">
//                   OTP-based authentication for maximum security
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
//               <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
//                 <Phone className="w-6 h-6 text-blue-300" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">Quick Access</h3>
//                 <p className="text-white/70 text-sm">
//                   Login instantly with your mobile number
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Login Form */}

//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Phone, Lock, ArrowRight, Check } from "lucide-react";

export default function ClientLoginForm() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!mobile || mobile.length < 10) {
      setMessage("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/clientmaster/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_mobile: mobile }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "OTP sent successfully!");
        setOtpSent(true);
      } else {
        setMessage(data.message || "Error sending OTP");
      }
    } catch (err) {
      console.error("Send OTP Error:", err);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length < 4) {
      setMessage("Please enter a valid OTP");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "http://localhost:5000/api/clientmaster/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile, otp }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Login successful!");

        // *************** MAIN FIX HERE ***************
        const client = data.client;

        const userSession = {
          client_name: client.client_name || "",
          company_name: client.company_name || "",
          profile_picture: client.profile_picture
            ? `http://localhost:5000/uploads/clients/${client.profile_picture}`
            : "",
          client_unique_id: client.client_unique_id || "",
          company_id: client.company_id || "",
          client_type: client.client_type || "", // 🔥 important
          client_mobile: mobile, // 🔥 always store entered mobile
        };

        sessionStorage.setItem("userSession", JSON.stringify(userSession));
        // *********************************************

        setTimeout(() => {
          if (data.redirectTo) {
            window.location.href = data.redirectTo;
          } else {
            window.location.href = "/dashboard";
          }
        }, 1000);
      } else {
        setMessage(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error("Verify OTP Error:", err);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") {
      action();
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/login/IMG-20251122-WA0006.jpg')",
      }}
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block text-white space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold leading-tight">
              Welcome to
              <br />
              <span className="text-yellow-300 ">Fleet Management System</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-semibold">
              Manage your Vehicle Transactions with ease of Mobile
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Secure Login</h3>
                <p className="text-white/70 text-sm">
                  OTP-based authentication for maximum security
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Quick Access</h3>
                <p className="text-white/70 text-sm">
                  Login instantly with your mobile number
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div
            className="backdrop-blur-2xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
            style={{
              backgroundImage:
                "url('src/assets/login/IMG-20251121-WA0040.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-4 bg-white/40 backdrop-blur-xl">
              {/* Header */}
              <div className="text-center mb-8">
                {/* Logo Center Top */}
                <img
                  src="src/assets/login/aanshi_logo.png"
                  alt="Logo"
                  className="mx-auto w-32 mb-4"
                />

                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mb-4 shadow-lg mx-auto">
                  <Lock className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-4xl font-bold text-white mb-2">Sign In</h2>
                <p className="text-white/70 text-sm">
                  Enter your credentials to continue
                </p>
              </div>

              {/* Form */}
              <div className="space-y-5 bg-white/50 p-4 rounded-lg">
                {!otpSent ? (
                  <>
                    {/* Mobile Input */}
                    <div className="space-y-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg">
                      <label className="text-black font-bold text-lg block py-2 text-center">
                        Mobile Number
                      </label>

                      <div className="relative flex justify-center">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                          <Phone className="w-5 h-5 text-yellow-600" />
                        </div>

                        <input
                          type="tel"
                          placeholder="Enter 10-digit number"
                          value={mobile}
                          onChange={(e) =>
                            setMobile(
                              e.target.value.replace(/\D/g, "").slice(0, 10)
                            )
                          }
                          onKeyPress={(e) => handleKeyPress(e, handleSendOtp)}
                          maxLength="10"
                          className="w-full pl-12 pr-4 py-4 bg-white text-black border-2 border-yellow-500 rounded-xl placeholder-gray-500 focus:outline-none focus:border-yellow-700 transition-all duration-300 text-lg"
                        />
                      </div>
                    </div>

                    {/* Send OTP Button */}
                    <button
                      onClick={handleSendOtp}
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 transform hover:scale-[1.02] mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-blue-900/30 border-t-blue-900 rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span className="text-black bold">Send OTP</span>
                          <ArrowRight className="w-5 h-5 text-black font-bold" />
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    {/* OTP Sent Section */}
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-6 h-6 text-green-300" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg">
                            OTP Sent!
                          </p>
                          <p className="text-white/70 text-sm">
                            Code sent to +91 {mobile}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* OTP Input */}
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm font-medium block pl-1">
                        Enter OTP
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                          <Lock className="w-5 h-5 text-purple-300" />
                        </div>
                        <input
                          type="text"
                          placeholder="6-digit code"
                          value={otp}
                          onChange={(e) =>
                            setOtp(
                              e.target.value.replace(/\D/g, "").slice(0, 6)
                            )
                          }
                          onKeyPress={(e) => handleKeyPress(e, handleVerifyOtp)}
                          maxLength="6"
                          className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300 tracking-widest text-center text-2xl font-semibold"
                        />
                      </div>
                    </div>

                    {/* Verify Button */}
                    <button
                      onClick={handleVerifyOtp}
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50 transform hover:scale-[1.02] mt-6"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Verify & Login
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    {/* Back Button */}
                    <button
                      onClick={() => {
                        setOtpSent(false);
                        setOtp("");
                        setMessage("");
                      }}
                      className="w-full py-3 text-white/70 hover:text-white text-sm transition-colors font-medium"
                    >
                      ← Change mobile number
                    </button>
                  </>
                )}
              </div>

              {/* Message */}
              {message && (
                <div
                  className={`mt-5 p-4 rounded-xl backdrop-blur-sm border ${
                    message.includes("success") || message.includes("sent")
                      ? "bg-green-500/20 border-green-300/30 text-green-100"
                      : "bg-red-500/20 border-red-300/30 text-red-100"
                  } text-sm text-center font-medium`}
                >
                  {message}
                </div>
              )}

              {/* Footer */}
              <div className="mt-2 text-center text-white font-bold">
                <p>
                  Register here:{" "}
                  <a
                    href="/admin/inquiry-from"
                    className="text-blue-500 underline"
                  >
                    Register here
                  </a>
                </p>
                <p className="text-black text-mg mt-1">
                  Powered by Aanshi Solutions • Terms & Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
