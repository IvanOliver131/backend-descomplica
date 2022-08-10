import { Field, InputType } from "type-graphql";
import { Student } from "../models/Student";

@InputType({ description: "New student data" })
export class AddStudentInput implements Partial<Student> {
  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field()
  email: string;
}