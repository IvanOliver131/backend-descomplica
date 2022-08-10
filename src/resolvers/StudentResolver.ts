import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AddStudentInput } from "../inputs/InputStudent";
import { Student } from "../models/Student";

@Resolver()
export class StudentResolver {
  @Query(() => [Student])
  async students() {
    return Student.find();
  }

  @Mutation(() => Student)
  async createStudent(@Arg('data') data: AddStudentInput): Promise<Student> {
    const student = Student.create<Student>(data);
    await Student.save(student);
    return student;
  }

  @Mutation(() => Boolean)
  async deleteStudent(
    @Arg('id') id: string
  ) {
    const student = await Student.findOne({ where: { id } });
    if (!student) throw new Error("Student not found!");
    await student.remove();
    return true;
  }

  @Mutation(() => Student)
  async updateStudent(
    @Arg('id') id: string,
    @Arg('data') data: AddStudentInput): Promise<Student> {
    const student = await Student.findOne({ where: { id } });
    if (!student) throw new Error("Student not found!");
    Object.assign(student, data);
    await student.save();
    return student;
  }
}