import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ComboBox from './ComboBox';
import { postSearch } from '../hooks/queries';

const defaultValue = {
    url: "https://www.infotrack.co.uk", phrase: "land registry searches", engine: {
        label: 'Google Chrome',
        id: 0
    }
}

export default function FormDialog({ update }) {
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState(defaultValue);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setValues(defaultValue)
    };

    const handleSubmit = () => {
        postSearch(values.phrase, values.url, values.engine.id, update)

        handleClose();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div>
            <Button onClick={handleOpen} color="secondary" variant="contained">New Search</Button>
            <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
                <DialogTitle>Search!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Write the details of the website that you want to search.
                    </DialogContentText>
                    <TextField
                        color='secondary'
                        autoFocus
                        margin="dense"
                        id="url"
                        label="URL"
                        type="url"
                        fullWidth
                        variant="outlined"
                        value={values.url}
                        onChange={handleChange('url')}
                    />
                    <TextField
                        color='secondary'
                        margin="dense"
                        id="phrase"
                        label="Phrases to search"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={values.phrase}
                        onChange={handleChange('phrase')}
                    />
                    <ComboBox values={values} setValue={setValues} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color='error'>Cancel</Button>
                    <Button onClick={handleSubmit} variant="outlined" color='success' >Search</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}