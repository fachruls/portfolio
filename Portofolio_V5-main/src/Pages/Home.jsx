import React, { useState, useEffect, useCallback, memo } from "react"
import { Helmet } from "react-helmet-async"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const StatusBadge = memo(() => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 backdrop-blur-sm border border-green-200 hover:border-green-300 transition-all duration-300 group cursor-default" data-aos="fade-down" data-aos-delay="400">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
    <span className="text-sm text-gray-700 font-medium group-hover:text-green-700 transition-colors">
      Ready to Innovate
    </span>
  </div>
));

const MainTitle = memo(() => (
  <>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" data-aos="fade-up" data-aos-delay="600">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#22c55e] to-[#4ade80] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">
          Full Stack
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#4ade80] to-[#22c55e] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
          Developer
        </span>
      </span>
    </h1>
  </>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 rounded-full bg-green-50 backdrop-blur-sm border border-green-200 text-sm text-gray-700 hover:bg-green-100 hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300 cursor-default">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href} className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#22c55e] to-[#4ade80] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
    <div className="relative h-11 bg-white backdrop-blur-xl rounded-lg border border-green-200 shadow-lg shadow-green-100/50 flex items-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors z-10">
        {text}
      </span>
      <Icon className={`w-4 h-4 text-gray-600 group-hover:text-green-600 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10 ml-2`} />
    </div>
  </a>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-3" aria-label={label}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e] to-[#4ade80] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-white/80 backdrop-blur-xl p-2 flex items-center justify-center border border-green-200 shadow-lg shadow-green-100/50 group-hover:shadow-green-200/50 transition-all duration-300 hover:scale-110">
        <Icon className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
      </div>
    </button>
  </a>
));

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Network & Telecom Student", "Tech Enthusiast"];
const TECH_STACK = ["React", "Javascript", "Node.js", "Tailwind", "PHP", "Laravel"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/fachrulspc", label: "GitHub Profile" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/fachrulspc/", label: "LinkedIn Profile" },
  { icon: Instagram, link: "https://www.instagram.com/fachrulspc/", label: "Instagram Profile" }
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };
    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <>
      <Helmet>
        <title>Muhammad Fachrul Syahputra — Frontend Web Developer</title>
        <meta name="description" content="Portfolio of Muhammad Fachrul Syahputra, a Frontend Web Developer specializing in React, JavaScript, and modern web technologies." />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Person", "name": "Muhammad Fachrul Syahputra", "jobTitle": "Frontend Developer", "url": "https://fachrulspc.vercel.app", "sameAs": ["https://github.com/fachrulspc", "https://www.linkedin.com/in/fachrulspc/", "https://www.instagram.com/fachrulspc/"] })}</script>
      </Helmet>
      <div className="min-h-screen bg-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="Home">
        <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="container mx-auto min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
              {/* Left Column */}
              <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
                data-aos="fade-right"
                data-aos-delay="200">
                <div className="space-y-4 sm:space-y-6">
                  <StatusBadge />
                  <MainTitle />

                  {/* Typing Effect */}
                  <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                    <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent font-light">
                      {text}
                    </span>
                    <span className="w-[3px] h-6 bg-gradient-to-t from-[#22c55e] to-[#4ade80] ml-1 animate-blink"></span>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed font-light"
                    data-aos="fade-up"
                    data-aos-delay="1000">
                    Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly untuk Solusi Digital.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                    {TECH_STACK.map((tech, index) => (
                      <TechStack key={index} tech={tech} />
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                    <CTAButton href="#Contact" text="Contact" icon={Mail} />
                  </div>

                  {/* Social Links */}
                  <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialLink key={index} {...social} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - WebM Video */}
              <div className="w-full py-0 md:py-[10%] sm:py-0 lg:w-1/2 h-[260px] sm:h-[400px] lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-5 sm:mt-0"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                data-aos="fade-left"
                data-aos-delay="600">
                <div className="relative w-full opacity-90">
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#22c55e]/10 to-[#4ade80]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                    isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                  }`}>
                  </div>

                  <div className={`relative lg:left-12 z-10 w-full opacity-90 transform transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}>
                    <img
                      src="Animation1.gif"
                      alt="Developer Animation"
                      className={`w-full h-full object-contain transition-all duration-500 ${
                        isHovering 
                          ? "scale-[95%] sm:scale-[90%] md:scale-[90%] lg:scale-[90%] rotate-2" 
                          : "scale-[90%] sm:scale-[80%] md:scale-[80%] lg:scale-[80%]"
                      }`}
                    />
                  </div>

                  <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isHovering ? "opacity-50" : "opacity-20"
                  }`}>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                      isHovering ? "scale-110" : "scale-100"
                    }`}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);