import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Router/Routes';

function App() {
  return (
    <div className="" style={{ backgroundColor: '#2c3e50' }}>
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
