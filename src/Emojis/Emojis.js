import React, { useMemo } from 'react';
import EmojiImages from './EmojiImages';
import emojiList from './emojis.json';
import styles from './Emojis.module.css';

// all de-duped emojis
const getAllEmojis = emojis => ({
  id: Date.now(),
  emojis: Array.from(new Set(Object.values(emojis)))
});

// returns a de-duped array of emoji image urls that include a string
// in the name. a case insensitive check.
const getEmojisByName = ({ emojis, name }) => ({
  id: Date.now(),
  emojis: Array.from(
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
  )
});

export default ({ emojiSearchName }) => {
  // we use all emojis if none are found from the search
  const allEmojis = useMemo(() => getAllEmojis(emojiList.data), []);

  // if the search is empty show all emojis
  const emojisByName = !emojiSearchName
    ? allEmojis
    : getEmojisByName({
        emojis: emojiList.data,
        name: emojiSearchName
      });

  return (
    <div className={styles.root}>
      <EmojiImages
        // if search results are empty (no matches) - show all emojis
        list={!emojisByName.emojis.length ? allEmojis : emojisByName}
      />
    </div>
  );
};
