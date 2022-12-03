export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Pagination = {
  __typename?: "Pagination";
  total: Scalars["Int"];
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  pageCount: Scalars["Int"];
};

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  not?: InputMaybe<IdFilterInput>;
  eq?: InputMaybe<Scalars["ID"]>;
  eqi?: InputMaybe<Scalars["ID"]>;
  ne?: InputMaybe<Scalars["ID"]>;
  startsWith?: InputMaybe<Scalars["ID"]>;
  endsWith?: InputMaybe<Scalars["ID"]>;
  contains?: InputMaybe<Scalars["ID"]>;
  notContains?: InputMaybe<Scalars["ID"]>;
  containsi?: InputMaybe<Scalars["ID"]>;
  notContainsi?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  not?: InputMaybe<BooleanFilterInput>;
  eq?: InputMaybe<Scalars["Boolean"]>;
  eqi?: InputMaybe<Scalars["Boolean"]>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  startsWith?: InputMaybe<Scalars["Boolean"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]>;
  contains?: InputMaybe<Scalars["Boolean"]>;
  notContains?: InputMaybe<Scalars["Boolean"]>;
  containsi?: InputMaybe<Scalars["Boolean"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  not?: InputMaybe<StringFilterInput>;
  eq?: InputMaybe<Scalars["String"]>;
  eqi?: InputMaybe<Scalars["String"]>;
  ne?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  contains?: InputMaybe<Scalars["String"]>;
  notContains?: InputMaybe<Scalars["String"]>;
  containsi?: InputMaybe<Scalars["String"]>;
  notContainsi?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  not?: InputMaybe<IntFilterInput>;
  eq?: InputMaybe<Scalars["Int"]>;
  eqi?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  startsWith?: InputMaybe<Scalars["Int"]>;
  endsWith?: InputMaybe<Scalars["Int"]>;
  contains?: InputMaybe<Scalars["Int"]>;
  notContains?: InputMaybe<Scalars["Int"]>;
  containsi?: InputMaybe<Scalars["Int"]>;
  notContainsi?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  not?: InputMaybe<FloatFilterInput>;
  eq?: InputMaybe<Scalars["Float"]>;
  eqi?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  startsWith?: InputMaybe<Scalars["Float"]>;
  endsWith?: InputMaybe<Scalars["Float"]>;
  contains?: InputMaybe<Scalars["Float"]>;
  notContains?: InputMaybe<Scalars["Float"]>;
  containsi?: InputMaybe<Scalars["Float"]>;
  notContainsi?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  not?: InputMaybe<DateFilterInput>;
  eq?: InputMaybe<Scalars["Date"]>;
  eqi?: InputMaybe<Scalars["Date"]>;
  ne?: InputMaybe<Scalars["Date"]>;
  startsWith?: InputMaybe<Scalars["Date"]>;
  endsWith?: InputMaybe<Scalars["Date"]>;
  contains?: InputMaybe<Scalars["Date"]>;
  notContains?: InputMaybe<Scalars["Date"]>;
  containsi?: InputMaybe<Scalars["Date"]>;
  notContainsi?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  not?: InputMaybe<DateTimeFilterInput>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  eqi?: InputMaybe<Scalars["DateTime"]>;
  ne?: InputMaybe<Scalars["DateTime"]>;
  startsWith?: InputMaybe<Scalars["DateTime"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]>;
  contains?: InputMaybe<Scalars["DateTime"]>;
  notContains?: InputMaybe<Scalars["DateTime"]>;
  containsi?: InputMaybe<Scalars["DateTime"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  not?: InputMaybe<JsonFilterInput>;
  eq?: InputMaybe<Scalars["JSON"]>;
  eqi?: InputMaybe<Scalars["JSON"]>;
  ne?: InputMaybe<Scalars["JSON"]>;
  startsWith?: InputMaybe<Scalars["JSON"]>;
  endsWith?: InputMaybe<Scalars["JSON"]>;
  contains?: InputMaybe<Scalars["JSON"]>;
  notContains?: InputMaybe<Scalars["JSON"]>;
  containsi?: InputMaybe<Scalars["JSON"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
};

export type ComponentComponentCommonPageContent = {
  __typename?: "ComponentComponentCommonPageContent";
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  heading?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type ComponentComponentSocialFiltersInput = {
  name?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentComponentSocialFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentSocialFiltersInput>>>;
  not?: InputMaybe<ComponentComponentSocialFiltersInput>;
};

export type ComponentComponentSocialInput = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type ComponentComponentSocial = {
  __typename?: "ComponentComponentSocial";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type ComponentPageDataAboutPage = {
  __typename?: "ComponentPageDataAboutPage";
  id: Scalars["ID"];
  skills?: Maybe<SkillRelationResponseCollection>;
  page?: Maybe<ComponentComponentCommonPageContent>;
};

export type ComponentPageDataAboutPageSkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentPageDataContactPage = {
  __typename?: "ComponentPageDataContactPage";
  id: Scalars["ID"];
  page?: Maybe<ComponentComponentCommonPageContent>;
};

export type ComponentPageDataExperiencePage = {
  __typename?: "ComponentPageDataExperiencePage";
  id: Scalars["ID"];
  page?: Maybe<ComponentComponentCommonPageContent>;
  jobs?: Maybe<JobRelationResponseCollection>;
};

export type ComponentPageDataExperiencePageJobsArgs = {
  filters?: InputMaybe<JobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentPageDataHeroPage = {
  __typename?: "ComponentPageDataHeroPage";
  id: Scalars["ID"];
  page?: Maybe<ComponentComponentCommonPageContent>;
};

export type ComponentPageDataProjectsPage = {
  __typename?: "ComponentPageDataProjectsPage";
  id: Scalars["ID"];
  page?: Maybe<ComponentComponentCommonPageContent>;
};

export type UploadFileFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  alternativeText?: InputMaybe<StringFilterInput>;
  caption?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  not?: InputMaybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: InputMaybe<Scalars["String"]>;
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
  height?: InputMaybe<Scalars["Int"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  ext?: InputMaybe<Scalars["String"]>;
  mime?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  url?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  folder?: InputMaybe<Scalars["ID"]>;
  folderPath?: InputMaybe<Scalars["String"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  name: Scalars["String"];
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext?: Maybe<Scalars["String"]>;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UploadFile>;
};

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  data: Array<UploadFileEntity>;
};

export type UploadFolderFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  not?: InputMaybe<UploadFolderFiltersInput>;
};

export type UploadFolderInput = {
  name?: InputMaybe<Scalars["String"]>;
  pathId?: InputMaybe<Scalars["Int"]>;
  parent?: InputMaybe<Scalars["ID"]>;
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  path?: InputMaybe<Scalars["String"]>;
};

export type UploadFolder = {
  __typename?: "UploadFolder";
  name: Scalars["String"];
  pathId: Scalars["Int"];
  parent?: Maybe<UploadFolderEntityResponse>;
  children?: Maybe<UploadFolderRelationResponseCollection>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  path: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UploadFolderEntity = {
  __typename?: "UploadFolderEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UploadFolder>;
};

export type UploadFolderEntityResponse = {
  __typename?: "UploadFolderEntityResponse";
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: "UploadFolderEntityResponseCollection";
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: "UploadFolderRelationResponseCollection";
  data: Array<UploadFolderEntity>;
};

export type I18NLocaleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<I18NLocale>;
};

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  action?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  password?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  blocked?: InputMaybe<Scalars["Boolean"]>;
  role?: InputMaybe<Scalars["ID"]>;
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  username: Scalars["String"];
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
};

export type GlobalDatumInput = {
  name?: InputMaybe<Scalars["String"]>;
  socials?: InputMaybe<Array<InputMaybe<ComponentComponentSocialInput>>>;
  image?: InputMaybe<Scalars["ID"]>;
  shortIntroduction?: InputMaybe<Scalars["String"]>;
  introduction?: InputMaybe<Scalars["String"]>;
  about?: InputMaybe<Scalars["String"]>;
  contactText?: InputMaybe<Scalars["String"]>;
  skillsHighlight?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  projectsHighlight?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type GlobalDatum = {
  __typename?: "GlobalDatum";
  name?: Maybe<Scalars["String"]>;
  socials?: Maybe<Array<Maybe<ComponentComponentSocial>>>;
  image?: Maybe<UploadFileEntityResponse>;
  shortIntroduction?: Maybe<Scalars["String"]>;
  introduction?: Maybe<Scalars["String"]>;
  about?: Maybe<Scalars["String"]>;
  contactText?: Maybe<Scalars["String"]>;
  skillsHighlight?: Maybe<SkillRelationResponseCollection>;
  projectsHighlight?: Maybe<ProjectRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type GlobalDatumSocialsArgs = {
  filters?: InputMaybe<ComponentComponentSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type GlobalDatumSkillsHighlightArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type GlobalDatumProjectsHighlightArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type GlobalDatumEntity = {
  __typename?: "GlobalDatumEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<GlobalDatum>;
};

export type GlobalDatumEntityResponse = {
  __typename?: "GlobalDatumEntityResponse";
  data?: Maybe<GlobalDatumEntity>;
};

export type JobFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  designation?: InputMaybe<StringFilterInput>;
  joiningDate?: InputMaybe<DateFilterInput>;
  leavingDate?: InputMaybe<DateFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  workDescription?: InputMaybe<StringFilterInput>;
  present?: InputMaybe<BooleanFilterInput>;
  rank?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  not?: InputMaybe<JobFiltersInput>;
};

export type JobInput = {
  designation?: InputMaybe<Scalars["String"]>;
  joiningDate?: InputMaybe<Scalars["Date"]>;
  leavingDate?: InputMaybe<Scalars["Date"]>;
  url?: InputMaybe<Scalars["String"]>;
  workDescription?: InputMaybe<Scalars["String"]>;
  present?: InputMaybe<Scalars["Boolean"]>;
  rank?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Job = {
  __typename?: "Job";
  designation?: Maybe<Scalars["String"]>;
  joiningDate?: Maybe<Scalars["Date"]>;
  leavingDate?: Maybe<Scalars["Date"]>;
  url?: Maybe<Scalars["String"]>;
  workDescription?: Maybe<Scalars["String"]>;
  present?: Maybe<Scalars["Boolean"]>;
  rank?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type JobEntity = {
  __typename?: "JobEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Job>;
};

export type JobEntityResponse = {
  __typename?: "JobEntityResponse";
  data?: Maybe<JobEntity>;
};

export type JobEntityResponseCollection = {
  __typename?: "JobEntityResponseCollection";
  data: Array<JobEntity>;
  meta: ResponseCollectionMeta;
};

export type JobRelationResponseCollection = {
  __typename?: "JobRelationResponseCollection";
  data: Array<JobEntity>;
};

export type ProjectFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  githubURL?: InputMaybe<StringFilterInput>;
  externalURL?: InputMaybe<StringFilterInput>;
  techStack?: InputMaybe<SkillFiltersInput>;
  projectFor?: InputMaybe<StringFilterInput>;
  personal?: InputMaybe<BooleanFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  not?: InputMaybe<ProjectFiltersInput>;
};

export type ProjectInput = {
  name?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["Date"]>;
  githubURL?: InputMaybe<Scalars["String"]>;
  externalURL?: InputMaybe<Scalars["String"]>;
  techStack?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  projectFor?: InputMaybe<Scalars["String"]>;
  personal?: InputMaybe<Scalars["Boolean"]>;
  description?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  shortDescription?: InputMaybe<Scalars["String"]>;
};

export type Project = {
  __typename?: "Project";
  name?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["Date"]>;
  githubURL?: Maybe<Scalars["String"]>;
  externalURL?: Maybe<Scalars["String"]>;
  techStack?: Maybe<SkillRelationResponseCollection>;
  projectFor?: Maybe<Scalars["String"]>;
  personal?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  shortDescription?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProjectTechStackArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProjectImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProjectEntity = {
  __typename?: "ProjectEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Project>;
};

export type ProjectEntityResponse = {
  __typename?: "ProjectEntityResponse";
  data?: Maybe<ProjectEntity>;
};

export type ProjectEntityResponseCollection = {
  __typename?: "ProjectEntityResponseCollection";
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectRelationResponseCollection = {
  __typename?: "ProjectRelationResponseCollection";
  data: Array<ProjectEntity>;
};

export type QuoteFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  author?: InputMaybe<StringFilterInput>;
  quote?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  not?: InputMaybe<QuoteFiltersInput>;
};

export type QuoteInput = {
  author?: InputMaybe<Scalars["String"]>;
  quote?: InputMaybe<Scalars["String"]>;
};

export type Quote = {
  __typename?: "Quote";
  author?: Maybe<Scalars["String"]>;
  quote?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuoteEntity = {
  __typename?: "QuoteEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Quote>;
};

export type QuoteEntityResponse = {
  __typename?: "QuoteEntityResponse";
  data?: Maybe<QuoteEntity>;
};

export type QuoteEntityResponseCollection = {
  __typename?: "QuoteEntityResponseCollection";
  data: Array<QuoteEntity>;
  meta: ResponseCollectionMeta;
};

export type SkillFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  projects?: InputMaybe<ProjectFiltersInput>;
  rank?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  not?: InputMaybe<SkillFiltersInput>;
};

export type SkillInput = {
  name?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  projects?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  rank?: InputMaybe<Scalars["Int"]>;
};

export type Skill = {
  __typename?: "Skill";
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  projects?: Maybe<ProjectRelationResponseCollection>;
  rank?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SkillProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SkillEntity = {
  __typename?: "SkillEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Skill>;
};

export type SkillEntityResponse = {
  __typename?: "SkillEntityResponse";
  data?: Maybe<SkillEntity>;
};

export type SkillEntityResponseCollection = {
  __typename?: "SkillEntityResponseCollection";
  data: Array<SkillEntity>;
  meta: ResponseCollectionMeta;
};

export type SkillRelationResponseCollection = {
  __typename?: "SkillRelationResponseCollection";
  data: Array<SkillEntity>;
};

export type GenericMorph =
  | ComponentComponentCommonPageContent
  | ComponentComponentSocial
  | ComponentPageDataAboutPage
  | ComponentPageDataContactPage
  | ComponentPageDataExperiencePage
  | ComponentPageDataHeroPage
  | ComponentPageDataProjectsPage
  | UploadFile
  | UploadFolder
  | I18NLocale
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | GlobalDatum
  | Job
  | Project
  | Quote
  | Skill;

export type FileInfoInput = {
  name?: InputMaybe<Scalars["String"]>;
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  id: Scalars["ID"];
  username: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"];
};

export type PaginationArg = {
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  globalDatum?: Maybe<GlobalDatumEntityResponse>;
  job?: Maybe<JobEntityResponse>;
  jobs?: Maybe<JobEntityResponseCollection>;
  project?: Maybe<ProjectEntityResponse>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  quote?: Maybe<QuoteEntityResponse>;
  quotes?: Maybe<QuoteEntityResponseCollection>;
  skill?: Maybe<SkillEntityResponse>;
  skills?: Maybe<SkillEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryJobArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryJobsArgs = {
  filters?: InputMaybe<JobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProjectArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryQuoteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryQuotesArgs = {
  filters?: InputMaybe<QuoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuerySkillArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QuerySkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateGlobalDatum?: Maybe<GlobalDatumEntityResponse>;
  deleteGlobalDatum?: Maybe<GlobalDatumEntityResponse>;
  createJob?: Maybe<JobEntityResponse>;
  updateJob?: Maybe<JobEntityResponse>;
  deleteJob?: Maybe<JobEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  createQuote?: Maybe<QuoteEntityResponse>;
  updateQuote?: Maybe<QuoteEntityResponse>;
  deleteQuote?: Maybe<QuoteEntityResponse>;
  createSkill?: Maybe<SkillEntityResponse>;
  updateSkill?: Maybe<SkillEntityResponse>;
  deleteSkill?: Maybe<SkillEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationUpdateUploadFileArgs = {
  id: Scalars["ID"];
  data: UploadFileInput;
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"];
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationUpdateUploadFolderArgs = {
  id: Scalars["ID"];
  data: UploadFolderInput;
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars["ID"];
};

export type MutationUpdateGlobalDatumArgs = {
  data: GlobalDatumInput;
};

export type MutationCreateJobArgs = {
  data: JobInput;
};

export type MutationUpdateJobArgs = {
  id: Scalars["ID"];
  data: JobInput;
};

export type MutationDeleteJobArgs = {
  id: Scalars["ID"];
};

export type MutationCreateProjectArgs = {
  data: ProjectInput;
};

export type MutationUpdateProjectArgs = {
  id: Scalars["ID"];
  data: ProjectInput;
};

export type MutationDeleteProjectArgs = {
  id: Scalars["ID"];
};

export type MutationCreateQuoteArgs = {
  data: QuoteInput;
};

export type MutationUpdateQuoteArgs = {
  id: Scalars["ID"];
  data: QuoteInput;
};

export type MutationDeleteQuoteArgs = {
  id: Scalars["ID"];
};

export type MutationCreateSkillArgs = {
  data: SkillInput;
};

export type MutationUpdateSkillArgs = {
  id: Scalars["ID"];
  data: SkillInput;
};

export type MutationDeleteSkillArgs = {
  id: Scalars["ID"];
};

export type MutationUploadArgs = {
  refId?: InputMaybe<Scalars["ID"]>;
  ref?: InputMaybe<Scalars["String"]>;
  field?: InputMaybe<Scalars["String"]>;
  info?: InputMaybe<FileInfoInput>;
  file: Scalars["Upload"];
};

export type MutationMultipleUploadArgs = {
  refId?: InputMaybe<Scalars["ID"]>;
  ref?: InputMaybe<Scalars["String"]>;
  field?: InputMaybe<Scalars["String"]>;
  files: Array<InputMaybe<Scalars["Upload"]>>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"];
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
  data: UsersPermissionsRoleInput;
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars["ID"];
  data: UsersPermissionsUserInput;
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
  code: Scalars["String"];
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};
