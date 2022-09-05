
import { formatDateOpened } from '../moment/formatDateOpened'

export const AccountCard = ({account}) => {
  return (
      
          <div className="card bg-dark text-light h-25 col-5 mt-5 ms-5">
              <div className="card-body">
                  <h5 className="card-title">{account.name}</h5>
                  <p className="card-text">Opening balance $ {account.openingBalance}</p>
                  <p className='card-text'><strong>Type</strong> {account.accountType.name}</p>
                  <button className="btn btn-info">More Info</button>
                  <hr />
                  <span>- Created {formatDateOpened(account.dateOpened)}</span>
              </div>
          </div>
      
  )
}
