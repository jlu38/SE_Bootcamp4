import React from 'react';
import RemoveBuilding from './RemoveBuilding';


class BuilingList extends React.Component {
	constructor(props){
		super(props);
		this.state={
			showBuilding: true
		}
	}

	render() {
		const { bList, filterText, selectedUpdate, removeBuilding} = this.props;

		const buildingList = bList
			.filter(directory => {
				return (
					directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || 
					directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
				)
			})
			.map((directory, index) => {
				return (
					<tr >
						<td onClick={() => selectedUpdate(directory.id)}>{directory.code} </td>
						<td onClick={() => selectedUpdate(directory.id)}>{directory.name} </td>
						<RemoveBuilding buildingIndex={index} removeBuilding={removeBuilding}/>
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
