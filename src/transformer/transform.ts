
// src/transformer/transform.ts

import Papa from 'papaparse';

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
) => {
  let ret = '';
  let regexpAttributes = /Attributes: Agility (d\d+(\+\d+)?), Smarts (d\d+(\+\d+)?), Spirit (d\d+(\+\d+)?), Strength (d\d+(\+\d+)?), Vigor (d\d+(\+\d+)?)/
  
  let result = regexpAttributes.exec(value)

  if (result) {
    ret =    
      'Agi\tÂme\tFor\tInt\tVig\n' +
      result[1] + '\t' +
      result[3] + '\t' +
      result[5] + '\t' +
      result[7] + '\t' +
      result[9] + '\n'
  }

  ret = ret + generateSkills(value, skillConfig)

  return ret
}

function generateSkills(value: string, skillConfig: [string, string][]): string {
  alert(skillConfig);
  return '';
}

export default transform;
