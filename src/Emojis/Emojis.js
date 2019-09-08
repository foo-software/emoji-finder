import React from 'react';
import { version as emojisVersion, data as emojis } from './emojis.json';
import styles from './Emojis.module.css';

const getEmojis = name => {
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

export default ({ emoji }) => {
  const emojis = getEmojis(emoji);

  return (
    <div className={styles.root}>
      <h2 className={styles.term}>{emoji || 'Search'}</h2>
      {emojis.map(current => (
        <img alt="emoji" className={styles.image} src={current} key={current} />
      ))}
    </div>
  );
};
