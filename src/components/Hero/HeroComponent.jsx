import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
import "./style.css";
import { COLORS_TOP } from "../../constants";
import Text from "./Text";
import {Link} from 'react-router-dom';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useNavigate } from "react-router";
const HeroComponent = () => {
  const targetDate = new Date('March 17, 2025 23:59:59').getTime(); // Set registration deadline
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, distance };
  }
  let navigate = useNavigate();
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const handleOnClick=()=>{
    navigate("/content");
  }
  const backgroundImage = useMotionTemplate`radial-gradient(100% 125% at 30% 0%, transparent 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
    await loadEmittersPlugin(engine); // Load the emitters plugin
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div>
      <motion.div
        className="h-screen relative w-full z-10 px-24"
        style={{ backgroundImage }}
      >
        <div className="text-8xl text-white relative z-10 title text-center">
          <Text />
        </div>
      </motion.div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 
                      hover:animate-pulse hover:text-transparent hover:bg-clip-text 
                      hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          ᗪ乇丂丨Ꮆ几ㄒ尺丨乂 2025
        </h1>
        {/* <ShinyText text="17th March 2025" disabled={false} speed={3} className="text-sm sm:text-lg md:text-xl mb-6" /> */}

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center items-center mb-6 space-x-6 sm:space-x-8">
          {/* Days Box */}
          <div className="text-center bg-black bg-opacity-70 text-3xl sm:text-4xl md:text-5xl text-white px-6 py-4 rounded-lg">
            <div>{timeLeft.distance > 0 ? timeLeft.days : '0'}</div>
            <div className="text-xs sm:text-sm mt-2">Days</div>
          </div>

          {/* Hours Box */}
          <div className="text-center bg-black bg-opacity-70 text-3xl sm:text-4xl md:text-5xl text-white px-6 py-4 rounded-lg">
            <div>{timeLeft.distance > 0 ? timeLeft.hours : '00'}</div>
            <div className="text-xs sm:text-sm mt-2">Hours</div>
          </div>

          {/* Minutes Box */}
          <div className="text-center bg-black bg-opacity-70 text-3xl sm:text-4xl md:text-5xl text-white px-6 py-4 rounded-lg">
            <div>{timeLeft.distance > 0 ? timeLeft.minutes : '00'}</div>
            <div className="text-xs sm:text-sm mt-2">Minutes</div>
          </div>

          {/* Seconds Box */}
          <div className="text-center bg-black bg-opacity-70 text-3xl sm:text-4xl md:text-5xl text-white px-6 py-4 rounded-lg">
            <div>{timeLeft.distance > 0 ? timeLeft.seconds : '00'}</div>
            <div className="text-xs sm:text-sm mt-2">Seconds</div>
          </div>
        </div>

        <Link to='/about' className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition duration-300 ease-in-out">
          Explore Now
        </Link>
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#020617",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse", // Emit particles while hovering
                },
                onClick: {
                  enable: true,
                  mode: "push", // Attract particles to mouse on click
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 150, // Reduce repulse distance (default is 100)
                },
                attract: {
                  distance: 10,
                  duration: 0.4, // Attraction duration
                  factor: 2, // Speed factor
                },
              },
            },
            particles: {
              life: {
                duration: 0.5,
              },
              number: {
                value: 100, // Default number of particles
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: [COLORS_TOP[0], COLORS_TOP[1]], // Default particle color
              },
              shape: {
                type: "circle", // Circular particles
              },
              opacity: {
                value: { min: 0.4, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 3,
                  minimumValue: 0.2,
                  sync: false,
                },
              },
              size: {
                value: { min: 2, max: 4 }, // Start from 0 size and grow
              },
              move: {
                enable: true,
                speed: 3, // Default particle speed
                direction: ["top"],
                outModes: {
                  default: "bounce",
                },
              },
              stroke: {
                width: 0.3,
                color: "#ffffff",
              },
            },
            emitters: {
              direction: "none",
              life: {
                count: 2,
                duration: 5,
              },
              rate: {
                quantity: 10, // Number of particles to emit per second
                delay: 0.4, // Delay between each emission
              },
              size: {
                width: 100, // Size of the emitter area
                height: 100,
              },
              position: {
                x: 50, // Center of the screen horizontally
                y: 50, // Center of the screen vertically
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  );
};

export default HeroComponent;
