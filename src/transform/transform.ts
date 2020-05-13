import Papa from 'papaparse';

const CONFIG_PATH = './data/skills.tsv';
export const loadConfig = (): Promise<Papa.ParseResult> => {
  return new Promise(function (complete, error) {
    Papa.parse(CONFIG_PATH, {
      download: true,
      complete,
      error,
    });
  });
};

const transformer = (value: string, config: [string, string][]) => {
  // do something
  console.log(config);
  return value;
};

export default transformer;
