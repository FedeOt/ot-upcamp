import { Link } from 'react-router-dom'
import { getRole } from '../helpers/sessionStorage'
import { sidebarData } from '../data/sidebarData'
import { Logout } from './Logout'



export const Sidebar = () => {
  return (
    <div className='Sidebar'>
      {
        getRole() && <Logout/>
      }
      
        <hr />
      <ul className='sidebar-ul'>
        {
            sidebarData.map((element,index)=>(
              <Link className='link' key={index} to={element.link}>{element.title}</Link>
                  
              
            ))
        }
      </ul>
      <hr />
      {
        getRole() === 'ROLE_ADMIN' && 
        <Link className='link' to='/bank/user/create'>Create User</Link>
      }

      {
        getRole() === 'ROLE_USER' && 
        <div>
        <Link className='link' to='/bank/checking-account/deposit'>Deposit</Link>
        <Link className='link' to='/bank/checking-account/withdrawal'>Withdrawal</Link>
        </div>
        
      }
    </div>
  )
}
