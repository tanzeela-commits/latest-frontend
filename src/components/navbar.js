import { useRef, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

// mui imports
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Bell as BellIcon } from "../icons/bell";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";
import { AccountPopover } from "./account-popover";

// custom imports
import menu from "./common/menu/index.jsx";
import JobPostModal from "../views/layout/postModal.jsx";

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

export const Navbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const [userName, setUserName] = useState("");
  const [userProfilePic, setUserProfilePic] = useState("");

  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const token = window.localStorage.getItem("JWTtoken");

  var { _doc } = jwt_decode(token);
  const userimg = _doc.userimg;
  console.log(_doc.userimg);
  useEffect(() => {
    const token = window.localStorage.getItem("JWTtoken");
    var { _doc } = jwt_decode(token);
    setUserName(_doc.name);
  }, []);

  return (
    <>
      <NavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            sx={{
              width: "150px",
            }}
            variant="contained"
            onClick={handleModalOpen}
          >
            Post a Job
          </Button>

          <Avatar
            onClick={() => setOpenAccountPopover(true)}
            ref={settingsRef}
            sx={{
              cursor: "pointer",
              height: 40,
              width: 40,
              ml: 1,
            }}
            // src="/static/images/avatars/avatar_1.png"
          >
            <img
              src={`http://82.180.132.111:4500/${userimg}`}
              height="40px"
              width="40px"
              alt="loading"
            />
          </Avatar>
        </Toolbar>
      </NavbarRoot>
      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        username={userName}
        onClose={() => setOpenAccountPopover(false)}
      />
      <JobPostModal open={open} handleClose={handleModalClose} />
    </>
  );
};

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
