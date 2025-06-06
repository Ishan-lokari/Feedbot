import React, { useEffect } from "react";
import { BookOpen, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Header from "@/components/Header";

function UserDashboard() {
  const navigate = useNavigate(); // Hook to handle navigation

  useEffect(() => {
    // Check if user is logged in by checking token in localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token found, redirect to login page
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#EDEDED]">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Add padding-top to push content below fixed header */}
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome, User</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/courses">
            <DashboardCard
              icon={<BookOpen className="h-8 w-8 text-[#9333EA]" />}
              title="Courses"
              description="View and explore available courses."
            />
          </Link>
          <Link to="/faculty">
            <DashboardCard
              icon={<Users className="h-8 w-8 text-[#9333EA]" />}
              title="Faculty"
              description="Check faculty details and feedback."
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, description }) {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#6B21A8] hover:border-[#9333EA] transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-[#EDEDED] text-sm">{description}</p>
    </div>
  );
}

export default UserDashboard;
