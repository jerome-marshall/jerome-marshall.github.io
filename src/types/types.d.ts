declare global {
  interface Window {
    gtag: unknown;
  }
}

type Skill = {
  name: string;
  url: string;
};

type Job = {
  designation: string;
  joiningDate: string;
  url?: string;
  workDescription: string;
  present: boolean;
  rank: number;
  name: string;
  leavingDate?: string;
};

type Project = {
  name: string;
  date: string;
  githubURL?: string | null;
  externalURL?: string | null;
  projectFor?: string | null;
  personal?: boolean | null;
  description?: string | null;
  images: {
    data: never[];
  };
  shortDescription: string;
  techStack: {
    data: {
      attributes: {
        name: string;
        url: string;
      };
    }[];
  };
};

type Social = {
  id: string;
  name: string;
  url: string;
};

export interface IThemeContext {
  isThemeChanging?: boolean;
}
