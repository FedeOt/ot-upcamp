import { axiosClient, getAuthHeader } from '../axios/Instance';


export const getAllCheckingAccounts = () =>{

    const role = sessionStorage.getItem('role');

    if(role === 'ROLE_USER'){
      return axiosClient.get('user/account/checking', {
        headers: { Authorization: getAuthHeader() },
      });
    }

    if(role === 'ROLE_ADMIN'){
      return axiosClient.get('/account/checking', {
        headers: { Authorization: getAuthHeader() },
      });
    }
}

  
  
export const createCheckingAccount = (account) =>
  axiosClient.post('user/account/', {
    accountName: account.accountName,
    accountTypeCode: account.accountType,
    openingDeposit: Number(account.accountOpening),
    ownerTypeCode: account.accountOwnership
  }, {
    headers: { Authorization: getAuthHeader() },
  });


