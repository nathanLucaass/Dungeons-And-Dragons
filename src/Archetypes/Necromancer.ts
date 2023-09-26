import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypesInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    
    Necromancer._createdArchetypesInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypesInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}