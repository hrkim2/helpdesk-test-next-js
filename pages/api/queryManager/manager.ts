import {queryType, optionType} from './commonType';

export default class Manager {
  pagination;
  sort;
  fields;
  filter;

  constructor(query: queryType, option: optionType) {
    if (query) {
      this.pagination =
        option && option.pageSize ? Object.assign(query.pagination, { pageSize: option.pageSize }) : query.pagination;
      this.sort = query.sort || option.sort;
      if (!query.fields) {
        this.fields = option.fields || '*';
      } else {
        this.fields = query.fields;
      }
      this.filter = query.filter;
    }
  }

  getPagination() {}
  getSort() {}
  getFields() {}
  getFilter() {}
}
