import {createBrowserRouter} from 'react-router-dom';
import LoginForm from './Components/Forms/LoginFom.jsx'
import RegisterForm from './Components/Forms/LoginFom.jsx'
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'register',
        element: <RegisterForm />
    },
    {
        path: 'login',
        element: <LoginForm />
    }
]);

export default router;