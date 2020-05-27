import Papa from 'papaparse';
import { Trait } from "../Core/Trait";
import { Modifier } from '../Tools/Modifier';

const skillTranslationData = `Athlétisme;Athletics
Combat;Fighting
Conduite;Driving
Culture générale;Common Knowledge
Discrétion;Stealth
Électronique;Electronics
Équitation;Riding
Focus;Focus
Foi;Faith
Informatique;Hacking
Intimidation;Intimidation
Jeu;Gambling
Langue;Language
Magie;Spellcasting
Navigation;Boating
Occultisme;Occult
Perception;Notice
Performance;Performance
Persuasion;Persuasion
Pilotage;Piloting
Pistage;Tracking
Provocation;Taunt
Psionique;Psionics
Recherche;Research
Réparation;Repair
Sciences;Science
Soins;Healing
Stratégie;Battle
Subterfuge;Thievery
Survie;Survival
Tir;Shooting
`

export class Skills {
  skillList : Array<Trait> = []

  static translationData = Papa.parse(skillTranslationData)

  public statblock() : string {
    return 'Compétences : ' + this.skillList.join(', ') + '.'
  }

  static parse(value: string) : Skills {
    let skills: Skills = new Skills()

    let regexpSkillLine = /^Skills?:\s*(.*?)\n/gm
    let skillLine = regexpSkillLine.exec(value)

    if (skillLine) {
      for (let row of this.translationData.data) {
        let regexpSkill = new RegExp(row[1] + ' d(\\d+)([+-]\\d+)?')
        let foundSkill = regexpSkill.exec(skillLine[1])
  
        if (foundSkill) {
          skills.skillList.push(
            new Trait(
              row[0],
              Number(foundSkill[1]), 
              new Modifier(Number(foundSkill[2] ? foundSkill[2] : 0))
            )
          )
        }
      }  
    }

    return skills
  }
}