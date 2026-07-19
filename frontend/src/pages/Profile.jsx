import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

import Achievements from "../components/profile/Achievements";

function Profile() {

   const navigate = useNavigate();

const { user, logout } = useAuth();

const [profile, setProfile] = useState(null);

const [failures, setFailures] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const profileResponse = await API.get("/auth/me");
      setProfile(profileResponse.data);

      const failureResponse = await API.get("/failures");
      setFailures(failureResponse.data);

    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);



const handleLogout = () => {
  logout();

  toast.success("Logged out successfully");

  navigate("/login");
};

const total = failures.length;

const motivated = failures.filter(
  (item) => item.mood === "Motivated"
).length;

const neutral = failures.filter(
  (item) => item.mood === "Neutral"
).length;

const sad = failures.filter(
  (item) => item.mood === "Sad"
).length;

const mastered = failures.filter(
  (item) => item.status === "Mastered"
).length;

const improved = failures.filter(
  (item) => item.status === "Improved"
).length;

const averageProgress =
  total === 0
    ? 0
    : Math.round(
        failures.reduce(
          (sum, item) => sum + (item.progress || 0),
          0
        ) / total
      );
   
console.log("Profile:", profile);
console.log("User:", user);
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-md p-8">

          <div className="flex flex-col md:flex-row items-center gap-6">

           <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-5xl text-white font-bold">
                         {profile?.name?.charAt(0).toUpperCase()}
           </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                {profile?.name || user?.name}
              </h1>

              <p className="text-slate-500 mt-2">
                Login to personalize your profile.
              </p>

              <span
                className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
                            profile
                       ? "bg-green-100 text-green-700"
                       : "bg-blue-100 text-blue-700"
                         }`}
                          >
                        {profile ? "Active User" : "Guest Mode"}
               </span>
            </div>

          </div>

        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-2xl shadow-md p-8 mt-8">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-slate-500 text-sm">
                Full Name
              </p>

              <p className="font-semibold text-lg">
                {profile?.name || user?.name}
              </p>
            </div>

            <div>
              <p className="text-slate-500 text-sm">
                Email
              </p>

              <p className="font-semibold text-lg">
                {profile?.email || user?.email}
              </p>
            </div>

            <div>
              <p className="text-slate-500 text-sm">
                Account Status
              </p>

              <p className="font-semibold text-green-600">
                Active
              </p>
            </div>

            <div>
              <p className="text-slate-500 text-sm">
                Member Since
              </p>

              <p className="font-semibold">
                {profile?.createdAt
  ? new Date(
      profile.createdAt
    ).toLocaleDateString()
  : "-"}
              </p>
            </div>

          </div>

        </div>

        {/* Journal Statistics */}
        <div className="bg-white rounded-2xl shadow-md p-8 mt-8">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Journal Statistics
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-slate-100 rounded-xl p-5 text-center">
              <h3 className="text-slate-500 text-sm">
                Total Entries
              </h3>

              <p className="text-3xl font-bold mt-2">
                {total}
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 text-center">
              <h3 className="text-slate-500 text-sm">
                Motivated
              </h3>

              <p className="text-3xl font-bold mt-2">
                {motivated}
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 text-center">
              <h3 className="text-slate-500 text-sm">
                Neutral
              </h3>

              <p className="text-3xl font-bold mt-2">
                {neutral}
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 text-center">
              <h3 className="text-slate-500 text-sm">
                Sad
              </h3>

              <p className="text-3xl font-bold mt-2">
               {sad}
              </p>
            </div>

          </div>

        </div>

        <Achievements
          total={total}
          mastered={mastered}
          improved={improved}
          averageProgress={averageProgress}
        />

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-md p-8 mt-8">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <button
              disabled
              className="bg-slate-200 text-slate-500 py-3 rounded-xl cursor-not-allowed"
            >
              Edit Profile (Coming Soon)
            </button>

        

  

            <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition"
             >
              Logout
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
export default Profile;