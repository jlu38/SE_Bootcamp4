import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding'

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

  // removeBuilding(id) {
  //   const { buildingList } = this.state.buildingList
  //   console.log(buildingList)
  //   const newList = [
  //     ...buildingList.slice(0, id),
  //     ...buildingList.slice(id+1)
  //   ]
  //   this.setState({
  //     buildingList: newList
  //   })
  // }

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
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    bList={this.state.bList}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
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
          <AddBuilding 
            bList={this.state.bList}
            addBuilding={this.addBuilding.bind(this)}
          />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
