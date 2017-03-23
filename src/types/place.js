// @flow
import { validateMissingFields } from '../services/validators';
import { errorMissingFields } from '../services/errors';

export default class Place {
  id: number;
  name: string;
  url: string;

  static requiredFields = ['id', 'name', 'url'];

  constructor(id: number, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }

  static parse = (place: Object) => {
    const missing = validateMissingFields(place, Place.requiredFields);
    if (missing.length > 0) {
      return { error: errorMissingFields(missing) };
    }
    const newPlace = new Place(place.id, place.name, place.url);
    return { value: newPlace };
  }
}
