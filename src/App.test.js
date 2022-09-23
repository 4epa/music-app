import { render, screen } from "@testing-library/react";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

test("renders App link", () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(app).toMatchSnapshot();
});
