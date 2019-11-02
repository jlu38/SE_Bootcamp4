import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id: null,
            code: '',
            name: '',
            coordinates: {
                latitude: undefined,
                longitude: undefined,
            },
            address: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.addNewBuilding = this.addNewBuilding.bind(this);
        this.handleCoordinates = this.handleCoordinates.bind(this);
    }
    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleCoordinates = (e) => {
        const target = e.target;

        const value = target.value;

        const name = target.name;

        this.setState({
            coordinates: {
                ...this.state.coordinates,
                [name]: value,

            }
        });
    }

    addNewBuilding = (e) => {
        e.preventDefault();
        const BID = this.props.bList.length + 1;
        const newBuilding = {
            id: BID,
            code: this.state.code,
            name: this.state.name,
            coordinates: {
                latitude: this.state.coordinates.latitude,
                longitude: this.state.coordinates.longitude
            },
            address: this.state.address
        }
        this.props.addBuilding(newBuilding);
        
        this.setState({
            code: '',
            name: '',
            coordinates: {
                latitude: undefined,
                longitude: undefined
            },
            address: ''
        })
        console.log(newBuilding);
    }
    render(){
        return(
            <div className="buildingForm" onSubmit={this.addNewBuilding} >
                <h2>Add Building</h2>
                <form>
                    <label>
                        <h3>Code:</h3>
                        <input 
                            type="text" 
                            value={this.state.code} 
                            onChange={this.handleChange} 
                            name="code"
                            required> 
                        </input>
                    </label>
                    <label>
                        <h3>Name:</h3>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            name="name"
                            required>
                         </input>
                    </label>
                    <label>
                        <h3>Address</h3>
                        <input 
                            type="text" 
                            value={this.state.address}
                            onChange={this.handleChange} 
                            name="address">
                            
                        </input>
                    </label>
    
                    <label>
                        <h3>Coordinates:</h3>
                        Latitude:
                        <input 
                            type="number" 
                            value={this.state.coordinates.latitude}
                            onChange={this.handleCoordinates} 
                            name="latitude"></input>
                        Longitude:
                        <input 
                            type="number"
                            value={this.state.coordinates.longitude}
                            onChange={this.handleCoordinates} 
                            name="longitude">                        
                        </input>
                    </label> 
                    <input type="submit"></input>
                </form>
            </div>
        )
    }

}
export default AddBuilding;