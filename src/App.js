import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FunCrud from './Components/Extra/FunCrud';
// import ExamCrud from './Components/Exam/ExamCrud';
import LifeCycle from './Components/Exam/LifeCycle';
// import Home from './Components/Routing/Home';
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import About from './Components/Routing/About';
// import Service from './Components/Routing/Service';
// import Contact from './Components/Routing/Contact';
// import Page404 from './Components/Routing/Page404';
// import Login from './Components/Routing/Login';
// import { useEffect, useState } from 'react';
function App() {

  // let [isLogin, setisLogin] = useState(false)
  // useEffect(() => {
  //   setisLogin(JSON.parse(localStorage.getItem('isLogin')))
  //   setisLogin(isLogin)

  // }, [isLogin])

  return (
    <div>
      {/* <BrowserRouter>
        <Routes>

          {
            isLogin ?
              <>
                <Route path='/home' element={<Home setisLogin={setisLogin} />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />}>
                  <Route path=':number' />
                </Route>
                <Route path='/contact' element={<Contact />} />
              </> :
              <>
                <Route path='/login' element={<Login setisLogin={setisLogin} />} />
              </>
          }
          {
            isLogin ?
              <Route path='/' element={<Navigate to='/home' />} /> :
              <Route path='/' element={<Navigate to='/login' />} />
          }
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter> */}

      <LifeCycle />
    </div>
  );
}

export default App;
