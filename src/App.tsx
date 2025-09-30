import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./components/views/login_view/LoginView";
import Dashboard from "./components/views/home_view/Dashboard";
import LandingView from "./components/views/landing_view/LandingView";
import AboutUsView from "./components/views/about_view/AboutUsView";
import ConfirmationView from "./components/views/confirmation_view/ConfirmationView";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import { setAuthToken } from "./api/axios";


function App() {

  const token = localStorage.getItem("token");
  if (token) setAuthToken(token);

  return (
    <BrowserRouter>
      <Routes>

        <Route 
          path="/" 
          element={
            <Layout>
              <LandingView />
            </Layout>
          } 
        />


        <Route 
          path="/donations" 
          element={
            <Layout>
              <LandingView />
            </Layout>
          } 
        />


        <Route 
          path="/login" 
          element={
            <Layout>
              <LoginView />
            </Layout>
          }
        />


        <Route 
          path="/donations/success" 
          element={
            <Layout>
              <ConfirmationView />
            </Layout>
          }
        />


        <Route 
          path="/about-us" 
          element={
            <Layout>
              <AboutUsView />
            </Layout>
          }
        />


        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout>
              <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
