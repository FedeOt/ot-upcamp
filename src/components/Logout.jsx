import { useNavigate } from "react-router-dom";


export const Logout = () => {

    const nav = useNavigate();  
    const handleLogout = () =>{

        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role'); 
        nav('/'); 
    }  

  return (
    <button
        data-testid="logout" 
        className="btn btn-outline-danger mt-3 ms-5"
        onClick={handleLogout}
        >
            Logout
     </button>
  )
}
