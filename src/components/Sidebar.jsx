import { Link } from 'react-router-dom'
import { sidebarData } from '../data/sidebarData'
import { getRole } from '../helpers/sessionStorage'
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
        <Link className='link' to='/bank/Registration'>Create User</Link>
      }
    </div>
  )
}
