export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface CatSliceState {
  cats: Cat[];
  status: Status;
}

export type FetchCatsArgs = {
  limit: number;
  page: number;
};
