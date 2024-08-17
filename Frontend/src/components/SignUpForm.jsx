import authStore from "../stores/authStore";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const store = authStore(); // Access the Zustand store
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.Signup();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-blue-500">Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={store.signupForm.email} // Ensure this matches the store state
            onChange={store.updateSignupForm}
            className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={store.signupForm.password} // Ensure this matches the store state
            onChange={store.updateSignupForm}
            className=" mt-5 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="mt-5 w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Signup
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
          </p>
      </div>
    </div>
  );
};

export default SignUpForm;
