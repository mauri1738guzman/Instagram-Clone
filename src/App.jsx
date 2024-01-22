
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
function App() {

//-- Time of video: 43:35
//-- URL: https://www.youtube.com/watch?v=RMScMwY2B6Q
//-- running app: run command 
//-- 1) npm run dev
//-- 2) click on localhost:xxxx

  return (
    <PageLayout>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/auth' element={<AuthPage />} />
    </Routes>
    </PageLayout>
  )
}

export default App
