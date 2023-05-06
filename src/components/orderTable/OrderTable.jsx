import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../../helper";
import { TrashIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { deleteOrder } from "../newOrderForm/orderFormSlice";
import "./orderTable.css";

const OrderTable = () => {
	const orders = useSelector((state) => state.orders.value);
	const dispatch = useDispatch();
	const total = orders.reduce(
		(acc, order) => acc + Number(order.price) * Number(order.quantity),
		0
	);
	return (
		<div className="mx-auto ">
			{orders.length === 0 ? (
				<p>There are no orders.</p>
			) : (
				<table className="table-auto mx-auto">
					<thead>
						<tr className="bg-gray-500 text-white ">
							<th className="px-4 py-2">Customer</th>
							<th className="px-4 py-2">Product</th>
							<th className="px-4 py-2">Price</th>
							<th className="px-4 py-2">Qty</th>
							<th className="px-4 py-2">Total</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order.id}>
								<td className="border px-4 py-2">
									{order.customer}
								</td>
								<td className="border px-4 py-2">
									{order.product}
								</td>
								<td className="border px-4 py-2">
									{formatCurrency(Number(order.price))}
								</td>
								<td className="border px-4 py-2">
									{Number(order.quantity)}
								</td>
								<td className="border px-4 py-2">
									{formatCurrency(
										Number(order.price) *
											Number(order.quantity)
									)}
								</td>
								<td>
									<button
										type="submit"
										className="btn btn--warning"
										aria-label={`Delete ${order.id} expense`}
									>
										<ArrowLeftOnRectangleIcon width={24} />
									</button>
								</td>
								<td>
									<button
										type="submit"
										className="btn btn--warning"
										aria-label={`Delete ${order.id} expense`}
										onClick={() =>
											dispatch(deleteOrder(order.id))
										}
									>
										<TrashIcon width={24} />
									</button>
								</td>
							</tr>
						))}
						<tr className="bg-gray-500 text-white">
							<td
								colSpan="4"
								className="border px-4 py-2 font-bold"
							>
								Total:
							</td>
							<td className="border px-4 py-2 font-bold">
								{formatCurrency(Number(total))}
							</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
};

export default OrderTable;
