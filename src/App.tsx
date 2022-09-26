import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import AuthLayout from "./pages/Auth";
import Login from "./pages/Auth/component/Login";
import Register from "./pages/Auth/component/Register";
import CinemaDetails from "./pages/CinemaDetails";
import MoviesDetails from "./pages/MoviesDetails";
import Booking from "./pages/BookingMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cinemaDetails" element={<CinemaDetails />} />
          <Route path="/moviesDetails" element={<MoviesDetails />} />
          <Route path="/booking" element={<Booking />} />

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
