import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ContentResult from './components/ContentResult';
import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  console.log('호출됨');
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/result" element={<ContentResult />}>
            <Route path=":rsp" element={<ContentResult />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
