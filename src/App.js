import React from 'react';
import './App.css';
import Search from './components/search/search';
import Watchlist from './components/watchlist/watchlist';
import DetailSaham from './components/detailsaham/DetailSaham';
import Sidebar from './components/sidebar/Sidebar';
import NavBottom from './components/NavBottom';
import News from './components/news/news';
import Portofolio from './components/portofolio/Portofolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forum from './components/forum/Forum';
import BacaBerita from './components/bacaberita/BacaBerita';
import Maksimal from './components/maksimal/maksimal';
export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

function App() {
  const [sidebarToggle, setSidebarToggle] = React.useState(false);

  return (
    <BrowserRouter>
      <Maksimal />
      <ThemeContext.Provider value={sidebarToggle}>
        <ThemeUpdateContext.Provider value={setSidebarToggle}>
          <Routes>
            <Route path='/' exact element={<Search />} />
            <Route path='/detail/:akhiran' exact element={<DetailSaham />} />
            <Route path='/watchlist' exact element={<Watchlist />} />
            <Route path='/news' exact element={<News />} />
            <Route path='/sidebar' exact element={<Sidebar />} />
            <Route path='/forum' exact element={<Forum />} />
            <Route path='/portofolio' exact element={<Portofolio />} />
            <Route path='/bacaberita' exact element={<BacaBerita />} />
          </Routes>

          {sidebarToggle ? <Sidebar /> : null}
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>

      <NavBottom />
    </BrowserRouter>
  );
}

export default App;
