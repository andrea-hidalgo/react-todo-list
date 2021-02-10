import React, { useState, useEffect } from 'react';
import Completed from './Completed';
import ListItems from './ListItems';

export default function App(props) {
	const [listItem, updateItem] = useState({
		title: '',
		completed: false
	});

	const [toDoListData, setList] = useState([
		{
			title: 'Learn more about React',
			completed: true
		},
		{
			title: 'Write a new Component',
			completed: false
		},
		{
			title: 'Add some style',
			completed: false
		}
	]);

	const [completedItems, setCompleted] = useState([]);

	const handleChange = event => {
		updateItem({
			...listItem,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setList([...toDoListData, listItem]);
		// console.log(listItem);
		// console.log(toDoListData);
		updateItem({
			title: '',
			completed: false
		});
	};

	return (
		<div>
			<h1>To-Do List</h1>
			<form onSubmit={handleSubmit}>
				<input
					id="title"
					type="text"
					value={listItem.title}
					onChange={handleChange}
				></input>
				<input type="submit" value="Add Item"></input>
			</form>
			<br />
			<p>Tip: Click on a list item to move it to the opposite list!</p>
			<section className="lists-section">
				<div className="to-do-list list">
					<ListItems
						toDoList={toDoListData}
						setCompleted={setCompleted}
						completedItems={completedItems}
					/>
				</div>
				<div className="completed-list list">
					<Completed
						completedItems={completedItems}
						toDoListData={toDoListData}
						setList={setList}
					></Completed>
				</div>
			</section>
		</div>
	);
}
