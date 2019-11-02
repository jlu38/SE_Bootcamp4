import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		const { bList, selectedBuilding } = this.props;


		const building = bList
			.filter(bData => {
				return bData.id === selectedBuilding
			})
			.map(bData => {
				return (
					<ul>
						<li key={bData.code}>Code: {bData.code}</li>
						<li key={bData.name}>Name: {bData.name}</li>
						<li key={bData.address}>Address: {bData.address}</li>
						<li key={bData.coordinates}>
							Coordinates: Latitude: {bData.coordinates && bData.coordinates.latitude + " "} 
							Longitude: {bData.coordinates && bData.coordinates.longitude}

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
