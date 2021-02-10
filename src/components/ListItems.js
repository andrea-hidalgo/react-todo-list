import React from 'react';

export default function ListItems(props) {
	return (
		<>
			<h1>To-Do</h1>
			{props.toDoList.map((item, index) => {
				return props.toDoList[index].completed === false ? (
					<div key={props.toDoList[index].title}>
						<h2
							onClick={event => {
								const selectedItem = props.toDoList.splice(index, 1);
								selectedItem[0].completed = !selectedItem[0].completed;
								props.setCompleted([...props.completedItems, ...selectedItem]);
							}}
						>
							{props.toDoList[index].title}
						</h2>
					</div>
				) : (
					''
				);
			})}
		</>
	);
}
