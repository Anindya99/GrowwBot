//it is used to get all investment in stock,mutual-fund,FD respectively in cahtbot

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
import { getInvestmentsbyId } from "../../../api/investment.api";
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

export default function OrderTable(props) {
  
  const userId= AuthStore.getUserDetail()._id;
  const token= localStorage.jwToken;
  const [rows, setRows] = useState([]);
  const [loading,setLoading]= useState(true);
  useEffect(() => {
    const apiCall = async () => {
        getInvestmentsbyId(token,userId,props.productId).then(data=>{
        if(!data.hasOwnProperty('message')) setRows(data.orders);
        setLoading(false);
      });
    };
    apiCall();
  }, []);

  if(loading) return null;
  if(!rows.length){
    return(
       
       <div style={{ backgroundColor:'white',fontSize:'small',height:'40px',paddingTop:'20px',paddingLeft:'28px' }} className='success'>
           <h5>You have not invested in this {props.productType}.</h5>
       </div>
    ) 
 }
 else{
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
            <Table sx={{ minWidth: 70 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                  <StyledTableCell >{props.productType} Info</StyledTableCell>
                  <StyledTableCell >Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                      {moment(row.date).format("DD/MM/YY")}<br/>
                      {row.quantity}<br/>
                    </StyledTableCell>
                    <StyledTableCell >₹{row.total}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
  
    }
}
