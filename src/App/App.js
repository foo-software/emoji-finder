import React, { useState } from 'react';
import MaterialIcon from '@material/react-material-icon';
import TextField, { Input } from '@material/react-text-field';
import '@material/react-material-icon/dist/material-icon.min.css';
import '@material/react-text-field/dist/text-field.min.css';
import Emojis from '../Emojis';
import styles from './App.module.css';

// the minimum number of characters to search
const MIN_CHARACTERS_FOR_SEARCH = 4;

export default () => {
  const [emoji, setEmoji] = useState('');
  const [emojiSearchTerm, setEmojiSearchTerm] = useState('');

  // set emoji if valid input value
  const setEmojiIfValid = ({ value, shouldSearch }) => {
    setEmoji(value);

    // if we have the minimum value or we are enforcing search
    if (value.length >= MIN_CHARACTERS_FOR_SEARCH || shouldSearch) {
      setEmojiSearchTerm(value);
    }
  };

  // on click we enforce search regardless of number of characters
  const onClick = () => {
    setEmojiIfValid({
      value: emoji,
      shouldSearch: true
    });
  };

  return (
    <div className={styles.root}>
      <TextField
        className={styles.input}
        label="Emoji Name"
        onTrailingIconSelect={onClick}
        trailingIcon={<MaterialIcon role="button" icon="search" />}
      >
        <Input
          value={emoji}
          onChange={event =>
            setEmojiIfValid({ value: event.currentTarget.value })
          }
          spellCheck="false"
          type="text"
          id="emoji"
          isValid
        />
      </TextField>
      <Emojis emoji={emoji} emojiSearchTerm={emojiSearchTerm} />
    </div>
  );
};
