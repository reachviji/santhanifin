import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const styles = {
    button: {
        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
        color: 'white',
        height: 40,
        width: 90,
        padding: '0 30px',
    },
};

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(0, 3),
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: "#bbdefb",
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),

    },
    cardGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
        backgroundColor: "#64b5f6",
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(10),
            width: theme.spacing(28),
            height: theme.spacing(8),
        },
    },
    whitetext: {
        color: "#FFFFFF",
    },
    fullwidth: {
        width: "100%",
        backgroundColor: "#90caf9",

    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor: red[500],
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 16,
    },
    description: {
        fontSize: 12,
    },
    button: {
        background: 'linear-gradient(45deg, #1e88e5 30%, #90caf9 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    boxProps: {
        bgcolor: '#e3f2fd',
        m: 1,
        border: 3,
        style: { width: '5rem', height: '5rem' },
    },
    bcolor: {
        backgroundColor: "#90caf9",
    },
    testimonial: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing(3),
        margin: theme.spacing(4),
        maxWidth: 350,
    },
    testGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
        backgroundColor: "#90caf9",
    },
    footer: {
        backgroundColor: "#bbdefb",
        padding: theme.spacing(6),
        maxWidth: "100%",
    },
}));


export const textStyle = {
    padding: 10,
    margin: 10,
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
    color: "dark",
};

function createData(id, Icon, Name, Desc, Det1, Det2, Det3) {
    return { id, Icon, Name, Desc, Det1, Det2, Det3 };
}

export const cards = [
    createData('01',
        'https://santhanifincon.s3.amazonaws.com/dreampath.jpg',
        'Dream Path',
        "Let us stitch the right plan for your dream",
        "UPI",
        "UPI",
        "UPI"),
    createData('02',
        'https://santhanifincon.s3.amazonaws.com/growthplan.jpg',
        'Growth Plan',
        "Know the best way to save tax & build corpus",
        "gp1",
        "gp2",
        "gp3"),
    createData('03',
        'https://santhanifincon.s3.amazonaws.com/mf.jpg',
        'Mutual Funds',
        "Let us demystify it for you simply",
        "mf1",
        "mf2",
        "mf3"),
    createData('04',
        'https://santhanifincon.s3.amazonaws.com/retirement.jpg',
        'Retirement Plan',
        "Know the best ways to invest to live in style always",
        "rb1",
        "rb2",
        "rb3"),
    createData('05',
        'https://santhanifincon.s3.amazonaws.com/savetax.jpg',
        'Save Tax',
        "Get best Income Tax saving advice and tax returns filing services",
        "st1",
        "st2",
        "st3"),
    createData('06',
        'https://santhanifincon.s3.amazonaws.com/smartsave.jpg',
        'Save Smart',
        "Allow us to help you restructure your investment.",
        "ss1",
        "ss2",
        "ss3"),

];

