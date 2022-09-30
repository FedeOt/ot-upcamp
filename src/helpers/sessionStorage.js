export const getAuthHeader = () => `Bearer ${sessionStorage.getItem('token')}`
export const getRole = () => sessionStorage.getItem('role'); 