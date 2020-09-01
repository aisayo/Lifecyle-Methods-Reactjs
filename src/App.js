import React, { Component } from 'react';

import Brews from './Brews'

class App extends Component {

// mounting phase 
    constructor(){
        super()

        this.state = {
            brews: [],
            isLoading: true,
            type: '',
            showBrews: false
        }

        console.log('constructor')
    }



    componentDidMount(){
        console.log('Component did mount')
        //run after the render method 
        // commonly used to fetch any external data
        fetch('https://api.openbrewerydb.org/breweries')
        .then(resp => resp.json())
        .then(brews => 
            this.setState({
                brews: brews,
                isLoading: false
            })
        )
        
    }

    //update phase 

        static getDerivedStateFromProps(props, state){
        console.log('derived state')
        return null
       //manipulate your state before its rendered 
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.state.brews !== nextState.brews || this.state.type !== nextState.type || this.state.showBrews !== nextState.showBrews){
            return true
        }
        return false
        // should I re-render my component
        //helps avoid any unnecessary re-renders 
        // return a true value
        // returns a boolean 
    }



    componentDidUpdate(prevProps, prevState){
        if (this.state.type !== prevState.type){
            fetch(`https://api.openbrewerydb.org/breweries?by_type=${this.state.type}`)
            .then(resp => resp.json())
            .then(brews => this.setState({
                brews: brews
            }))
        }
    }

    handleType = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    handleShowBrews = () => {
        this.setState({
            showBrews: !this.state.showBrews
        })
    }

    render() {
        console.log('render')
        console.log(this.state)
        return (
            <div>
                <button onClick={this.handleShowBrews}>Show Brews</button>
                {this.state.showBrews ? <Brews brews={this.state.brews} /> : 'No brews'}
                {/* {this.state.isLoading ? <h1>Loading...</h1> :}
                <button onClick={this.handleType} value="micro">Micro</button>
                <button onClick={this.handleType} value="regional">Regional</button>
                <button onClick={this.handleType} value="brewpub">BrewPub</button>

 */}
            </div>
        );
    }
}

export default App;