import { QueryManager, AxiosInstance } from './Config';

const qna = {
  getQnas: (query: object) => {
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
  deleteQna: async (id: string) => {
    const result = await AxiosInstance.delete(`qnas/${id}`).then((res) => {
      return res.status === 200 ? 1 : 0;
    });
    return result;
  },
};

export const getQnas = async (query: object) => {
  const response = await qna.getQnas(query);
  return response.data;
};
export const deleteQnas = async (ids : string[]) => {
  const promise = ids.map(async (id) => {
    const deleteCnt = await qna.deleteQna(id);
    return deleteCnt;
  });
  const deleteResult:number[] = await Promise.all(promise);
  const deleteCnts = deleteResult.reduce((prev, curr)=> {
    return prev + curr;
  });

  return deleteCnts;
};
