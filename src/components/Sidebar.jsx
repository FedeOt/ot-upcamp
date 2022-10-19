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
    </div>
  )
}
