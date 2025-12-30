"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
// import { Icons } from "@/components/icons"; // optional if using custom icons

export default function FloatingSocials() {
    const socials = [
        { name: "Facebook", icon: "facebook", link: "https://facebook.com" },
        { name: "Twitter", icon: "twitter", link: "https://twitter.com" },
        { name: "YouTube", icon: "youtube", link: "https://youtube.com" },
        { name: "Pinterest", icon: "pinterest", link: "https://pinterest.com" },
    ];

    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-2 bg-black rounded-l-3xl p-1 py-3 z-999">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:bg-white hover:text-black rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                >
                    {social.icon === "facebook" && <Facebook className="w-5 h-5" />}
                    {social.icon === "twitter" && <Twitter className="w-5 h-5" />}
                    {social.icon === "youtube" && <Youtube className="w-5 h-5" />}
                    {social.icon === "Instagram" && <Instagram className="w-5 h-5" />}
                </a>
            ))}
        </div>
    );
}