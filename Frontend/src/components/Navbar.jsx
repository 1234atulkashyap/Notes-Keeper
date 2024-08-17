// import React from 'react'
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";
import { useState } from "react";

const Navbar = () => {
  const store = authStore();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="p-4 lg:p-5 mx-auto bg-[#f58d76] text-white shadow-lg fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center lg:ml-5 lg:mr-5">
          <Link to="/" className="text-2xl font-bold">
            Note Keeper
          </Link>
          <div></div>

          {/* Mobile Menu Button */}
          <button
            className="text-white lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                // d="M4 6h16M4 12h16m-7 6h7"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div>
            <ul
          className={`lg:flex font-semibold lg:space-x-8 lg:items-center lg:bg-[#f58d76] lg:static absolute top-16 left-0 w-full lg:w-auto bg-[#f58d76] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 text-black' : '-translate-x-full'}`}
        >
          <li className="lg:mr-4 mb-2 lg:mb-0">
            <Link
              to="/"
              className="block px-4 py-2 rounded-md text-center hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          {!store.loggedIn && (
            <>
              <li className="lg:mr-4 mb-2 lg:mb-0">
                <Link
                  to="/login"
                  className="block px-4 py-2 rounded-md text-center hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li className="lg:mr-4 mb-2 lg:mb-0">
                <Link
                  to="/signup"
                  className="block px-4 py-2 rounded-md text-center hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  SignUp
                </Link>
              </li>
            </>
          )}
          {store.loggedIn && (
            <li className="lg:mr-4 mb-2 lg:mb-0">
              <Link
                to="/logout"
                className="block px-4 py-2 rounded-md text-center hover:bg-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import authStore from "../stores/authStore";

// const Navbar = () => {
//   const store = authStore();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className=" mx-auto bg-[#f58d76] text-white shadow-lg fixed top-0 left-0 right-0">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Branding or Title */}
//         <div className="text-xl font-bold">
//           <Link to="/" className="hover:text-black transition-all duration-150 text-2xl">
//             Note Keeper
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="text-black font-semibold lg:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>

//         {/* Navigation Links */}

//         <ul
//           className={`lg:flex lg:space-x-8 lg:items-center bg-[#f58d76] lg:static absolute top-16 left-0 w-full lg:w-auto font-semibold transition-transform duration-300 ease-in-out ${
//             isOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <li className="lg:mr-4 mb-2 lg:mb-0">
//             <Link
//               to="/"
//               className="block px-4 py-2 rounded-md text-center hover:bg-gray-700 transition-colors"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//           </li>
//           {!store.loggedIn && (
//             <>
//               <li className="lg:mr-4 mb-2 lg:mb-0">
//                 <Link
//                   to="/login"
//                   className="block px-4 py-2 rounded-md text-center hover:bg-gray-700 transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Login
//                 </Link>
//               </li>
//               <li className="lg:mr-4 mb-2 lg:mb-0">
//                 <Link
//                   to="/signup"
//                   className="block px-4 py-2 rounded-md text-center hover:bg-gray-700 transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   SignUp
//                 </Link>
//               </li>
//             </>
//           )}
//           {store.loggedIn && (
//             <li className="lg:mr-4 mb-2 lg:mb-0">
//               <Link
//                 to="/logout"
//                 className="block px-4 py-2 rounded-md text-center hover:bg-red-600 transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Logout
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
