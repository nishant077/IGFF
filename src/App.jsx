import React, { useState } from "react";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { RouterProvider, useRouter } from "./router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import WhoWeAre from "./pages/about/whoweare/WhoWeAre";
import { LanguageProvider } from "./context/LanguageContext";
import Contact from "./pages/Contact";
import AnupamAbhiyan from "./pages/anupam abhiyan/AnupamAbhiyan";
import BlogsHero from "./pages/publications/blogs/BlogsHero";
import BlogDetail from "./pages/publications/blogs/BlogDetail";
import MembershipForm from "./pages/MembershipForm";


function PageRouter() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (path) {
      case "/about":
        return <About />;
      case "/about/who-we-are":
        return <WhoWeAre/>;
      case "/contact-us":
        return <Contact/>;  
      case "/anupam-abhiyan":
        return <AnupamAbhiyan/>; 
      case "/publications":
        return <BlogsHero/>;
       case "/membership-form":
        return <MembershipForm/>;
      default:
        if (path.startsWith('/publications/blog/')) {
          const id = parseInt(path.replace('/publications/blog/', ''), 10);
          return <BlogDetail postId={id} />;
        }
        return <Home />;
    }
  };

  return (
    <div className="page-enter" key={path}>
       <Navbar/>
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <LanguageProvider>
          <RouterProvider>
            <PageRouter />
          </RouterProvider>
        </LanguageProvider>
      )}
    </>
  );
}
