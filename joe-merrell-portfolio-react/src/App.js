import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import ImageGallery from './components/Gallery';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE

    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Projects':
          return <Projects />;
        case 'Gallery':
          return <ImageGallery />;
        case 'Resume':
          return <Resume />;  
        case 'Contact':
          return <Contact />;  

        default:
          return <About />;
      }
    };
   

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
      <div className='container-fluid'><Footer /></div>
      
    </div>
  );
}

export default App;






