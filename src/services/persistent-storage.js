// @flow

import { AsyncStorage } from 'react-native';
import { Session } from '../types';

const KEY_SESSION = 'SESSION';

export async function loadSession(): Session {
  const json = await AsyncStorage.getItem(KEY_SESSION);
  return JSON.parse(json);
}

export async function saveSession(session: Session) {
  AsyncStorage.setItem(KEY_SESSION, session);
}
