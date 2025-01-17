import * as TypeGraphQL from "type-graphql";

export enum ProjectMemberScalarFieldEnum {
  id = "id",
  awaitingApproval = "awaitingApproval",
  projectMemberPermissionsId = "projectMemberPermissionsId",
  projectId = "projectId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ProjectMemberScalarFieldEnum, {
  name: "ProjectMemberScalarFieldEnum",
  description: undefined,
});
