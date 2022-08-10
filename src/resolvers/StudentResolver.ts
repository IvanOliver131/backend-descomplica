import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Student } from "../models/Student";
import { v4 as uuidv4 } from 'uuid';

@Resolver()
export class StudentResolver {
  private data: Student[] = [];

  @Query(() => [Student])
  async students() {
    return this.data;
  }

  @Mutation(() => Student)
  async createStudent(
    @Arg('name') name: string,
    @Arg('cpf') cpf: string,
    @Arg('email') email: string
  ) {
    const student = { id: uuidv4(), name, cpf, email }

    this.data.push(student);

    return student;
  }

  @Mutation(() => [Student])
  async deleteStudent(
    @Arg('id') id: string
  ) {
    const newList = this.data;
    const student = newList.map((aux) => {
      if (aux.id === id) {
        return aux;
      }
    });

    if (student.length > 0 && student[0]) {
      const oneStudent = student[0];
      newList.splice(this.data.indexOf(oneStudent), 1);

      this.data = newList;

      return this.data;
    }
  }

  @Mutation(() => [Student])
  async updateStudent(
    @Arg('id') id: string,
    @Arg('name') name: string,
    @Arg('cpf') cpf: string,
    @Arg('email') email: string
  ) {
    this.data.forEach((student: Student) => {
      if (student.id === id) {
        student.name = name;
        student.cpf = cpf;
        student.email = email;
      }
    });

    return this.data;
  }
}