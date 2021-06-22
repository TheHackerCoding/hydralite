import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { PostUpdateManyWithoutPostGroupsInput } from "../inputs/PostUpdateManyWithoutPostGroupsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutMemberOfPostGroupsInput } from "../inputs/UserUpdateManyWithoutMemberOfPostGroupsInput";
import { UserUpdateOneRequiredWithoutOwnedPostGroupsInput } from "../inputs/UserUpdateOneRequiredWithoutOwnedPostGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpdateWithoutProjectInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isCommunity?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutOwnedPostGroupsInput, {
    nullable: true
  })
  creator?: UserUpdateOneRequiredWithoutOwnedPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutMemberOfPostGroupsInput, {
    nullable: true
  })
  members?: UserUpdateManyWithoutMemberOfPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutPostGroupsInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutPostGroupsInput | undefined;
}