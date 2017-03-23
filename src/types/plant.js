// @flow
import { validateMissingFields } from '../services/validators';
import { errorMissingFields } from '../services/errors';
import type Spec from './spec';

export default class Plant {
  id: number;
  name: string;
  spec: ?Spec;

  static requiredFields = ['id', 'name'];

  constructor(id: number, name: string, spec?: Spec) {
    this.id = id;
    this.name = name;
    this.spec = spec;
  }

  static parse = (plant: Object) => {
    const missing = validateMissingFields(plant, Plant.requiredFields);
    if (missing.length > 0) {
      return { error: errorMissingFields(missing) };
    }
    const newPlant = new Plant(plant.id, plant.name);
    return { value: newPlant };
  };
}
