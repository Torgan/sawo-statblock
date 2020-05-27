
// src/transformer/transform.ts

import Papa from 'papaparse';
import { Character } from './Character/Character';

const SKILL_CONFIG_PATH = '../data/skills.tsv';
export const loadSkillConfig = (): Promise<Papa.ParseResult> => {
  return new Promise(function (complete, error) {
    Papa.parse(SKILL_CONFIG_PATH, {
      download: true,
      complete,
      error,
    });
  });
};

const transform = (
  value: string, 
  skillConfig: [string, string][]
) : string => {
  if (value === '') {
    return ''
  }

  let character : Character = Character.parse(value)

  return character.statblock()
}

export default transform;
