import './App.css';
import Brewery from './Brewery';
import Form from './Form'

function App() {
  return (
    <div>
      <div class="wrap">
        <span class="hop-husk">
        <span class="hop-seed"></span>
      </span>
      <span class="hops">
        hops
      </span>
      <span class="and">
      &
      </span>
      <span class="grain">
      grain
    </span>
    <span class="tagline">
    find a brewery near you
    </span>
  </div>
      <Brewery />
      <Form />
    </div>
  );
}

export default App;
