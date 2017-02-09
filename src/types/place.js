// @flow

export default class Place {
  id: number;
  name: string;
  humidity: number;
  temperature: number;
  ipAddress: string;
  port: number;
  url: string;
  users: Array<number>;
  plants: Array<number>;
}
