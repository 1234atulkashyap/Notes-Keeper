import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import SignUpForm from "./components/SignUpForm";
import Logout from "./components/Logout";
// import LoggedInpage from "./components/LoggedInpage";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
