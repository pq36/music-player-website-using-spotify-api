import React, { useState, useEffect } from 'react';
import './songs.css';
import 'remixicon/fonts/remixicon.css';
import Musicx from './maincontent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Songs() {
    const [currentSong, setCurrentSong] = useState('');
    const [currentImage, setCurrentImage] = useState('');
    const [audioPlayer, setAudioPlayer] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [likedSongs, setLikedSongs] = useState([]);
    const [showLikedSongs, setShowLikedSongs] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const player = new Audio();
        setAudioPlayer(player);

        return () => {
            if (player) {
                player.pause();
                player.src = '';
            }
        };
    }, []);

    const handleSongClick = async (songTitle) => {
        setCurrentSong(songTitle);
        try {
            const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(songTitle)}&type=track&limit=1`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.data.tracks.items.length > 0) {
                const song = response.data.tracks.items[0];
                setCurrentImage(song.album.images[0].url);
                const audioUrl = song.preview_url;
                if (audioUrl) {
                    audioPlayer.src = audioUrl;
                    audioPlayer.load(); // Ensure the audio is loaded
                    audioPlayer.play().catch(error => console.error('Error playing audio:', error));
                } else {
                    console.error('No preview URL available for this track');
                }
            } else {
                console.error('No tracks found');
            }
        } catch (error) {
            console.error('Error fetching song details:', error);
        }
    };

    const handleHeartClick = (e, item) => {
        e.stopPropagation();
        setLikedSongs(prevLikedSongs => {
            const newLikedSongs = prevLikedSongs.some(song => song.title === item.title)
                ? prevLikedSongs.filter(song => song.title !== item.title)
                : [...prevLikedSongs, item];
            console.log('Updated likedSongs:', newLikedSongs);
            return newLikedSongs;
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${encodeURIComponent(searchTerm)}`);
        }
    };

    const handlePauseClick = () => {
        if (audioPlayer && !audioPlayer.paused) {
            audioPlayer.pause();
        }
    };

    const handleLikedSongsClick = () => {
        setShowLikedSongs(prevShow => !prevShow);
    };

    return (
        <div className="main500">
            <div className="left500">
                <div className="sidebar500">
                    <div className="sidebar-section500">
                        <p><i className="ri-home-2-line"></i> Home</p>
                        <p><i className="ri-search-line"></i> Search</p>
                    </div>
                    <div className="sidebar-section500">
                        <div className="sidebar-header500">
                            <p><i className="ri-book-shelf-line"></i> Your Library</p>
                            <div className="sidebar-actions500">
                                <p><i className="ri-add-line"></i></p>
                                <p><i className="ri-arrow-right-fill"></i></p>
                            </div>
                        </div>
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search for songs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </form>
                        <div className="sidebar-content500">
                            <p>Playlists</p>
                            <div className="sidebar-subcontent500">
                                <p>Recents <i className="ri-align-justify"></i></p>
                            </div>
                            <div className="liked-songs500" onClick={handleLikedSongsClick}>
                                <img 
                                    src="https://th.bing.com/th?id=OIP.ww5-8WM48-RSVMhbTbm1dwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
                                    alt="Liked Songs" 
                                />
                                <div>
                                    <h3>Liked Songs</h3>
                                    <p>playlists</p>
                                </div>
                            </div>
                            {showLikedSongs && (
                                <div className="liked-songs-list500">
                                    {likedSongs.length > 0 ? (
                                        <ul>
                                            {likedSongs.map((song) => (
                                                <li key={song.id} className='listofimg'>
                                                    <img src={song.imageUrl || 'default-image-url'} alt={song.title || 'No Title'} />
                                                    <p>{song.title || 'No Title'}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No liked songs available</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mid500">
                    <Musicx 
                        handleSongClick={handleSongClick} 
                        likedSongs={likedSongs} 
                        handleHeartClick={handleHeartClick} 
                    />
                </div>
            </div>
            <div className="bottom1500">
                <div className="bottom-content1500">
                    <div className="bottom-left1500">
                        <img src={currentImage || 'default-image-url'} alt="current song" />
                        <div>
                            <h3>{currentSong || 'No Song Selected'}</h3>
                            <p>Artist</p>
                        </div>
                    </div>
                    <div className="bottom-center1500">
                        <p><i className="ri-shuffle-line"></i></p>
                        <p><i className="ri-skip-back-mini-line"></i></p>
                        <p><i className="ri-play-circle-line" onClick={handlePauseClick}></i></p>
                        <p><i className="ri-skip-forward-mini-line"></i></p>
                        <p><i className="ri-repeat-line"></i></p>
                    </div>
                    <div className="bottom-right1500">
                        <p><i className="ri-play-list-line"></i></p>
                        <p><i className="ri-mic-line"></i></p>
                        <p><i className="ri-computer-line"></i></p>
                        <p><i className="ri-heart-3-line"></i></p>
                        <p><i className="ri-volume-up-line"></i></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Songs;
