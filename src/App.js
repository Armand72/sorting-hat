import React, { Component } from 'react';
import { Provider } from  'react-redux';
import { createStore } from  'redux';
import  reducers  from  './reducers';
import Result from "./Components/Result"

const  houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];
const  reducer = (state, action) => ({
  houses,
  selectedHouses:  houses[Math.floor(Math.random() * 4)]
})
const  store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

class App extends Component {
  render() { 
    return (  

<Provider  store={store}>

    <Result  />
    
    </Provider>

    );
  }
}
 
export default App ;

