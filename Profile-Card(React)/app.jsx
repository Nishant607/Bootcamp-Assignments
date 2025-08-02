import React from "react";

function App() {
  const profilePic = "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"; // Replace with your own image

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm text-center transform hover:scale-105 transition duration-500">
      <img
        src={profilePic}
        alt="Profile"
        className="w-28 h-28 rounded-full mx-auto border-4 border-purple-400 shadow-md"
      />
      <h1 className="text-2xl font-bold mt-4 text-purple-800">Debasmita Palai</h1>
      <p className="text-sm text-gray-600">Frontend Developer 🌐</p>
      <p className="text-gray-700 mt-3">
        💻 Passionate about UI/UX and building beautiful, functional websites.
        Loves learning new technologies!
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/poonam-rout-0a743831a"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
        <a href="mailto:debasmita25@gmail.com" className="text-red-500 hover:underline">
          Email
        </a>
      </div>
    </div>
  );
}

export default App;
