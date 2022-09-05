
import { sidebarData } from '../data/sidebarData'


export const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <h3 className='title'>Up Camp</h3>
        <hr />
      <ul className='sidebar-ul'>
        {
            sidebarData.map((element,index)=>(
              <li className='row' key={index}>
                  <div className='link'>{element.icon}</div>
                  <div className='link'>{element.title}</div>
              </li>
            ))
        }
      </ul>
    </div>
  )
}
