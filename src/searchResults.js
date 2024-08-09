import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './searchResults.css';

function SearchResults() {
    const { searchTerm } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [audioPlayer] = useState(new Audio());
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                        'Content-Type': 'application/json'
                    }
                });
                setSearchResults(response.data.tracks.items);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [searchTerm]);

    const handleTrackClick = (track) => {
        setCurrentTrack(track);
        const audioUrl = track.preview_url;
        if (audioUrl) {
            audioPlayer.src = audioUrl;
            audioPlayer.play().catch(error => {
                console.error('Error playing audio:', error);
            });
            setIsPlaying(true);
        } else {
            console.error('No preview URL available for this track');
        }
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            audioPlayer.pause();
            audioPlayer.src = '';
        };
    }, [audioPlayer]);

    return (
        <div className="search-results-container333">
            <h2>Search Results for "{searchTerm}"</h2>
            <ul className="search-results-list333">
                {searchResults.map((track) => (
                    <li key={track.id} onClick={() => handleTrackClick(track)} style={{ cursor: 'pointer' }}>
                        <img src={track.album.images[0].url} alt={track.name} style={{ width: '50px', height: '50px' }} />
                        <div>
                            <h3>{track.name}</h3>
                            <p>{track.artists[0].name}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {currentTrack && (
                <div className="now-playing333">
                    <img src={currentTrack.album.images[0].url} alt={currentTrack.name} style={{ width: '100px', height: '100px' }} />
                    <div>
                        <h3>Now Playing: {currentTrack.name}</h3>
                        <p>Artist: {currentTrack.artists[0].name}</p>
                        <button className="play-pause-button333" onClick={togglePlayPause}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchResults;
