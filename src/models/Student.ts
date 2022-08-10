import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Student {
  @Field(_type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field()
  email: string;
}