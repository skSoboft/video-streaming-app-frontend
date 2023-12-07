import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UploadVideo from './UploadVideo';
import WatchVideo from './WatchVideo';

function App() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetchVideoList();
  }, []);

  const fetchVideoList = async () => {
    try {
      const response = await axios.get('http://localhost:3001/videos');
      setVideoList(response.data.videos);
    } catch (error) {
      console.error('Error fetching video list:', error);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/upload">Upload Video</Link>
            </li>
            <li>
              <Link to="/videos">Video List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/videos" element={<VideoList videoList={videoList} />} />
          <Route path="/watch/:filename" element={<WatchVideo />} />
        </Routes>
      </div>
    </Router>
  );
}

const VideoList = ({ videoList }) => (
  <div>
    <h2>Video List</h2>
    <ul>
      {videoList.map((video, index) => (
        <li key={index}>
          <Link to={`/watch/${video}`}>{video}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default App;
