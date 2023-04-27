import './App.css';
import Brewery from './Brewery';
import Form from './Form'

function App() {
  return (
    <div className='container'>
      <div className='nav'>
        <div className="wrap">
          <span className="hop-husk">
          <span className="hop-seed"></span>
        </span>
        <span className="hops">
         hops
        </span>
        <span className="and">
        &
        </span>
        <span className="grain">
        grain
      </span>
      <span className="tagline">
      find a brewery near you
      </span>
    </div>
  </div>
  <div className='bottom-container'>
  <h2>Browse through the breweries below:</h2>
      <Brewery />
      <Form />
  </div>
  </div>
  );
}

export default App;
