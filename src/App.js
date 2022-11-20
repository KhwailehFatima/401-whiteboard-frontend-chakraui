import Post from './components/UserPost';
import Signup from './components/signup';
import Signin from './components/signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { actionType } from './config/constant';
 

function App() {

//   const { userData } = useAuth();
// console.log({userData})
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route exact path="/" element={actionType.isAuth ? <Post /> : <Signin />}></Route>
        <Route exact path="/signin" element={actionType.isAuth ? <Post /> : <Signin />}></Route>
        <Route exact path="/signup" element={actionType.isAuth ? <Post /> : <Signup />}></Route>
        <Route exact path="/post" element={actionType.isAuth ? <Post /> : <Signup />}></Route>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;