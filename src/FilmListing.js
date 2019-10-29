import React, {Component} from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component{
  constructor(props){
    super()
    this.state={
      filter: 'all'
    }
  }
  handleFilterClick (filter){
    console.log(`handleFilterClick filter is ${filter}`)
    this.setState({
      filter: filter
    })
  }
  render(){
    const allFilms = this.props.films.map((film)=>{
      return <FilmRow film={film} key={film.id}
      onFaveToggle={()=>this.props.onFaveToggle(film)}
      isFave ={this.props.faves.includes(film)}
      detailsClick={()=>this.props.detailsClick(film)}
      />
    })
  return (
    <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
        </div>
    </div>
    {this.state.filter === 'faves' ? allFilms.filter(film=> film.props.isFave) : allFilms}
</div>
  );
}}

export default FilmListing;