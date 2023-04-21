import { AppBar, Toolbar, Typography } from "@mui/material";
import FormDialog from "./FormDialog";


export default function Header({update}) {
    return (
        <AppBar sx={{position: 'unset'}}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" align="center">
                    InfoTrack Project
                </Typography>

                <FormDialog update={update} />
            </Toolbar>
        </AppBar>
    );
}