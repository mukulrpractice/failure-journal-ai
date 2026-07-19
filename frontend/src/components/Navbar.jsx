import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `px-4 py-2 text-sm rounded-lg font-medium transition ${
      isActive
        ? "bg-white text-blue-700"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <nav className="bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
            📘
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              Failure Journal
            </h1>

            <p className="text-blue-100 text-xs">
              Learn • Improve • Grow
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-1">

          <NavLink to="/home" className={linkClass} end>
            Home
          </NavLink>

          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/analytics" className={linkClass}>
            Analytics
          </NavLink>

          <NavLink to="/profile" className={linkClass}>
            Profile
          </NavLink>

          <NavLink to="/aboutproject" className={linkClass}>
            About Project
          </NavLink>


          <NavLink to="/upcomingversions"className={linkClass}>
           Upcoming Versions
          </NavLink>



        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <button
            onClick={toggleTheme}
            className="bg-white text-slate-700 px-4 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {!user ? (
            <>
              <NavLink
                to="/login"
                className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition"
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <span className="hidden md:block bg-white/20 text-white px-4 py-2 rounded-full font-semibold">
                👤 {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;