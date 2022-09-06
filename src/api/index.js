import { axiosClient, getAuthHeader } from '../axios/Instance';


export const getAllCheckingAccounts = () =>
  axiosClient.get('user/account/checking', {
    headers: { Authorization: getAuthHeader() },
  });