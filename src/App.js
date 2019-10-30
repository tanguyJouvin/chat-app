import React from 'react';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
// import QuoteCard from './components/QuoteCard/QuoteCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/75.jpg"
        name="Gertrude Perry"
        
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/80.jpg"
        name="Peyton Holland"
        />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/8.jpg"
        name="Janice Horton"
      />

      {/* <QuoteCard
        quote="I believe the children are the future... Unless we stop them now!"
        character="Homer Simpson"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      />
      <QuoteCard
        quote="Me fail English? That's unpossible"
        character="Ralph Wiggum"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
      />
      <QuoteCard quote="Shoplifting is a victimless crime, like punching someone in the dark." /> */}
    </div>
  );
}

export default App;
