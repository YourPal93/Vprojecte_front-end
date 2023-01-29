import axios from 'axios';
import React from 'react';
import { ChangeEvent, useRef, useState } from 'react';
import Sidebar from '../sidebar';

const Homepage = () => {

  const [showPlayer, setShowPlayer] = useState(false)
  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  
  function handleSubmit(event) {
    event.preventDefault()
    const url = '/videos/add';
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  const changePlayerVisibility = () => {
    setShowPlayer(!showPlayer)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        <div id='video-player' style={showPlayer ? {} : { display: 'none',}}>
          <video src='' type="video/mp4" controls></video>
        </div>
        <button type='submit' onClick={changePlayerVisibility}>click me</button>
    </div>
  );
}

export default Homepage;