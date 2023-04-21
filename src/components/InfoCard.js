import { Box, Divider, Paper, Stack, Typography } from "@mui/material";



export default function InfoCard({ data }) {
    return (
        <Paper elevation={9} sx={{
            backgroundColor: (t) => t.palette.secondary.light,
            color: (t) => t.palette.secondary.contrastText,
            padding: '32px',
            overflow: 'hidden'
        }}>
            <Typography variant='h5' marginBottom={2}>{data.title}</Typography>

            <Stack gap={2} direction='row' flexWrap='wrap' justifyContent='space-between'>

                <Stack gap={2} direction='column'>
                    {data.infosLeft.map((x, idx) => (
                        <Box key={idx}>
                            <Typography variant='h6'>{x.label}</Typography>
                            <Typography variant='body1'>{x.context}</Typography>
                        </Box>
                    ))}
                </Stack>

                {data.infosRight != undefined ? (
                    <Stack gap={2} direction='column'>
                        {data.infosRight.map((x, idx) => (
                            <Box key={idx}>
                                <Typography variant='h6'>{x.label}</Typography>
                                <Typography variant='body1'>{x.context}</Typography>
                            </Box>
                        ))}
                    </Stack>
                ) : null}
            </Stack>
        </Paper>
    );
}