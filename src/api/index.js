import { Instance } from "../axios/Instance";

export const getAllCheckingAccounts = () => Instance.get('user/account/checking')
