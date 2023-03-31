import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { logo } from "../constants";
import { SearchBar, Sidebar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";



const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <div sx={{position:  "sticky", top: 0}}>
      <Stack direction="row" alignItems="center" p={2} pb={0} sx={{ background: '#000', top: 0, justifyContent: "space-between" }}>
        <Stack direction="row" alignItems="center" sx={{px: '10px'}}>
          <MenuOutlinedIcon sx={{color: "white", marginRight: "20px"}}/>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={30} />
          </Link>
        </Stack>
        <SearchBar />
        <Stack direction="row" alignItems="center" sx={{px: '10px'}}>
          <NotificationsOutlinedIcon sx={{color: "white", marginRight: "10px"}}/>
          <AccountCircleOutlinedIcon sx={{color: "white"}}/>
        </Stack>
      </Stack>
      <Box px={2}>
        <Sidebar sx={{
            display: { sm: "hidden", md: "flex" },
          }}
          selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>
    </div>
  );
};

export default Navbar;
