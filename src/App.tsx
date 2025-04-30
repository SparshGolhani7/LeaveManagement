import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./pages/ProtectRoutes";
// import 'antd/dist/antd.less';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
