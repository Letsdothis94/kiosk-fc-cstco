import './App.css'
import { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainMenu from './components/mainMenu/MainMenu';

function App() {
  const [count, setCount] = useState(0)

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
