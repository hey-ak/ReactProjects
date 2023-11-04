import React from "react";

function Card({ username, btnText = "visit me" }) {
  console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
      <img
        src="\src\assets\profile1.png"
        alt="profile"
        className="z-0 h-full w-full rounded-md object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">Hello</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
