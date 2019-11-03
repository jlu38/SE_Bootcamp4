import React from 'react';

class RemoveBuilding extends React.Component{
    render(){
        const {buildingIndex, removeBuilding} = this.props;
        return(
            <span>
                <button onClick={() => removeBuilding(buildingIndex)}>x</button>
            </span>
        )
    }
}

export default RemoveBuilding;