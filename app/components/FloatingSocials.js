"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

export default function FloatingSocials({ lang }) {
    const socials = [
        { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/enmaaengcon" },
        { name: "Facebook", icon: "facebook", link: "https://www.facebook.com/enmaa.engcon/" },
        { name: "Linkedin", icon: "linkedin", link: "https://www.linkedin.com/company/73412794/admin/page-posts/published/" },
        { name: "Tiktok", icon: "tiktok", link: "https://www.tiktok.com/@enmaaengcon" },
    ];

    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-2 bg-primary rounded-l-3xl p-1 py-3 z-999">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:bg-white hover:text-black rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                >
                    {social.icon === "instagram" && <FaInstagram className="w-5 h-5" />}
                    {social.icon === "facebook" && <FaFacebook className="w-5 h-5" />}
                    {social.icon === "linkedin" && <FaLinkedin className="w-5 h-5" />}
                    {social.icon === "tiktok" && <FaTiktok className="w-5 h-5" />}
                </a>
            ))}
        </div>
    );
}