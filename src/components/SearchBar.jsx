import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      className="search"
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 10,
        border: '1px solid #333',
        pl: 2,
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        sx={{background: 'transparent'}}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ py: '10px', color: 'white', background: "#333", borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 20, borderBottomRightRadius: 20, width: "80px" }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
