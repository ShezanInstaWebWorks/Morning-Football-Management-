import React, { useContext, useEffect, useState } from 'react';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TextField, Typography } from "@mui/material";
import { TablePagination } from "@mui/material";
import NoteContext from '../context/Context';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CostDetails() {
  const { value1 } = useContext(NoteContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterDate, setFilterDate] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const filteredRows = value1.filter(row => {
    // Assuming row.date is a string representation of the date
    // You can adjust the condition based on your date format and comparison logic
    return row.date.includes(filterDate);
  });

  const sortedRows = filteredRows.sort((a, b) => {
    // Assuming row.date is in format 'YYYY-MM-DD'
    return new Date(b.date) - new Date(a.date);
  });

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = sortedRows.slice(startIndex, endIndex);

  useEffect(() => {
    const maxPage = Math.max(0, Math.ceil(sortedRows.length / rowsPerPage) - 1);

    if (page < 0) {
      setPage(0);
    } else if (page > maxPage) {
      setPage(maxPage);
    }
  }, [page, rowsPerPage, sortedRows.length]);

 

  return (
    <Box>
      <center>
        <Box sx={{
          display: "flex", justifyContent: "center", alignItems: "center", padding: "6px 0px 6px 0px",
          marginBottom: "30px", color: "white", bgcolor: "#4a148c", borderRadius: "5px", width: "230px"
        }}>
          <Typography sx={{ fontSize: "18.5px" }}>
            COST DETAILS
          </Typography>
        </Box>
      </center>
     
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Cost on</StyledTableCell>
              <StyledTableCell align="right">C/A</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <StyledTableRow key={row.cost}>
                <StyledTableCell component="th" scope="row">
                  {row.cost}
                </StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        variant="outlined"
        component="div"
        count={sortedRows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage='Rows'
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
