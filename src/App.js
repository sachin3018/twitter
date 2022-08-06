
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import SignIn from './Component/SignIn';
import Home from './Component/Home';
import SignUp from './Component/SignUp';
import MainSceen from './Component/MainScreen';
import PostTweet from './Component/PostTweet';
import ViewTweet from './Component/ViewTweet';
import ViewAllUsers from './Component/ViewAllUsers';
import ChangePassword from './Component/ChangePassword'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/mainPage" element={<MainSceen/>}/>
          <Route path="/post-tweet" element={<PostTweet/>}/>
          <Route path="/viewUser" element={<ViewAllUsers/>}/>
          <Route path="/viewTweet" element={<ViewTweet/>}/>
          <Route path="/updatePassword" element={<ChangePassword/>}/>
        </Routes>
    </Router>
  );
}

export default App;
