import { Typography, Box, Container,Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const NAVBAR_HEIGHT = 64;

const Welcome = () => {
    let context = useContext(UserContext);
    const { fetchUserData, user } = context;

    useEffect(() => {
        const checkAuth = async () => {
            await fetchUserData();
        };
        checkAuth();
    }, []);

    return (
        <Container>
            <Box
                sx={{
                    height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: 2,
                    boxSizing: "border-box"
                }}
            >
                {(!user || !user.name) ? (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                sx={{
                                    px: { xs: 2, sm: 30 },
                                    fontSize: { xs: '2rem', sm: '3rem' }
                                }}
                            >
                                iNoteBook - Where Every Thought Finds Its Home. Start Your Journey!
                            </Typography>
                            <Typography textAlign={'center'}>
                                Please Login or Signup To Continue
                            </Typography>
                        </Box>
                    </>
                ) : (
                    <>
                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 ,justifyContent:'center',alignItems:'center'}}>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            sx={{
                                px: { xs: 2, sm: 30 }, 
                                fontSize: { xs: '1.8rem', sm: '3rem' } 
                            }}
                        >
                            Great to see you, {user.name}! Your digital notebook awaits!
                        </Typography>
                        <Button variant="contained" size='large' component={Link} to="/Dashboard">Dashborad</Button>
                    </Box>
                    </>
                )}
            </Box>
        </Container>
    );
};

export default Welcome;