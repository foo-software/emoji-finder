import React from 'react';
import { version as emojisVersion, data as emojis } from './emojis.json';
import styles from './Emojis.module.css';

// all de-duped emojis
const getAllEmojis = () => Array.from(new Set(Object.values(emojis)));

// returns a de-duped array of emoji image urls that include a string
// in the name. a case insensitive check.
const getEmojisByName = name =>
  Array.from(
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

export default ({ emoji }) => {
  // we use all emojis if none are found from the search
  const allEmojis = getAllEmojis();

  // if the search is empty show all emojis
  const emojis = !emoji ? allEmojis : getEmojisByName(emoji);

  // if search results are empty (no matches) - show all emojis
  const emojisToShow = !emojis.length ? allEmojis : emojis;

  return (
    <div className={styles.root}>
      <h2 className={styles.term}>{emoji || 'Search'}</h2>
      {emojisToShow.map(current => (
        <img alt="emoji" className={styles.image} src={current} key={current} />
      ))}
    </div>
  );
};
