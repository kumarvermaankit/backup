import React from 'react';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { BusinessAccountContext } from '../../contexts/BusinessAccountsContext';
import { Link } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5)
    },
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    table: {
      position: 'relative',
      // temporary right-to-left patch, waiting for
      // https://github.com/bvaughn/react-virtualized/issues/454
      '& .ReactVirtualized__Table__headerRow': {
        flip: false,
        background: '#f2ab41',
        paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined
      }
    },
    tableRow: {
      cursor: 'pointer'
    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200]
      }
    },
    tableCell: {
      flex: 1
    },
    noClick: {
      cursor: 'initial'
    },
    headerCell: { color: 'white', fontSize: 'large', fontWeight: 'bold' },
    link: { textDecoration: 'none', fontSize: 'medium', color: '#062540' },
    footer: {
      position: 'absolute',
      right: 0
    },
    paper: {
      overflowX: 'visible'
    }
  })
);

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

export default function VirtualizedTable() {
  const { businessAccountList } = React.useContext(BusinessAccountContext);
  businessAccountList.sort(function (a: any, b: any) {
    var nameA = a.organization_name.toUpperCase();
    var nameB = b.organization_name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [row, setRow] = React.useState(businessAccountList);
  const [searchedOrgName, setSearchedOrgName] = React.useState<string>('');
  const [searcheduserName, setSearcheduserName] = React.useState<string>('');

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, businessAccountList.length - page * rowsPerPage);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const requestSearch = (searchedVal: string, type: string) => {
    let filteredRows;
    if (type === 'organization_name') {
      filteredRows = businessAccountList.filter((row: any) => {
        return row.organization_name
          .toLowerCase()
          .includes(searchedVal.toLowerCase());
      });
    }

    if (type === 'username') {
      filteredRows = businessAccountList.filter((row: any) => {
        return row.username.toLowerCase().includes(searchedVal.toLowerCase());
      });
    }
    setRow(filteredRows);
  };

  const cancelSearch = (type: string) => {
    if (type === 'organization_name') {
      setSearchedOrgName('');
    }
    if (type === 'username') {
      setSearcheduserName('');
    }
    requestSearch('', type);
  };

  React.useEffect(() => {
    setRow(businessAccountList);
  }, [businessAccountList]);

  return (
    <div
      style={{
        width: '100%'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '40px'
        }}
      >
        <SearchBar
          value={searchedOrgName}
          onChange={(searchVal) =>
            requestSearch(searchVal, 'organization_name')
          }
          onCancelSearch={() => cancelSearch('organization_name')}
          placeholder="Organization Name"
        />
        <SearchBar
          value={searcheduserName}
          onChange={(searchVal) => requestSearch(searchVal, 'username')}
          onCancelSearch={() => cancelSearch('username')}
          placeholder="User Name"
        />
      </div>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead style={{ background: '#f2ab41' }}>
            <TableRow>
              <TableCell className={classes.headerCell} align="center">
                Index
              </TableCell>
              <TableCell className={classes.headerCell} align="center">
                Organization Name
              </TableCell>
              <TableCell className={classes.headerCell} align="center">
                Email
              </TableCell>
              <TableCell className={classes.headerCell} align="center">
                User Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : row
            ).map((data: any, index: number) => (
              <TableRow key={data.ID}>
                <TableCell align="center" component="th" scope="row">
                  <Link
                    className={classes.link}
                    to={`/business-account-list/${data.username}`}
                  >
                    {index}
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link
                    className={classes.link}
                    to={`/business-account-list/${data.username}`}
                  >
                    {data.organization_name}
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link
                    className={classes.link}
                    to={`/business-account-list/${data.username}`}
                  >
                    {data.email}
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link
                    className={classes.link}
                    to={`/business-account-list/${data.username}`}
                  >
                    {data.username}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter className={classes.footer}>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={row.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
