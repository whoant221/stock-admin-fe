import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const routing = useRoutes(Themeroutes);
  return <div className="dark"> <ToastContainer /> {routing}</div>;
};

export default App;
