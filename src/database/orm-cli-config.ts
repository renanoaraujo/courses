import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1705695451069 } from 'src/migrations/1705695451069-CreateCoursesTable';
import { CreateTagsTable1705697190833 } from 'src/migrations/1705697190833-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1705695451069, CreateTagsTable1705697190833],
});
