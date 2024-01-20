import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course-dto';
import { UpdateCourseDTO } from './dto/update-course-dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCourseDTO) {
    return this.courseService.create(body);
  }

  @Put(':id')
  update(@Body() body: UpdateCourseDTO, @Param('id') id: string) {
    return this.courseService.update(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(id);
  }

  @Get()
  findAllSample() {
    return 'Lisagem';
  }

  // Outra forma do uso de Get utilizando Rest()
  @Get()
  findAllWithResponse(@Res() response) {
    return response.status(200).json({ mesage: 'Listagem' });
  }

  // Opcao de pegar paramentros
  @Get(':id')
  findOneSample(@Param() params) {
    return `Curso com id ${params.id}`;
  }

  // Opção de pegar paramentros
  @Get(':id/:name')
  findOneWithTwoParams(@Param('id') id: string, @Param('name') name: string) {
    return `Curso com id ${id} - Nome ${name}`;
  }

  // Opção de Post
  @Post()
  createWithBody(@Body() body) {
    return body;
  }

  @HttpCode(204)
  @Post()
  createNotContent() {
    return;
  }

  @Patch(':id')
  updateSample(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `Update course with id ${id}`;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  removeSample(@Param('id') id: number) {
    return `course delete id: ${id}`;
  }
}
