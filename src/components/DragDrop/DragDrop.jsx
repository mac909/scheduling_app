import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DragDrop = () => {
	const orders = useSelector((state) => state.orders.value);
	const [list, setList] = useState(orders);
	const [update, setUpdate] = useState(true);

	const [draggedListKyle, setDraggedListKyle] = useState([]);
	const [draggedListScott, setDraggedListScott] = useState([]);
	const [draggedListTucker, setDraggedListTucker] = useState([]);
	const [draggedListJohn, setDraggedListJohn] = useState([]);
	const [draggedListMason, setDraggedListMason] = useState([]);

	const [isDraggingKyle, setIsDraggingKyle] = useState(false);
	const [isDraggingTucker, setIsDraggingTucker] = useState(false);
	const [isDraggingScott, setIsDraggingScott] = useState(false);
	const [isDraggingJohn, setIsDraggingJohn] = useState(false);
	const [isDraggingMason, setIsDraggingMason] = useState(false);

	const handleDragStart = (event) => {
		event.dataTransfer.setData("text/plain", event.target.id);
	};

	const handleDragOverKyle = (event) => {
		event.preventDefault();
		setIsDraggingKyle(true);
	};
	const handleDragOverMason = (event) => {
		event.preventDefault();
		setIsDraggingMason(true);
	};
	const handleDragOverJohn = (event) => {
		event.preventDefault();
		setIsDraggingJohn(true);
	};
	const handleDragOverTucker = (event) => {
		event.preventDefault();
		setIsDraggingTucker(true);
	};
	const handleDragOverScott = (event) => {
		event.preventDefault();
		setIsDraggingScott(true);
	};

	const handleDropKyle = (event) => {
		event.preventDefault();
		const id = event.dataTransfer.getData("text/plain");
		const item = orders.find((x) => x.id === id);
		if (item) {
			setDraggedListKyle([...draggedListKyle, item]);
			setIsDraggingKyle(false);
			setIsDraggingMason(false);
			setIsDraggingTucker(false);
			setIsDraggingJohn(false);
			setIsDraggingScott(false);
		}
	};
	const handleDropJohn = (event) => {
		event.preventDefault();
		const id = event.dataTransfer.getData("text/plain");
		const item = orders.find((x) => x.id === id);
		if (item) {
			setDraggedListJohn([...draggedListJohn, item]);
			setIsDraggingKyle(false);
			setIsDraggingMason(false);
			setIsDraggingTucker(false);
			setIsDraggingJohn(false);
			setIsDraggingScott(false);
		}
	};
	const handleDropTucker = (event) => {
		event.preventDefault();
		const id = event.dataTransfer.getData("text/plain");
		const item = orders.find((x) => x.id === id);
		if (item) {
			setDraggedListTucker([...draggedListTucker, item]);
			setIsDraggingKyle(false);
			setIsDraggingMason(false);
			setIsDraggingTucker(false);
			setIsDraggingJohn(false);
			setIsDraggingScott(false);
		}
	};
	const handleDropScott = (event) => {
		event.preventDefault();
		const id = event.dataTransfer.getData("text/plain");
		const item = orders.find((x) => x.id === id);
		if (item) {
			setDraggedListScott([...draggedListScott, item]);
			setIsDraggingKyle(false);
			setIsDraggingMason(false);
			setIsDraggingTucker(false);
			setIsDraggingJohn(false);
			setIsDraggingScott(false);
		}
	};
	const handleDropMason = (event) => {
		event.preventDefault();
		const id = event.dataTransfer.getData("text/plain");
		const item = orders.find((x) => x.id === id);
		if (item) {
			setDraggedListMason([...draggedListMason, item]);
			setIsDraggingKyle(false);
			setIsDraggingMason(false);
			setIsDraggingTucker(false);
			setIsDraggingJohn(false);
			setIsDraggingScott(false);
		}
	};

	const targetClassNameKyle = `mt-4 p-4 rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
		isDraggingKyle ? "border-black" : "border-indigo-300"
	}`;
	const targetClassNameJohn = `mt-4 p-4 rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
		isDraggingJohn ? "border-black" : "border-indigo-300"
	}`;
	const targetClassNameTucker = `mt-4 p-4 rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
		isDraggingTucker ? "border-black" : "border-indigo-300"
	}`;
	const targetClassNameScott = `mt-4 p-4 rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
		isDraggingScott ? "border-black" : "border-indigo-300"
	}`;
	const targetClassNameMason = `mt-4 p-4 rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
		isDraggingMason ? "border-black" : "border-indigo-300"
	}`;

	return (
		<div>
			<div className="grid grid-cols-6 gap-1">
				<div className="p-4 mt-5 bg-white rounded-lg shadow-lg">
					<ul className="list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40 ">
						{list.map((item) => {
							return (
								<li
									key={`${item.id}`}
									id={`${item.id}`}
									className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
									draggable={true}
									onDragStart={handleDragStart}
								>
									<p>{item.customer}</p>
									<p>{item.product}</p>
								</li>
							);
						})}
					</ul>
				</div>
				<div
					className={targetClassNameKyle}
					onDragOver={handleDragOverKyle}
					onDrop={handleDropKyle}
				>
					<h3>Kyle</h3>

					<div className="p-4 mt-1 bg-white rounded-lg shadow-lg">
						<ul
							className={`list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-60 "}`}
						>
							{draggedListKyle.map((item) => {
								return (
									<li
										key={`${item.id}`}
										id={`${item.id}`}
										className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
										draggable={true}
										onDragStart={handleDragStart}
									>
										<p>{item.customer}</p>
										<p>{item.product}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div
					className={targetClassNameTucker}
					onDragOver={handleDragOverTucker}
					onDrop={handleDropTucker}
				>
					<h3>Tucker</h3>

					<div className="p-4 mt-1 bg-white rounded-lg shadow-lg">
						<ul
							className={`list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-60 "}`}
						>
							{draggedListTucker.map((item) => {
								return (
									<li
										key={`${item.id}`}
										id={`${item.id}`}
										className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
										draggable={true}
										onDragStart={handleDragStart}
									>
										<p>{item.customer}</p>
										<p>{item.product}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div
					className={targetClassNameScott}
					onDragOver={handleDragOverScott}
					onDrop={handleDropScott}
				>
					<h3>Scott</h3>

					<div className="p-4 mt-1 bg-white rounded-lg shadow-lg">
						<ul
							className={`list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-60 "}`}
						>
							{draggedListScott.map((item) => {
								return (
									<li
										key={`${item.id}`}
										id={`${item.id}`}
										className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
										draggable={true}
										onDragStart={handleDragStart}
									>
										<p>{item.customer}</p>
										<p>{item.product}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div
					className={targetClassNameJohn}
					onDragOver={handleDragOverJohn}
					onDrop={handleDropJohn}
				>
					<h3>John</h3>

					<div className="p-4 mt-1 bg-white rounded-lg shadow-lg">
						<ul
							className={`list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-60 "}`}
						>
							{draggedListJohn.map((item) => {
								return (
									<li
										key={`${item.id}`}
										id={`${item.id}`}
										className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
										draggable={true}
										onDragStart={handleDragStart}
									>
										<p>{item.customer}</p>
										<p>{item.product}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div
					className={targetClassNameMason}
					onDragOver={handleDragOverMason}
					onDrop={handleDropMason}
				>
					<h3>Mason</h3>
					<div className="p-4 mt-1 bg-white rounded-lg shadow-lg">
						<ul
							className={`list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-60 "}`}
						>
							{draggedListMason.map((item) => {
								return (
									<li
										key={`${item.id}`}
										id={`${item.id}`}
										className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
										draggable={true}
										onDragStart={handleDragStart}
									>
										<p>{item.customer}</p>
										<p>{item.product}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DragDrop;
