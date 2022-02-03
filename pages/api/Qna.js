import { QueryManager, AxiosInstance } from './Config';
import qs from 'qs';

const qna = {
  getQnas: (query) => {
    const defaultOption = {
      pageSize: 5,
      populate: 'common_code',
      sort: 'id:desc',
      fields: 'qId,qTitle,qUser,qStatusCd,registDate,readCount',
    };
    const queryManager = new QueryManager(query, defaultOption);
    const _query = queryManager.getAllQuery();
    return AxiosInstance.get(`qnas?${_query}`);
  },
};

export const getQnas = async (query) => {
  const response = await qna.getQnas(query);
  return response.data;
};
