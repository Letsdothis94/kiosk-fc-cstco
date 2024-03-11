import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainMenu from './components/mainMenu/MainMenu';
import Success from './components/Success/Success';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<MainMenu />} />
      <Route path="/success" element={<Success />} />
    </>
  ));

  return (
    <RouterProvider router={router} />
  )
}

export default App
