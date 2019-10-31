import React from 'react';
import RemoveBuilding from './RemoveBuilding';


class BuilingList extends React.Component {
	render() {
		const { bList, data, filterText, selectedUpdate} = this.props;
		// console.log("blist" + bList)

		const buildingList = bList
			.filter(directory => {
				return (
					directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || 
					directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
				)
			})
			.map(directory => {
				return (
					<tr key={directory.id}>
						<td onClick={() => selectedUpdate(directory.id)}>{directory.code} </td>
						<td onClick={() => selectedUpdate(directory.id)}>{directory.name} </td>
						<RemoveBuilding />
					</tr>

					
				);
		});

		return (
			<div>
				{buildingList}
			</div>
		)
	}
}
export default BuilingList;
