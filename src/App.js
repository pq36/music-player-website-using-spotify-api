import React, { useState, useEffect } from 'react';
import './App.css';
import Musicx from './maincontent';
import { useNavigate } from 'react-router-dom';

function NavBar({ toggleSidebar, isSmallScreen }) {
  const nav = useNavigate();
  const handleClick = () => {
    nav('/login');
  };
  return (
    <div className='nav'>
      <button className="btnl" onClick={handleClick}>Login</button>
    </div>
  );
}

function Info() {
  return (
    <div className='info'>
      <div>
        <p>Legal</p>
        <p>Safety & Privacy Center</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <p>Cookies</p>
        <p>About Ads</p>
        <p>Accessibility</p>
      </div>
      <div>
        <p>Cookies</p>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className='bottom'><p>Home</p></div>
  );
}

function SidePart({ isVisible }) {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <div className="sideup">
        <p><i className="ri-home-2-line"></i> Home</p>
        <p><i className="ri-search-line"></i> Search</p>
      </div>
      <div className='lib'>Your Library</div>
      <div className='sidemid'>
        <div>
          <h3>Create your First Playlist</h3>
          <p>It's easy we will help you</p>
          <button>Create Playlist</button>
        </div>
        <div>
          <h3>Let's find some podcasts to follow</h3>
          <p>We'll keep you updated on new episodes</p>
          <button>Browse Podcasts</button>
        </div>
      </div>
      <Info />
    </div>
  );
}

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [likedSongs, setLikedSongs] = useState([]);
  
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust this threshold as needed
    }

    // Initial check on mount
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Clean up listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSongClick = (title, artist) => {
    console.log(`Song clicked: ${title} by ${artist}`);
  };

  const handleHeartClick = (e, item) => {
    e.stopPropagation();
    setLikedSongs((prevLikedSongs) => {
      const isAlreadyLiked = prevLikedSongs.some(song => song.title === item.title);
      if (isAlreadyLiked) {
        return prevLikedSongs.filter(song => song.title !== item.title);
      } else {
        return [...prevLikedSongs, item];
      }
    });
  };

  return (
    <div className='homepage'>
      <SidePart isVisible={isSidebarVisible} />
      <div className='main'>
        <NavBar toggleSidebar={toggleSidebar} isSmallScreen={isSmallScreen} />
        <Musicx
          handleSongClick={handleSongClick}
          likedSongs={likedSongs}
          handleHeartClick={handleHeartClick}
        />
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
