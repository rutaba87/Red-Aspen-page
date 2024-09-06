import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'

const SubContainer2 = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page2, setPage2] = useState(0);
  const [rowsPerPage2, setRowsPerPage2] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error('Error Occurred in Fetching Data ', err);
      });
  }, []);

  function handlePageChange( _, newPage) {
    setPage(newPage);
  }

  function handleRowsPerPageChange(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  function handlePageChange2( _, newPage) {
    setPage2(newPage);
  }

  function handleRowsPerPageChange2(event) {
    setRowsPerPage2(parseInt(event.target.value, 10));
    setPage2(0);
  }

  const handleRowClick = (user) => {
    navigate(`/user/${user.id}`, { state: user });
  };

  return (
    <div className="dashboard2">
      <div
        className="box"
        style={{ width: 600, paddingLeft: 20, paddingRight: 20, marginRight: 0, marginLeft: 27 }}
      >
        <div className="box-head">
          <div className="box-heading">
            <h3>Pickers</h3>
          </div>
          <div className="box-body">
            <p>Total Orders Picked</p>
            <span className="number-6">4589</span>
          </div>
        </div>
        <Paper style={{marginBottom: 10}}>
        <TableContainer>
            <Table stickyHeader aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 'bold', fontSize: 17, backgroundColor: '#f07d85' }}
                  >
                    <div>Name</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 'bold', fontSize: 17, backgroundColor: '#f07d85' }}
                  >
                    <div>Orders Picked</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 'bold', fontSize: 17, backgroundColor: '#f07d85' }}
                  >
                    <div>Unit Picked</div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users 
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.id}>
                      <TableCell align="center"  onClick={() => handleRowClick(user)} style={{cursor: "pointer", fontWeight: 'bold'}} className='tbl--row' >{user.name.firstname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</TableCell>
                      <TableCell align="center">{user.address.zipcode}</TableCell>
                      <TableCell align="center">{user.address.number}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination 
              className='tablePagination'
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </TableContainer>
          </Paper>
      </div>

        {/* Second Table */}

      <div className="box" style={{ width: 600, paddingLeft: 20, paddingRight: 20, marginLeft: 28 }}>
        <div className="box-head">
          <div className="box-heading">
            <h3>Packers</h3>
          </div>
          <div className="box-body">
            <p>Total Orders Packed</p>
            <span className="number-6">2890</span>
          </div>
        </div>
        <Paper style={{marginBottom: 10}}>
          <TableContainer>
            <Table stickyHeader aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 'bold', fontSize: 17, backgroundColor: '#f07d85' }}
                  >
                    <div>Name</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 'bold', fontSize: 17, backgroundColor: '#f07d85' }}
                  >
                    <div>Orders Packed</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 'bold', fontSize: 17, backgroundColor: '#f07d85' }}
                  >
                    <div>Unit Packed</div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
      {users
        .slice(page2 * rowsPerPage2, page2 * rowsPerPage2 + rowsPerPage2)
        .map((user) => (
          <TableRow key={user.id}>
          <TableCell align="center"  onClick={() => handleRowClick(user)} style={{cursor: "pointer", fontWeight: 'bold'}} className='tbl--row' >{user.name.lastname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</TableCell>
          <TableCell align="center">{user.address.zipcode}</TableCell>
          <TableCell align="center">{user.address.number}</TableCell>
        </TableRow>
        ))}
    </TableBody>
            </Table>
            <TablePagination 
              className='tablePagination'
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage2}
              page={page2}
              onPageChange={handlePageChange2}
              onRowsPerPageChange={handleRowsPerPageChange2}
            />
          </TableContainer>
        </Paper>
      </div>

      <div>
        
      </div>

    </div>
  );
};

export default SubContainer2;