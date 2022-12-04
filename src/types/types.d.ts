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
  name: string;
  url: string;
};

export type UploadFile = {
  __typename?: "UploadFile";
  name: Scalars["String"];
  alternativeText?: string;
  caption?: string;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext?: string;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl?: string;
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
  name: string;
  date?: Maybe<Scalars["Date"]>;
  githubURL?: string;
  externalURL?: string;
  techStack: SkillRelationResponseCollection;
  projectFor?: string;
  personal?: Maybe<Scalars["Boolean"]>;
  description?: string;
  images?: Maybe<UploadFileRelationResponseCollection>;
  shortDescription?: string;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProjectEntity = {
  __typename?: "ProjectEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes: Project;
};

export type ProjectRelationResponseCollection = {
  __typename?: "ProjectRelationResponseCollection";
  data: Array<ProjectEntity>;
};

export type Skill = {
  __typename?: "Skill";
  name?: string;
  url?: string;
  projects?: Maybe<ProjectRelationResponseCollection>;
  rank?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SkillEntity = {
  __typename?: "SkillEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes: Skill;
};

export type SkillRelationResponseCollection = {
  __typename?: "SkillRelationResponseCollection";
  data: Array<SkillEntity>;
};

export type GlobalDatum = {
  __typename: "GlobalDatum";
  name: string;
  socials: ComponentComponentSocial[];
  image: Maybe<UploadFileEntityResponse>;
  shortIntroduction: string;
  introduction: string;
  about: string;
  contactText: string;
  skillsHighlight: SkillRelationResponseCollection;
  projectsHighlight: ProjectRelationResponseCollection;
  createdAt: Maybe<Scalars["DateTime"]>;
  updatedAt: Maybe<Scalars["DateTime"]>;
};

export type Quote = {
  __typename?: "Quote";
  author?: string;
  quote?: string;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuoteEntity = {
  __typename?: "QuoteEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes: Quote;
};

export type Job = {
  __typename?: "Job";
  designation?: string;
  joiningDate?: Maybe<Scalars["Date"]>;
  leavingDate?: Maybe<Scalars["Date"]>;
  url?: string;
  workDescription: string;
  present?: Maybe<Scalars["Boolean"]>;
  rank?: Maybe<Scalars["Int"]>;
  name?: string;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type JobEntity = {
  __typename?: "JobEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Job>;
};

export interface IThemeContext {
  isThemeChanging?: boolean;
}
