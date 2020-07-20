import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const styles = {
    button: {
        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
        color: 'white',
        height: 30,
        width: 80,
        padding: '0 30px',
    },
};

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(0, 3),
    },
    typing: {
        fontSize: 40,
        margin: 500,
        fontWeight: "bold",
        color: "#0d47a1",
    },
    header: {
        fontWeight: "bold",
        color: "#0d47a1",
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: "#bbdefb",
        padding: theme.spacing(2, 0, 3),
    },
    heroContact: {
        backgroundColor: "#bbdefb",
        padding: theme.spacing(2, 2, 1),
        fontWeight: "bold",
    },
    toolbar: {
        minHeight: 40,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
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
    cardTitle: {
        fontWeight: 600,
    },
    cardSubtitle: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    popup: {
        fontSize: 10,
        fontStyle: 'italic',
    },
    popupDet: {
        fontSize: 14,
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
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(4),
            width: theme.spacing(30),
            height: theme.spacing(7),
        },
    },
    whitetext: {
        color: "#FFFFFF",
        fontWeight: "bold",
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
        height: 35,
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
        padding: theme.spacing(1),
        margin: theme.spacing(2),
        maxWidth: 280,
    },
    testGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(3),
        backgroundColor: "#90caf9",
    },
    footer: {
        backgroundColor: "#bbdefb",
        padding: theme.spacing(6),
        maxWidth: "100%",
    },
    footertext: {
        color: "#FFFFFF",
        fontSize: 12,
    },
}));


export const textStyle = {
    padding: 10,
    margin: 10,
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
    color: "dark",
};

function createData(id, Icon, Name, Desc, Det1, Det2, Det3, Det4) {
    return { id, Icon, Name, Desc, Det1, Det2, Det3, Det4 };
}

export const cards = [
    createData('01',
        'https://santhanifincon.s3.amazonaws.com/dreampath.jpg',
        'Dream Path',
        "Let us stitch the right plan for your dream",
        "- An investment of Rs.1000 pm for 19 yrs will yield approximately 11.82 lacs",
        "- An investment of  Rs.100000 lump sum would have grown to Rs.14.41 lacs",
        "- A savings of Rs.1000/- for same period along with life insurance will yield Rs.6.62 lacs",
        "- Scheme name Jeevan Tarun LIC of India. Proceeds can be used for education/marriage"),
    createData('02',
        'https://santhanifincon.s3.amazonaws.com/growthplan.jpg',
        'Growth Plan',
        "Know the best way to save tax & build corpus",
        "- An investment of Rs.10000/- pm for 20 yrs will grow to 1.40 crores",
        "- Target scheme SBI Focussed Equity fund",
        "- Same investment will grow to 39.4 lacs with life insurance scheme LIC jeevan Anand",
        "- LIC immediate annuity guaranteed for whole life 5.7%"),
    createData('03',
        'https://santhanifincon.s3.amazonaws.com/mf.jpg',
        'Mutual Funds',
        "Let us demystify it for you simply",
        "- Canara Robeco Equity Debt Allocation Fund with moderately high risk will yield 5.9% annual returns",
        "- BNP Paribas Substantial Equity Hybrid Fund with moderately high risk will yield 7.9% annual returns",
        "- DSP Regular Savings Fund with moderately high risk will yield 6.6% annual returns",
        "- Indiabulls Savings Income Fund with Moderate risk will yield 2.5% annual returns"),
    createData('04',
        'https://santhanifincon.s3.amazonaws.com/retirement.jpg',
        'Retirement Plan',
        "Know the best ways to invest to live in style always",
        "- An investment of Rs.1000/- per month for 30 yrs will grow to Rs.54 lacs",
        "- A lump sum investment Rs.100000/- for same period will yield Rs.47.54 lacs",
        "- Same monthly investment for the same period will yield 10 lacs"),
    createData('05',
        'https://santhanifincon.s3.amazonaws.com/savetax.jpg',
        'Save Tax',
        "Get best Income Tax saving advice and tax returns filing services",
        "- A sum of Rs.1000/- pm for 10 yrs will give a return of Rs.2.78 lacs",
        "- A lump sum amount of Rs.100000/- will yield Rs.4.44 lacs. approximately",
        "- Same investment of Rs.1000/- pm will yield Rs.1.82 lacs with life insurance"),
    createData('06',
        'https://santhanifincon.s3.amazonaws.com/smartsave.jpg',
        'Save Smart',
        "Allow us to help you restructure your investment.",
        "- SBI corporate bond fund 11.75% pa with systematic withdrawal option Returns SWP totally tax free",
        "- Invest horizon 3 yrs, Long term cap gain tax exemption also available",
        "- PNB Housing Finance Ltd will give 7.60% annual interest to Senior citizens",
        "- LIC PMVVY will give an annual interest of Rs.110000/- for an investment of 14.49 lacs"),

];

