import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

// App
// -- Filters
// -- PetBrowser
  // -< Pet

class App extends React.Component {
state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    onAdoptPet = (id) => {
      const newPets = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true } : pet)

      this.setState({
        pets: newPets
      })
    }


 onChangeType = (event) => {
   event.persist()
  this.setState(previousState => {
    return {
        filters: { ...previousState.filters, type: event.target.value}
    }
 })
}


 onFindPetsClick = () => {

  let addPet = this.state.filters.type

 return fetch(`/api/pets${addPet === 'all' ? '' : "?type=" + addPet}`)
  .then(response => response.json())
  .then(pets => this.setState({pets: pets}))
 }
  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}  findPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
