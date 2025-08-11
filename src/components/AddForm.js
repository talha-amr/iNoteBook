import React, { useState } from 'react';
import { Typography, Button,Box } from '@mui/material';
import ModalForm from './ModalForm';

export default function AddForm() {
    const [modal, setModal] = useState(false);

    const handleOpen = () => {
        setModal(true);
    };

    const handleClose = () => {
        setModal(false);
    };

    return (
        <div>
            <Typography variant="h4" sx={{ marginBlock: 3, textAlign: 'center' }}>
                To Create Note Press the Button
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBlock: 3 }}>
                <Button
                    size="large"
                    variant="contained"
                    onClick={handleOpen}
                >
                    Create A Note
                </Button>
            </Box>
            <Typography variant="h4" sx={{ marginBlock: 3 }}>
                Your Notes:
            </Typography>
            <ModalForm
                open={modal}
                handleClose={handleClose}
                isEdit={false}
                currentNote={null}
            />
        </div>
    );
}