import React, { Component } from "react";
import "./App.css";
import { CardLists } from "./components/card-lists/card-lists.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ""
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleSearch = e => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        const { searchField, monsters } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox searchField={searchField} placeholder="Search Monsters.." handleSearch={this.handleSearch} />
                <CardLists monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
