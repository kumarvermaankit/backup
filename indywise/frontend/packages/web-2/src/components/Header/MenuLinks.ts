import { IDropDownMenuItem } from './DropDownMenu';
// import { useAuth } from '../../contexts/AuthContext';

// const { user } = useAuth();
// const portfolioPath = user?.userType?.includes('mentor') ? "/portfolio/mentor" : "/portfolio/mentee"
const portfolioPath = '/portfolio/mentee';
export const forIndividuals: IDropDownMenuItem[] = [
  {
    title: 'WiseUp Foundation (FREE)',
    path: '/wiseup/foundation'
  },
  {
    title: 'WiseUp Upskilling',
    path: '/wiseupx'
  }
  // {
  //   title: 'Mentored Internships',
  //   path: '/internship'
  // },
  // {
  //   title: 'WiseUp X Upskilling',
  //   path: '/wiseupx-upskilling',
  //   new: true
  // }
];

export const forBusiness: IDropDownMenuItem[] = [
  {
    title: 'WiseUp Employee Upskilling',
    path: '/wiseup'
  },
  {
    title: 'Talent Pool',
    path: '/talent/pool'
  }
];

export const demoMenu: IDropDownMenuItem[] = [
  {
    title: 'Startups Dashboard',
    path: '/startup/dashboard'
  },
  {
    title: 'Our Resources',
    path: '/startup/resources'
  },
  {
    title: 'Logout',
    path: '',
    isSignoutBtn: true
  }
  // {
  //   title: 'Get Resources',
  //   path: '/startup/ourresources'
  // }
  // {
  //   title: 'Scorecard',
  //   path: '/wiseup/scorecard'
  // },
  // {
  //   title: 'View Mentee Profile',
  //   path: '/mentee/sanketkumar'
  // },
];

export const demoMenteeMenu: IDropDownMenuItem[] = [
  {
    title: 'Mentee Dashboard',
    path: '/dashboard/mentee'
  }
];

export const moreMenu: IDropDownMenuItem[] = [
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'FAQs',
    path: '/support/faq'
  },
  // {
  //   title: 'Community',
  //   path: 'https://community.indywise.com/',
  //   isExternal: true
  // },
  {
    title: 'Partners',
    path: '/about#partners'
  },
  {
    title: 'Investors',
    path: '/about#investors'
  },
  {
    title: 'Contact Sales',
    path: '/wiseup/#pricing'
  }
];

export const userMenu: IDropDownMenuItem[] = [
  {
    title: 'My Profile',
    path: '/my-profile'
  },
  {
    title: 'WiseUp Foundation',
    path: '/foundation'
  },
  {
    title: 'Portfolio',
    path: `${portfolioPath}`
  },
  {
    title: 'Logout',
    path: '',
    isSignoutBtn: true
  }
];

export const mentorMenu: IDropDownMenuItem[] = [
  {
    title: 'My Profile',
    path: '/my-profile'
  },
  {
    title: 'Portfolio',
    path: 'portfolio/mentor'
  },
  {
    title: 'Logout',
    path: '',
    isSignoutBtn: true
  }
];

export const businessMenu: IDropDownMenuItem[] = [
  {
    title: 'Logout',
    path: '',
    isSignoutBtn: true
  }
];

export const allLinksBusiness: IDropDownMenuItem[] = [
  {
    title: 'Browse Mentees',
    path: '/mentees'
  },
  {
    title: 'Browse Mentors',
    path: '/mentors'
  },
  // {
  //   title: 'Community',
  //   path: 'https://community.indywise.com/',
  //   isExternal: true
  // },
  {
    title: 'Partners',
    path: '/about#partners'
  },
  {
    title: 'Team',
    path: '/about#team'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'FAQs',
    path: '/support/faq'
  }
];
