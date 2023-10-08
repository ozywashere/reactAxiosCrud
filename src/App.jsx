import { BrowserRouter , Navigate , Route , Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { PageNotFound } from './pages/PageNotFound';
import { ReadUser } from "./features/users/ReadUser.jsx";
import { CreateUser } from "./features/users/CreateUser.jsx";
import { UpdateUser } from "./features/users/UpdateUser.jsx";

function App () {
  return ( <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Navigate to='/' replace/> }/>
          <Route path='/' element={ <Home/> }/>
          <Route path='/users' element={ <Users/> }/>
            <Route path='/users/:id' element={ <ReadUser/> }/>
            <Route path='/users/create' element={ <CreateUser/> }/>
            <Route path='/users/:id/update' element={ <UpdateUser/> }/>
          <Route path='*' element={ <PageNotFound/> }/>
        </Routes>
      </BrowserRouter>
    </> );
}

export default App;
