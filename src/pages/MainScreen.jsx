import { Route, Routes } from 'react-router-dom';
import { CheckingAccountCreation } from '../components/CheckingAccountCreation';
import { CheckingAccountsList } from '../components/CheckingAccountsList';
import { Transaction } from '../components/Transaction';
import { Registration } from '../components/Registration';
import { Sidebar } from '../components/Sidebar';



export const MainScreen = () => {

  

  
  return (
    <div>
      
        <Sidebar />
          <Routes>
            <Route path='accounts' element={<CheckingAccountsList/>}/>
            <Route path='/checking-account/deposit' element={<Transaction type="DPT"/>}/>
            <Route path='/checking-account/withdrawal' element={<Transaction type="WTH"/>}/>
            <Route path='/checking-account/create' element={<CheckingAccountCreation/>}/>
            <Route path='/user/create' element={<Registration/>}/>

          </Routes>





    </div>
  )
}
