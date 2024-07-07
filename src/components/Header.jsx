import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/goit-react-hw-02-feedback/')  setValue(0);
         
     
    }, [location]);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
  
    };
    const handleExternalLink = () => {
      window.location.href = "https://shanepai-14.github.io/goit-react-hw-02-phonebook/";
  };
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Feedback" component={Link} to="/goit-react-hw-02-feedback/feedback" />
          <Tab label="Contact" onClick={handleExternalLink} />
        </Tabs>
      </Box>
    )
}

export default Header