import Nav from './components/Nav'
import Hero from './components/Hero'
import Cards from './components/Cards';
import image from './images/katie.png'

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Cards 
        img={image}
        rating="5.0"
        review={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;