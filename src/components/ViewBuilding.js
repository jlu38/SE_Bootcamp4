import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		const { data, selectedBuilding } = this.props;


		const building = data
			.filter(bData => {
				return bData.id == selectedBuilding
			})
			.map(bData => {
				return (
					<ul>
						<li>Code: {bData.code}</li>
						<li>Name: {bData.name}</li>
						<li>Address: {bData.address}</li>
						<li>
							Coordinates: {bData.coordinates && bData.coordinates.latitude + " "} 
							{bData.coordinates && bData.coordinates.longitude}

						</li>
					</ul>
				)
			})

		return(
			<div>
				<p>
					<i>Click on a name to view more information</i>
				</p>
				{building}
			</div>
		)
	}
}
export default ViewBuilding;
