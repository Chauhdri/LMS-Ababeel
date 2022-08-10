

import { Grid, Typography, CardContent, CardMedia } from "@mui/material";
import { colorManager } from "./data";

export function AllArticles(props) {
    return (
        <Grid container id="article"
            direction= {props.direction}
            >


            <ArticleBody title={props.title} body={props.body} />
            <ArticleMedia src={props.src} alt={props.title} />

        </Grid>
    )
}





export function ArticleBody(props) {

    return (
        <Grid item md={8} sm={12}
            sx={{
                padding: 3,
                height: 380,
                backgroundImage :colorManager(2),

            }}>
            <CardContent>
                <Typography id="articleHead"
                    align="left"
                    variant="h3"
                    component="div"
                    gutterBottom
                        >
                    {props.title}
                    
                </Typography>
                <Typography id="articleBody"
                    align="justify"
                    component="div"
                    paragraph={true}
                >
                    {props.body}
                </Typography>
            </CardContent>
        </Grid>
    )

}

export function ArticleMedia(props) {


    return (
        <Grid container item md={4} sm={12}
            sx={{
                height: 380,
            }}>
            <CardMedia elevation={4}
                component="img"
                src={props.src}
                alt={props.alt}
                variant="outlined"
            ></CardMedia>
        </Grid>
    )

}