import React from 'react';

class RemoveBuilding extends React.Component{
    render(){
        const {buildingIndex, removeBuilding} = this.props;
        return(
            <div className="removeButton">
                <button type="button" class="btn btn-danger btn-lg" onClick={() => removeBuilding(buildingIndex)}>x</button>
            </div>
        )
    }
}

export default RemoveBuilding;