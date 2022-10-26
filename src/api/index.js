import { axiosClient } from "../axios/Instance";
import { getAuthHeader } from "../helpers/sessionStorage";

export const getAllCheckingAccounts = () => {
  const role = sessionStorage.getItem("role");

  const partialUrl = role === "ROLE_USER" ? "user" : "";
  return axiosClient.get(`${partialUrl}/account/checking`, {
    headers: { Authorization: getAuthHeader() },
  });
};

export const createCheckingAccount = (account) =>
  axiosClient.post(
    "user/account/",
    {
      accountName: account.accountName,
      accountTypeCode: account.accountType,
      openingDeposit: Number(account.accountOpening),
      ownerTypeCode: account.accountOwnership,
    },
    {
      headers: { Authorization: getAuthHeader() },
    }
  );

export const deleteAccount = (id) =>
  axiosClient.delete(`/account/${id}`, {
    headers: { Authorization: getAuthHeader() },
  });

export const updateAccount = (id, name) =>
  axiosClient.put(
    `/account/${id}`,
    {},
    { headers: { Authorization: getAuthHeader() }, params: { newName: name } }
  );


export const createNewUser = (user) =>
  axiosClient.post("/user", user, {
    headers: { Authorization: getAuthHeader() },
  });

export const addApiRole = (id) =>
  axiosClient.put(
    `/user/${id}/role?role=API`,
    {},
    {
      headers: { Authorization: getAuthHeader() },
    }
  );


export const getAuthToken = (credentials) =>
    axiosClient.post('/auth',{},{params:{
      username:credentials.username,
      password:credentials.password
    }}); 

export const getAuthRole = (token) =>
    axiosClient.get('/user/role',{
      headers:{Authorization:`Bearer ${token}`}
    });


export const executeTransaction = ({type,amount,description,id}) =>
    axiosClient.post(`/account/${id}/transaction`,{
      amount,
      transactionTypeCode:type,
      description
    },{headers:{Authorization:getAuthHeader()}})

