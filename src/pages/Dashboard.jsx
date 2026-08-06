import { useEffect, useState } from "react";
import {getDashboard} from "../services/dashboardService";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const data = await getDashboard(); 
                setDashboard(data);
            } catch (error) {
                console.error("Erreur chargement dashboard :", error);
            }
        };

        fetchDashboard();
    }, []);

    if (!dashboard) {
        return <Typography>Chargement...</Typography>;
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Tableau de bord
            </Typography>

            <Grid container spacing={2}>
                {dashboard.totalClients !== null && dashboard.totalClients !== undefined && (
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary">Clients</Typography>
                                <Typography variant="h5">{dashboard.totalClients}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}

                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Produits</Typography>
                            <Typography variant="h5">{dashboard.totalProduits}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Commandes</Typography>
                            <Typography variant="h5">{dashboard.totalCommandes}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;