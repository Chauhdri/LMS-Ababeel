import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import BookSharpIcon from '@mui/icons-material/BookSharp';
import DeveloperBoardSharpIcon from '@mui/icons-material/DeveloperBoardSharp';
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import MiscellaneousServicesSharpIcon from '@mui/icons-material/MiscellaneousServicesSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import { SvgIcon } from '@mui/material';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';


export const colorManager = (y = Math.floor((Math.random() * 10) + 1),x) => {
    const colorData = [
        ["C4E759", "6DE195"], // green
        ["54E38E", "41C7AF"],// blue green
        ["DEB0DF", "A16BFE"],//blue purple
        ["FBC390", "D279EE"],//purple orange
        ["FDEB82", "F78FAD"],//orange pink
        ["C1E3FF", "ABC7FF"],// light green blue
        ["8DEBFF", "6CACFF"],// light blue dark blue
        ["41D8DD", "5583EE"],//dark blue sky blue
        ["C1E3FF", "ABC7FF"],
        ["8DEBFF", "6CACFF"],
        ["C1E3FF", "ABC7FF"]


    ]
    
    
    const decToHex = (r) => {
        let component = [];
    
        do {
            if (r % 16 < 9)
                component.push(r % 16)
            else
                switch (r % 16) {
                    case (10):
                        component.push("A");
                        break;
                    case (11):
                        component.push("B");
                        break;
                    case (12):
                        component.push("C");
                        break;
                    case (13):
                        component.push("D");
                        break;
                    case (14):
                        component.push("E");
                        break;
                    case (15):
                        component.push("F");
                        break;
                }
            r = Math.floor(r / 16);

        } while (r > 0)
        component.reverse();
        return x = component.join("");
    }
    
(x==undefined)?(x = "FF"):decToHex(x)


return `linear-gradient(180deg,#${colorData[y][0]},#${colorData[y][1]})`

}


export const navData = [
    {
        visibility: true,
        title: "About",
        icon: <HomeSharpIcon />,
        src: ""
    },
    {
        visibility: true,
        title: "Blog",
        icon: <BookSharpIcon />,
        src: ""
    },
    {
        visibility: true,
        title: "Languages",
        icon: <DeveloperBoardSharpIcon />,
        src: ""
    },
    {
        visibility: true,
        title: "Projects",
        icon: <DesignServicesSharpIcon />,
        src: ""
    },
    {
        visibility: true,
        title: "Services",
        icon: <MiscellaneousServicesSharpIcon />,
        src: ""
    },
    {
        visibility: true,
        title: "Contact",
        icon: <ContactMailSharpIcon />,
        src: ""
    }

]

export const articleData = [
    {
        visibility: true,
        title: "Live Classes",
        body: "We beleive that live interaction between students and teacher is essential to make learning more effective, more professional, our team is making sure the intrupt-free session is heldinng on for an effective results.",
        src: "/images/1.jpg",
        id: 1
    },
    {
        visibility: true,
        title: "Parent Control",
        body: "Sure, it is complusory to monitor progress and get notified, how it is going on as our students are our pride and to build thier career in right direction, we need sharp eye on path.",
        src: "/images/2.jpg",
        id: 2
    },
    {
        visibility: true,
        title: "Chats with Collegues",
        body: "Ahh... discusions makes interest, discusion leads to solution. to discover treasure of success, it is important to solve math problems, physics phenomenons and chemistry's mystry. Best group best discussion and finally best solution.",
        src: "/images/9.jpg",
        id: 3
    },
    {
        visibility: true,
        title: "Communication makes easy",
        body: "World is becoming global village, to communicate persons of different countries language is the superb key... and what about to dictate machines, again language is the key... and we have both key makers.... :-)",
        src: "/images/4.jpg",
        id: 4
    },
    {
        visibility: true,
        title: "Digital Era",
        body: "We all are entering digital era making lifes easier and convenient , Sure how can we forget to make education more advacne.",
        src: "/images/6.jpg",
        id: 5
    }


]
export const floatingButtonsDetail = [
    [
        { icon: <CallSharpIcon />, name: 'Call Us' },
        { icon: <Whatsapp />, name: 'Whatsapp Us' },
        { icon: <EmailSharpIcon />, name: 'Email Us' },
    ],
    [
        { icon: <FacebookSharpIcon />, name: 'Fb.com/Ababeel' },
        { icon: <Youtube />, name: 'Youtube.com/Ababeel' },
    ]
];

export const speedDialIcon = [
    <PermPhoneMsgIcon />,
    <FavoriteBorderSharpIcon />
]

function Whatsapp() {
    return (
        <SvgIcon fontSize='small' x="0px" y="0px"
            width="90px" height="90px" viewBox="0 0 90 90" >

            <path id="WhatsApp" d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522
            c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982
            c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537
            c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938
            c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537
            c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333
            c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882
            c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977
            c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344
            c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223
            C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"/>

        </SvgIcon>
    );
}


function Youtube() {
    return (
        <SvgIcon fontSize='small' viewBox="0 0 512 512" >

            <path id="youtube" d="M260.4,449c-57.1-1.8-111.4-3.2-165.7-5.3c-11.7-0.5-23.6-2.3-35-5c-21.4-5-36.2-17.9-43.8-39c-6.1-17-8.3-34.5-9.9-52.3   C2.5,305.6,2.5,263.8,4.2,222c1-23.6,1.6-47.4,7.9-70.3c3.8-13.7,8.4-27.1,19.5-37c11.7-10.5,25.4-16.8,41-17.5   c42.8-2.1,85.5-4.7,128.3-5.1c57.6-0.6,115.3,0.2,172.9,1.3c24.9,0.5,50,1.8,74.7,5c22.6,3,39.5,15.6,48.5,37.6   c6.9,16.9,9.5,34.6,11,52.6c3.9,45.1,4,90.2,1.8,135.3c-1.1,22.9-2.2,45.9-8.7,68.2c-7.4,25.6-23.1,42.5-49.3,48.3   c-10.2,2.2-20.8,3-31.2,3.4C366.2,445.7,311.9,447.4,260.4,449z M205.1,335.3c45.6-23.6,90.7-47,136.7-70.9   c-45.9-24-91-47.5-136.7-71.4C205.1,240.7,205.1,287.6,205.1,335.3z" />


        </SvgIcon>
    );
}
