
import { Link } from 'react-router-dom'
import { sidebarData } from '../data/sidebarData'


export const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <h3 className='title'>Banking</h3>
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
