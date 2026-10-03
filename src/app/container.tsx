'use client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="dark"
            />
        </>
    );
}
