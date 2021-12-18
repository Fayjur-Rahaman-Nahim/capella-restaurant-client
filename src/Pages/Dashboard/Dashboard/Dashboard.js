// import React from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../../Hooks/useAuth';
import {
    Routes,
    Route,
    Link,
    Outlet,
    useNavigate
} from "react-router-dom";
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MyOrders from '../MyOrders/MyOrders';
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Payment from '../Payment/Payment';
import AddMeal from '../AddMeal/AddMeal';
import ManageMeals from '../ManageMeals/ManageMeals';
const drawerWidth = 240;

function Dashboard(props) {
    const { admin, logOut, user } = useAuth();
    let { path, url } = useRouteMatch();
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleLogOut = () => {
        logOut(navigate);
    }

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <Link to='/'><Button className="btn btn-dark mt-3 mb-2 w-75">Back To Home</Button></Link>
            <Divider />
            <Link to={`${url}/myOrders`}><Button className="btn btn-primary mt-2 w-75" color="inherit">My Order</Button></Link>
            <br />
            <Link to={`${url}/addReview`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Add Review</Button></Link>
            <br />
            <Link to={`${url}/payment`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Payment</Button></Link>

            {admin && <Box>
                <Link to={`${url}/makeAdmin`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Make Admin</Button></Link>
                <br />
                <Link to={`${url}/addMeal`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Add Meal</Button></Link>
                <Link to={`${url}/manageAllOrders`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Manage All Orders</Button></Link>
                <Link to={`${url}/manageMeals`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Manage Meals</Button></Link>

            </Box>}
            {user.email && <Button className="btn btn-danger mt-2 w-75" onClick={handleLogOut} color="inherit">LogOut</Button>}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
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
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better performance on mobile.
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
                <Routes>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <PrivateRoute path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </PrivateRoute>

                    <AdminRoute path={`${path}/addMeal`} element={<AddMeal />} />

                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageMeals`} element={<ManageMeals />} />
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                </Routes>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default Dashboard;