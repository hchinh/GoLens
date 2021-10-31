import { ListParams, ListResponse, Review } from 'models';
import axiosClient from './axiosClient';

const reviewApi = {
  getAll(params: ListParams): Promise<ListResponse<Review>> {
    const url = '/reviews';
    return axiosClient.get(url, { params });
  },

  add(data: Review): Promise<Review> {
    const url = '/reviews';
    return axiosClient.post(url, data);
  },

  update(data: Partial<Review>): Promise<Review> {
    const url = `/reviews/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: number): Promise<any> {
    const url = `/reviews/${id}`;
    return axiosClient.delete(url);
  },
};

export default reviewApi;
