
import { Card } from "@mui/material";
import { AllArticles } from "./articleStructure";
import { articleData} from "./data.jsx"




export function Articles() {




const article = articleData.map((value, index)=> {
    if (index%2)
    return (
        <Card key={index}
        sx={{
            margin:2
        }}>
           <AllArticles direction="row" title={value.title} body={value.body} src={value.src} />
        </Card>
    )
    else return (
        <Card key={index}
        sx={{
            margin:2
        }}>
            <AllArticles direction="row-reverse" title={value.title} body={value.body} src={value.src}   />
        </Card>
    )
})

return article;    

}