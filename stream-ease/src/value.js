let brand=[
    {
        id:1,
        name:'Netflix',
        img:'netflix.jpg',
        GoldenPlan:'30$/year',
        DiamondPlan:'60$/year',
        PlatinumPlan:'70$/year'
    },
    {
        id: 2,
        name:"Amazon Prime",
        img:'',
        GoldenPlan:'33$/6 month',
        DiamondPlan:'23$/month',
        PlatinumPlan:'70$/year'
    },
    {
        id: 3,
        name:"HBO Max",
        img:'HBO.jpg',
        GoldenPlan:'23$/6 month',
        DiamondPlan:'15$/month',
        PlatinumPlan:'75$/year'
    },
    {
        id: 4,
        name:"Disney+",
        img:'disney.png',
        GoldenPlan:'23$/6 month',
        DiamondPlan:'20$/month',
        PlatinumPlan:'83$/year'
    },
    {
        id: 5,
        name:'VieOn',
        img:'',
        GoldenPlan:'3$/month',
        DiamondPlan:'13$/3 month',
        PlatinumPlan:'43$/year'
    },
    {
        id: 6,
        name:'FPT Play',
        img:'',
        GoldenPlan:'1$/month',
        DiamondPlan:'3$/month',
        PlatinumPlan:'33$/year'
    },
    {
        id: 7,
        name:'Hulu',
        img:'Hulu.jpg',
        GoldenPlan:'13$/month',
        DiamondPlan:'15$/month',
        PlatinumPlan:'75$/year'
    },
    {
        id: 8,
        name:'Apple Tv',
        img:'Appletv.jpg',
        GoldenPlan:'23$/6 month',
        DiamondPlan:'3$ /month',
        PlatinumPlan:'78$/year'
    }
];
let actor=[
    {id : 1,name:"Tim Robbins",age: "64"},
    {id : 2,name:"Morgan Freeman",age: "21"},
    {id: 3,name:"Liam Neeson",age: '24'},
    {id:4,name:'Ralph Fiennes',age:'22'},
    {id:5,name:'John Travolta',age:'33'},
    {id:6,name:'Uma Thurman',age:'44'},
    {id:7,name:'Samuel L. Jackson',age:'66'},
    {id:8,name:'Mark Hamill',age:'77'},
    {id:9,name:'Harrison Ford',age:'23'},
    {id:10,name:'Carrie Fisher',age:'44'},
    {id:11,name:'Marlon Brando',age:'55'},
    {id:12,name:'Al Pacino',age:'43'},
    {id:13,name:'James Caan',age:'65'},
    {id:14,name:'Christian Bale',age:'66'},
    {id:15,name:'Heath Ledger',age:'78'},
    {id:16,name:'Aaron Eckhart',age:'98'},
    {id:17,name:'Tingdong Yang',age:'34'},
    {id:18,name:'LiuBen',age:'35'},
    {id:19,name:'Ding Hui Yu',age:'45'},
    {id:20,name:'Du Yu Hang',age:'46'},
    {id:21,name:'Viola',age:'65'},
    {id:22,name:'An hu',age:'75'},
    {id:23,name:'Xiao Chien',age:'85'},
    {id:24,name:'Li Shen',age:'34'},
    {id:25,name:'Geng Yi Zhan',age:'33'},
    {id:26,name:'Xinghan Min',age:'31'},
    {id:27,name:'Chen Yu Nong',age:'32'},
    {id:28,name:'xiangyu Dai',age:'35'},
    {id:29,name:'Zheng Zi Hao',age:'37'},
    {id:30,name:'Tian Lu',age:'40'},
    {id:31,name:'Hua Kai',age:'35'},
    {id:32,name:'Zhao Lusi',age:'38'},
    {id:33,name:'Jiso Rui',age:'35'}
];
let movie=[
    {
        id : 1,
        title :"The Shawshank Redemption",
        year:1994,
        genres:[9,10],
        director:1,
        actors:[1,2],
        overview:'Andy Dufresne, a banker who is wrongly convicted of murdering his wife and her lover, is sentenced to life in Shawshank State Penitentiary. There, he befriends Ellis "Red" Redding and together they endure the challenges of prison life.',
        country:1,
        brand:[2],
        img:'./images/film1.jpg',
        video:''
    },
    {
        id:2,
        title:"Schindler's List",
        year:1993,
        genres:[10,16],
        director:2,
        actors:[3,4],
        overview:'Oskar Schindler, a German businessman, saved the lives of over a thousand Jews from the Holocaust by employing them in his factories.',
        country:1,
        brand:[2,8],
        img:'film2.jpg',
        video:''
    },
    {
        id:3,
        title:'Pulp Fiction',
        year:'1994',
        genre:[1,9],
        director:3,
        actor:[5,6,7],
        overview:'Pulp Fiction is a crime film by Quentin Tarantino that tells the story of three different tales. The first tale follows two bank robbers, Jules Winnfield and Vincent Vega, as they carry out a job. The second tale follows a man named Butch Coolidge who has been promised a large sum of money to lose a boxing match. The third tale follows a mob boss named Marsellus Wallace as he searches for his missing diamond-encrusted watch.',
        country:1,
        brand:[2,8],
        img:'film3.jpg',
        video:''
    },
    {
        id:4,
        title:'Star Wars: Episode V - The Empire Strikes Back',
        year:'1980',
        genres:[1,8,15,12],
        director:4,
        actors:[8,9,10],
        overview:'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
        country:1,
        brand:[2,4,8],
        img:'film4.jpg',
        video:''
    },
    {
        id:5,
        title:'The Godfather',
        year:'1972',
        genres:[9,10],
        director:5,
        actors:[11,12,13],
        overview:'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
        country:1,
        brand:[2],
        img:'film5.jpg',
        video:''
    },
    {
        id:6,
        title:'The Dark Knight',
        year:'2008',
        genres:[1,5,9,10],
        director:6,
        actors:[14,15,16],
        overview:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        country:1,
        brand:[2,8],
        img:'film6.jpg',
        video:''
    },
    {
        id:7,
        title:'Mystic Land',
        year:'2023',
        genres:[1,2,8],
        director:7,
        actors:[17,18,19],
        overview:'His parents sacrificed everything for science, but in return had a bad reputation. Ideals carry in their hearts the steadfast will to return honor to their parents. Ideal tries to find the scientific item "Kunlun Mirror", but is transported back to the Kunlun Mirror era. After many hardships and dangers, confronting mythical creatures, Ideal finally matured and untied the knot in his heart.',
        country:2,
        brand:[1,5,6],
        img:'film7.jpg',
        video:''
    },
    {
        id:8,
        title:'The Devildom Elephant Man',
        year:'2023',
        genre:[1],
        director:8,
        actor:[20,21,22],
        overview:'In the Kangxi period, the overseas Siamese state bowed to the Qing government, the story begins with the Siamese princess being secretly assassinated, many forces involved. Hong Xiguan went to prison for revenge, and a major change took place in his life. However, he actively pushed forward and solved all difficulties, fighting against the "magic elephants", wiping out evil forces and saving the poor people.A Siamese princess transforms into an oiranian and wise master',
        country:2,
        brand:[1,5,6],
        img:'film8.jpg',
        video:''
    },
    {
        id:9,
        title:'Jade Dynasty',
        year:'2019',
        genre:[2,3],
        director:9,
        actor:[23,24],
        overview:'In one night, the whole village was killed, he joined Qing Yunmen on the Great Truc Feng, accidentally obtained the treasure of the Burning Flame Cone, thereby falling into a war between the evil and evil factions! Fascinating oriental fairy tales await you',
        country:2,
        brand:[1,5,6],
        img:'film9.jpg',
        video:''
    },
    {
        id:10,
        title:'Cross The Battlefield',
        year:'2023',
        genre:[17,18],
        director:10,
        actor:[25,26,27],
        overview:'High school student Tran Vu Phi loves e-sports but has never been supported by his father. In an accident, his father and Wang Kai swapped identities, initially wanting to upset his son esports career, but during competitions, they understood each other, grew up together, and became close friends.',
        country:2,
        brand:[1,5,6],
        img:'film10.jpg',
        video:''
    },
    {
        id:11,
        title:'Tomahawk Action 2 Bloodthirsty',
        year:2023,
        genres:[17,18],
        director:11,
        actors:[28,29,30],
        overview:'A drug trafficking case in the border town of Xinnan City is under secret police surveillance, an accident deprives the most important evidence in the case, and undercover police begin a search. A Bu, who had just been released from prison and was about to welcome his new life, suddenly became the target of public criticism.',
        country:2,
        brand:[1,5,6],
        img:'film11.jpg',
        video:''
    },
    {
        id:12,
        title:'Blue Color of Life and Death',
        year:2019,
        genres:[3,18],
        director:12,
        actors:[31,32,33],
        overview:'An Xi (played by Zhao Luoxi) and Han Ai (played by Meng Meiqi) are accidentally swapped by their older brother Tuan Xi (played by Xiao Yi). Tuan Xi best friend Han Tai (Hua Kai) after learning of Enxi identity decides to protect her, rejecting Han Ai feelings. And to Enxi, is Tuan Xi ultimately a brother or a lover? These are all arrangements of destiny.',
        country:2,
        brand:[1,5,6],
        img:'film12.jpg',
        video:''
    },
    {
        id:13,
        title:'The Good, the Bad and the Ugly',
        year:'1966',
        genre:[8],
        director:13,
        actors:[35,36,37],
        overview:'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
        country:3,
        brand:[1,3,7],
        img:'film13.jpg',
        video:''
    }
];
let genre=[
    {id: 1,name: "Action"},
    {id: 2,name:"Fiction"},
    {id: 3,name:"Romance"},
    {id: 4,name:'Horror'},
    {id:5,name:'Thriller/Suspense'},
    {id:6,name:'Comedy'},
    {id:7,name:'Documentary'},
    {id:8,name:'Adventure'},
    {id:9,name:'Crime'},
    {id:10,name:'Drama'},
    {id:11,name:'Mystery'},
    {id:12,name:'Sci-fi'},
    {id:13,name:'Animation'},
    {id:14,name:'Family'},
    {id:15,name:'Fantasy'},
    {id:16,name:'History'},
    {id:17,name:'Comedy'},
    {id:18,name:'Friendship'}
];
let country=[
    {id:1,name:'USA'},
    {id:2,name:'China'},
];
let director=[
    {
        id: 1,
        name:"Frank Darabont",
        age: 63
      },
      {
        id: 2,
        name: "Steven Spielberg",
        age: 75
      },
      {
        id: 3,
        name: "Quentin Tarantino",
        age: 59
      },
      {
        id: 4,
        name:  "Irvin Kershner",
        age: 82
      },
      {
        id: 5,
        name:  "Francis Ford Coppola",
        age: 83
      },
      {
        id: 6,
        name:  "Christopher Nolan",
        age: 52
      },
      {
        id: 7,
        name:  "Teng Huatao",
        age: 61
      },
      {
        id: 8,
        name:  "David Lynch",
        age: 77
      },
      {
        id: 9,
        name:  "Tsui Hark",
        age: 71
      },
      {
        id: 10,
        name:  "John Woo",
        age: 70
      },
      {
        id: 11,
        name: "Wu Jing",
        age: 51
      },
      {
        id: 12,
        name:  "Hou Hsiao-hsien",
        age: 72
      },
      {
        id: 13,
        name:  "Sergio Leone",
        age: 86
      }
]