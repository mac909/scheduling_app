import React from "react";
import EditOrderForm from "../../components/EditOrderForm/editOrderForm";
import { useParams } from "react-router-dom";

const Edit = () => {
	const { id } = useParams();
	return (
		<div>
			<EditOrderForm id={id} />
		</div>
	);
};

export default Edit;
