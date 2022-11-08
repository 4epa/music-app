import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', height: '50vh', justifyContent: "center", alignItems: "center" }}>
      <CircularProgress sx={{color: "#fff"}} />
    </Box>
  );
}

export default Loader;