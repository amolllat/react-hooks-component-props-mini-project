import React from 'react';

const About = ({ imageUrl = "https://via.placeholder.com/215", aboutText }) => {
  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;