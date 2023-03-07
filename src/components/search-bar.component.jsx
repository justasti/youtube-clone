import { Paper, IconButton } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper
      component='form'
      onSubmit={() => {}}
      style={{ paddingLeft: 16 }}
      sx={{
        borderRadius: 20,
        border: '1px solid "e3e3e3',
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        type='text'
        className='search-bar'
        placeholder='Search...'
        value=''
        onChange={() => {}}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}
export default SearchBar
