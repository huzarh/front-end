import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CopyrightIcon from '@mui/icons-material/Copyright';
import Divider from "@mui/material/Divider";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BlockIcon from "@mui/icons-material/Block";
import CallIcon from '@mui/icons-material/Call';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import { FiMoreVertical, FiBell } from "react-icons/fi";
import { pink, red } from "@mui/material/colors";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function DotsMenu({logout}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton
        aria-label="more"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="info"
        sx={{
          p: 0,
          width: "auto",
          right: -10,
        }}   
      >
        <FiMoreVertical
          width={13}
          height="100%"

          style={{
            color:"#5e13ff",
            fontSize:26
          }}
        />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <CopyrightIcon />
          Bi-türk hakkında
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <CallIcon />
          Hata bildir
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={logout}
          disableRipple
          sx={{ color: "red", fontWeight: "bold" }}
        >
          <ExitToAppIcon  color='error' />
          Logout
        </MenuItem> 
      </StyledMenu>
    </React.Fragment>
  );
}
