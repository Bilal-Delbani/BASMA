import {createBrowserRouter} from 'react-router-dom';
import LoginForm from './Components/Forms/LoginForm.jsx'
import RegisterForm from './Components/Forms/RegisterForm.jsx'
import DefaultLayout from './Components/DefaultLayout.jsx';
import GuestLayout from './Components/GuestLayout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,

    },
    {
        path: '/guest',
        element: <GuestLayout />,
        children: [
            {
                path: '/guest/login',
                element: <LoginForm />
            },
            {
                path: '/guest/register',
                element: <RegisterForm />
            }        
        ]

    },

]);

export default router;