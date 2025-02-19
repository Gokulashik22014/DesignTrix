import React, { useState, useEffect } from 'react'
import HeroComponent from '../components/Hero/HeroComponent'

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data or waiting for assets to load)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      
        <HeroComponent />
      
    </div>
  )
}

export default Hero