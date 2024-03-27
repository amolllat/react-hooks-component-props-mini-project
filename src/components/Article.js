import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  const formattedDate = date ? date : "January 1, 1970";

  const renderTimeToRead = (minutes) => {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return '☕️'.repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return '🍱'.repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <p>{renderTimeToRead(minutes)}</p>
    </article>
  );
};

export default Article;