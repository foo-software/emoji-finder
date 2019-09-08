import React from 'react';
import emojis from './emojis.json';
import styles from './Emojis.module.css';

const getEmojis = name => Array.from(new Set(Object.keys(emojis).reduce((accumulator, current) => ([
  ...accumulator,
  ...(!current.toLowerCase().includes(name.toLowerCase()) ? [] : [emojis[current]])
]), [])));

export default ({ emoji }) => {
  const emojis = getEmojis(emoji);

  return (
    <div className={styles.root}>
      {emojis.map(current => (
        <img
          alt="emoji"
          className={styles.image}
          src={current}
          key={current}
        />
      ))}
    </div>
  );
};
