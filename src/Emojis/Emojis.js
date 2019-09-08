import React from 'react';
import emojis from './emojis.json';
import styles from './Emojis.module.css';

const getEmojis = name => {
  console.log('name', name);
  const validEmojis = Array.from(
    new Set(
      Object.keys(emojis).reduce(
        (accumulator, current) => [
          ...accumulator,
          ...(!current.toLowerCase().includes(name.toLowerCase())
            ? []
            : [emojis[current]])
        ],
        []
      )
    )
  );

  return !validEmojis.length
    ? Array.from(new Set(Object.values(emojis)))
    : validEmojis;
};

export default ({ emoji, emojiSearchTerm }) => {
  const emojis = getEmojis(emojiSearchTerm);

  return (
    <div className={styles.root}>
      <h2 className={styles.term}>{emoji || 'Search'}</h2>
      {emojis.map(current => (
        <img alt="emoji" className={styles.image} src={current} key={current} />
      ))}
    </div>
  );
};
