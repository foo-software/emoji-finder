import React, { Profiler, useEffect, useRef, useState } from 'react';
import MaterialIcon from '@material/react-material-icon';
import TextField, { Input } from '@material/react-text-field';
import { debounce } from 'throttle-debounce';
import '@material/react-material-icon/dist/material-icon.min.css';
import '@material/react-text-field/dist/text-field.min.css';
import { getProfileData, logProfileData } from '../profiler';
import Emojis from '../Emojis';
import styles from './App.module.css';
import './App.css';

const DEBOUNCE_MS_SEARCH = 400;

export default () => {
  const [emojiInputValue, setEmojiInputValue] = useState('');
  const [emojiSearchName, setEmojiSearchName] = useState('');

  // we use `useRef` so that we don't redefine the function on every update
  // and in turn erase the debounce functionality.
  const setDebouncedEmojiSearchName = useRef(
    debounce(DEBOUNCE_MS_SEARCH, setEmojiSearchName)
  );

  // set the search term using `debounce` which introduces an intentional dely
  // - hence the side-effect.
  useEffect(() => {
    setDebouncedEmojiSearchName.current(emojiInputValue);
  }, [emojiInputValue]);

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
        <Emojis emojiSearchName={emojiSearchName} />
      </Profiler>
    </div>
  );
};
