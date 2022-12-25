import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AccountPage from "./pages/AccountPage";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ReportPage from "./pages/ReportPage";
import SignUpPage from "./pages/SignUpPage";

import Router from "./router/router";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path={Router.HOME} element={<HomePage />}></Route>
          <Route path={Router.LOGIN} element={<LoginPage />}></Route>
          <Route path={Router.SIGNUP} element={<SignUpPage />}></Route>
          <Route path={Router.REPORT} element={<ReportPage />}></Route>
          <Route path={Router.ADD} element={<AddPage />}></Route>
          <Route path={Router.ACCOUNT} element={<AccountPage />}></Route>
          <Route path={Router.ADMIN} element={<AdminPage />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
