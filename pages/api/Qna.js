import AxiosInstance from './Config';
import qs from 'qs';

const qna = {
  getQnas: (query) => {
    query = query || {};

    if (!query.noPageination) {
      query['pagination'] = Object.assign(query.pagination, { pageSize: 5 });
      delete query.noPageination;
    }

    if (!query.noSort) {
      query['sort'] = 'id:desc';
      delete query.noSort;
    }

    if (!query.fields) {
      query['fields'] = 'qId,qTitle,qUser,qStatusCd,registDate,readCount';
    } else if (query.fields === '*') {
      delete query.fields;
    }

    if (query.filter) {
      let filters = {};
      const filter = query.filter;
      const filterNames = Object.keys(filter);

      filterNames.forEach((filterName) => {
        if (['and', 'or'].indexOf(filterName) >= 0) {
          filters[`$${filterName}`] = filter[filterName].map((option) => {
            return {};
          });
        } else {
          filters[`${filterName}`] = {};
        }
      });
      //   console.log(filters);
      //   console.log(filterNames);
      delete query.filter;
      query['filters'] = filters;
    }
    /**
     * filter 관련 로직 수정 필요함
     * index.js에 직접 객체로 지정한 뒤 stringify 했을때 처럼
     * 쿼리스트링으로 포함되지 않고 제외됨.
     * 그냥 미리 스트링으로 변환하고 추가해야될듯.
     */

    query['populate'] = 'common_code';

    console.log(query);

    return AxiosInstance.get(`qnas?${qs.stringify(query)}`);
  },
};

export default qna;
