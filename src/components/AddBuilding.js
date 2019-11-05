import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id: undefined,
            code: '',
            name: '',
            coordinates: {
                latitude: undefined,
                longitude: undefined
            },
            address: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCoordinates = this.handleCoordinates.bind(this);
        this.addNewBuilding = this.addNewBuilding.bind(this);
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
                <h2><b>Add New Building Form</b></h2>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label>
                                <h3>Code:</h3>
                            </label>
                            <input 
                                type="text" 
                                value={this.state.code} 
                                onChange={this.handleChange} 
                                name="code"
                                placeholder="AAA"
                                required> 
                            </input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>
                                <h3>Name:</h3>
                            </label>
                                <input 
                                    type="text" 
                                    value={this.state.name} 
                                    onChange={this.handleChange} 
                                    name="name"
                                    placeHolder="Century Tower"
                                    required>
                                </input>
                        </div>
                    </div>
                    <div className="form-row">
                        <label>
                            <h3>Address</h3>
                        </label>
                            <input 
                                type="text" 
                                value={this.state.address}
                                onChange={this.handleChange} 
                                name="address"
                                placeholder="123 Main St">
                                
                            </input>

                    </div>
                    <div className="form-group">
                        <label>
                            <h3>Coordinates:</h3>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label>Latitude:</label>
                                    <input 
                                        type="number" 
                                        value={this.state.coordinates.latitude}
                                        onChange={this.handleCoordinates} 
                                        name="latitude"
                                        placeholder="123.64320">
                                    </input>
                                </div>
                                <div className="form-group col-md-5">
                                    <label>Longitude:</label>
                                    <input 
                                        type="number"
                                        value={this.state.coordinates.longitude}
                                        onChange={this.handleCoordinates} 
                                        name="longitude"
                                        placeholder="321.53212">                        
                                    </input>
                                </div>
                            </div>
                        </label> 
                    </div>
                    <input type="submit" className="btn btn-primary"></input>
                </form>
            </div>
        )
    }

}
export default AddBuilding;