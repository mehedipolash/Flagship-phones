import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {  RouterProvider } from 'react-router';
import { router } from './routes/routes.jsx';
import CartProvioder from './providers/CartProvioder.jsx';
import { Toaster } from 'react-hot-toast';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvioder>
      <RouterProvider router={router}></RouterProvider>
      <Toaster  position='bottom-right'/>
    </CartProvioder>
  </StrictMode>
);
