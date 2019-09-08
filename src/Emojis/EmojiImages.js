import React from 'react';
import styles from './Emojis.module.css';

const EmojiImages = ({ list }) => {
  return (
    <>
      {list.emojis.map(current => (
        <img alt="emoji" className={styles.image} src={current} key={current} />
      ))}
    </>
  );
};

export default EmojiImages;
