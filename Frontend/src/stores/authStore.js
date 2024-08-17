import axios from "axios";
import { create } from "zustand";

// Define Zustand store
const authStore = create((set) => ({
  loggedIn: false,

  signupForm: { email: "", password: "" },

  loginForm: { email: "", password: "" },

  updateLoginForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        loginForm: { ...state.loginForm, [name]: value },
      };
    });
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        signupForm: { ...state.signupForm, [name]: value },
      };
    });
  },

  Login: async () => {
    const { loginForm } = authStore.getState();
    try {
      await axios.post("/login", loginForm);
      set({
        loggedIn: true,
        loginForm: { email: "", password: "" },
      });
    } catch (error) {
      console.error(error);
    }
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth");
      set({ loggedIn: true });
    } catch (error) {
      console.error("Authentication check failed", error);
      set({ loggedIn: false });
    }
  },

  Signup: async () => {
    const { signupForm } = authStore.getState();
    try {
      await axios.post("/signup", signupForm);
      set({
        signupForm: { email: "", password: "" },
      });
    } catch (error) {
      console.error(error);
    }
  },

  logout: async () => {
    try {
      await axios.get("/logout");
      set({
        loggedIn: false,
        loginForm: { email: "", password: "" },
      });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default authStore;
