import Nav from './components/Nav'
import Hero from './components/Hero'
import Cards from './components/Cards';
import data from './data'

function App() {
  const cards = data.map( datum => {
    return (
      <Cards
        key={datum.id}
        coverImg={datum.coverImg}
        rating={datum.stats.rating}
        reviewCount={datum.stats.reviewCount}
        location={datum.location}
        title={datum.title}
        price={datum.price}
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