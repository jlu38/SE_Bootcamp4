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
					<div>
						<p key={bData.code}>Code: {bData.code}</p>
						<p key={bData.name}>Name: {bData.name}</p>
						<p key={bData.address}>Address: {bData.address}</p>
						<p key={bData.coordinates}>
							Coordinates: Latitude: {bData.coordinates && bData.coordinates.latitude + " "} 
							Longitude: {bData.coordinates && bData.coordinates.longitude}
						</p>
					</div>
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
