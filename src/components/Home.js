import React, { useContext, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import NoteContext from "../context/NoteContext";
import NoteCard from "./NoteCard";
import AddForm from "./AddForm";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function Home() {
    let navigate = useNavigate();
    const context = useContext(NoteContext);
    let userC = useContext(UserContext);
    const { user, fetchUserData } = userC;
    const { notes, getNotes } = context;

    useEffect(() => {
        const checkAuthAndFetchNotes = async () => {
            const token = localStorage.getItem('authToken');

            if (!token) {

                navigate('/');
                return;
            }


            const result = await fetchUserData();

            if (!result.success) {

                navigate('/');
            } else {

                getNotes();
            }
        };

        checkAuthAndFetchNotes();
    }, []);

    return (
        <Container>
            <AddForm />
            <Grid
                container
                spacing={3}
                justifyContent={{ xs: 'center', sm: 'flex-start' }} // Center on mobile, left on larger screens
                alignItems="center"
            >
                {notes.length === 0 ? (
                    <Grid item xs={12}>
                        <Typography variant="body1" textAlign="center">
                            No Notes to Show
                        </Typography>
                    </Grid>
                ) : (
                    notes.map((note) => (
                        <Grid item xs={12} sm={6} md={4} key={note._id}>
                            <NoteCard
                                title={note.title}
                                description={note.description}
                                tag={note.tag}
                                id={note._id}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
}

export default Home;