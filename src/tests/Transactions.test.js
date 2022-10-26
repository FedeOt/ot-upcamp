import { fireEvent, render, waitFor } from "@testing-library/react";
import { getAllCheckingAccounts } from "../api";
import { Transaction } from "../components/Transaction";

const accountId = 150;
const transactionAmount = 1200;
const resolvedValue = {
  data: [
    {
      id: 150,
      name: "testing",
    },
  ],
};

jest.mock("../api/index");

test("Should make a deposit in the selected account", async () => {
  getAllCheckingAccounts.mockResolvedValue(resolvedValue);
  const view = render(<Transaction type="DPT"/>);

  const accountSelect = view.getByTestId("transaction-account");
  fireEvent.change(accountSelect, { target: { value: accountId } });

  const transactionAmountInput = view.getByTestId("transaction-amount");
  fireEvent.change(transactionAmountInput, {
    target: { value: transactionAmount },
  });

  const submitBtn = view.getByTestId("transaction-submit");
  fireEvent.click(submitBtn);

  await waitFor(() => {
    expect(view.getByTestId("transaction-success")).toBeInTheDocument();
  });
});

test("Should make a withdrawal in the selected account", async () => {
  getAllCheckingAccounts.mockResolvedValue(resolvedValue);
  const view = render(<Transaction type="WTH"/>);

  const accountSelect = view.getByTestId("transaction-account");
  fireEvent.change(accountSelect, { target: { value: accountId } });

  const transactionAmountInput = view.getByTestId("transaction-amount");
  fireEvent.change(transactionAmountInput, {
    target: { value: transactionAmount },
  });

  const submitBtn = view.getByTestId("transaction-submit");
  fireEvent.click(submitBtn);

  await waitFor(() => {
    expect(view.getByTestId("transaction-success")).toBeInTheDocument();
  });
});
