import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoId, frameBorder, allowFullScreen }) => (
  <div className="video-wrap">
    <iframe className="video" src="https://www.youtube.com/embed/{videoID}" frameBorder={frameBorder} allowFullScreen={allowFullScreen}></iframe>
  </div>
);

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
  frameBorder: PropTypes.string.isRequired,
  allowFullScreen: PropTypes.bool.isRequired
};

Video.defaultProps = {
  videoId: 'ScMzIvxBSi4',
  frameBorder: '0',
  allowFullScreen: true
};

export default Video;
