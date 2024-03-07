import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Payment from './Payment';
import Cost from './Cost';
import PaymentDetails from './PaymentDetails';
import PaymentsIcon from '@mui/icons-material/Payments';
import CostDetails from './CostDeatails';
import AppBar from '@mui/material/AppBar';
import PaidIcon from '@mui/icons-material/Paid';
import AddCardIcon from '@mui/icons-material/AddCard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DetailsIcon from '@mui/icons-material/Details';
import SavingsIcon from '@mui/icons-material/Savings';
import { Style } from '@mui/icons-material';
import Savings from './Savings';


const drawerWidth = 220;

function HomePage(props) {
    const [openPayment,setOpenPayment]=React.useState(false);
 const [openCost,setOpenCost]=React.useState(false);
 const [openCostDetails,setOpenCostDetails]=React.useState(false);
 const [openPaymentDetails,setOpenPaymentDetails]=React.useState(false);
 const [openSavings,setOpenSavings]=React.useState(false);
 const [colorPayment, setColorPayment] = React.useState(null);
 const [colorCost, setColorCost] = React.useState(null);
 const [colorPaymentDetails, setColorPaymentDetails] = React.useState(null);
 const [colorCostDetails, setColorCostDetails] = React.useState(null);
 const [colorSavings, setColorSavings] = React.useState(null);
   const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [color,setColor]=React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleListItemClick = (selectedColor) => {
    setColor(selectedColor);
  };
  const drawer = (
    <div>
      
      <Toolbar>
        <img style={{height:"50px",width:"185px"}}
        src='https://i.postimg.cc/pL2WwHR5/Frame-1.png' alt=''></img>
      </Toolbar>
      
      <Divider />
      <List >
        
          // <ListItem>
          // <ListItemButton onClick={()=>(
          //   setColorPayment("green"),
          //   setMobileOpen(false),
          //   setColorCost(null),
          //   setColorPaymentDetails(null),
          //   setColorCostDetails(null),
          //   setColorSavings(null),
          //   setOpenPaymentDetails(false), 
          //   setOpenCost(false),
          //   setOpenPayment(true),setOpenCostDetails(false),setOpenSavings(false))}>
          // <PaidIcon sx={{marginRight:"8px",color:"green"}}/>
          // <Typography sx={{color:colorPayment}}>
          // Make Payment
          // </Typography>
          // </ListItemButton>
          // </ListItem>
          // <ListItem>
          // <ListItemButton onClick={()=>(
          //   setMobileOpen(false),
          //   setColorPayment(null),
          //   setColorCost("green"),
          //   setColorPaymentDetails(null),
          //   setColorCostDetails(null),
          //   setColorSavings(null),
          //   setOpenPaymentDetails(false),setOpenCost(true),setOpenPayment(false),setOpenCostDetails(false),setOpenSavings(false))}>
          //  <AddCardIcon sx={{marginRight:"8px",color:"red"}}/>
           
          //  <Typography sx={{color:colorCost}}>Add Cost</Typography>
          // </ListItemButton>
          // </ListItem>
          <ListItem>
          <ListItemButton onClick={(()=>(
            setColorPayment(null),
            setMobileOpen(false),
            setColorCost(null),
            setColorPaymentDetails("green"),
            setColorCostDetails(null),
            setColorSavings(null),
            setOpenPaymentDetails(true),setOpenCost(false),setOpenPayment(false),setOpenCostDetails(false),setOpenSavings(false)))}>
          <ReceiptIcon sx={{marginRight:"8px",color:"skyblue"}}/>
          <Typography sx={{color:colorPaymentDetails}}>Payment Details</Typography>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton onClick={()=>(
             setColorPayment(null),
             setMobileOpen(false),
             setColorCost(null),
             setColorPaymentDetails(null),
             setColorCostDetails("green"),
             setColorSavings(null),
            setOpenPaymentDetails(true),setOpenCost(false),setOpenPayment(false),setOpenCostDetails(true),setOpenSavings(false))}>
          <DetailsIcon sx={{marginRight:"8px",color:"darkblue"}}/>
          <Typography sx={{color:colorCostDetails}}>Cost Details</Typography>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton onClick={()=>(
             setColorPayment(null),
             setMobileOpen(false),
             setColorCost(null),
             setColorPaymentDetails(null),
             setColorCostDetails(null),
             setColorSavings("green"),
            setOpenPaymentDetails(true),setOpenCost(false),setOpenPayment(false),setOpenCostDetails(false),setOpenSavings(true))}>
          <SavingsIcon sx={{marginRight:"8px",color:"#f06292"}}/>
          <Typography sx={{color:colorSavings}}>Savings</Typography>
          </ListItemButton>
          </ListItem>
        </List>
      <Divider />
      <img style={{height:"50px",width:"185px",marginLeft:"15px"}}
        src='https://i.postimg.cc/VNmCZTHK/image-3.png' alt=''></img>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)`},
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Morning Football Turf
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {
          (openSavings===true)?<Savings/>:(openCost===true)?<Cost/>:(openPayment===true)?<Payment/>:(openCostDetails===true)?
          <CostDetails/>:(openPaymentDetails===true)?<PaymentDetails/>:<Payment/>

        }
        {/* <CostDetails/> */}
        {/* <PaymentDetails/> */}
      </Box>
    </Box>
  );
}



export default HomePage;
