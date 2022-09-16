
import { formatDate } from '../moment/formatDate'

export const AccountCard = ({account}) => {
  return (
      
          <div className="card bg-dark text-light h-25 col-5 mt-5 ms-5">
              <div className="card-body">
                  <h5 className="card-title">{account.name}</h5>
                  <hr />
                  <p className="card-text">Opening balance $ {account.openingBalance}</p>
                  <p className='card-text'><strong>Type</strong> {account.accountType.name}</p>
                  <p className='card-text'><strong>Number </strong> {account.accountNumber}</p>
                  <hr />
                  <span>Created {formatDate(account.dateOpened)}</span>
              </div>
          </div>
      
  )
}
