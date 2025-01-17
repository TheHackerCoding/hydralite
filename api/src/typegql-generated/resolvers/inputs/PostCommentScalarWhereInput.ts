import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentScalarWhereInput {
  @TypeGraphQL.Field(_type => [PostCommentScalarWhereInput], {
    nullable: true
  })
  AND?: PostCommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereInput], {
    nullable: true
  })
  OR?: PostCommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereInput], {
    nullable: true
  })
  NOT?: PostCommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  body?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creatorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;
}
