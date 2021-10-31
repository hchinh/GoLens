import { Attraction, ListResponse } from 'models';
import axiosClient from './axiosClient';

const attractionApi = {
  getAll(): Promise<ListResponse<Attraction>> {
    const url = '/attractions';
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default attractionApi;
