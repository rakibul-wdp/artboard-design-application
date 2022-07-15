import { Routes, Route } from 'react-router-dom';
import Drawing from './Pages/Drawing/Drawing';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import SignUp from './Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Drawing />
            </RequireAuth>
          }
        />
        <Route path={'login'} element={<Login />} />
        <Route path={'signup'} element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
