import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutMemberOfPostGroupsInput } from "../inputs/UserUpdateWithoutMemberOfPostGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutMemberOfPostGroupsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMemberOfPostGroupsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutMemberOfPostGroupsInput;
}
