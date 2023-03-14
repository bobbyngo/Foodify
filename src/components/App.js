import { AuthContextProvider } from '../contexts/AuthContext';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route exact path='/' element={<Dashboard />}></Route>
            </Routes>
            <Routes>
                <Route exact path='/signup' element={<SignUp />}></Route>
            </Routes>
            <Routes>
                <Route exact path='/signin' element={<SignIn />}></Route>
            </Routes>
        </AuthContextProvider>
    );
}

export default App;
