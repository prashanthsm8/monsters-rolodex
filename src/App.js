import logo from './logo.svg';
import react, { Component } from 'react';
import './App.css';
import  {CardList} from './components/card-list/Card-List.Component'
import  {Searchbox} from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ''
    }
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(users=>this.setState({monsters : users}));
  }

  handleChange = (e) =>{
    this.setState({searchField:e.target.value});
  }
    render()
    {
      const {monsters,searchField}= this.state;
      const filteredmonsters = monsters.filter((monster)=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
      return (
        <div className="App">
          <h1>Monsters-Rolodex</h1>
           <Searchbox placeHolderName='monster-name' handleChange= {this.handleChange}
            />
          <CardList monsters={filteredmonsters}/>
        </div>
      );
    }
  }

  export default App;
