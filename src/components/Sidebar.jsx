import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = () => {
	const HomeIconName = "New";

	return (
		<Stack
			direction="row"
			sx={{
				overflowY: "scroll",
				height: { sx: "auto", md: "95%" },
				flexDirection: { md: "column" },
			}}
		>
			{categories.map((category) => (
				<button
					className="category-btn"
					style={{
						backgroundColor: category.name === HomeIconName && "#4e03fc",
						color: "#fff",
					}}
					key={category.name}
				>
					<span
						style={{
							color: category.name === HomeIconName ? "#fff" : "#4e03fc",
							marginRight: "10px",
						}}
					>
						{category.icon}
					</span>
					<span style={{ opacity: category.name === HomeIconName ? 1 : 0.75 }}>
						{category.name}
					</span>
				</button>
			))}
		</Stack>
	);
};

export default Sidebar;
