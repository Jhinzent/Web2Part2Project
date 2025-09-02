import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import UserManagement from "./components/Managements/UserManagement";
import DegreeCourseManagement from "./components/Managements/DegreeCourseManagement";
import DegreeCourseApplicationManagement from "./components/Managements/DegreeCourseApplicationManagement";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/userManagement" element={<UserManagement />} />
          <Route
            path="/degreeCourseManagement"
            element={<DegreeCourseManagement />}
          />
          <Route
            path="/degreeCourseApplicationManagement"
            element={<DegreeCourseApplicationManagement />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
