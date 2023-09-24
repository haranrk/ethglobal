import React from "react";
import { Button, Heading, Typography } from '@ensdomains/thorin'

export default function Navbar() {
  return (
    <nav className="p-8">
      <div className="flex justify-between">
        <div
          className="font-bold flex flex-col items-left"
          style={{
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
            className="text-xl mb-2 text-blue-500"
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
        <div className="flex space-x-3">
          <a href="#" className="text-black">
            Message
          </a>
          <a href="#" className="text-black">
            My profile
          </a>
          <Button as="a" href="#" colorStyle="accentSecondary">Match Me</Button>
        </div>
      </div>
    </nav>
  );
}
