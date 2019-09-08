import React, { Profiler, useState } from 'react';
import MaterialIcon from '@material/react-material-icon';
import TextField, { Input } from '@material/react-text-field';
import '@material/react-material-icon/dist/material-icon.min.css';
import '@material/react-text-field/dist/text-field.min.css';
import { getProfileData, logProfileData } from '../profiler';
import Emojis from '../Emojis';
import styles from './App.module.css';
import './App.css';

export default () => {
  const [emojiInputValue, setEmojiInputValue] = useState('');

  return (
    <div className={styles.root}>
      <TextField
        className={styles.input}
        label="Emoji Name"
        trailingIcon={<MaterialIcon icon="search" />}
      >
        <Input
          value={emojiInputValue}
          onChange={event => setEmojiInputValue(event.currentTarget.value)}
          spellCheck="false"
          type="text"
          id="emoji"
          isValid
        />
      </TextField>
      <h2 className={styles.term}>{emojiInputValue || 'Search'}</h2>
      <Profiler
        id="Emojis"
        onRender={(...profileData) =>
          logProfileData(getProfileData(profileData))
        }
      >
        <Emojis emojiSearchName={emojiInputValue} />
      </Profiler>
    </div>
  );
};
