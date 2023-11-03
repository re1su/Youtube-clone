import React from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
	return (
		<Paper
		component="form"
			onSubmit={() => {}}
			sx={{
				borderRadius: 20,
				border: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
			}}
		>
			<input
				className="search-bar"
				placeholder="Search..."
				value=""
				onChange={() => {}}
				style={{ backgroundColor: "#fff" }}
			/>
			<IconButton type="submit" sx={{ p: "10px", color: "#4e03fc" }}>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
