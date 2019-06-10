import philz from './assets/philzcoffeeprofile.jpg';
import paul from './assets/paulmccartneyprofile.jpg';
import grumpycat from './assets/grumpycatprofile.jpg';
import One from './assets/paulmccartneyimg.png';
import Two from './assets/grumpycatimg.png';
import Three from './assets/philzcoffeeimg.png';

const dummyData = [ //array of objects
    
    {
        username: "philzcoffee",
        thumbnailUrl:  philz,
        imageUrl: Three,
        likes: 879,
        timestamp: "May 10th 2019, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: `Friday Vibes x 1000.
                .
                .
                #fridayvibes #friyay #philzway #howdoyouphilz #philzmintmojito #minttobe
                .
                .
                Thanks @irinapopa_oc for sharing your Mojito with us. 💙💚`
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "irinapopa_oc",
                text: "One of my favorite 😍"
            }
        ]//array of comments
    },//object
    {
        username: "realgrumpycat",
        thumbnailUrl: grumpycat,
        imageUrl: Two,
        likes: 60716,
        timestamp: "December 18, 2018, 03:12:09 pm",
        comments: [
            {
                username: "realgrumpycat",
                text: "I'm not angry. I'm happiness challenged #grumpycat #TardarSauce"
            },
            {
                username: "chinoxomemes",
                text: "She actually looks... dare I say...happy?"
            },
            {
                username: "themexican_leprechaun",
                text: "What a setup"
            },
            {
                username: "maleshsowii",
                text: "What beautiful blue eyes😻😻😻"
            },
            {
                username: "twoblackcatsnc",
                text: "This is me."
            }
        ]
    },
    {
        username: "paulmccartney",
        thumbnailUrl: paul,
        imageUrl: One,
        likes: 5306,
        timestamp: "July 14th 2017, 10:04:08 am",
        comments: [
            {
                username: "paulmccartney",
                text: '"Touring life is organised madness. It’s calculated chaos, especially in South America…" Go behind-the-scenes of Paul’s #FreshenUpTour in Stuart Bell’s latest tour blog on PaulMcCartney.com #PaulMcCartney #Brazil #Argentina #Chile #SouthAmerica'
            },
            {
                username: "livsegnini",
                text: "And South America (Specially Brazil) is always ready for your lovelly chaotic evenings, Sir Paul! 💙"
            },
            {
                username: "paperback_writer_1966",
                text: "Pretty cool Where is it😅?"
            },
            {
                username: "adianohoffman",
                text: "the most unbelievable day of my life #curitiba #brazil #meetandgreet"
            },
            {
                username: "pipesofpaul",
                text: "THIS IS THE GREATEST BIRTHDAY PRESENT EVER!!"
            }
        ]
    }
];

export default dummyData;
