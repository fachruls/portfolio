import { useEffect } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import PresenceWidget from "./PresenceWidget";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/fachrulspc/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "WhatsApp",
    displayName: "WhatsApp",
    subText: "+62 950-7896-180",
    icon: MessageCircle,
    url: "https://wa.me/+6289507896180",
    color: "#25D366",
    gradient: "from-[#25D366] to-[#128C7E]",
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@fachrulspc",
    icon: Instagram,
    url: "https://www.instagram.com/fachrulspc/?hl=id",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "YouTube",
    displayName: "Youtube",
    subText: "@fachrulspc",
    icon: Youtube,
    url: "https://www.youtube.com/@fachrulspc",
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#CC0000]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@fachruls",
    icon: Github,
    url: "https://github.com/fachruls",
    color: "#1f2937",
    gradient: "from-[#1f2937] to-[#374151]",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);
  const [whatsapp, instagram, youtube, github] = otherLinks;

  useEffect(() => {
    AOS.init({
      offset: 10,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-green-50 rounded-2xl p-6 py-8 backdrop-blur-xl border border-green-200">
      <h3
        className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-[#22c55e] rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
                     bg-white border border-green-200 overflow-hidden
                     hover:border-green-300 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
                       bg-gradient-to-r ${linkedIn.gradient}`}
          />

          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-10 rounded-md transition-all duration-500
                           group-hover:scale-110 group-hover:opacity-20"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-800 tracking-tight leading-none group-hover:text-gray-900 transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          <ExternalLink
            className="relative w-5 h-5 text-gray-400 group-hover:text-gray-600
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent
                           translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        {/* Second Row - WhatsApp & Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[whatsapp, instagram].map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                               bg-white border border-green-200 overflow-hidden
                               hover:border-green-300 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
                                     bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-10 rounded-lg transition-all duration-500
                                       group-hover:scale-125 group-hover:opacity-20"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-600 truncate group-hover:text-gray-700 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink
                className="w-4 h-4 text-gray-400 group-hover:text-gray-600 ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Third Row - YouTube & GitHub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[youtube, github].map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                               bg-white border border-green-200 overflow-hidden
                               hover:border-green-300 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={400 + index * 100}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
                                     bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-10 rounded-lg transition-all duration-500
                                       group-hover:scale-125 group-hover:opacity-20"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-600 truncate group-hover:text-gray-700 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink
                className="w-4 h-4 text-gray-400 group-hover:text-gray-600 ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;