import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
	<Stack
		direction="row"
		alignItems="center"
		px={3}
		sx={{
			position: "sticky",
			backgroundColor: "#000",
			top: 0,
			justifyContent: "space-between",
			alignItems: "center",
		}}
	>
		<Link to="/" style={{ display: "flex", alignItems: "center" }}>
			<img src={logo} alt="logo" height={`60px`} />
		</Link>
		<SearchBar />
	</Stack>
);

export default Navbar;
