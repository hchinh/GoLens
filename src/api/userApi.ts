import { User } from 'models';
import axiosClient from './axiosClient';

const userApi = {
  register(data: User): Promise<User> {
    const url = '/auth/local/register';
    return axiosClient.post(url, data);
  },

  login(data: User): Promise<User> {
    const url = '/auth/local';
    return axiosClient.post(url, data);
  },

  update(data: Partial<User>): Promise<User> {
    const url = `/users/${data.id}`;
    return axiosClient.patch(url, data);
  },
};

export default userApi;
