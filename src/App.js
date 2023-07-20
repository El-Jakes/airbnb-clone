import Nav from './components/Nav'
import Hero from './components/Hero'
import Cards from './components/Cards';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Cards 
        img="katie-zaferes"
        rating="5.0"
        review={6}
        cuuntry="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;