import { Component } from 'react';
import { Route } from 'react-router-dom';
import { Boxes } from './Components/boxes/boxes';
import './App.css';
import {Search} from './Components/search/search';
import {NavBar} from './Components/navbar/navbar';
import {Sideright} from './Components/sideright/sideright';
import {Sidebar} from "./Components/sidebar/sidebar"
import Form from './Components/form/form';

class App extends Component {
    constructor() 
    {
    super();
    this.state = {
            boxes: [],
            searchTitle: [],
            route: 'coments'
        };
    }

    componentDidMount(){
        fetch('/api/posts/?format=json')
            .then(response => response.json())
            .then(boxBody => this.setState({
                boxes: boxBody
            }))
    }

    onRouteChange= () => {
        this.setState({route: 'form'})
    }



render(){
        const {boxes,searchTitle} = this.state;
        const filterTitle = boxes.filter(Box =>Box.title.includes(searchTitle));
        return(
          <div className = "App">
            <div className="header">
                <NavBar/>
                <Search 
                    placeholder = 'Search...'
                    handleChange = {e => this.setState({searchTitle: e.target.value})
                    }/>
            </div>
            <div className = "container" >
                <Sidebar />
                {this.state.route === 'coments'
                    ?<Boxes boxes = {filterTitle} onRouteChange = {this.onRouteChange}/>
                    :<Form/>       
                }
                <Sideright/>
            </div> 
          </div>
        )
    }
}
export default App;