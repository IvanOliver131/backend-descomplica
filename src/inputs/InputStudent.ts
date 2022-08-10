import { Field, InputType } from "type-graphql";
import { Student } from "../models/Student";

@InputType({ description: "New student data" })
export class AddStudentInput implements Partial<Student> {
  @Field(() => String)
  name: string;

  @Field(() => String)
  cpf: string;

  @Field(() => String)
  email: string;
}