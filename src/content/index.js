import { baseGraph } from './atlasData.js';
import { businessLessons } from './business.js';
import { excelLessons } from './excel.js';
import { statisticsLessons } from './statistics.js';
import { sqlLessons } from './sql.js';
import { powerbiLessons } from './powerbi.js';
import { pythonLessons } from './python.js';
import { dbtLessons } from './dbt.js';

export const ATLAS = {
  ...baseGraph,
  lessons: {
    ...businessLessons,
    ...excelLessons,
    ...statisticsLessons,
    ...sqlLessons,
    ...powerbiLessons,
    ...pythonLessons,
    ...dbtLessons,
  }
};
