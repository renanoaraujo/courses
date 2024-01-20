import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1705695451069 } from 'src/migrations/1705695451069-CreateCoursesTable';
import { CreateTagsTable1705697190833 } from 'src/migrations/1705697190833-CreateTagsTable';
import { CreateCoursesTagsTable1705713655387 } from 'src/migrations/1705713655387-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1705714377230 } from 'src/migrations/1705714377230-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1705715713816 } from 'src/migrations/1705715713816-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1705695451069,
    CreateTagsTable1705697190833,
    CreateCoursesTagsTable1705713655387,
    AddCoursesIdToCoursesTagsTable1705714377230,
    AddTagsIdToCoursesTagsTable1705715713816,
  ],
});
