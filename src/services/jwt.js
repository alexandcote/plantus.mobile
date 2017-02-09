// @flow

import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'JWT_TOKEN';

let cachedToken: ?string = null;

export async function getToken(): Promise<string> {
  if (cachedToken == null) {
    cachedToken = AsyncStorage.getItem(STORAGE_KEY);
  }
  return cachedToken;
}

export async function setToken(token: string): Promise<void> {
  cachedToken = token;
  AsyncStorage.setItem(STORAGE_KEY, token);
}

