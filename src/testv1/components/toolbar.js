import React from 'react';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
export function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}