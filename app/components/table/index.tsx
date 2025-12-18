import React, { ReactElement, CSSProperties } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { Box, FormGroup, Grid, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import styles from "./style.module.css";
import { DateInput, LabeledInput, SelectInput } from "../custom-input";

interface CustomTableProps {
  [x: string]: any;
  restStyleColumn?: CSSProperties,
  loading?: boolean;
  placeholder?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  columns: {
    name?: string | ReactElement;
    key: string;
    width?: number;
    Pagination?: number;
    searchField?: any;
    type?: any;
    dateFilter?: any;
    tableHeading?: string;
    rowStyles?: CSSProperties & { [key: string]: any };
  }[];
  rows: Record<string, string | number | ReactElement | boolean | undefined>[];
  showHeader?: boolean; // New prop to control header visibility
}

const CustomTable: React.FC<CustomTableProps> = (props) => {
  const { columns, rows, showHeader, restStyleColumn } = props;

  return (
    <Box>
      <TableContainer component={Paper} className={styles.mainTable}>
        <Box>
          {/* TOP TABLE HEADING AND SEARCH WITH DATE PICKER */}
          <Box className={styles.textFeild_datePicker}>
            <Stack direction={"row"} alignItems={"center"}>
              {/* TABLE HEADING */}
              {props.tableHeading && (
                <Box className={styles.tableHeading}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "16px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {props.tableHeading}
                  </Typography>
                </Box>
              )}
              <Box sx={{ width: "100%" }}>
                <Stack direction={"row"} spacing={1} justifyContent={"end"}>
                  {/* SEARCH TABLE DATA */}
                  {props.searchField && (
                    <FormGroup sx={{ position: "relative" }}>
                      <LabeledInput
                        label=""
                        placeholder="Search"
                        icon={<SearchIcon sx={{ fontSize: "25px" }} />}
                        className={styles.searchInput}
                      />
                    </FormGroup>
                  )}
                  {/* DATE FILTER */}
                  {props.dateFilter && (
                    <FormGroup className="">
                      <DateInput sx={{ p: 0 }} />
                    </FormGroup>
                  )}
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box className={styles.scrollbarTable}>
            <Table>
              {/* Conditionally render TableHead */}
              {showHeader !== false && (
                <TableHead>
                  <TableRow>
                    {columns.map((data) => (
                      <TableCell key={data.key} className={styles.tableHeader}>
                        {data.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
              )}
              <TableBody>
                {rows && rows.length > 0 ? (
                  rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        verticalAlign: "top",
                        position: "relative",
                        // "&:last-child td, &:last-child th": { border: 0 },
                        ...props.rowStyles,
                      }}
                      className={styles.tableHoverCell}
                    >
                      {/* TABLE DATA */}
                      {columns.map((column) => (
                        <TableCell
                          component="th"
                          scope="row"
                          key={column.key}
                          sx={{
                            height: "56px",
                            color: "#0F172A",
                            fontSize: "14px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                            borderBottom: "1px solid #D8D8D8",
                            "@media (max-width: 600px)": {
                              padding: "0px 15px 0px 12px!important",
                              height: "60px",
                            },
                            ...restStyleColumn,
                          }}
                        >
                          {row[column.key]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <Box sx={{ position: "relative", left: "25rem", mt: 3 }}>
                    <p className={styles.nodataFound}>No data found</p>
                  </Box>
                )}
              </TableBody>
            </Table>
          </Box>
        </Box>

        {props.Pagination && (
          <Grid container alignItems={"end"} mt={3}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box sx={{ width: "130px" }}>
                <FormGroup>
                  <SelectInput
                    placeholder="10 items"
                    label="Show rows:"
                    options={[
                      { value: "10 items", label: "10 items" },
                      { value: "25 items", label: "25 items" },
                      { value: "50 items", label: "50 items" },
                      { value: "100 items", label: "100 items" },
                      { value: "500 items", label: "500 items" },
                    ]}
                  />
                </FormGroup>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box className={styles.paginationShowMore}>
                <Box className={styles.showPagination}>
                  <Pagination
                    count={10}
                    showFirstButton
                    showLastButton
                    className="setCurrentPage"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </TableContainer>
    </Box>
  );
};

export default CustomTable;
