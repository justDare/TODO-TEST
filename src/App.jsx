import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./views/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
      <ToastContainer
        position="bottom-center"
        autoClose={10000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </Provider>
  );
}

export default App;
