import { Routes, Route } from "react-router-dom";
import RegistrationSuccess from "./RegistrationSuccess";
import Homepage from "./homepage";
import Login from "./login";
import MyPage from "./myPage";
import PrivateRoute from "./PrivateRoute";
import RegistrationForm from "./RegistrationForm";

function App() {

    return (
    <div>
        <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/login" element={ <Login />} />
            <Route path="/my_page" element={ <MyPage />} />
            <Route path="/registration" element={ <RegistrationForm /> } />
            <Route path="/registration/success" element={ <RegistrationSuccess /> } />
        </Routes>
    </div>
    );
}

export default App;
