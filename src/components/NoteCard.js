import React from "react";
import NoteContext from "../context/NoteContext";
import { useContext,useState } from "react";
import ModalForm from './ModalForm';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    IconButton
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export default function NoteCard(props) {
    const context=useContext(NoteContext)
    const {deleteNote}=context
        const [modal, setModal] = useState(false);
        const [isEdit,setEdit]=useState(false)

        const handleOpen = () => {
            setModal(true);
        };
        
        const handleClose = () => {
            setModal(false);
        };
    const currentNote = {
        id: props.id,
        title: props.title,
        description: props.description,
        tag: props.tag
    };

    function updateNote(){
        setEdit(true)
        handleOpen();
    }
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card 
                variant="outlined" 
                sx={{ 
                    minHeight: 300, 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "space-between" 
                }}
            >
                <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton aria-label="edit" onClick={updateNote} >
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={()=>deleteNote(props.id)}>
                            <DeleteOutlineIcon />
                        </IconButton>
                    </Box>
                    <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                        {props.tag}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">
                        View
                    </Button>
                </CardActions>
            </Card>
                 <ModalForm
                open={modal}
                handleClose={handleClose}
                isEdit={isEdit}
                currentNote={currentNote}
            />

        </Box>
        
        
    );
}