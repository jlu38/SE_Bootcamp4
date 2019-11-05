import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      bList: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }
  
  addBuilding(newBuilding){
    this.setState({
      bList: [...this.state.bList, newBuilding]
    })
    console.log(this.state.bList);
  }

  removeBuilding(index) {
    const bList = this.state.bList
    const newList = [
      ...bList.slice(0, index),
      ...bList.slice(index+1)
    ]
    this.setState({
      bList: newList
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterText={this.state.filterText} 
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <h3>Code Building</h3>
                    </td>
                  </tr>
                  <BuildingList
                    bList={this.state.bList}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                bList={this.state.bList}
                // data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
          </div>
          <div className="buildingForm">
            <AddBuilding 
              bList={this.state.bList}
              addBuilding={this.addBuilding.bind(this)}
            />
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
