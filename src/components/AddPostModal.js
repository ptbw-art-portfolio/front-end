import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CreatePost from './CreatePost';
export default function AddPostModal() {
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    return (
        <div>
            <div color="default" onClick={handleClickOpen}>
                <img src="https://img.icons8.com/material-rounded/48/000000/menu-2.png" />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <CreatePost onClose={handleClose} />
                {/* <DialogContent  >
                    <Button >Edit</Button>
                    <Button >Delete</Button>
                </DialogContent> */}
            </Dialog>
        </div>
    );
}