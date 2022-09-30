import { getAccounts } from "../redux/accountSlice";
import { store } from "../redux/store";



const testingPayload = [
    {
      id: 403,
      name: "Up camp",
      accountNumber: 486130706,
      currentBalance: 12000,
      openingBalance: 12000,
      interestRate: 0,
      paymentAmount: 0,
      paymentTerm: 0,
      accountType: {
        id: 8,
        code: "SCK",
        category: "CHK",
        name: "Standard Checking",
        interestRate: 0,
        minDeposit: 25,
        overdraftLimit: 25,
        overdraftFee: 10,
      },
      ownershipType: { id: 17, code: "IND", name: "Individual" },
      accountStanding: { id: 19, code: "A1", name: "Open" },
      dateOpened: "2022-09-28T06:05",
      dateClosed: null,
      paymentDue: null,
    },
  ]


describe("Redux tests", () => {

    it("Initial state should be an empty array", () => {

      const state = store.getState().accounts;
      expect(state.accounts).toEqual([]);

    });

    it("Should update the state with the given info", () => {

      store.dispatch(getAccounts(testingPayload));
      const state = store.getState().accounts;
      expect(state.accounts).toEqual(testingPayload);   
      
    });
    


  });
