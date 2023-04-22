import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, styled, tableCellClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { searchEngines } from "../hooks/constants";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderBottom: `1px solid ${theme.palette.secondary.light}`
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function HistoryTable({ history }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>URL</StyledTableCell>
                        <StyledTableCell>Search Phrases</StyledTableCell>
                        <StyledTableCell>Search Engine</StyledTableCell>
                        <StyledTableCell align="right">Rank</StyledTableCell>
                        <StyledTableCell align="right">Impressions</StyledTableCell>
                        <StyledTableCell >Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {history.map((row, idx) => (
                        <StyledTableRow key={idx}>
                            <StyledTableCell component="th" scope="row">{row.url}</StyledTableCell>
                            <StyledTableCell>{row.searchPhrase}</StyledTableCell>
                            <StyledTableCell>{searchEngines[row.searchEngineId].label}</StyledTableCell>
                            <StyledTableCell align="right">{row.rank}</StyledTableCell>
                            <StyledTableCell align="right">{row.impressions}</StyledTableCell>
                            <StyledTableCell>{row.date}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}