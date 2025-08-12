import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Divider,
    Box
} from "@mui/material";

export function ViewNoteModal({ open, handleClose, note }) {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ color:'black', fontWeight: 'bold' }}>Title: {note.title}</DialogTitle>
            <DialogContent dividers>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                        Tag: {note.tag}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Created: {note.date}
                    </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography 
                    variant="body1" 
                    sx={{ 
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word'
                    }}
                >
                    {note.description}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}