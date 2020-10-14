import React, {Component} from 'react';
import Cardlist from './Cardlist.js';
import './App.css';
import SearchBox from './SearchBox';
import Scroll from './Scroll';



class App extends Component{

    constructor(){
       super()
       this.state = {
          robot: [],
          searchfield: " "
       }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> {this.setState({robot: users})});      
    }


   onSearchChange = (event) => {
       this.setState({searchfield: event.target.value}) 
    }
    
    render(){
        
        const filteredRobot = this.state.robot.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobot);
        
        if(this.state.robot<=0){
             return <h1 className='tc f1'>Processing...</h1>
         }else{
            return (
                <div className='tc'>
                    <h1 className='f1'>The Hoods</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist getThem = { filteredRobot } />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;

