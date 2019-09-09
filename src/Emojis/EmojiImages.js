import React, { memo } from 'react';
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

const areEqual = (prevProps, nextProps) => {
  return prevProps.list.id === nextProps.list.id;
};

export default memo(EmojiImages, areEqual);
