import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CorporateUserVideoPlayer({ match }) {
    const [videoUrl, setVideoUrl] = useState(null);
    const [notes, setNotes] = useState('');

    useEffect(() => {
        // Get the video url
        axios.get(`/watch/${match.params.courseId}/${match.params.videoId}`)
            .then(res => setVideoUrl(res.data.videoUrl))
            .catch(err => console.error(err));
    }, []);

    function handleChange(e) {
        setNotes(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Send the notes to the server
        axios.post(`/write-notes/${match.params.courseId}/${match.params.videoId}`, { notes })
            .then(res => console.log(res.data.message))
            .catch(err => console.error(err));
    }

    return (
        <div>
            {videoUrl ? <video src={videoUrl} controls /> : <p>Loading...</p>}

            <form onSubmit={handleSubmit}>
                <textarea value={notes} onChange={handleChange} />
                <button type="submit">Save Notes</button>
            </form>
        </div>
    );
}

export default CorporateUserVideoPlayer;

