import React from 'react';

export default function Completed(props) {
	return (
		<>
			<h1>Completed</h1>
			{props.completedItems.map((item, index) => {
				return props.completedItems[index].completed === true ? (
					<div key={props.completedItems[index].title}>
						<h2
							onClick={event => {
								const selectedItem = props.completedItems.splice(index, 1);
								selectedItem[0].completed = !selectedItem[0].completed;
								props.setList([...props.toDoListData, ...selectedItem]);
							}}
						>
							{props.completedItems[index].title}
						</h2>
					</div>
				) : (
					''
				);
			})}
		</>
	);
}
