import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./account/CreateAccount";
import CreateAccountType from "./account/CreateAccountType";
import UpdateAccount from "./account/UpdateAccount";
import ViewAccount from "./account/ViewAccount";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createaccount" element={<CreateAccount />} />
          <Route exact path="/createaccounttype" element={<CreateAccountType />} />
          <Route exact path="/updateaccount/:id" element={<UpdateAccount />} />
          <Route exact path="/viewaccount/:id" element={<ViewAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
