import React from 'react';
import styles from './Emojis.module.css';

// all de-duped emojis
const getAllEmojis = emojis => Array.from(new Set(Object.values(emojis)));

// returns a de-duped array of emoji image urls that include a string
// in the name. a case insensitive check.
const getEmojisByName = ({ emojis, name }) =>
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

export default ({ emojiSearchName, emojiList }) => {
  // we use all emojis if none are found from the search
  const allEmojis = getAllEmojis(emojiList.data);

  // if the search is empty show all emojis
  const emojis = !emojiSearchName
    ? allEmojis
    : getEmojisByName({
        emojis: emojiList.data,
        name: emojiSearchName
      });

  // if search results are empty (no matches) - show all emojis
  const emojisToShow = !emojis.length ? allEmojis : emojis;

  return (
    <div className={styles.root}>
      <h2 className={styles.term}>{emojiSearchName || 'Search'}</h2>
      {emojisToShow.map(current => (
        <img alt="emoji" className={styles.image} src={current} key={current} />
      ))}
    </div>
  );
};
