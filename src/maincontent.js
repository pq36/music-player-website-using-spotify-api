import React, { useState } from 'react';
import './section.css';

function ASection({ title, items, likedSongs, handleHeartClick, handleSongClick }) {
  return (
    <div className="section p">
      <div className="section-header">
        <h1>{title}</h1>
        <p>Show all</p>
      </div>
      <div className="asection-content">
        {items.map((item, index) => (
          <div className="item" key={index} onClick={() => handleSongClick(item.title, item.artist)}>
            <div className="image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.type}</p>
            <i
              className={`ri-heart-3-fill Heart ${likedSongs.some(song => song.title === item.title) ? 'liked' : ''}`}
              onClick={(e) => handleHeartClick(e, item)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({ title, items, likedSongs, handleHeartClick, handleSongClick }) {
  return (
    <div className="section">
      <div className="section-header">
        <h1>{title}</h1>
        <p>Show all</p>
      </div>
      <div className="section-content">
        {items.map((item, index) => (
          <div className="item" key={index} onClick={() => handleSongClick(item.title, item.artist)}>
            <div className="image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.type}</p>
            <i
              className={`ri-heart-3-fill Heart ${likedSongs.some(song => song.title === item.title) ? 'liked' : ''}`}
              onClick={(e) => handleHeartClick(e, item)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
}

function Musicx({ handleSongClick, likedSongs, handleHeartClick }) {
  

  const Asections = [
    {
      title: 'Popular Artists',
      items: [
        { title: 'Arijith Singh', imageUrl: 'https://th.bing.com/th/id/OIP.Hg3qblSVwAa0X5SwNAYsHAHaEo?w=204&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Artist' },
        { title: 'Ed Sheeran', imageUrl: "https://th.bing.com/th?id=OIP.P6xcvqLeYxKrCWaKsijsIAHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", type: 'Artist' },
        { title: 'Shreya Ghoshal', imageUrl: 'https://th.bing.com/th/id/OIP.u6w2jys2w26iF8xFwYJCoAHaE8?w=279&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Artist' },
        { title: 'Sonu Nigam', imageUrl: 'https://th.bing.com/th/id/OIP.zZuMI-WFFfCH8a0Gqi61RgHaLH?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Artist' },
        { title: 'Arman Maalik', imageUrl: 'https://th.bing.com/th/id/OIP.T0ICUuqlz1hpkzWW1RLo0wHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Artist' },
      ],
    }
  ];
  
  const sections = [
    {
      title: 'Popular Albums',
      items: [
        { title: 'Animal', imageUrl: 'https://th.bing.com/th?id=OIP.VgmCj9YlpNE5y_WfMnHEWAHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', type: 'Album' },
        { title: 'Dia', imageUrl: 'https://th.bing.com/th?id=OIP.SGTIeJCfWiBbRee7qoojVAHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', type: 'Album' },
        { title: 'Aavesham', imageUrl: 'https://th.bing.com/th/id/OIP.3B9YUs55Em64o8dEZD5c3gHaKe?w=123&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Album' },
        { title: 'Raajakumara', imageUrl: 'https://th.bing.com/th?id=OIP.8_WVWEmZ1-fLliKshYPa_wAAAA&w=209&h=298&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', type: 'Album' },
        { title: 'Kantara', imageUrl: 'https://th.bing.com/th/id/OIP.f5PTe9yX8AePdd0ADx5MEQHaFj?w=202&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Album' },
      ],
    },
    {
      title: 'Popular Radio',
      items: [
        { title: 'Arijith Singh Radio', imageUrl: 'https://th.bing.com/th/id/OIP.VJguKOlfZAkRVh5gFDNW5QHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Radio' },
        { title: 'AR Rehman Radio', imageUrl: 'https://th.bing.com/th/id/OIP.mH31yrEzqgC2vDctscxNuQHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Radio' },
        { title: 'Diljith Dhosanjh Radio', imageUrl: 'https://th.bing.com/th/id/OIP.iR0IAdBtR_aU2WnN8dsIhAHaEo?w=297&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Radio' },
        { title: 'Kumar Sanu Radio', imageUrl: 'https://th.bing.com/th/id/OIP.yeWbL4WuJGzNynVMHnHOaQHaMz?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Radio' },
        { title: 'Taylor Swift Radio', imageUrl: 'https://th.bing.com/th/id/OIP.Gb9AMGwopBr3bcUPts7PSAHaFP?w=265&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Radio' },
      ],
    },
    {
      title: 'Featured Charts',
      items: [
        { title: 'Top 10 Songs', imageUrl: 'https://th.bing.com/th/id/OIP.-lBCk35GMdwGEbHGGoJimAHaEK?w=330&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Chart' },
        { title: 'Top 20 Songs', imageUrl: 'https://th.bing.com/th/id/OIP.UB-UC4fZ7IOivKgUl51PqAHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Chart' },
        { title: 'Top 30 Songs', imageUrl: 'https://th.bing.com/th/id/OIP.ycr5dj7UMbhjfFVw5PC1TwAAAA?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Chart' },
        { title: 'Top 40 Songs', imageUrl: 'https://th.bing.com/th/id/OIP.1mb_Z7mKLzV3yiofn0oH2wAAAA?w=134&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Chart' },
        { title: 'Top 50 Songs', imageUrl: 'https://th.bing.com/th/id/OIP.Boq48lxniSxiPF6fdPM3fQHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Chart' },
      ],
    },
    {
      title: 'Popular Playlists',
      items: [
        { title: 'New Music Friday', imageUrl: 'https://th.bing.com/th/id/OIP.aqCwPGH3GX4Y4rg8W-WBDAHaHa?w=173&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Playlist' },
        { title: 'Lofi-beats', imageUrl: 'https://th.bing.com/th/id/OIP.nJu5eb3xZsHdKD9kchg3zgHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Playlist' },
        { title: 'Top Hits', imageUrl: 'https://th.bing.com/th/id/OIP.jSh8ErfBgTM9oeH5lsHo6QHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Playlist' },
        { title: 'Relax & Unwind', imageUrl: 'https://th.bing.com/th/id/OIP.Wx13Gf0YkjxOrNkh7nfWbQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Playlist' },
        { title: 'Indie Rock', imageUrl: 'https://th.bing.com/th/id/OIP.6RLcpSMCKZhu6yaQreH-HAHaEN?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Playlist' },
      ],
    },
    {
      title: 'Popular Episodes',
      items: [
        { title: 'Good Friday', imageUrl: 'https://th.bing.com/th/id/OIP.S7HP3ICbRI3GJTV9n-NKdQAAAA?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Episode' },
        { title: 'Welcome back', imageUrl: 'https://th.bing.com/th/id/OIP.TJuI7F-sIoNTaCxd8ZiPMgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Episode' },
        { title: 'What is love', imageUrl: 'https://th.bing.com/th/id/OIP.BJcmYF7re0Th1eHqq5j-YQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Episode' },
        { title: 'Please look', imageUrl: 'https://th.bing.com/th/id/OIP.dDrnXJU7H7YliYbtj7nxQwHaHa?w=186&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Episode' },
        { title: 'Jump back', imageUrl: 'https://th.bing.com/th/id/OIP.aqCwPGH3GX4Y4rg8W-WBDAHaHa?w=173&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', type: 'Episode' },
      ],
    },
  ];

  return (
    <div>
      {Asections.map((section, index) => (
        <ASection
          key={index}
          title={section.title}
          items={section.items}
          likedSongs={likedSongs}
          handleHeartClick={handleHeartClick}
          handleSongClick={handleSongClick}
        />
      ))}
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          items={section.items}
          likedSongs={likedSongs}
          handleHeartClick={handleHeartClick}
          handleSongClick={handleSongClick}
        />
      ))}
    </div>
  );
}

export default Musicx;