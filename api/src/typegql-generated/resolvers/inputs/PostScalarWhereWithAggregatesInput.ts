import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  postedtime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isAnnouncement?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  creatorId?: StringWithAggregatesFilter | undefined;
}
