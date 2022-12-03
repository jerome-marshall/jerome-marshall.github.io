export type Maybe<T> = T | undefined;
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

export type ComponentComponentSocial = {
  __typename?: "ComponentComponentSocial";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
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

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  data: Array<UploadFileEntity>;
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

export type ProjectEntity = {
  __typename?: "ProjectEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Project>;
};

export type ProjectRelationResponseCollection = {
  __typename?: "ProjectRelationResponseCollection";
  data: Array<ProjectEntity>;
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

export type SkillEntity = {
  __typename?: "SkillEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Skill>;
};

export type SkillRelationResponseCollection = {
  __typename?: "SkillRelationResponseCollection";
  data: Array<SkillEntity>;
};

export type GlobalDatum = Partial<{
  __typename: "GlobalDatum";
  name: string;
  socials: Maybe<Array<Maybe<ComponentComponentSocial>>>;
  image: Maybe<UploadFileEntityResponse>;
  shortIntroduction: string;
  introduction: string;
  about: Maybe<Scalars["String"]>;
  contactText: Maybe<Scalars["String"]>;
  skillsHighlight: Maybe<SkillRelationResponseCollection>;
  projectsHighlight: Maybe<ProjectRelationResponseCollection>;
  createdAt: Maybe<Scalars["DateTime"]>;
  updatedAt: Maybe<Scalars["DateTime"]>;
}>;

export type Quote = {
  __typename?: "Quote";
  author?: Maybe<Scalars["String"]>;
  quote?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};
