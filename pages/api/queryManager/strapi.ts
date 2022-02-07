import Manager from './manager';
import qs from 'qs';
import {queryType, optionType,queryStringType} from './commonType';

/**strapi document
 * https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
 */
const STRAPI_QS:queryStringType = {
  eq: '$eq',
  ne: '$ne',
  lt: '$lt',
  lte: '$lte',
  gt: '$gt',
  gte: '$gte',
  in: '$in',
  nin: '$notIn',
  like: '$contains', //case-sensetive
  nike: '$notContains', //case-sensetive
  likei: '$containsi',
  nlikei: '$notContainsi',
  null: '$null',
  nnull: '$notNull',
  between: '$between',
  swith: '$startWith',
  ewith: '$endWith',
  or: '$or',
  and: '$and',
};
interface _optionType extends optionType{
  populate: string;
}

class Strapi extends Manager {
  populate;
  constructor(query:queryType, option:_optionType) {
    super(query, option);
    this.populate = option.populate;

    if (this.filter && typeof this.filter == "string") {
      let result:Array<object> = [];
      const filterObject = qs.parse(this.filter, { comma: true });
      const filterNames:string[] = Object.keys(filterObject);

      filterNames.forEach((filterName) => {
        const filterValues = filterObject[filterName] as string[];

        if (['and', 'or'].indexOf(filterName) >= 0) {
          const filters = filterValues.map((option) => {
            const keyName = STRAPI_QS[option[2]];
            return {
              [option[0]]: {
                [keyName]: option[1],
              },
            };
          }, []);

          result.push({
            filters: {
              [STRAPI_QS[filterName]]: filters,
            },
          });
        } else {
          result.push({
            filters: {
              [filterName]: {
                [STRAPI_QS[filterValues[1]]]: filterValues[0],
              },
            },
          });
        }
      });

      this.filter = result;
    } else {
      this.filter = null;
    }
  }

  getPagination() {
    return qs.stringify({ pagination: this.pagination });
  }

  getSort() {
    return qs.stringify({ sort: this.sort });
  }

  getFields() {
    return qs.stringify({ fields: this.fields });
  }

  getFilter() {
    if (this.filter && this.filter instanceof Array) {
      return this.filter
        .map((filter) => {
          return qs.stringify(filter);
        })
        .join('&');
    } else {
      return '';
    }
  }

  getPopulate() {
    return qs.stringify({ populate: this.populate });
  }

  getAllQuery() {
    return [this.getPagination(), this.getSort(), this.getFields(), this.getFilter(), this.getPopulate()].join('&');
  }
}

export { Strapi as QueryManager };
