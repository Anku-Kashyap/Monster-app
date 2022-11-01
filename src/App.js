import { useState ,useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'

const App = () => {

  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);

  useEffect(()  => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[])

  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredmonster = monsters.filter( (monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });



  return(
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      
      <SearchBox className='monster-search-box' onChangeHandler={onSearchChange} placeholder='search monster'/>
      <CardList monsters={filteredmonster}/>
    </div>
  )
}


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     
//   };

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {

//     const {monsters,searchField} = this.state;
//     const {onSearchChange} = this;
    


    
//   }
  
// }

export default App;

