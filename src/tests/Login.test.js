import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { getAuthRole, getAuthToken } from "../api";
import { Login } from "../components/Login";

const credentials = {
  username: "jsmith@demo.io",
  password: "Demo123!",
};
const testingToken = "SOME_TOKEN";
const testingRole = "ROLE_USER";

const mockedUsedNavigate = jest.fn();

jest.mock("../api/index");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Should access into the app after login", async () => {
  const view = render(<Login />);

  getAuthToken.mockResolvedValue({ data: testingToken });
  getAuthRole.mockResolvedValue({ data: [{ authority: testingRole }, ""] });

  const usernameInput = view.getByTestId("username");
  const passwordInput = view.getByTestId("password");
  const submitBtn = view.getByTestId("login-submit");
  act(() => {
    fireEvent.change(usernameInput, {
      target: { value: credentials.username },
    });
    fireEvent.change(passwordInput, {
      target: { value: credentials.password },
    });
    fireEvent.click(submitBtn);
  });

  await waitFor(() => {
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });
});
