import { Button } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
function App() {

//-- Time of video: 43:35
//-- URL: https://www.youtube.com/watch?v=RMScMwY2B6Q
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/auth' element={<AuthPage />} />
    </Routes>
    </>
  )
}

export default App
