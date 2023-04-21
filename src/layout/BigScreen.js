import React, { useEffect, useState } from "react";
import { AppBar, Box, Divider, Grid, Paper, Stack, Toolbar, Typography } from "@mui/material";
import Header from "../components/Header";
import HistoryTable from "../components/HistoryTable";
import HistoryChart from "../components/HistoryChart";
import { getChartData, getHistory } from "../hooks/queries";
import { searchEngines } from "../hooks/constants";
import InfoCard from "../components/InfoCard";

export default function BigScreen() {

  const [history, setHistory] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [topSearch, setTopSearch] = useState({ avarage: 0 });

  const lastSearchData = {
    title: "Here is your last search!",
    infosLeft: [
      { label: "URL:", context: history[0]?.url },
      { label: "Search Phrases:", context: history[0]?.searchPhrase },
      { label: "Rank:", context: history[0]?.rank },
    ],
    infosRight: [
      { label: "Search Engine:", context: searchEngines[history[0]?.searchEngineId]?.label },
      { label: "Impressions:", context: history[0]?.impressions },
      { label: "Date:", context: history[0]?.date }
    ]
  }
  const topSearchData = {
    title: "Top Search",
    infosLeft: [
      { label: "URL:", context: topSearch?.url },
      { label: "Search Count:", context: topSearch?.count },
      { label: "Total Impressions:", context: topSearch?.impressions },
    ],
    infosRight: [
      { label: "Search Phrases:", context: topSearch?.searchPhrase },
      { label: "Avarage Impressions:", context: topSearch?.avarage },
    ]
  }

  useEffect(() => {
    getHistory(setHistory)
  }, [])

  useEffect(() => {
    for (let i = 0; i < chartData.length; i++) {
      const element = chartData[i];

      if (element?.avarage > topSearch.avarage) {
        setTopSearch(element)
        console.log(element)
      }
    }
  }, [chartData])

  useEffect(() => {
    getChartData()
      .then((res) => {
        setChartData(res.data);
      })
  }, [history])




  return (
    <div>
      <Header update={setHistory} />

      <Grid
        container
        sx={{ height: 'unset', margin: 'unset' }}
        alignContent='flex-start'
        columnGap={5}
        rowGap={5}
        columns={{ xs: 4, sm: 8, md: 12 }}
        padding={5}
      >
        <Grid item md={12} sm={8} xs={4}>
          <Paper elevation={9} component={Stack} alignItems='left' sx={{
            backgroundColor: (t) => t.palette.secondary.light,
            color: (t) => t.palette.secondary.contrastText,
            padding: '32px',
            overflow: 'hidden'
          }}>
            <Typography variant='h4'>Welcome to the InfoTrack Project!</Typography>
            <Typography variant='body1'>You can start using it imadiatelly by clicking the "New Search" button at the top right corner!</Typography>
          </Paper>


        </Grid>

        <Grid item lg={5} md={3.5} sm={8} xs={4}>
          <Stack gap={2} justifyContent='space-between' height='100%'>
            <InfoCard data={lastSearchData} />
            <InfoCard data={topSearchData} />
          </Stack>
        </Grid>

        <Grid item md={8} sm={8} xs={4}>
          <Paper elevation={9} component={Stack} alignItems='center' gap={1} sx={{
            backgroundColor: 'transparent',
            color: (t) => t.palette.primary.contrastText,
            boxShadow: 'none',
            overflow: 'hidden',
          }}>
            <Typography variant='h4'>Avarage Impression Chart</Typography>
            <HistoryChart data={chartData} />
          </Paper>
        </Grid>

        <Grid item md={12} sm={8} xs={4}>
          <Paper elevation={9} component={Stack} alignItems='left' gap={1} sx={{
            backgroundColor: (t) => t.palette.secondary.light,
            color: (t) => t.palette.secondary.contrastText,
            padding: '32px',
            overflow: 'hidden'
          }}>
            <Typography variant='h4'>Last 15 Search</Typography>
            <HistoryTable history={history} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}