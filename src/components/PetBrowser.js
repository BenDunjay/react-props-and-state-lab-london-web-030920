import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  renderPets = () => {
    return this.props.pets.forEach(pet => <Pet pet={pet} /> )
  }

  render() {
    console.log(this.props)
    return( 
    <div className="ui cards">{this.props.pets.map(pet => <Pet pet={pet} findPet={this.props.findPet}/>)}</div>
    )
  }
}

export default PetBrowser
