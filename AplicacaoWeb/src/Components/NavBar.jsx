import { AppBar, Toolbar, Typography, Button, Stack} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAltIcon";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlineIcon";

export default function NavBar() {
    const location = useLocation();
    return (
        <AppBar position="static" sx={{ borderRadius: 0}}>
            <Toolbar>
                <Stack direction="row" spacing={2}>
                    <Button
                    color={location.pathname === "/" ? "secondary" : "inherit"}
                    variant={location.pathname === "/" ? "contained" : "text"}
                    componet={RouterLink}
                    to="/"
                    starIcon={<ListAltIcon />}
                    sx={{ fontWeight: location.pathname === "/" ? "bold" : "normal" }}
                    >
                        Alunos
                    </Button>
                    <Button 
                        color={location.pathname === "/novo" ? "secondary" : "inherit"}
                        variant={location.pathname === "/novo" ? "contained" : "text"}
                        component={RouterLink}
                        to="/novo"
                        startIcon={<AddCircleOutlineIcon />}
                        sx={{
                            fontWeight: location.pathname === "/novo" ? "bold" : "normal",
                        }}
                    >
                        Novo Aluno
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}