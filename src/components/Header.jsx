import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/goit-react-hw-02-feedback') {
            setValue(0);
        } if (location.pathname === '/feedback') {
            setValue(1);
        } else {
            setValue(2);
        }
    }, [location]);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
  
    };
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Feedback" component={Link} to="/feedback" />
          <Tab label="Contact" />
        </Tabs>
      </Box>
    )
}

export default Header