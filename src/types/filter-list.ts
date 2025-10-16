export interface IFilterList<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

export interface IFilter {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
  isAscending?: boolean;
}
