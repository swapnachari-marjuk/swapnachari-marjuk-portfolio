import React from "react";
import "./SocialLinks.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/swapnachari-marjuk",
      icon: (
        <FiGithub/>
      ),
    },
    {
      name: "LinkedIn",
      url: " https://www.linkedin.com/in/ahmad-marjuk",
      icon: (
        <FiLinkedin />
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/ahmad.marjuk.869863",
      icon: (
        <LuFacebook />
      ),
    },
    {
      name: "Email",
      url: "mailto:marjukmujaddedi@gmail.com",
      icon: (
        <MdOutlineMail />
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/8801724260464",
      icon: (
        <FaWhatsapp />
      ),
    }

  ];

  return (
    <div className="social-links">
      <div className="social-container">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
