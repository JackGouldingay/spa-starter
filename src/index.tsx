import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';

var rootNode = document.getElementById('root');
if (!rootNode) {
  rootNode = document.createElement('div');
  rootNode.setAttribute('id', 'root');
  document.body.appendChild(rootNode);
}

const root = createRoot(rootNode);

root.render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);