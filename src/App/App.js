import React, { useState } from 'react';
import MaterialIcon from '@material/react-material-icon';
import TextField, { Input } from '@material/react-text-field';
import '@material/react-material-icon/dist/material-icon.min.css';
import '@material/react-text-field/dist/text-field.min.css';
import Emojis from '../Emojis';
import styles from './App.module.css';

export default () => {
  const [emoji, setEmoji] = useState('');

  return (
    <div className={styles.root}>
      <TextField
        className={styles.input}
        label="Emoji Name"
        trailingIcon={<MaterialIcon icon="search" />}
      >
        <Input
          value={emoji}
          onChange={event => setEmoji(event.currentTarget.value)}
          spellCheck="false"
          type="text"
          id="emoji"
          isValid
        />
      </TextField>
    <Emojis emoji={emoji} />
    </div>
  );
};