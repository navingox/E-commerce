import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ShopIcon from '@material-ui/icons/Shop';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

function Bottombars(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
               >
                <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
                <BottomNavigationAction label="Favorites" icon={<SearchIcon />} />
                <BottomNavigationAction label="Nearby" icon={<ShopIcon />} />
                <BottomNavigationAction label="Nearby" icon={<PermIdentityIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default Bottombars;
