import React, { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from '../movie-list/movielist'
import MoviesAddForm from "../movies-add-form/movies-add-form";
import "../app/app.css"
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
    {id: 1, name: "The Saviour 3", viewers: 811, favourite: false},
    {id: 2, name: "Lost Gold of Sahara", viewers: 789, favourite: false},
    {id: 3, name: "Undisputed 2", viewers: 966, favourite: true},
    {id: 4, name: "The Demigod", viewers: 1966, favourite: false},
    {id: 5, name: "Sniper", viewers: 466, favourite: true},
  ],
  term: "",
  filter: "all"
    }
  }


   onDelete = id => {
  this.setState(({data}) => ({
    data: data.filter(c => c.id !== id)
  }))   
  }

   addForm = (item) => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
    this.setState(({data}) => ({
      data: [...data, newItem]
    }))
  }

  onToggleFavourite = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, favourite: !item.favourite}
        }
        return item
      })
    }))
    
  }

  onToggleLike = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, like: !item.like}
        }
        return item
      })
    }))
  }

  searchHandler = (arr, term) => {
    if(term.length === 0) {
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  updateTermHandler = (term) => {
    this.setState({term})
  }

  filterHandler = (arr, filter) => {
      switch(filter) {
        case "popular":
          return arr.filter(c => c.like)
          case "mostViewers":
            return arr.filter(c => c.viewers > 800)
          default: 
          return arr
      }
  }

  updateFilterHandler = filter => this.setState({filter})
  render() {
    const { data, term, filter } = this.state
    const allMoviesCount = data.length
    const favouriteMoviesCount = data.filter(c => c.favourite).length
    const visibleData = this.filterHandler(this.searchHandler(data, term), filter)
    return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount}/>
        <div className="search-panel">
          <SearchPanel updateTermHandler={this.updateTermHandler}/>
          <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
        </div>
        <MovieList onToggleFavourite={this.onToggleFavourite} onToggleLike={this.onToggleLike} data={visibleData} onDelete={this.onDelete}/>
        <MoviesAddForm addForm={this.addForm}/>
      </div>
    </div>
  );
  }
};

export default App;
