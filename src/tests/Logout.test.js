import { fireEvent, render } from "@testing-library/react";
import { Logout } from "../components/Logout";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Should redirect to the login after logout", () => {
  const LogoutComponent = render(<Logout />);
  const logOutBtn = LogoutComponent.getByTestId("logout-button");
  fireEvent.click(logOutBtn);

  expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
});
