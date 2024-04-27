import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersRegisterPage from "./page/usersRegisterPage/UsersRegisterPage";
import UsersListPage from "./page/usersListPage/UsersListPage";
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from "./components/Menu";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route index element={<UsersRegisterPage/>}/>
                <Route path="/list" element={<UsersListPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;