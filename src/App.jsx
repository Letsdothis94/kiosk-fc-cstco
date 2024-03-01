import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainMenu from './components/mainMenu/MainMenu';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<MainMenu />} />
    </>
  ));

  return (
    <RouterProvider router={router} />
  )
}

export default App
