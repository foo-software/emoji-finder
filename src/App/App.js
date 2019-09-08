import React, { Profiler, useState } from 'react';
import MaterialIcon from '@material/react-material-icon';
import TextField, { Input } from '@material/react-text-field';
import '@material/react-material-icon/dist/material-icon.min.css';
import '@material/react-text-field/dist/text-field.min.css';
import { getProfileData, logProfileData } from '../profiler';
import emojiList from './emojis.json';
import Emojis from '../Emojis';
import styles from './App.module.css';
import './App.css';

// track number of renders
let emojisRenderIndex = 0;

export default () => {
  const [emojiSearchName, setEmojiSearchName] = useState('');

  return (
    <div className={styles.root}>
      <TextField
        className={styles.input}
        label="Emoji Name"
        trailingIcon={<MaterialIcon icon="search" />}
      >
        <Input
          value={emojiSearchName}
          onChange={event => setEmojiSearchName(event.currentTarget.value)}
          spellCheck="false"
          type="text"
          id="emoji"
          isValid
        />
      </TextField>
      <Profiler
        id="Emojis"
        onRender={(...profileData) => {
          emojisRenderIndex++;
          logProfileData({
            prefix: `Render ${emojisRenderIndex}`,
            data: getProfileData(profileData)
          });
        }}
      >
        <Emojis emojiSearchName={emojiSearchName} emojiList={emojiList} />
      </Profiler>
    </div>
  );
};
