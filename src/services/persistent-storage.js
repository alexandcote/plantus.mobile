import { AsyncStorage } from 'react-native';
import { Session } from '../types';

const KEY_SESSION = 'SESSION';

export async function loadSession(): Session {
  return AsyncStorage.getItem(KEY_SESSION);
}

export async function saveSession(session: Session): void {
  return AsyncStorage.setItem(KEY_SESSION, session);
}
