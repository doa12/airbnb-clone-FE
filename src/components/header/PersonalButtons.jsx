import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, ClickAwayListener, Grow, Paper, Popper,
  MenuItem, MenuList, Stack } from '@mui/material';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import Signup from '../modal/Signup';
import Login from '../modal/Login';
import Logout from '../modal/Logout';
import { userActions } from '../../redux/modules/userSlice';
import { useSelector } from 'react-redux';


const PersonalButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector(state=> state.user.userInfo.username);
  const isHost = useSelector(state => state.user.userInfo.isHost);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const logoutHandler = () => {
    localStorage.removeItem('Authorization');
    dispatch(userActions.deleteUserInfo());
    handleClose();
  }

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <FaUserCircle fontSize={"23"}/>
        </Button>
        
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
                <TempWrapper>
              <Paper>
              
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem style={{display:username&&"none"}}><Signup/></MenuItem>
                    <MenuItem style={{display:username&&"none"}}><Login/></MenuItem>

                    <MenuItem style={{display:username||"none"}} onClick={()=>{
                      navigate('/wishList');
                      }}>위시리스트
                    </MenuItem>

                    <MenuItem style={{display:username||"none"}} onClick={()=>{
                      navigate('/book');
                      }}>예약내역</MenuItem>
                      
                    <MenuItem style={{display:isHost||"none"}} onClick={()=>{
                      navigate('/hostPosting');
                      }}>숙소 등록하기</MenuItem>  
                    <MenuItem style={{display:username||"none"}}><Logout/></MenuItem>
                    
                  </MenuList>
                </ClickAwayListener>
              </Paper>
              </TempWrapper>
            </Grow>
          )}
        </Popper>
        
      </div>
    </Stack>
  );
}

export default PersonalButtons;


const TempWrapper = styled.div`
    position:relative;
    z-index:1200;
`