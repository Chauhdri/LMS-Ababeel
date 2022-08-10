import { Header,Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"



export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <>
                <Typography>Error</Typography>
            
            <Typography>There is no page present at current URL</Typography>

            <hr />
            <Button onClick={() => navigate("/")}>Return to Home Page</Button>
        </>
    )
}