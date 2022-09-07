import { axiosClient, getAuthHeader } from '../axios/Instance';


export const getAllCheckingAccounts = () =>
  axiosClient.get('user/account/checking', {
    headers: { Authorization: getAuthHeader() },
  });


export const postCheckingAccounts = (account) =>
  axiosClient.post('user/account/', {
    accountName: account.accountName,
    accountTypeCode: account.accountType,
    openingDeposit: Number(account.accountOpening),
    ownerTypeCode: account.accountOwnership
  }, {
    headers: { Authorization: getAuthHeader() },
  });