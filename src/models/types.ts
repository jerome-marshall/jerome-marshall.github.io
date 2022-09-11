export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Input type for dynamic zone pageContent of GlobalData */
  GlobalDataPageContentDynamicZoneInput: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type GlobalDataPageContentDynamicZone = ComponentPageContentHeroPageContent | ComponentPageContentAboutPageContent | ComponentPageContentExperiencePageContent | ComponentPageContentProjectsPageContent | ComponentPageContentContactPageCotent;


export type GlobalData = {
  __typename?: 'GlobalData';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<ComponentInfoSocials>>>;
  myImage?: Maybe<UploadFile>;
  pageContent?: Maybe<Array<Maybe<GlobalDataPageContentDynamicZone>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type GlobalDatumInput = {
  name?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<ComponentInfoSocialInput>>>;
  myImage?: Maybe<Scalars['ID']>;
  pageContent?: Maybe<Array<Scalars['GlobalDataPageContentDynamicZoneInput']>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGlobalDatumInput = {
  name?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<EditComponentInfoSocialInput>>>;
  myImage?: Maybe<Scalars['ID']>;
  pageContent?: Maybe<Array<Scalars['GlobalDataPageContentDynamicZoneInput']>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateGlobalDatumInput = {
  data?: Maybe<EditGlobalDatumInput>;
};

export type UpdateGlobalDatumPayload = {
  __typename?: 'updateGlobalDatumPayload';
  globalDatum?: Maybe<GlobalData>;
};

export type DeleteGlobalDatumPayload = {
  __typename?: 'deleteGlobalDatumPayload';
  globalDatum?: Maybe<GlobalData>;
};

export type Jobs = {
  __typename?: 'Jobs';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  companyName?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  doj?: Maybe<Scalars['Date']>;
  range?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  workDescription?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type JobsConnection = {
  __typename?: 'JobsConnection';
  values?: Maybe<Array<Maybe<Jobs>>>;
  groupBy?: Maybe<JobsGroupBy>;
  aggregate?: Maybe<JobsAggregator>;
};

export type JobsAggregator = {
  __typename?: 'JobsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type JobsGroupBy = {
  __typename?: 'JobsGroupBy';
  id?: Maybe<Array<Maybe<JobsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<JobsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<JobsConnectionUpdated_At>>>;
  companyName?: Maybe<Array<Maybe<JobsConnectionCompanyName>>>;
  designation?: Maybe<Array<Maybe<JobsConnectionDesignation>>>;
  doj?: Maybe<Array<Maybe<JobsConnectionDoj>>>;
  range?: Maybe<Array<Maybe<JobsConnectionRange>>>;
  url?: Maybe<Array<Maybe<JobsConnectionUrl>>>;
  workDescription?: Maybe<Array<Maybe<JobsConnectionWorkDescription>>>;
  published_at?: Maybe<Array<Maybe<JobsConnectionPublished_At>>>;
  created_by?: Maybe<Array<Maybe<JobsConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<JobsConnectionUpdated_By>>>;
};

export type JobsConnectionId = {
  __typename?: 'JobsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionCreated_At = {
  __typename?: 'JobsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionUpdated_At = {
  __typename?: 'JobsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionCompanyName = {
  __typename?: 'JobsConnectionCompanyName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionDesignation = {
  __typename?: 'JobsConnectionDesignation';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionDoj = {
  __typename?: 'JobsConnectionDoj';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionRange = {
  __typename?: 'JobsConnectionRange';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionUrl = {
  __typename?: 'JobsConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionWorkDescription = {
  __typename?: 'JobsConnectionWorkDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionPublished_At = {
  __typename?: 'JobsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionCreated_By = {
  __typename?: 'JobsConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionUpdated_By = {
  __typename?: 'JobsConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<JobsConnection>;
};

export type JobInput = {
  companyName?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  doj?: Maybe<Scalars['Date']>;
  range?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  workDescription?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditJobInput = {
  companyName?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  doj?: Maybe<Scalars['Date']>;
  range?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  workDescription?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateJobInput = {
  data?: Maybe<JobInput>;
};

export type CreateJobPayload = {
  __typename?: 'createJobPayload';
  job?: Maybe<Jobs>;
};

export type UpdateJobInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditJobInput>;
};

export type UpdateJobPayload = {
  __typename?: 'updateJobPayload';
  job?: Maybe<Jobs>;
};

export type DeleteJobInput = {
  where?: Maybe<InputId>;
};

export type DeleteJobPayload = {
  __typename?: 'deleteJobPayload';
  job?: Maybe<Jobs>;
};

export type Projects = {
  __typename?: 'Projects';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  githubURL?: Maybe<Scalars['String']>;
  externalURL?: Maybe<Scalars['String']>;
  projectFor?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  projectImg?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  techStack?: Maybe<Array<Maybe<Skillset>>>;
};


export type ProjectsTechStackArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  values?: Maybe<Array<Maybe<Projects>>>;
  groupBy?: Maybe<ProjectsGroupBy>;
  aggregate?: Maybe<ProjectsAggregator>;
};

export type ProjectsAggregator = {
  __typename?: 'ProjectsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProjectsGroupBy = {
  __typename?: 'ProjectsGroupBy';
  id?: Maybe<Array<Maybe<ProjectsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProjectsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProjectsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ProjectsConnectionName>>>;
  date?: Maybe<Array<Maybe<ProjectsConnectionDate>>>;
  githubURL?: Maybe<Array<Maybe<ProjectsConnectionGithubUrl>>>;
  externalURL?: Maybe<Array<Maybe<ProjectsConnectionExternalUrl>>>;
  projectFor?: Maybe<Array<Maybe<ProjectsConnectionProjectFor>>>;
  personal?: Maybe<Array<Maybe<ProjectsConnectionPersonal>>>;
  description?: Maybe<Array<Maybe<ProjectsConnectionDescription>>>;
  projectImg?: Maybe<Array<Maybe<ProjectsConnectionProjectImg>>>;
  published_at?: Maybe<Array<Maybe<ProjectsConnectionPublished_At>>>;
  created_by?: Maybe<Array<Maybe<ProjectsConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ProjectsConnectionUpdated_By>>>;
};

export type ProjectsConnectionId = {
  __typename?: 'ProjectsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionCreated_At = {
  __typename?: 'ProjectsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionUpdated_At = {
  __typename?: 'ProjectsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionName = {
  __typename?: 'ProjectsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionDate = {
  __typename?: 'ProjectsConnectionDate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionGithubUrl = {
  __typename?: 'ProjectsConnectionGithubURL';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionExternalUrl = {
  __typename?: 'ProjectsConnectionExternalURL';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionProjectFor = {
  __typename?: 'ProjectsConnectionProjectFor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionPersonal = {
  __typename?: 'ProjectsConnectionPersonal';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionDescription = {
  __typename?: 'ProjectsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionProjectImg = {
  __typename?: 'ProjectsConnectionProjectImg';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionPublished_At = {
  __typename?: 'ProjectsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionCreated_By = {
  __typename?: 'ProjectsConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectsConnectionUpdated_By = {
  __typename?: 'ProjectsConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectsConnection>;
};

export type ProjectInput = {
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  githubURL?: Maybe<Scalars['String']>;
  externalURL?: Maybe<Scalars['String']>;
  techStack?: Maybe<Array<Maybe<Scalars['ID']>>>;
  projectFor?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  projectImg?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProjectInput = {
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  githubURL?: Maybe<Scalars['String']>;
  externalURL?: Maybe<Scalars['String']>;
  techStack?: Maybe<Array<Maybe<Scalars['ID']>>>;
  projectFor?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  projectImg?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateProjectInput = {
  data?: Maybe<ProjectInput>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project?: Maybe<Projects>;
};

export type UpdateProjectInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProjectInput>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project?: Maybe<Projects>;
};

export type DeleteProjectInput = {
  where?: Maybe<InputId>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project?: Maybe<Projects>;
};

export type Quotes = {
  __typename?: 'Quotes';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  author?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type QuotesConnection = {
  __typename?: 'QuotesConnection';
  values?: Maybe<Array<Maybe<Quotes>>>;
  groupBy?: Maybe<QuotesGroupBy>;
  aggregate?: Maybe<QuotesAggregator>;
};

export type QuotesAggregator = {
  __typename?: 'QuotesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type QuotesGroupBy = {
  __typename?: 'QuotesGroupBy';
  id?: Maybe<Array<Maybe<QuotesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<QuotesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<QuotesConnectionUpdated_At>>>;
  author?: Maybe<Array<Maybe<QuotesConnectionAuthor>>>;
  quote?: Maybe<Array<Maybe<QuotesConnectionQuote>>>;
  published_at?: Maybe<Array<Maybe<QuotesConnectionPublished_At>>>;
  created_by?: Maybe<Array<Maybe<QuotesConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<QuotesConnectionUpdated_By>>>;
};

export type QuotesConnectionId = {
  __typename?: 'QuotesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuotesConnection>;
};

export type QuotesConnectionCreated_At = {
  __typename?: 'QuotesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QuotesConnection>;
};

export type QuotesConnectionUpdated_At = {
  __typename?: 'QuotesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QuotesConnection>;
};

export type QuotesConnectionAuthor = {
  __typename?: 'QuotesConnectionAuthor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QuotesConnection>;
};

export type QuotesConnectionQuote = {
  __typename?: 'QuotesConnectionQuote';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QuotesConnection>;
};

export type QuotesConnectionPublished_At = {
  __typename?: 'QuotesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QuotesConnection>;
};

export type QuotesConnectionCreated_By = {
  __typename?: 'QuotesConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuotesConnection>;
};

export type QuotesConnectionUpdated_By = {
  __typename?: 'QuotesConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuotesConnection>;
};

export type QuoteInput = {
  author?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditQuoteInput = {
  author?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateQuoteInput = {
  data?: Maybe<QuoteInput>;
};

export type CreateQuotePayload = {
  __typename?: 'createQuotePayload';
  quote?: Maybe<Quotes>;
};

export type UpdateQuoteInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditQuoteInput>;
};

export type UpdateQuotePayload = {
  __typename?: 'updateQuotePayload';
  quote?: Maybe<Quotes>;
};

export type DeleteQuoteInput = {
  where?: Maybe<InputId>;
};

export type DeleteQuotePayload = {
  __typename?: 'deleteQuotePayload';
  quote?: Maybe<Quotes>;
};

export type Skillset = {
  __typename?: 'Skillset';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type SkillsetConnection = {
  __typename?: 'SkillsetConnection';
  values?: Maybe<Array<Maybe<Skillset>>>;
  groupBy?: Maybe<SkillsetGroupBy>;
  aggregate?: Maybe<SkillsetAggregator>;
};

export type SkillsetAggregator = {
  __typename?: 'SkillsetAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SkillsetGroupBy = {
  __typename?: 'SkillsetGroupBy';
  id?: Maybe<Array<Maybe<SkillsetConnectionId>>>;
  created_at?: Maybe<Array<Maybe<SkillsetConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<SkillsetConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<SkillsetConnectionName>>>;
  url?: Maybe<Array<Maybe<SkillsetConnectionUrl>>>;
  published_at?: Maybe<Array<Maybe<SkillsetConnectionPublished_At>>>;
  created_by?: Maybe<Array<Maybe<SkillsetConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<SkillsetConnectionUpdated_By>>>;
};

export type SkillsetConnectionId = {
  __typename?: 'SkillsetConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SkillsetConnection>;
};

export type SkillsetConnectionCreated_At = {
  __typename?: 'SkillsetConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SkillsetConnection>;
};

export type SkillsetConnectionUpdated_At = {
  __typename?: 'SkillsetConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SkillsetConnection>;
};

export type SkillsetConnectionName = {
  __typename?: 'SkillsetConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SkillsetConnection>;
};

export type SkillsetConnectionUrl = {
  __typename?: 'SkillsetConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SkillsetConnection>;
};

export type SkillsetConnectionPublished_At = {
  __typename?: 'SkillsetConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SkillsetConnection>;
};

export type SkillsetConnectionCreated_By = {
  __typename?: 'SkillsetConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SkillsetConnection>;
};

export type SkillsetConnectionUpdated_By = {
  __typename?: 'SkillsetConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SkillsetConnection>;
};

export type SkillsetInput = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSkillsetInput = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateSkillsetInput = {
  data?: Maybe<SkillsetInput>;
};

export type CreateSkillsetPayload = {
  __typename?: 'createSkillsetPayload';
  skillset?: Maybe<Skillset>;
};

export type UpdateSkillsetInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSkillsetInput>;
};

export type UpdateSkillsetPayload = {
  __typename?: 'updateSkillsetPayload';
  skillset?: Maybe<Skillset>;
};

export type DeleteSkillsetInput = {
  where?: Maybe<InputId>;
};

export type DeleteSkillsetPayload = {
  __typename?: 'deleteSkillsetPayload';
  skillset?: Maybe<Skillset>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_By = {
  __typename?: 'UploadFileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_By = {
  __typename?: 'UploadFileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  password?: Maybe<Array<Maybe<UsersPermissionsUserConnectionPassword>>>;
  resetPasswordToken?: Maybe<Array<Maybe<UsersPermissionsUserConnectionResetPasswordToken>>>;
  confirmationToken?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmationToken>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionPassword = {
  __typename?: 'UsersPermissionsUserConnectionPassword';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionResetPasswordToken = {
  __typename?: 'UsersPermissionsUserConnectionResetPasswordToken';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmationToken = {
  __typename?: 'UsersPermissionsUserConnectionConfirmationToken';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: 'UsersPermissionsUserConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentInfoSocials = {
  __typename?: 'ComponentInfoSocials';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentInfoSocialInput = {
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EditComponentInfoSocialInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentPageContentAboutPageContent = {
  __typename?: 'ComponentPageContentAboutPageContent';
  id: Scalars['ID'];
  pageTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  skillset?: Maybe<Array<Maybe<Skillset>>>;
};


export type ComponentPageContentAboutPageContentSkillsetArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentPageContentAboutPageContentInput = {
  pageTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  skillset?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentPageContentAboutPageContentInput = {
  id?: Maybe<Scalars['ID']>;
  pageTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  skillset?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ComponentPageContentContactPageCotent = {
  __typename?: 'ComponentPageContentContactPageCotent';
  id: Scalars['ID'];
  pageTitleIntro?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentPageContentContactPageCotentInput = {
  pageTitleIntro?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentPageContentContactPageCotentInput = {
  id?: Maybe<Scalars['ID']>;
  pageTitleIntro?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentPageContentExperiencePageContent = {
  __typename?: 'ComponentPageContentExperiencePageContent';
  id: Scalars['ID'];
  pageTitle?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Maybe<Jobs>>>;
};


export type ComponentPageContentExperiencePageContentJobsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentPageContentExperiencePageContentInput = {
  pageTitle?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentPageContentExperiencePageContentInput = {
  id?: Maybe<Scalars['ID']>;
  pageTitle?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ComponentPageContentHeroPageContent = {
  __typename?: 'ComponentPageContentHeroPageContent';
  id: Scalars['ID'];
  pageTitle?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentPageContentHeroPageContentInput = {
  pageTitle?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentPageContentHeroPageContentInput = {
  id?: Maybe<Scalars['ID']>;
  pageTitle?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentPageContentProjectsPageContent = {
  __typename?: 'ComponentPageContentProjectsPageContent';
  id: Scalars['ID'];
  pageTitle?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Projects>>>;
};


export type ComponentPageContentProjectsPageContentProjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentPageContentProjectsPageContentInput = {
  pageTitle?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentPageContentProjectsPageContentInput = {
  id?: Maybe<Scalars['ID']>;
  pageTitle?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | GlobalData | UpdateGlobalDatumPayload | DeleteGlobalDatumPayload | Jobs | JobsConnection | JobsAggregator | JobsGroupBy | JobsConnectionId | JobsConnectionCreated_At | JobsConnectionUpdated_At | JobsConnectionCompanyName | JobsConnectionDesignation | JobsConnectionDoj | JobsConnectionRange | JobsConnectionUrl | JobsConnectionWorkDescription | JobsConnectionPublished_At | JobsConnectionCreated_By | JobsConnectionUpdated_By | CreateJobPayload | UpdateJobPayload | DeleteJobPayload | Projects | ProjectsConnection | ProjectsAggregator | ProjectsGroupBy | ProjectsConnectionId | ProjectsConnectionCreated_At | ProjectsConnectionUpdated_At | ProjectsConnectionName | ProjectsConnectionDate | ProjectsConnectionGithubUrl | ProjectsConnectionExternalUrl | ProjectsConnectionProjectFor | ProjectsConnectionPersonal | ProjectsConnectionDescription | ProjectsConnectionProjectImg | ProjectsConnectionPublished_At | ProjectsConnectionCreated_By | ProjectsConnectionUpdated_By | CreateProjectPayload | UpdateProjectPayload | DeleteProjectPayload | Quotes | QuotesConnection | QuotesAggregator | QuotesGroupBy | QuotesConnectionId | QuotesConnectionCreated_At | QuotesConnectionUpdated_At | QuotesConnectionAuthor | QuotesConnectionQuote | QuotesConnectionPublished_At | QuotesConnectionCreated_By | QuotesConnectionUpdated_By | CreateQuotePayload | UpdateQuotePayload | DeleteQuotePayload | Skillset | SkillsetConnection | SkillsetAggregator | SkillsetGroupBy | SkillsetConnectionId | SkillsetConnectionCreated_At | SkillsetConnectionUpdated_At | SkillsetConnectionName | SkillsetConnectionUrl | SkillsetConnectionPublished_At | SkillsetConnectionCreated_By | SkillsetConnectionUpdated_By | CreateSkillsetPayload | UpdateSkillsetPayload | DeleteSkillsetPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionCreated_By | UploadFileConnectionUpdated_By | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_By | UsersPermissionsRoleConnectionUpdated_By | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionPassword | UsersPermissionsUserConnectionResetPasswordToken | UsersPermissionsUserConnectionConfirmationToken | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionCreated_By | UsersPermissionsUserConnectionUpdated_By | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentInfoSocials | ComponentPageContentAboutPageContent | ComponentPageContentContactPageCotent | ComponentPageContentExperiencePageContent | ComponentPageContentHeroPageContent | ComponentPageContentProjectsPageContent;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  globalDatum?: Maybe<GlobalData>;
  job?: Maybe<Jobs>;
  jobs?: Maybe<Array<Maybe<Jobs>>>;
  jobsConnection?: Maybe<JobsConnection>;
  project?: Maybe<Projects>;
  projects?: Maybe<Array<Maybe<Projects>>>;
  projectsConnection?: Maybe<ProjectsConnection>;
  quote?: Maybe<Quotes>;
  quotes?: Maybe<Array<Maybe<Quotes>>>;
  quotesConnection?: Maybe<QuotesConnection>;
  skillset?: Maybe<Skillset>;
  skillsets?: Maybe<Array<Maybe<Skillset>>>;
  skillsetsConnection?: Maybe<SkillsetConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryGlobalDatumArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryJobArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryJobsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryJobsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryQuoteArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryQuotesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryQuotesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySkillsetArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySkillsetsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySkillsetsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateGlobalDatum?: Maybe<UpdateGlobalDatumPayload>;
  deleteGlobalDatum?: Maybe<DeleteGlobalDatumPayload>;
  createJob?: Maybe<CreateJobPayload>;
  updateJob?: Maybe<UpdateJobPayload>;
  deleteJob?: Maybe<DeleteJobPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  createQuote?: Maybe<CreateQuotePayload>;
  updateQuote?: Maybe<UpdateQuotePayload>;
  deleteQuote?: Maybe<DeleteQuotePayload>;
  createSkillset?: Maybe<CreateSkillsetPayload>;
  updateSkillset?: Maybe<UpdateSkillsetPayload>;
  deleteSkillset?: Maybe<DeleteSkillsetPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationUpdateGlobalDatumArgs = {
  input?: Maybe<UpdateGlobalDatumInput>;
};


export type MutationCreateJobArgs = {
  input?: Maybe<CreateJobInput>;
};


export type MutationUpdateJobArgs = {
  input?: Maybe<UpdateJobInput>;
};


export type MutationDeleteJobArgs = {
  input?: Maybe<DeleteJobInput>;
};


export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>;
};


export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>;
};


export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>;
};


export type MutationCreateQuoteArgs = {
  input?: Maybe<CreateQuoteInput>;
};


export type MutationUpdateQuoteArgs = {
  input?: Maybe<UpdateQuoteInput>;
};


export type MutationDeleteQuoteArgs = {
  input?: Maybe<DeleteQuoteInput>;
};


export type MutationCreateSkillsetArgs = {
  input?: Maybe<CreateSkillsetInput>;
};


export type MutationUpdateSkillsetArgs = {
  input?: Maybe<UpdateSkillsetInput>;
};


export type MutationDeleteSkillsetArgs = {
  input?: Maybe<DeleteSkillsetInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};






