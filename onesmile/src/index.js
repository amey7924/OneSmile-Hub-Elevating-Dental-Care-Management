import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from "./routing";
import Cookie from 'js-cookie'


const root = ReactDOM.createRoot(document.getElementById('root'));

const handleBeforeUnload = () => {
Cookie.remove('xyz');
};
window.addEventListener('beforeunload', handleBeforeUnload);

root.render(
 
    <RouterProvider router={router}>
      {/* Your application components */}
    </RouterProvider>
  
);
