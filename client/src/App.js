import DataPage from "./components/DataPage/DataPage.js";
import CommentForm from "./components/CommentForm/CommentForm.js";
import ShowPage from "./components/ShowPage/ShowPage.js";
// import SearchPage from "./components/SearchPage/SearchPage.js";
// import RandomPage from "./components/RandomPage/RandomPage.js";
// import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <Router path="/" element={<DataPage />}>
      <Routes>
        <Route path="/" element={<DataPage />}/>
        <Route path="/form" element={<CommentForm />}/>
        <Route path="/:id" element={<ShowPage />}/>
      </Routes>
    // </Router>
  );
}

export default App;
