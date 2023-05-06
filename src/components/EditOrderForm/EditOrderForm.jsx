import React, { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findOrderById } from "../../../helper";
import { updateOrder } from "../newOrderForm/orderFormSlice";

const EditOrderForm = (props) => {
	const { id } = props;
	const navigate = useNavigate();
	const orders = useSelector((state) => state.orders.value);
	const order = findOrderById(orders, id);
	const dispatch = useDispatch();

	const [selectedCheckboxes, setSelectedCheckboxes] = useState(order.ops);

	const handleCheckboxChange = (checkboxValue) => {
		let updatedCheckboxes;
		if (selectedCheckboxes.includes(checkboxValue)) {
			updatedCheckboxes = selectedCheckboxes.filter(
				(cb) => cb !== checkboxValue
			);
		} else {
			updatedCheckboxes = [...selectedCheckboxes, checkboxValue];
		}
		setSelectedCheckboxes(updatedCheckboxes);
		setFormData({ ...formData, ops: updatedCheckboxes });
	};

	const [formData, setFormData] = useState({
		customer: "",
		product: "",
		price: 0,
		quantity: 0,
		ops: [],
	});

	useEffect(() => {
		if (order) {
			setFormData({
				customer: order.customer,
				product: order.product,
				price: order.price,
				quantity: order.quantity,
				ops: order.ops,
			});
		}
	}, [order]);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(
			updateOrder({
				id: order.id,
				updates: formData,
			})
		);
		setSelectedCheckboxes([]);
		setFormData({
			customer: "",
			product: "",
			price: 0,
			quantity: 0,
			ops: selectedCheckboxes,
		});
		navigate(-1);
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<Form
				className="mt-12 grid grid-col-1 sm:grid-cols-2 gap-4"
				method="post"
			>
				<div className="flex flex-col gap-4 ">
					<div>
						<label htmlFor="newCustomerName" className=" mx-2 ">
							Customer
						</label>
						<input
							type="text"
							name="customer"
							id="customer"
							placeholder="e.g., Kroger"
							required
							value={formData.customer}
							onChange={handleChange}
							className=" border-accent border p-1 rounded-xl mx-auto w-full sm:w-3/4 float-right"
						/>
					</div>
					<div>
						<label htmlFor="newProductName" className=" mx-2">
							Product
						</label>
						<input
							type="text"
							name="product"
							id="product"
							placeholder="e.g., TBars"
							onChange={handleChange}
							value={formData.product}
							required
							className=" border-accent border p-1 rounded-xl mx-auto w-full sm:w-3/4  float-right"
						/>
					</div>
					<div>
						<label htmlFor="newPriceAmount" className=" mx-2">
							Price Per Unit
						</label>
						<input
							type="number"
							step={0.01}
							name="price"
							id="price"
							onChange={handleChange}
							value={formData.price}
							required
							className=" border-accent border p-1 rounded-xl mx-auto w-full sm:w-3/4  float-right"
							inputMode="decimal"
						/>
					</div>
					<div>
						<label htmlFor="newQuantityAmount" className=" mx-2">
							Qty
						</label>
						<input
							type="number"
							step={1}
							name="quantity"
							id="quantity"
							value={formData.quantity}
							onChange={handleChange}
							required
							className=" border-accent border p-1 rounded-xl mx-auto w-full sm:w-3/4  float-right"
							inputMode="integar"
						/>
					</div>
				</div>

				<div className="flex flex-wrap flex-col mx-auto">
					<label className="inline-flex items-center mt-3 mr-6">
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 rounded"
							name="ops"
							value="Saw"
							checked={selectedCheckboxes.includes("Saw")}
							onChange={() => {
								handleCheckboxChange("Saw");
							}}
						/>
						<span className="ml-2 text-gray-700">Saw Cut</span>
					</label>
					<label className="inline-flex items-center mt-3 mr-6">
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 rounded"
							name="ops"
							value="Wire Cut"
							checked={selectedCheckboxes.includes("Wire Cut")}
							onChange={() => {
								handleCheckboxChange("Wire Cut");
							}}
						/>
						<span className="ml-2 text-gray-700">Wire Cut</span>
					</label>
					<label className="inline-flex items-center mt-3">
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 rounded"
							name="ops"
							value="Bend"
							checked={selectedCheckboxes.includes("Bend")}
							onChange={() => {
								handleCheckboxChange("Bend");
							}}
						/>
						<span className="ml-2 text-gray-700">Bend</span>
					</label>
					<label className="inline-flex items-center mt-3">
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 rounded"
							name="ops"
							value="Weld"
							checked={selectedCheckboxes.includes("Weld")}
							onChange={() => {
								handleCheckboxChange("Weld");
							}}
						/>
						<span className="ml-2 text-gray-700">Weld</span>
					</label>
					<label className="inline-flex items-center mt-3">
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 rounded"
							name="ops"
							value="Paint"
							checked={selectedCheckboxes.includes("Paint")}
							onChange={() => {
								handleCheckboxChange("Paint");
							}}
						/>
						<span className="ml-2 text-gray-700">Paint</span>
					</label>
				</div>
			</Form>
			<button
				type="submit"
				className="bg-secondary text-white m-8 p-1 rounded-xl w-20 mx-auto"
				onClick={handleSubmit}
			>
				Save Changes
			</button>
		</div>
	);
};

export default EditOrderForm;
