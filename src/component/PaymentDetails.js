import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Pagination,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import NoteContext from "../context/Context";

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

export default function PaymentDetails() {
  const { value } = useContext(NoteContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (page < 0) {
      setPage(0);
    } else if (page >= Math.ceil(value.length / rowsPerPage)) {
      setPage(Math.max(0, Math.ceil(value.length / rowsPerPage) - 1));
    }
  }, [page, rowsPerPage, value.length]);

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Sort rows by date
  const sortedRows = value.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  const displayedRows = sortedRows.slice(startIndex, endIndex);

  return (
    <Box sx={{ padding: "0px 0px 0px 0px" }}>
      <center>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "6px 0px 6px 0px",
            marginBottom: "30px",
            color: "white",
            bgcolor: "#4a148c",
            borderRadius: "5px",
            width: "230px",
          }}
        >
          <Typography sx={{ fontSize: "18.5px" }}>PAYMENT DETAILS</Typography>
        </Box>
      </center>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 300, padding: "0px 0px 0px 0px" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">R/B</StyledTableCell>
              <StyledTableCell align="left">R/M</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { displayedRows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="left">{row.name}</StyledTableCell>
                  <StyledTableCell align="left">{row.received}</StyledTableCell>
                  <StyledTableCell align="left">{row.amount}</StyledTableCell>
                  <StyledTableCell align="left">{row.date}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <TablePagination
        rowsPerPageOptions={[10,20,30]}
        variant="outlined"
        component="div"
        count={value.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage='Rows'
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
