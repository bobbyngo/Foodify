import { AuthContextProvider } from '../contexts/AuthContext';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                ></Route>
                <Route exact path='/signup' element={<SignUp />}></Route>
                <Route exact path='/signin' element={<SignIn />}></Route>
            </Routes>
        </AuthContextProvider>
    );
}

export default App;
