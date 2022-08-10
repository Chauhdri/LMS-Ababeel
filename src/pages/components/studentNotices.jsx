import { AppBar, Grid, Typography } from "@mui/material";
import StudentsNoticesLayout from "./StudentsNoticesLayout";
import { colorManager } from "./data";
import { CoursesChips } from './coursesChips';



export default function StudentNotices() {



    return (
        <Grid container  gap={6} sx={{ justifyContent: "space-evenly",marginBottom:"10em" }}>

            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} sx={{
                
            justifyContent: "center",
            alignItems: "center",
            }}>
                <CoursesChips />
            </Grid>

            <Grid container item gap={2} xs={10} sm={8} md={8} lg={3} xl={3} component="section"
                sx={{
                    height: 700,
                    marginBottom: 1,
                    minWidth: "auto",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    justifyContent: "space-evenly",
                    backgroundImage: colorManager(3),
                    borderRadius: "80px 0px 50px 5px",
                    scrollBehavior: "smoth",

                }}>
                <AppBar color="transparent" position="sticky">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <Typography variant="h4" component="header" sx={{ textAlign: "center", padding: 1, color: "white", textShadow: "2px 2px grey", borderBottom: "1px dashed grey" }}>
                            Courses
                        </Typography>
                    </Grid>
                </AppBar>
                <StudentsNoticesLayout data="Lectures" />
            </Grid>

            <Grid container item gap={2} xs={10} sm={8} md={8} lg={3} xl={3} component="section"
                sx={{
                    height: 700,
                    marginBottom: 1,
                    overflowY: "scroll",
                    overflowX: "hidden",
                    justifyContent: "space-evenly",
                    backgroundImage: colorManager(3),
                    borderRadius: "70px 0px 15px",
                }}>

                <AppBar color="transparent" position="sticky">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <Typography variant="h4" component="header" sx={{ textAlign: "center", padding: 1, color: "white", textShadow: "2px 2px grey", borderBottom: "1px dashed grey" }}>
                            Progress
                        </Typography>
                    </Grid>
                </AppBar>
                <StudentsNoticesLayout data="Assessments" />
            </Grid>

            <Grid container item gap={2} xs={10} sm={8} md={8} lg={3} xl={3} component="section"
                sx={{
                    height: 700,
                    marginBottom: 1,
                    overflowY: "scroll",
                    overflowX: "hidden",
                    justifyContent: "space-evenly",
                    backgroundImage: colorManager(3),
                    borderRadius: "70px 0px 15px",
                    scrollMargin: "500px"
                }}>
                <AppBar color="transparent" position="sticky">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

                        <Typography variant="h4" component="header" sx={{ textAlign: "center", padding: 1, color: "white", textShadow: "2px 2px grey", borderBottom: "1px dashed grey" }}>
                            Tasks
                        </Typography>
                    </Grid>
                </AppBar>

                <StudentsNoticesLayout data="Assignments" />
            </Grid>
        </Grid>
    );
}

