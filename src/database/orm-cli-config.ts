import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1705695451069 } from 'src/migrations/1705695451069-CreateCoursesTable';
import { CreateTagsTable1705697190833 } from 'src/migrations/1705697190833-CreateTagsTable';
import { CreateCoursesTagsTable1705713655387 } from 'src/migrations/1705713655387-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1705714377230 } from 'src/migrations/1705714377230-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1705715713816 } from 'src/migrations/1705715713816-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

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
