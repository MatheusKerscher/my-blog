import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultPage from "pages/DefaultPage";
import NotFound from "pages/NotFound";
import AboutMe from "pages/AboutMe";
import Home from "pages/Home";

import Menu from "components/Menu";
import Footer from "components/Footer";
import Article from "pages/Article";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route
          path="/"
          element={<DefaultPage />}
        >
          <Route 
            index
            element={<Home />} 
          />

          <Route 
            path="about-me" 
            element={<AboutMe />} 
          />

          <Route 
            path="articles/:id" 
            element={<Article />} 
          />
        </Route>

        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
