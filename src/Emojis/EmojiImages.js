import React from 'react';
import styles from './Emojis.module.css';

export default ({ list }) => {
  return (
    <div className={styles.root}>
      {list.emojis.map(current => (
        <img alt="emoji" className={styles.image} src={current} key={current} />
      ))}
    </div>
  );
};
