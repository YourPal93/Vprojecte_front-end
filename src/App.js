import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Login from "./login";
import MyPage from "./myPage";
import PrivateRoute from "./PrivateRoute";

function App() {

    return (
    <div>
        <Routes>
            <Route path="/" element={ 
                <Homepage />
              } />
            <Route path="/login" element={ <Login />} />
            <Route path="/my_page" element={ <MyPage />} />
        </Routes>
    </div>
    );
}

export default App;
