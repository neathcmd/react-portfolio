import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // Import the Facebook icon

const Discord = () => {
  return (
    <div>
      <a
        href="https://discord.com/channels/@me"
        target="_blank"
        class="social-link"
      >
        <FontAwesomeIcon icon="fa-brands fa-discord" />
      </a>
    </div>
  );
};

export default Discord;
