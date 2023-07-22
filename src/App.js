import Nav from './components/Nav'
import Hero from './components/Hero'
import Cards from './components/Cards';
import data from './data'

function App() {
  const cards = data.map( datum => {
    return (
      <Cards
        key={datum.id}
        /*  Passing objects as props: this is to ensure our code is dry. 
            The datum object should also be passed in the Card.js component in order for this to work.

            An alternative method is using the spread operator
            e.g {...datum}. If i am using this, i'd have to remove the .data i added to the props in the Cards component 
        */ 
        datum={datum}
      />
    )
  })

  return (
    <div className="app">
      <Nav />
      <Hero />
      <section className='cards-container'>
        {cards}
      </section>
    </div>
  );
}

export default App;