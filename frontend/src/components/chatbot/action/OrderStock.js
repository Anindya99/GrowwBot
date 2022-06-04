import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AuthStore from "../../../middleware/authstore";
const moment = require("moment");

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

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function OrderTable() {
  localStorage.setItem("route","investments-user-invest");
  const userId= AuthStore.getUserDetail()._id;
  //const token= localStorage.jwToken;
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      const data = await fetch(`http://localhost:5000/api/v1/orders/${userId}`);
      const orderObj = await data.json();
      setRows(orderObj.orders);
    };
    apiCall();
  }, []);
  return (
    <div
      style={{
        marginLeft: "0px",
        marginTop: "2px",
        marginBottom:"20px",
        width: "345px",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="">Order Date</StyledTableCell>
              <StyledTableCell align="">Stock Name</StyledTableCell>
              <StyledTableCell align="">Quantity</StyledTableCell>
              <StyledTableCell align="">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {moment(row.date).format("DD/MM/YY")}
                </StyledTableCell>
                <StyledTableCell align="">{row.stock.name}</StyledTableCell>
                <StyledTableCell align="">{row.quantity}</StyledTableCell>
                <StyledTableCell align="">{row.total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
