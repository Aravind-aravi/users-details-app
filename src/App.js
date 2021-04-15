import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserForm from "./pages/UserForm";
import UsersView from "./pages/UsersView";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Route path="/home" component={UserForm} />
        <Route path="/users" component={UsersView} />
      </Router>
    </div>
  );
}

export default App;
