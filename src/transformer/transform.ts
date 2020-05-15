
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

function generateSkills(value: string, skillConfig: [string, string][]): string {
  let ret = 'Compétences : ';

  let regexpSkillLine = /^Skills?:\s*(.*?)\n/gm
  let skillLine = regexpSkillLine.exec(value)

  if (skillLine) {
    for (let row of skillConfig) {
      let regexpSkill = new RegExp(row[1] + ' d(\\d+)')
      let foundSkill = regexpSkill.exec(skillLine[1])

      if (foundSkill) {
        ret = ret + row[0] + ' d' + foundSkill[1] + ', '
      }
    }
  }

  return ret;
}

export default transform;
