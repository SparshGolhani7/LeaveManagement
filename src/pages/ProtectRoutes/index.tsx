// routes.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "../../Layout/DashbordLayout";
import AuthLayout from "../../Layout/AuthLayout";
import Dashbord from "../Dashboard";
import Employees from "../Employee";


const AppRoutes = () => (
    <Routes>

        <Route path="/login" element={<AuthLayout />}>
            {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}
        </Route>


        <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/employees" element={<Employees />} />



        </Route>
    </Routes>
);

export default AppRoutes;
