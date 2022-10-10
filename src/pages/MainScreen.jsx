
import { Route, Routes } from 'react-router-dom';
import { CheckingAccountCreation } from '../components/CheckingAccountCreation';
import { CheckingAccountsList } from '../components/CheckingAccountsList';
import { Registration } from '../components/Registration';
import { Sidebar } from '../components/Sidebar';



export const MainScreen = () => {

  

  
  return (
    <div>
      
        <Sidebar />
          <Routes>
            <Route path='accounts' element={<CheckingAccountsList/>}/>
            <Route path='creation' element={<CheckingAccountCreation/>}/>
            <Route path='registration' element={<Registration/>}/>
          </Routes>





    </div>
  )
}
