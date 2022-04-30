import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { NavLink } from 'react-router-dom';
import { Text, Logo } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  link: {
    alignSelf: 'center',
    textDecoration: 'none',
    color: '#062540',
    marginRight: '2vw',
    cursor: 'pointer'
  },
  appbar: {
    background: 'white'
  },
  logo: {
    width: '10em',
    height: 'auto',
    margin: '0.5em'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorMentorEl, setAnchorMentorEl] = React.useState(null);
  const [anchorMenteeEl, setAnchorMenteeEl] = React.useState(null);
  const [anchorCourseEl, setAnchorCourseEl] = React.useState(null);
  const [anchorSkillEl, setAnchorSkillEl] = React.useState(null);
  const [anchorAdminEl, setAnchorAdminEl] = React.useState(null);
  const [anchorBusinessEl, setAnchorBusinessEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMentorMenuOpen = Boolean(anchorMentorEl);
  const isMenteeMenuOpen = Boolean(anchorMenteeEl);
  const isCourseMenuOpen = Boolean(anchorCourseEl);
  const isSkillMenuOpen = Boolean(anchorSkillEl);
  const isAdminMenuOpen = Boolean(anchorAdminEl);
  const isBusinessMenuOpen = Boolean(anchorBusinessEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { signout } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMentorMenuOpen = (event: any) => {
    setAnchorMentorEl(event.currentTarget);
  };

  const handleMentorMenuClose = () => {
    setAnchorMentorEl(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMenteeMenuOpen = (event: any) => {
    setAnchorMenteeEl(event.currentTarget);
  };

  const handleMenteeMenuClose = () => {
    setAnchorMenteeEl(null);
  };

  const handleCourseMenuOpen = (event: any) => {
    setAnchorCourseEl(event.currentTarget);
  };

  const handleCourseMenuClose = () => {
    setAnchorCourseEl(null);
  };

  const handleSkillMenuOpen = (event: any) => {
    setAnchorSkillEl(event.currentTarget);
  };

  const handleSkillMenuClose = () => {
    setAnchorSkillEl(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAdminMenuOpen = (event: any) => {
    setAnchorAdminEl(event.currentTarget);
  };

  const handleAdminMenuClose = () => {
    setAnchorAdminEl(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBusinessMenuOpen = (event: any) => {
    setAnchorBusinessEl(event.currentTarget);
  };

  const handleBusinessMenuClose = () => {
    setAnchorBusinessEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'profile-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user ? (
        <>
          <MenuItem>
            <Avatar
              style={{
                background: '#0c3559',
                fontWeight: 'bold',
                fontSize: 'medium',
                marginRight: '0.5em'
              }}
            >
              A
            </Avatar>
            {user.name}
          </MenuItem>
          <NavLink
            to="/password/update"
            style={{ textDecoration: 'none', color: '#0c3559' }}
          >
            <MenuItem onClick={handleMenuClose}>Update Password</MenuItem>
          </NavLink>
          <MenuItem onClick={signout}>Sign Out</MenuItem>
        </>
      ) : (
        <NavLink
          to="/sign-in"
          style={{ textDecoration: 'none', color: '#0c3559' }}
        >
          <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
        </NavLink>
      )}
    </Menu>
  );

  const mentorMenuId = 'mentor-menu';
  const renderMentorMenu = (
    <Menu
      anchorEl={anchorMentorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mentorMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMentorMenuOpen}
      onClose={handleMentorMenuClose}
    >
      <NavLink
        to="/list-mentor"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Mentors List</MenuItem>
      </NavLink>
      <NavLink
        to="/mentor/create"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Create Mentor</MenuItem>
      </NavLink>
      <NavLink
        to="/mentor/csv"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>CSV Upload</MenuItem>
      </NavLink>
      <NavLink
        to="/mentor-forms"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Mentor Interest Forms</MenuItem>
      </NavLink>
      <NavLink
        to="/updated/mentor/create"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Create Mentor Updated</MenuItem>
      </NavLink>
      <NavLink
        to="/updated/list-mentor"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Updated Mentor List</MenuItem>
      </NavLink>
    </Menu>
  );

  const menteeMenuId = 'mentee-menu';
  const renderMenteeMenu = (
    <Menu
      anchorEl={anchorMenteeEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menteeMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenteeMenuOpen}
      onClose={handleMenteeMenuClose}
    >
      <NavLink
        to="/list-mentee"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Mentees List</MenuItem>
      </NavLink>
      <NavLink
        to="/mentee/create"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Create Mentee</MenuItem>
      </NavLink>
      <NavLink
        to="/mentee/csv"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>CSV Upload</MenuItem>
      </NavLink>
      <NavLink
        to="/updated/list-mentee"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Updated Mentees List</MenuItem>
      </NavLink>
    </Menu>
  );

  const CourseMenuId = 'course-menu';
  const renderCourseMenu = (
    <Menu
      anchorEl={anchorCourseEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={CourseMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isCourseMenuOpen}
      onClose={handleCourseMenuClose}
    >
      <NavLink
        to="/list-course"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Course List</MenuItem>
      </NavLink>
      <NavLink
        to="/course/create"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Create Course</MenuItem>
      </NavLink>
      <NavLink
        to="/course/csv"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>CSV Upload Courses</MenuItem>
      </NavLink>
    </Menu>
  );

  const SkillMenuId = 'skill-menu';
  const renderSkillMenu = (
    <Menu
      anchorEl={anchorSkillEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={SkillMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isSkillMenuOpen}
      onClose={handleSkillMenuClose}
    >
      <NavLink
        to="/list-skill"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Skill List</MenuItem>
      </NavLink>
      <NavLink
        to="/list-categories"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Categories List</MenuItem>
      </NavLink>
      <NavLink
        to="/skill/create"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Create Skill</MenuItem>
      </NavLink>
      <NavLink
        to="/category/create"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Create Category</MenuItem>
      </NavLink>
      <NavLink
        to="/skill/csv"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>CSV Upload Skills</MenuItem>
      </NavLink>
    </Menu>
  );

  const adminMenuId = 'admin-menu';
  const renderAdminMenu = (
    <Menu
      anchorEl={anchorAdminEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={adminMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isAdminMenuOpen}
      onClose={handleAdminMenuClose}
    >
      <NavLink
        to="/list-admin"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Admins List</MenuItem>
      </NavLink>
      <NavLink
        to="/admin/create"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Create Admin</MenuItem>
      </NavLink>
    </Menu>
  );

  const businessMenuId = 'business-menu';
  const renderBusinessMenu = (
    <Menu
      anchorEl={anchorBusinessEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={businessMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isBusinessMenuOpen}
      onClose={handleBusinessMenuClose}
    >
      <NavLink
        to="/list-business-accounts"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Business Accounts List</MenuItem>
      </NavLink>
      <NavLink
        to="/business-account/create"
        style={{ textDecoration: 'none', color: '#0c3559' }}
      >
        <MenuItem onClick={handleMenuClose}>Create Business Account</MenuItem>
      </NavLink>
    </Menu>
  );

  const mobileMenuId = 'profile-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {user && (
        <>
          <MenuItem>
            <Link to="/" className={classes.link}>
              <p>Mentors List</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/mentor/create" className={classes.link}>
              <p>Create Mentor</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/" className={classes.link}>
              <p>Users</p>
            </Link>
          </MenuItem>
        </>
      )}
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Profile</p>
      </MenuItem>
      {user ? (
        <MenuItem onClick={signout}>Sign Out</MenuItem>
      ) : (
        <NavLink
          to="/sign-in"
          style={{ textDecoration: 'none', color: '#0c3559' }}
        >
          <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
        </NavLink>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Link to="/">
            <Logo type="primary" width="8.25em" height="2em" />
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {user && (
              <>
                {user.roles?.includes('super_admin') && (
                  <div
                    onClick={handleAdminMenuOpen}
                    aria-controls={adminMenuId}
                  >
                    <div className={classes.link}>
                      <Text
                        color="#0c3559"
                        size="1em"
                        style={{ marginTop: '2vh' }}
                      >
                        Admins
                      </Text>
                    </div>
                  </div>
                )}
                <div
                  onClick={handleBusinessMenuOpen}
                  aria-controls={businessMenuId}
                >
                  <div className={classes.link}>
                    <Text
                      color="#0c3559"
                      size="1em"
                      style={{ marginTop: '2vh' }}
                    >
                      Business Accounts
                    </Text>
                  </div>
                </div>
                <div
                  onClick={handleMenteeMenuOpen}
                  aria-controls={menteeMenuId}
                >
                  <div className={classes.link}>
                    <Text
                      color="#0c3559"
                      size="1em"
                      style={{ marginTop: '2vh' }}
                    >
                      Mentees
                    </Text>
                  </div>
                </div>
                <div
                  onClick={handleCourseMenuOpen}
                  aria-controls={CourseMenuId}
                >
                  <div className={classes.link}>
                    <Text
                      color="#0c3559"
                      size="1em"
                      style={{ marginTop: '2vh' }}
                    >
                      Courses
                    </Text>
                  </div>
                </div>
                <div onClick={handleSkillMenuOpen} aria-controls={SkillMenuId}>
                  <div className={classes.link}>
                    <Text
                      color="#0c3559"
                      size="1em"
                      style={{ marginTop: '2vh' }}
                    >
                      Skills
                    </Text>
                  </div>
                </div>
                <div
                  onClick={handleMentorMenuOpen}
                  aria-controls={mentorMenuId}
                >
                  <div className={classes.link}>
                    <Text
                      color="#0c3559"
                      size="1em"
                      style={{ marginTop: '2vh' }}
                    >
                      Mentor Listing
                    </Text>
                  </div>
                </div>
                <Link to="/list-user" className={classes.link}>
                  <Text color="#0c3559" size="1em">
                    Users
                  </Text>
                </Link>
              </>
            )}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {user && renderMenteeMenu}
      {user && renderCourseMenu}
      {user && renderSkillMenu}
      {user && renderMentorMenu}
      {user && renderAdminMenu}
      {user && renderBusinessMenu}
      {renderMenu}
    </div>
  );
};

export default Header;
