import React from "react";
export default function Navbar() {
  return (
    <nav className="p-8">
      <div className="flex justify-between">
        <div
          className="font-bold flex flex-col items-center"
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: "DM Sans",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            letterSpacing: "0.4px",
            background: "gradient-text",
            backgroundClip: "text",
          }}
        >
          <div
            className="text-xl mb-2"
            style={{
              background: "gradient-text",
              fontSize: "40px",
            }}
          >
            MakerMeet
          </div>
          <div
            className="text-l"
            style={{
              background: "gradient-text",
              fontSize: "16px",
            }}
          >
            Connecting Creative Professionals
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-black">
            Message
          </a>
          <a href="#" className="text-black">
            My profile
          </a>
          <a href="#" className="text-black">
            Match me
          </a>
        </div>
      </div>
    </nav>
  );
}
