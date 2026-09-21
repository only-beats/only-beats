const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Aao Milo Chalo",
        "artist": "Pritam",
        "album": "Jab We Met",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0252fe6875028c892308ffc2f7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aao%20Milo%20Chalo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aao%20Milo%20Chalo&artist_name=Pritam&album=Jab%20We%20Met"
    },
    {
        "id": 2,
        "title": "Aaoge Jab Tum",
        "artist": "Rashid Khan",
        "album": "Jab We Met",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0252fe6875028c892308ffc2f7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aaoge%20Jab%20Tum.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aaoge%20Jab%20Tum&artist_name=Rashid%20Khan&album=Jab%20We%20Met"
    },
    {
        "id": 3,
        "title": "Ae Kash Ke Hum",
        "artist": "Jatin-Lalit",
        "album": "Kabhi Haan Kabhi Naa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0240806cd6dfc7b82254f45889",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ae%20Kash%20Ke%20Hum.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ae%20Kash%20Ke%20Hum&artist_name=Jatin-Lalit&album=Kabhi%20Haan%20Kabhi%20Naa"
    },
    {
        "id": 4,
        "title": "Afghan Jalebi",
        "artist": "Pritam",
        "album": "Phantom",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027037561f1e7a2c5ff3cd0a38",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Afghan%20Jalebi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Afghan%20Jalebi&artist_name=Pritam&album=Phantom"
    },
    {
        "id": 5,
        "title": "Aise Kyun",
        "artist": "Rekha Bhardwaj",
        "album": "Mismatched",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0290853ed444266d1d2bb55c28",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aise%20Kyun.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aise%20Kyun&artist_name=Rekha%20Bhardwaj&album=Mismatched"
    },
    {
        "id": 6,
        "title": "Aaja Piya Tohe Pyar Doon",
        "artist": "Lata Mangeshkar",
        "album": "Baharon Ke Sapne",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0250557f616c35cf935dc7681b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aaja%20Piya%20Tohe%20Pyar%20Doon.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aaja%20Piya%20Tohe%20Pyar%20Doon&artist_name=Lata%20Mangeshkar&album=Baharon%20Ke%20Sapne"
    },
    {
        "id": 7,
        "title": "Aajkal Tere Mere Pyar Ke",
        "artist": "Suman Kalyanpur, Mohammed Rafi",
        "album": "Brahmachari",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0201f976992b990a5028f8444b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aajkal%20Tere%20Mere%20Pyar%20Ke.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aajkal%20Tere%20Mere%20Pyar%20Ke&artist_name=Suman%20Kalyanpur%2C%20Mohammed%20Rafi&album=Brahmachari"
    },
    {
        "id": 8,
        "title": "Aap Ke Aa Jane Se",
        "artist": "Mohammed Aziz",
        "album": "Khudgarz",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023518cf5a5c588742a1324554",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aap%20Ke%20Aa%20Jane%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aap%20Ke%20Aa%20Jane%20Se&artist_name=Mohammed%20Aziz&album=Khudgarz"
    },
    {
        "id": 9,
        "title": "Aap Ki Ankhon Mein Kuch",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Ghar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0225176145c80e3a16f5b1f4a7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aap%20Ki%20Ankhon%20Mein%20Kuch.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aap%20Ki%20Ankhon%20Mein%20Kuch&artist_name=Kishore%20Kumar%2C%20Lata%20Mangeshkar&album=Ghar"
    },
    {
        "id": 10,
        "title": "Abhi Na Jao Chhod Kar",
        "artist": "Asha Bhosle, Mohammed Rafi",
        "album": "Dev",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fbe87438ee8a4f2a220d1960",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Abhi%20Na%20Jao%20Chhod%20Kar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Abhi%20Na%20Jao%20Chhod%20Kar&artist_name=Asha%20Bhosle%2C%20Mohammed%20Rafi&album=Dev"
    },
    {
        "id": 11,
        "title": "Ambarsariya",
        "artist": "Sona Mohapatra",
        "album": "Fukrey",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029701faf1c34cc355fd3cd3c0",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ambarsariya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ambarsariya&artist_name=Sona%20Mohapatra&album=Fukrey"
    },
    {
        "id": 12,
        "title": "Apna Bana Le",
        "artist": "Sachin-Jigar",
        "album": "Bhediya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c7b32b2ebd1ed948c9e7e5c5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Apna%20Bana%20Le.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Apna%20Bana%20Le&artist_name=Sachin-Jigar&album=Bhediya"
    },
    {
        "id": 13,
        "title": "Bade Achhe Lagte Hain",
        "artist": "Amit Kumar, R. D. Burman",
        "album": "Balika Badhu",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027b3ff6520b83f18b271bf0fe",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bade%20Achhe%20Lagte%20Hain.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bade%20Achhe%20Lagte%20Hain&artist_name=Amit%20Kumar%2C%20R.%20D.%20Burman&album=Balika%20Badhu"
    },
    {
        "id": 14,
        "title": "Bahara",
        "artist": "Vishal-Shekhar",
        "album": "I Hate Luv Storys",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021992dd7b33baf5887ea4a1ec",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bahara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bahara&artist_name=Vishal-Shekhar&album=I%20Hate%20Luv%20Storys"
    },
    {
        "id": 15,
        "title": "Bahon Ke Darmiyan",
        "artist": "Alka Yagnik, Hariharan",
        "album": "Khamoshi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029bf25039733399650b2267a9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bahon%20Ke%20Darmiyan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bahon%20Ke%20Darmiyan&artist_name=Alka%20Yagnik%2C%20Hariharan&album=Khamoshi"
    },
    {
        "id": 16,
        "title": "Bahon Mein Chale Aao",
        "artist": "Lata Mangeshkar, R. D. Burman",
        "album": "Anamika",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0249c1949911566df218c5f0dd",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bahon%20Mein%20Chale%20Aao.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bahon%20Mein%20Chale%20Aao&artist_name=Lata%20Mangeshkar%2C%20R.%20D.%20Burman&album=Anamika"
    },
    {
        "id": 17,
        "title": "Bangle Ke Peechhe",
        "artist": "Lata Mangeshkar",
        "album": "Samadhi",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b5d74fc06db6abd836f99700",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bangle%20Ke%20Peechhe.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bangle%20Ke%20Peechhe&artist_name=Lata%20Mangeshkar&album=Samadhi"
    },
    {
        "id": 18,
        "title": "Be Intehaan",
        "artist": "Atif Aslam, Sunidhi Chauhan",
        "album": "Race 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02af932ac943c7afa6b74659f7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Be%20Intehaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Be%20Intehaan&artist_name=Atif%20Aslam%2C%20Sunidhi%20Chauhan&album=Race%202"
    },
    {
        "id": 19,
        "title": "Bhage Re Mann",
        "artist": "Sunidhi Chauhan",
        "album": "Chameli",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02db065746f99e0572f2c26d70",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bhage%20Re%20Mann.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bhage%20Re%20Mann&artist_name=Sunidhi%20Chauhan&album=Chameli"
    },
    {
        "id": 20,
        "title": "Bin Tere",
        "artist": "Vishal-Shekhar",
        "album": "I Hate Luv Storys",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021992dd7b33baf5887ea4a1ec",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bin%20Tere.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bin%20Tere&artist_name=Vishal-Shekhar&album=I%20Hate%20Luv%20Storys"
    },
    {
        "id": 21,
        "title": "Bol Na Halke Halke",
        "artist": "Shankar-Ehsaan-Loy",
        "album": "Jhoom Barabar Jhoom",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027b4cb0b50580de81cce0a14b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bol%20Na%20Halke%20Halke.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bol%20Na%20Halke%20Halke&artist_name=Shankar-Ehsaan-Loy&album=Jhoom%20Barabar%20Jhoom"
    },
    {
        "id": 22,
        "title": "Chaar Kadam",
        "artist": "Shaan",
        "album": "Pk",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0219fa40d5313010b1a2d971dc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chaar%20Kadam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chaar%20Kadam&artist_name=Shaan&album=Pk"
    },
    {
        "id": 23,
        "title": "Chahun Main Ya Naa",
        "artist": "Palak Muchhal",
        "album": "Aashiqui 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026404721c1943d5069f0805f3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chahun%20Main%20Ya%20Naa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chahun%20Main%20Ya%20Naa&artist_name=Palak%20Muchhal&album=Aashiqui%202"
    },
    {
        "id": 24,
        "title": "Chori Chori",
        "artist": "Alka Yagnik",
        "album": "Lucky: No Time For Love",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02455859f3fee39ff82591b361",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chori%20Chori.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chori%20Chori&artist_name=Alka%20Yagnik&album=Lucky%3A%20No%20Time%20For%20Love"
    },
    {
        "id": 25,
        "title": "Dagabaaz Re",
        "artist": "Rahat Fateh Ali Khan",
        "album": "Dabangg 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0205b3ca44c67b40e983179d1c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dagabaaz%20Re.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dagabaaz%20Re&artist_name=Rahat%20Fateh%20Ali%20Khan&album=Dabangg%202"
    },
    {
        "id": 26,
        "title": "Darkhaast",
        "artist": "Mithoon",
        "album": "Shivaay",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e7fe7d656750737e8d369f95",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Darkhaast.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Darkhaast&artist_name=Mithoon&album=Shivaay"
    },
    {
        "id": 27,
        "title": "Dooron Dooron",
        "artist": "Paresh Pahuja.",
        "album": "Dooron Dooron",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029fd839ed5ae2fd87ee8ac923",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dooron%20Dooron.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dooron%20Dooron&artist_name=Paresh%20Pahuja.&album=Dooron%20Dooron"
    },
    {
        "id": 28,
        "title": "Dil Hoom Hoom Kare",
        "artist": "Lata Mangeshkar",
        "album": "Rudaali",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025ee50519416d3adffefe591d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Hoom%20Hoom%20Kare.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Hoom%20Hoom%20Kare&artist_name=Lata%20Mangeshkar&album=Rudaali"
    },
    {
        "id": 29,
        "title": "Ek Ajnabee Haseena Se",
        "artist": "Kishore Kumar",
        "album": "Ajanabee",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eb275240fe306c412f535f8c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ek%20Ajnabee%20Haseena%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ek%20Ajnabee%20Haseena%20Se&artist_name=Kishore%20Kumar&album=Ajanabee"
    },
    {
        "id": 30,
        "title": "Ek Din Aap",
        "artist": "Kumar Sanu",
        "album": "Yes Boss",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02fdc712431d79bcacf01d6131",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ek%20Din%20Aap.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ek%20Din%20Aap&artist_name=Kumar%20Sanu&album=Yes%20Boss"
    },
    {
        "id": 31,
        "title": "Ek Phool",
        "artist": "Priyanka Barve",
        "album": "TDM",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f844cb319c12f5dd0a773baf",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ek%20Phool.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ek%20Phool&artist_name=Priyanka%20Barve&album=TDM"
    },
    {
        "id": 32,
        "title": "Fakira",
        "artist": "Vishal-Shekhar",
        "album": "Student of the Year 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021500ba98cfa8ee9dd2d4c7de",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Fakira.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Fakira&artist_name=Vishal-Shekhar&album=Student%20of%20the%20Year%202"
    },
    {
        "id": 33,
        "title": "Falak Tak",
        "artist": "Vishal-Shekhar",
        "album": "Tashan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02350fe52fe51edbfe385b6228",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Falak%20Tak.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Falak%20Tak&artist_name=Vishal-Shekhar&album=Tashan"
    },
    {
        "id": 34,
        "title": "Hai Rama",
        "artist": "A.R. Rahman",
        "album": "Rangeela",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ca1347ec897ef81082fac4b6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hai%20Rama.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hai%20Rama&artist_name=A.R.%20Rahman&album=Rangeela"
    },
    {
        "id": 35,
        "title": "Haareya",
        "artist": "Sachin-Jigar",
        "album": "Meri Pyaari Bindu",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d2f3f606e8d06c7a6a340a48",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Haareya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Haareya&artist_name=Sachin-Jigar&album=Meri%20Pyaari%20Bindu"
    },
    {
        "id": 36,
        "title": "Hai Apna Dil To Aawara",
        "artist": "Hemant Kumar",
        "album": "Baarishein",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0203d5016697846304152cd126",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hai%20Apna%20Dil%20To%20Aawara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hai%20Apna%20Dil%20To%20Aawara&artist_name=Hemant%20Kumar&album=Baarishein"
    },
    {
        "id": 37,
        "title": "Ham Tere Pyar Mein",
        "artist": "Lata Mangeshkar",
        "album": "Dil Ek Mandir",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0257482489b688d2b4e9d91be9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ham%20Tere%20Pyar%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ham%20Tere%20Pyar%20Mein&artist_name=Lata%20Mangeshkar&album=Dil%20Ek%20Mandir"
    },
    {
        "id": 38,
        "title": "Hona Tha Pyar",
        "artist": "Atif Aslam",
        "album": "Bol",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0271ef95ca0f8a1270a3cebc05",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hona%20Tha%20Pyar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hona%20Tha%20Pyar&artist_name=Atif%20Aslam&album=Bol"
    },
    {
        "id": 39,
        "title": "I Am In Love",
        "artist": "Pritam",
        "album": "Once Upon A Time In Mumbaai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02df934f4de5f8dd46f8d75f5f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/I%20Am%20In%20Love.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=I%20Am%20In%20Love&artist_name=Pritam&album=Once%20Upon%20A%20Time%20In%20Mumbaai"
    },
    {
        "id": 40,
        "title": "I Love You",
        "artist": "Pritam",
        "album": "Bodyguard",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026a2e7f7613210a6397e854f5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/I%20Love%20You.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=I%20Love%20You&artist_name=Pritam&album=Bodyguard"
    },
    {
        "id": 41,
        "title": "Iktara",
        "artist": "Amit Trivedi",
        "album": "Wake Up Sid",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02051d9cc7db941e7ba051b9af",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Iktara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Iktara&artist_name=Amit%20Trivedi&album=Wake%20Up%20Sid"
    },
    {
        "id": 42,
        "title": "In Ankhon Ki Masti",
        "artist": "Asha Bhosle",
        "album": "Umrao Jaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0286d529c730fd8d79c20df6f6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/In%20Ankhon%20Ki%20Masti.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=In%20Ankhon%20Ki%20Masti&artist_name=Asha%20Bhosle&album=Umrao%20Jaan"
    },
    {
        "id": 43,
        "title": "In Dino",
        "artist": "Pritam",
        "album": "Life In A Metro",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02970e7d9a98d483f24a3345b6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/In%20Dino.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=In%20Dino&artist_name=Pritam&album=Life%20In%20A%20Metro"
    },
    {
        "id": 44,
        "title": "Is This Love",
        "artist": "Mohit Chauhan",
        "album": "Kismat Konnection",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023d3529543f09e735b9966e7d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Is%20This%20Love.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Is%20This%20Love&artist_name=Mohit%20Chauhan&album=Kismat%20Konnection"
    },
    {
        "id": 45,
        "title": "Ishq Di Baajiyaan",
        "artist": "Shankar-Ehsaan-Loy",
        "album": "Soorma",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02812487194156bd6146ffa6c9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ishq%20Di%20Baajiyaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ishq%20Di%20Baajiyaan&artist_name=Shankar-Ehsaan-Loy&album=Soorma"
    },
    {
        "id": 46,
        "title": "Ishq Sufiyana",
        "artist": "Vishal-Shekhar",
        "album": "The Dirty Picture",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0254ab341c139cfe4dc15d2d39",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ishq%20Sufiyana.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ishq%20Sufiyana&artist_name=Vishal-Shekhar&album=The%20Dirty%20Picture"
    },
    {
        "id": 47,
        "title": "Ishq Wala Love",
        "artist": "Vishal-Shekhar",
        "album": "Student of the Year",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ad40f4e70b2f2a2a6052d49d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ishq%20Wala%20Love.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ishq%20Wala%20Love&artist_name=Vishal-Shekhar&album=Student%20of%20the%20Year"
    },
    {
        "id": 48,
        "title": "Isq Risk",
        "artist": "Sohail Sen",
        "album": "Mere Brother Ki Dulhan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a2011a6b7f81c63c1557076d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Isq%20Risk.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Isq%20Risk&artist_name=Sohail%20Sen&album=Mere%20Brother%20Ki%20Dulhan"
    },
    {
        "id": 49,
        "title": "Itna Na Mujhse Tu Pyar Badha",
        "artist": "Talat Mahmood, Lata Mangeshkar",
        "album": "Chhaya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020ec64fd2f466c3799a63c900",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Itna%20Na%20Mujhse%20Tu%20Pyar%20Badha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Itna%20Na%20Mujhse%20Tu%20Pyar%20Badha&artist_name=Talat%20Mahmood%2C%20Lata%20Mangeshkar&album=Chhaya"
    },
    {
        "id": 50,
        "title": "Jab Se Tere Naina",
        "artist": "Monty Sharma, Shaan",
        "album": "Saawariya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bd848c36d02a36a7610d9641",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jab%20Se%20Tere%20Naina.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jab%20Se%20Tere%20Naina&artist_name=Monty%20Sharma%2C%20Shaan&album=Saawariya"
    },
    {
        "id": 51,
        "title": "Jane Woh Kaise Log The",
        "artist": "Hemant Kumar, S. D. Burman",
        "album": "Pyaasa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0203d5016697846304152cd126",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jane%20Woh%20Kaise%20Log%20The.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jane%20Woh%20Kaise%20Log%20The&artist_name=Hemant%20Kumar%2C%20S.%20D.%20Burman&album=Pyaasa"
    },
    {
        "id": 52,
        "title": "Jee Le Zaraa",
        "artist": "Vishal Dadlani",
        "album": "Talaash",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02723ec3c4b6035f1f9837e10e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jee%20Le%20Zaraa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jee%20Le%20Zaraa&artist_name=Vishal%20Dadlani&album=Talaash"
    },
    {
        "id": 53,
        "title": "Jeena Jeena",
        "artist": "Sachin-Jigar, Atif Aslam",
        "album": "Badlapur",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02972a8fa058a13f91a1a46850",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jeena%20Jeena.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jeena%20Jeena&artist_name=Sachin-Jigar%2C%20Atif%20Aslam&album=Badlapur"
    },
    {
        "id": 54,
        "title": "Jhalla Wallah",
        "artist": "Amit Trivedi, Shreya Ghoshal",
        "album": "Ishaqzaade",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02689f566242484e89e9cad22a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jhalla%20Wallah.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jhalla%20Wallah&artist_name=Amit%20Trivedi%2C%20Shreya%20Ghoshal&album=Ishaqzaade"
    },
    {
        "id": 55,
        "title": "Jiya Dhadak Dhadak Jaye",
        "artist": "Rahat Fateh Ali Khan",
        "album": "Kalyug",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e650df38b751417df3602e82",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jiya%20Dhadak%20Dhadak%20Jaye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jiya%20Dhadak%20Dhadak%20Jaye&artist_name=Rahat%20Fateh%20Ali%20Khan&album=Kalyug"
    },
    {
        "id": 56,
        "title": "Kabhi Kabhi Mere Dil Mein",
        "artist": "Mukesh, Lata Mangeshkar",
        "album": "Kabhi Kabhie",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021a53cb45af75e30370c7e0ee",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kabhi%20Kabhi%20Mere%20Dil%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kabhi%20Kabhi%20Mere%20Dil%20Mein&artist_name=Mukesh%2C%20Lata%20Mangeshkar&album=Kabhi%20Kabhie"
    },
    {
        "id": 57,
        "title": "Kajra Mohabbat Wala",
        "artist": "Asha Bhosle",
        "album": "Kismet",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a6bc2e73e75c2259725cabf5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kajra%20Mohabbat%20Wala.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kajra%20Mohabbat%20Wala&artist_name=Asha%20Bhosle&album=Kismet"
    },
    {
        "id": 58,
        "title": "Khuda Jaane",
        "artist": "Vishal-Shekhar",
        "album": "Bachna Ae Haseeno",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a08c7022ea424b2f048b46e9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Khuda%20Jaane.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Khuda%20Jaane&artist_name=Vishal-Shekhar&album=Bachna%20Ae%20Haseeno"
    },
    {
        "id": 59,
        "title": "Kitne The Khwab Dekhe",
        "artist": "Armaan Malik",
        "album": "Taqdeer",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029b0ab0b67e1c932dd415d603",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kitne%20The%20Khwab%20Dekhe.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kitne%20The%20Khwab%20Dekhe&artist_name=Armaan%20Malik&album=Taqdeer"
    },
    {
        "id": 60,
        "title": "Kya Hua Tera Vada",
        "artist": "Sushma Shrestha",
        "album": "Hum Kisise Kum Naheen",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b9c2d5169d45911d8f499f93",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kya%20Hua%20Tera%20Vada.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kya%20Hua%20Tera%20Vada&artist_name=Sushma%20Shrestha&album=Hum%20Kisise%20Kum%20Naheen"
    },
    {
        "id": 61,
        "title": "Kya Mujhe Pyar Hai",
        "artist": "KK, Pritam",
        "album": "Woh Lamhe",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02238513a0da74c837b2eeb8d7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kya%20Mujhe%20Pyar%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kya%20Mujhe%20Pyar%20Hai&artist_name=KK%2C%20Pritam&album=Woh%20Lamhe"
    },
    {
        "id": 62,
        "title": "Lae Dooba",
        "artist": "Sunidhi Chauhan",
        "album": "Aiyaary",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c9f837562641e205fd81a642",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Lae%20Dooba.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lae%20Dooba&artist_name=Sunidhi%20Chauhan&album=Aiyaary"
    },
    {
        "id": 63,
        "title": "Lag Ja Gale Se Phir",
        "artist": "Lata Mangeshkar",
        "album": "Woh Kaun Thi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fa15d4d0cdda455df45c413d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Lag%20Ja%20Gale%20Se%20Phir.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lag%20Ja%20Gale%20Se%20Phir&artist_name=Lata%20Mangeshkar&album=Woh%20Kaun%20Thi"
    },
    {
        "id": 64,
        "title": "Main Koi Aisa Geet Gaoon",
        "artist": "Abhijeet",
        "album": "Yes Boss",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020f0e4b68ed5159c70422c18f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Main%20Koi%20Aisa%20Geet%20Gaoon.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Main%20Koi%20Aisa%20Geet%20Gaoon&artist_name=Abhijeet&album=Yes%20Boss"
    },
    {
        "id": 65,
        "title": "Meherbaan",
        "artist": "Shilpa Rao",
        "album": "Bang Bang",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02058494835ee23ad6104f81f2",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Meherbaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Meherbaan&artist_name=Shilpa%20Rao&album=Bang%20Bang"
    },
    {
        "id": 66,
        "title": "Mera Yaar",
        "artist": "Shankar-Ehsaan-Loy",
        "album": "Bhaag Milkha Bhaag",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b414911b2d52d2601220603a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mera%20Yaar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mera%20Yaar&artist_name=Shankar-Ehsaan-Loy&album=Bhaag%20Milkha%20Bhaag"
    },
    {
        "id": 67,
        "title": "Meri Chunar Udd Udd Jaye",
        "artist": "Falguni Pathak",
        "album": "Maine Payal Hai Chhankai",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025f8c3a477c44a16f8d0e7330",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Meri%20Chunar%20Udd%20Udd%20Jaye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Meri%20Chunar%20Udd%20Udd%20Jaye&artist_name=Falguni%20Pathak&album=Maine%20Payal%20Hai%20Chhankai"
    },
    {
        "id": 68,
        "title": "Mitwa",
        "artist": "Shankar-Ehsaan-Loy",
        "album": "Kabhi Alvida Naa Kehna",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02afbf50bfb7b032b69deabade",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mitwa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mitwa&artist_name=Shankar-Ehsaan-Loy&album=Kabhi%20Alvida%20Naa%20Kehna"
    },
    {
        "id": 69,
        "title": "Moh Moh Ke Dhaage",
        "artist": "Anu Malik",
        "album": "Dum Laga Ke Haisha",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028505999314c197a269c4d9bc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Moh%20Moh%20Ke%20Dhaage.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Moh%20Moh%20Ke%20Dhaage&artist_name=Anu%20Malik&album=Dum%20Laga%20Ke%20Haisha"
    },
    {
        "id": 70,
        "title": "Nazar Na Lag Jaaye",
        "artist": "Ash King",
        "album": "Stree",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dc0eee8fc90686b176a4336e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Nazar%20Na%20Lag%20Jaaye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Nazar%20Na%20Lag%20Jaaye&artist_name=Ash%20King&album=Stree"
    },
    {
        "id": 71,
        "title": "Neele Neele Ambar Par",
        "artist": "Kalyanji-Anandji",
        "album": "Kalaakaar",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0202ec3d2efa698e442568f4a4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Neele%20Neele%20Ambar%20Par.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Neele%20Neele%20Ambar%20Par&artist_name=Kalyanji-Anandji&album=Kalaakaar"
    },
    {
        "id": 72,
        "title": "O Piya",
        "artist": "Falguni Pathak",
        "album": "Maine Payal Hai Chhankai",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025f8c3a477c44a16f8d0e7330",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Piya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Piya&artist_name=Falguni%20Pathak&album=Maine%20Payal%20Hai%20Chhankai"
    },
    {
        "id": 73,
        "title": "O Rangrez",
        "artist": "Shankar-Ehsaan-Loy",
        "album": "Bhaag Milkha Bhaag",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b414911b2d52d2601220603a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Rangrez.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Rangrez&artist_name=Shankar-Ehsaan-Loy&album=Bhaag%20Milkha%20Bhaag"
    },
    {
        "id": 74,
        "title": "Pal Pal Dil Ke Paas",
        "artist": "Kishore Kumar",
        "album": "Blackmail",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c14fb9e3b201671a5268a271",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pal%20Pal%20Dil%20Ke%20Paas.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pal%20Pal%20Dil%20Ke%20Paas&artist_name=Kishore%20Kumar&album=Blackmail"
    },
    {
        "id": 75,
        "title": "Panna Ki Tamanna Hai",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Heera Panna",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0202ed3280a797d0a02115bb08",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Panna%20Ki%20Tamanna%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Panna%20Ki%20Tamanna%20Hai&artist_name=Kishore%20Kumar%2C%20Lata%20Mangeshkar&album=Heera%20Panna"
    },
    {
        "id": 76,
        "title": "Pehli Nazar Mein",
        "artist": "Atif Aslam",
        "album": "Race",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02af932ac943c7afa6b74659f7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pehli%20Nazar%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pehli%20Nazar%20Mein&artist_name=Atif%20Aslam&album=Race"
    },
    {
        "id": 77,
        "title": "Phir Bhi Tumko Chaahunga",
        "artist": "Mithoon",
        "album": "Half Girlfriend",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aca529b2fdfaabf2f50fc9e3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Phir%20Bhi%20Tumko%20Chaahunga.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Phir%20Bhi%20Tumko%20Chaahunga&artist_name=Mithoon&album=Half%20Girlfriend"
    },
    {
        "id": 78,
        "title": "Piyu Bole",
        "artist": "Sonu Nigam, Shreya Ghoshal",
        "album": "Parineeta",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02047a46b43f281e0d12ea8993",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Piyu%20Bole.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Piyu%20Bole&artist_name=Sonu%20Nigam%2C%20Shreya%20Ghoshal&album=Parineeta"
    },
    {
        "id": 79,
        "title": "Raanjhanaa",
        "artist": "A.R. Rahman",
        "album": "Raanjhanaa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020c556f210b927ca230f32241",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Raanjhanaa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Raanjhanaa&artist_name=A.R.%20Rahman&album=Raanjhanaa"
    },
    {
        "id": 80,
        "title": "Rabba Main Toh Mar Gaya Oye",
        "artist": "Pritam",
        "album": "Mausam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02921798bf86a4d458a45f680a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Rabba%20Main%20Toh%20Mar%20Gaya%20Oye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Rabba%20Main%20Toh%20Mar%20Gaya%20Oye&artist_name=Pritam&album=Mausam"
    },
    {
        "id": 81,
        "title": "Rang Jo Lagyo",
        "artist": "Sachin-Jigar",
        "album": "Ramaiya Vastavaiya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cab73e6ac9bf4bf3c6931570",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Rang%20Jo%20Lagyo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Rang%20Jo%20Lagyo&artist_name=Sachin-Jigar&album=Ramaiya%20Vastavaiya"
    },
    {
        "id": 82,
        "title": "Rishte Naate",
        "artist": "Rahat Fateh Ali Khan",
        "album": "De Dana Dan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fdfb5a9874443a0e39febd7d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Rishte%20Naate.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Rishte%20Naate&artist_name=Rahat%20Fateh%20Ali%20Khan&album=De%20Dana%20Dan"
    },
    {
        "id": 83,
        "title": "Roja",
        "artist": "A.R. Rahman",
        "album": "Roja",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020a6413faed4599fdcbf15c37",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Roja.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Roja&artist_name=A.R.%20Rahman&album=Roja"
    },
    {
        "id": 84,
        "title": "Saagar Jaisi Aankhonwali",
        "artist": "Kishore Kumar",
        "album": "Saagar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fbb0937acbbb0ae0ac8c21eb",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saagar%20Jaisi%20Aankhonwali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saagar%20Jaisi%20Aankhonwali&artist_name=Kishore%20Kumar&album=Saagar"
    },
    {
        "id": 85,
        "title": "Saathiyaa",
        "artist": "Shreya Ghoshal",
        "album": "Singham",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a682f3a0e5b24e8a296a6900",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saathiyaa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saathiyaa&artist_name=Shreya%20Ghoshal&album=Singham"
    },
    {
        "id": 86,
        "title": "Saawan Mein",
        "artist": "Falguni Pathak",
        "album": "Maine Payal Hai Chhankai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025f8c3a477c44a16f8d0e7330",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saawan%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saawan%20Mein&artist_name=Falguni%20Pathak&album=Maine%20Payal%20Hai%20Chhankai"
    },
    {
        "id": 87,
        "title": "Sahiba",
        "artist": "Aditya Rikhari",
        "album": "Sahiba",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020a47bbe7141fdfe0eb2cdba7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sahiba.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sahiba&artist_name=Aditya%20Rikhari&album=Sahiba"
    },
    {
        "id": 88,
        "title": "Saibo",
        "artist": "Sachin-Jigar",
        "album": "Shor in the City",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b85d870860408d980b9d3e32",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saibo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saibo&artist_name=Sachin-Jigar&album=Shor%20in%20the%20City"
    },
    {
        "id": 89,
        "title": "Saiyyan",
        "artist": "Kailash Kher",
        "album": "Jhoomo Re",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cd3f6c3c2f2aa9b76fe635b1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saiyyan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saiyyan&artist_name=Kailash%20Kher&album=Jhoomo%20Re"
    },
    {
        "id": 90,
        "title": "Sajdaa",
        "artist": "Shankar-Ehsaan-Loy",
        "album": "My Name Is Khan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b7a25dad85eb88ffb5f942d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sajdaa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sajdaa&artist_name=Shankar-Ehsaan-Loy&album=My%20Name%20Is%20Khan"
    },
    {
        "id": 91,
        "title": "Saudebazi",
        "artist": "Pritam",
        "album": "Aakrosh",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b425c9dadc417923e894eb59",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saudebazi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saudebazi&artist_name=Pritam&album=Aakrosh"
    },
    {
        "id": 92,
        "title": "Sawaar Loon",
        "artist": "Monali Thakur",
        "album": "Lootera",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020e26db222796cf4207425abc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sawaar%20Loon.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sawaar%20Loon&artist_name=Monali%20Thakur&album=Lootera"
    },
    {
        "id": 93,
        "title": "Senorita",
        "artist": "Farhan Akhtar",
        "album": "Zindagi Na Milegi Dobara",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020acb5a72549287bf33b51b71",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Senorita.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Senorita&artist_name=Farhan%20Akhtar&album=Zindagi%20Na%20Milegi%20Dobara"
    },
    {
        "id": 94,
        "title": "Soniyo",
        "artist": "Raju Singh",
        "album": "Raaz",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bf8dad28cba0f3680ee29364",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Soniyo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Soniyo&artist_name=Raju%20Singh&album=Raaz"
    },
    {
        "id": 95,
        "title": "Such Keh Raha Hai",
        "artist": "KK",
        "album": "Rehnaa Hai Terre Dil Mein",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e3fcf9171730df35aaf03c67",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Such%20Keh%20Raha%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Such%20Keh%20Raha%20Hai&artist_name=KK&album=Rehnaa%20Hai%20Terre%20Dil%20Mein"
    },
    {
        "id": 96,
        "title": "Sunn Raha Hai",
        "artist": "Ankit Tiwari",
        "album": "Aashiqui 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026404721c1943d5069f0805f3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sunn%20Raha%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sunn%20Raha%20Hai&artist_name=Ankit%20Tiwari&album=Aashiqui%202"
    },
    {
        "id": 97,
        "title": "Surili Akhiyon Wale",
        "artist": "Sajid-Wajid",
        "album": "Veer",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020284f7095cb5f94acfcce08d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Surili%20Akhiyon%20Wale.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Surili%20Akhiyon%20Wale&artist_name=Sajid-Wajid&album=Veer"
    },
    {
        "id": 98,
        "title": "Tera Chehra",
        "artist": "Adnan Sami",
        "album": "Tera Chehra",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028d5b19305095a36a74407b7c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tera%20Chehra.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tera%20Chehra&artist_name=Adnan%20Sami&album=Tera%20Chehra"
    },
    {
        "id": 99,
        "title": "Tera Hone Laga Hoon",
        "artist": "Pritam",
        "album": "Ajab Prem Ki Ghazab Kahani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a200135a2008410280695cb3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tera%20Hone%20Laga%20Hoon.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tera%20Hone%20Laga%20Hoon&artist_name=Pritam&album=Ajab%20Prem%20Ki%20Ghazab%20Kahani"
    },
    {
        "id": 100,
        "title": "Tere Liye",
        "artist": "Atif Aslam",
        "album": "Prince",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02af932ac943c7afa6b74659f7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tere%20Liye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tere%20Liye&artist_name=Atif%20Aslam&album=Prince"
    },
    {
        "id": 101,
        "title": "Tere Naina",
        "artist": "Shankar Mahadevan",
        "album": "Chandni Chowk To China",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022e33f85b9e16a0659f3a0539",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tere%20Naina.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tere%20Naina&artist_name=Shankar%20Mahadevan&album=Chandni%20Chowk%20To%20China"
    },
    {
        "id": 102,
        "title": "Teri Jhuki Nazar",
        "artist": "Pritam",
        "album": "Murder 3",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02947e9127982f21bf5504e1f8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Teri%20Jhuki%20Nazar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Teri%20Jhuki%20Nazar&artist_name=Pritam&album=Murder%203"
    },
    {
        "id": 103,
        "title": "Tu Chahiye",
        "artist": "Pritam",
        "album": "Bajrangi Bhaijaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e7f1ff44b74df429307f4164",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Chahiye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Chahiye&artist_name=Pritam&album=Bajrangi%20Bhaijaan"
    },
    {
        "id": 104,
        "title": "Tu Hi Re",
        "artist": "Hariharan",
        "album": "Bombay",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a14cd8823a92895e7140eab8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Hi%20Re.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Hi%20Re&artist_name=Hariharan&album=Bombay"
    },
    {
        "id": 105,
        "title": "Tum Ho",
        "artist": "Mohit Chauhan",
        "album": "Rockstar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0254e544672baa16145d67612b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Ho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Ho&artist_name=Mohit%20Chauhan&album=Rockstar"
    },
    {
        "id": 106,
        "title": "Tum Jo Aaye",
        "artist": "Pritam",
        "album": "Once Upon A Time In Mumbaai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02df934f4de5f8dd46f8d75f5f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Jo%20Aaye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Jo%20Aaye&artist_name=Pritam&album=Once%20Upon%20A%20Time%20In%20Mumbaai"
    },
    {
        "id": 107,
        "title": "Tum Se Hi",
        "artist": "Pritam",
        "album": "Jab We Met",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0252fe6875028c892308ffc2f7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Se%20Hi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Se%20Hi&artist_name=Pritam&album=Jab%20We%20Met"
    },
    {
        "id": 108,
        "title": "Tum Tak",
        "artist": "A.R. Rahman",
        "album": "Raanjhanaa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020c556f210b927ca230f32241",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Tak.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Tak&artist_name=A.R.%20Rahman&album=Raanjhanaa"
    },
    {
        "id": 109,
        "title": "Tumse Milke",
        "artist": "Asha Bhosle, Suresh Wadkar",
        "album": "Parinda",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0279cbd1e2345721bf9b79b88e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tumse%20Milke.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tumse%20Milke&artist_name=Asha%20Bhosle%2C%20Suresh%20Wadkar&album=Parinda"
    },
    {
        "id": 110,
        "title": "Ud-daa Punjab",
        "artist": "Amit Trivedi",
        "album": "Udta Punjab",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ae6d60a0e2e11cf61fa5aa57",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ud-daa%20Punjab.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ud-daa%20Punjab&artist_name=Amit%20Trivedi&album=Udta%20Punjab"
    },
    {
        "id": 111,
        "title": "Uff Teri Adaa",
        "artist": "Shankar Mahadevan",
        "album": "Karthik Calling Karthik",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020e0eae488b99b7c7b901f659",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Uff%20Teri%20Adaa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Uff%20Teri%20Adaa&artist_name=Shankar%20Mahadevan&album=Karthik%20Calling%20Karthik"
    },
    {
        "id": 112,
        "title": "Ye Tune Kya Kiya",
        "artist": "Pritam",
        "album": "Once Upon Ay Time In Mumbai Dobaara!",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fe77bd21eb38ff74b5f21524",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ye%20Tune%20Kya%20Kiya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ye%20Tune%20Kya%20Kiya&artist_name=Pritam&album=Once%20Upon%20Ay%20Time%20In%20Mumbai%20Dobaara!"
    },
    {
        "id": 113,
        "title": "Yeh Fitoor Mera",
        "artist": "Amit Trivedi",
        "album": "Fitoor",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b99c0e6b9bf5ba4da74e816d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Fitoor%20Mera.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Fitoor%20Mera&artist_name=Amit%20Trivedi&album=Fitoor"
    },
    {
        "id": 114,
        "title": "Yeh Haseen Vadiyan Yeh Khula Aasman",
        "artist": "A.R. Rahman",
        "album": "Roja",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020a6413faed4599fdcbf15c37",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Haseen%20Vadiyan%20Yeh%20Khula%20Aasman.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Haseen%20Vadiyan%20Yeh%20Khula%20Aasman&artist_name=A.R.%20Rahman&album=Roja"
    },
    {
        "id": 115,
        "title": "Yeh Kisne Jadu Kiya",
        "artist": "Falguni Pathak",
        "album": "Maine Payal Hai Chhankai",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025f8c3a477c44a16f8d0e7330",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Kisne%20Jadu%20Kiya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Kisne%20Jadu%20Kiya&artist_name=Falguni%20Pathak&album=Maine%20Payal%20Hai%20Chhankai"
    },
    {
        "id": 116,
        "title": "Yeh Raaten Yeh Mausam",
        "artist": "Sanam",
        "album": "Yeh Raaten Yeh Mausam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f47f3f44f4a7311a66c7a770",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Raaten%20Yeh%20Mausam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Raaten%20Yeh%20Mausam&artist_name=Sanam&album=Yeh%20Raaten%20Yeh%20Mausam"
    },
    {
        "id": 117,
        "title": "Zara Zara",
        "artist": "Bombay Jayashri",
        "album": "Rehnaa Hai Terre Dil Mein",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e3fcf9171730df35aaf03c67",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Zara%20Zara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zara%20Zara&artist_name=Bombay%20Jayashri&album=Rehnaa%20Hai%20Terre%20Dil%20Mein"
    },
    {
        "id": 118,
        "title": "Zehnaseeb",
        "artist": "Vishal-Shekhar",
        "album": "Hasee Toh Phasee",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022025db071cd9dd7e8023e01e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Zehnaseeb.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zehnaseeb&artist_name=Vishal-Shekhar&album=Hasee%20Toh%20Phasee"
    },
    {
        "id": 119,
        "title": "Zindagi Ki Yahi Reet Hai",
        "artist": "Kishore Kumar",
        "album": "Mr. India",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ac2dad16a7b8d79161852438",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Zindagi%20Ki%20Yahi%20Reet%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zindagi%20Ki%20Yahi%20Reet%20Hai&artist_name=Kishore%20Kumar&album=Mr.%20India"
    },
    {
        "id": 120,
        "title": "O Humdum Suniyo Re",
        "artist": "A.R. Rahman",
        "album": "Saathiya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fb2bce3c5716f9bd1f0aaad7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Humdum%20Suniyo%20Re.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Humdum%20Suniyo%20Re&artist_name=A.R.%20Rahman&album=Saathiya"
    },
    {
        "id": 121,
        "title": "Tera Rastaa Chhodoon Na",
        "artist": "Amitabh Bhattacharya and Anusha Mani",
        "album": "Chennai Express",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dfd1ddf5b8431d6fc5210d6c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tera%20Rastaa%20Chhodoon%20Na.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tera%20Rastaa%20Chhodoon%20Na&artist_name=Amitabh%20Bhattacharya%20and%20Anusha%20Mani&album=Chennai%20Express"
    },
    {
        "id": 122,
        "title": "O Meri Laila",
        "artist": "Atif Aslam",
        "album": "Laila Majnu",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fc8c4535825cdc0bcafde19a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Meri%20Laila.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Meri%20Laila&artist_name=Atif%20Aslam&album=Laila%20Majnu"
    },
    {
        "id": 123,
        "title": "Zara Sa",
        "artist": "Pritam",
        "album": "Jannat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02727d531901c07a499498c544",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Zara%20Sa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zara%20Sa&artist_name=Pritam&album=Jannat"
    },
    {
        "id": 124,
        "title": "Pani Da Rang",
        "artist": "Ayushmann Khurrana",
        "album": "Vicky Donor",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020fb8b00733fc3b7ae3105773",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pani%20Da%20Rang.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pani%20Da%20Rang&artist_name=Ayushmann%20Khurrana&album=Vicky%20Donor"
    },
    {
        "id": 125,
        "title": "Halka Halka",
        "artist": "Sunidhi Chauhan",
        "album": "Fanney Khan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024799fd746fd2bb45ae9952f3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Halka%20Halka.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Halka%20Halka&artist_name=Sunidhi%20Chauhan&album=Fanney%20Khan"
    },
    {
        "id": 126,
        "title": "Aaye Ho Meri Zindagi Mein",
        "artist": "Alka Yagnik",
        "album": "Raja Hindustani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021455b75335a478a77845c4ae",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aaye%20Ho%20Meri%20Zindagi%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aaye%20Ho%20Meri%20Zindagi%20Mein&artist_name=Alka%20Yagnik&album=Raja%20Hindustani"
    },
    {
        "id": 127,
        "title": "Mera Mann Kehne Laga",
        "artist": "Falak Shabbir",
        "album": "Nautanki Saala!",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02785c415336347fca03a1d638",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mera%20Mann%20Kehne%20Laga.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mera%20Mann%20Kehne%20Laga&artist_name=Falak%20Shabbir&album=Nautanki%20Saala!"
    },
    {
        "id": 128,
        "title": "Tune Mere Jana",
        "artist": "Gajendra Verma",
        "album": "Emptiness",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029ab7a540b94ce87de4392a82",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tune%20Mere%20Jana.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tune%20Mere%20Jana&artist_name=Gajendra%20Verma&album=Emptiness"
    },
    {
        "id": 129,
        "title": "Tum Todo Na",
        "artist": "Bela Shende",
        "album": "I",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a4686f3b95e096ba4ce53f83",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Todo%20Na.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Todo%20Na&artist_name=Bela%20Shende&album=I"
    },
    {
        "id": 130,
        "title": "Tu Chale",
        "artist": "Arijit Singh, Shreya Ghoshal",
        "album": "I",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a4686f3b95e096ba4ce53f83",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Chale.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Chale&artist_name=Arijit%20Singh%2C%20Shreya%20Ghoshal&album=I"
    },
    {
        "id": 131,
        "title": "Lat Lag Gayee",
        "artist": "Benny Dayal",
        "album": "Race 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024e335a523158ef70bd1b93b6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Lat%20Lag%20Gayee.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lat%20Lag%20Gayee&artist_name=Benny%20Dayal&album=Race%202"
    },
    {
        "id": 132,
        "title": "Hothon Se Chhu Lo Tum",
        "artist": "Jagjit Singh",
        "album": "Dard-E-Jigar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b5eba194cd2f743be9a0f87b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hothon%20Se%20Chhu%20Lo%20Tum.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hothon%20Se%20Chhu%20Lo%20Tum&artist_name=Jagjit%20Singh&album=Dard-E-Jigar"
    },
    {
        "id": 133,
        "title": "Ae Zindagi Gale Laga Le",
        "artist": "Ilaiyaraja, Amit Trivedi",
        "album": "Dear Zindagi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fcf31503544ab70a339ea2fe",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ae%20Zindagi%20Gale%20Laga%20Le.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ae%20Zindagi%20Gale%20Laga%20Le&artist_name=Ilaiyaraja%2C%20Amit%20Trivedi&album=Dear%20Zindagi"
    },
    {
        "id": 134,
        "title": "Bairan",
        "artist": "Banjaare",
        "album": "Bairan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cdce9a38222807fa703b4396",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bairan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bairan&artist_name=Banjaare&album=Bairan"
    },
    {
        "id": 135,
        "title": "Blue Eyes",
        "artist": "Yo Yo Honey Singh",
        "album": "Blue Eyes",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0246a4f62d210c2cb02158eac7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Blue%20Eyes.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Blue%20Eyes&artist_name=Yo%20Yo%20Honey%20Singh&album=Blue%20Eyes"
    },
    {
        "id": 136,
        "title": "Chaar Botal Vodka",
        "artist": "Yo Yo Honey Singh",
        "album": "Yo Yo Honey Singh Is Back",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0246a4f62d210c2cb02158eac7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chaar%20Botal%20Vodka.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chaar%20Botal%20Vodka&artist_name=Yo%20Yo%20Honey%20Singh&album=Yo%20Yo%20Honey%20Singh%20Is%20Back"
    },
    {
        "id": 137,
        "title": "Chupke Chupke Raat Din",
        "artist": "Ghulam Ali",
        "album": "Nikaah",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a1fd486925da9490d70a9d2f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chupke%20Chupke%20Raat%20Din.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chupke%20Chupke%20Raat%20Din&artist_name=Ghulam%20Ali&album=Nikaah"
    },
    {
        "id": 138,
        "title": "Desi Kalakaar",
        "artist": "Yo Yo Honey Singh",
        "album": "Desi Kalakaar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0265ce8c712e4fb894bc88461b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Desi%20Kalakaar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Desi%20Kalakaar&artist_name=Yo%20Yo%20Honey%20Singh&album=Desi%20Kalakaar"
    },
    {
        "id": 139,
        "title": "Mann Mera",
        "artist": "Gajendra Verma",
        "album": "Table No. 21",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f2d0db770d8cd316f760a2f2",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mann%20Mera.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mann%20Mera&artist_name=Gajendra%20Verma&album=Table%20No.%2021"
    },
    {
        "id": 140,
        "title": "O Sajna",
        "artist": "Puja Thaker, Gajendra Verma",
        "album": "Table No. 21",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f2d0db770d8cd316f760a2f2",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Sajna.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Sajna&artist_name=Puja%20Thaker%2C%20Gajendra%20Verma&album=Table%20No.%2021"
    },
    {
        "id": 141,
        "title": "Pappu Can't Dance",
        "artist": "Benny Dayal, Naresh Iyer",
        "album": "Jaane Tu... Ya Jaane Na",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02abf91851997179d195afab5f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pappu%20Can't%20Dance.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pappu%20Can't%20Dance&artist_name=Benny%20Dayal%2C%20Naresh%20Iyer&album=Jaane%20Tu...%20Ya%20Jaane%20Na"
    },
    {
        "id": 142,
        "title": "Sun Sahiba Sun",
        "artist": "Lata Mangeshkar",
        "album": "Ram Teri Ganga Maili",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c626cf6f81c8dd9ac6cf796e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sun%20Sahiba%20Sun.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sun%20Sahiba%20Sun&artist_name=Lata%20Mangeshkar&album=Ram%20Teri%20Ganga%20Maili"
    },
    {
        "id": 143,
        "title": "Tum Hi Ho Bandhu",
        "artist": "Pritam, Neeraj Shridhar",
        "album": "Cocktail",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02347c0ed05d0fc9392c7d883e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Hi%20Ho%20Bandhu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Hi%20Ho%20Bandhu&artist_name=Pritam%2C%20Neeraj%20Shridhar&album=Cocktail"
    },
    {
        "id": 144,
        "title": "Apnaa Mujhe Tu Lagaa",
        "artist": "Sonu Nigam, Shakeel Azmi",
        "album": "1920 Evil Returns",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02872577a9e646019e97782fda",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Apnaa%20Mujhe%20Tu%20Lagaa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Apnaa%20Mujhe%20Tu%20Lagaa&artist_name=Sonu%20Nigam%2C%20Shakeel%20Azmi&album=1920%20Evil%20Returns"
    },
    {
        "id": 145,
        "title": "Hale Dil",
        "artist": "Harshit Saxena",
        "album": "Murder 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022432edc97b465e6db54d356b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hale%20Dil.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hale%20Dil&artist_name=Harshit%20Saxena&album=Murder%202"
    },
    {
        "id": 146,
        "title": "Phero Na Najariya",
        "artist": "Amit Trivedi, Kausar Munir",
        "album": "Qala",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02718fcc3bd91424d78928ae2b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Phero%20Na%20Najariya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Phero%20Na%20Najariya&artist_name=Amit%20Trivedi%2C%20Kausar%20Munir&album=Qala"
    },
    {
        "id": 147,
        "title": "Yeh Mera Dil Yaar Ka Diwana",
        "artist": "Asha Bhosle, Kalyanji-Anandji",
        "album": "Don 78",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024ce7a531beda03062022daa9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Mera%20Dil%20Yaar%20Ka%20Diwana.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Mera%20Dil%20Yaar%20Ka%20Diwana&artist_name=Asha%20Bhosle%2C%20Kalyanji-Anandji&album=Don%2078"
    },
    {
        "id": 148,
        "title": "Chunnari Chunnari",
        "artist": "Abhijeet, Anuradha Sriram",
        "album": "Biwi No. 1",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02192e977a9874dd4a230feae5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chunnari%20Chunnari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chunnari%20Chunnari&artist_name=Abhijeet%2C%20Anuradha%20Sriram&album=Biwi%20No.%201"
    },
    {
        "id": 149,
        "title": "Zara Zara Touch Me",
        "artist": "Monali Thakur, Earl Edgar",
        "album": "Race",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0276d2a4ed8b935f366d9612d8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Zara%20Zara%20Touch%20Me.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zara%20Zara%20Touch%20Me&artist_name=Monali%20Thakur%2C%20Earl%20Edgar&album=Race"
    },
    {
        "id": 150,
        "title": "Party On My Mind",
        "artist": "Pritam, Yo Yo Honey Singh",
        "album": "Race 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024e335a523158ef70bd1b93b6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Party%20On%20My%20Mind.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Party%20On%20My%20Mind&artist_name=Pritam%2C%20Yo%20Yo%20Honey%20Singh&album=Race%202"
    },
    {
        "id": 151,
        "title": "Tu Mera Hero",
        "artist": "Pritam, Shefali Alvares",
        "album": "Desi Boyz",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02daa89593cc2cde9651665d03",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Mera%20Hero.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Mera%20Hero&artist_name=Pritam%2C%20Shefali%20Alvares&album=Desi%20Boyz"
    },
    {
        "id": 152,
        "title": "Dildaara",
        "artist": "Vishal-Shekhar, Kumaar",
        "album": "Ra-One",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0244aa56e23e3a89802e6c6347",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dildaara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dildaara&artist_name=Shafqat%20Amanat%20Ali&album=Ra-One"
    },
    {
        "id": 153,
        "title": "Arz Kiya Hai",
        "artist": "Anuv Jain",
        "album": "Arz Kiya Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0225fa2d19b2363a9520a34409",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Arz%20Kiya%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Arz%20Kiya%20Hai&artist_name=Anuv%20Jain&album=Arz%20Kiya%20Hai"
    },
    {
        "id": 154,
        "title": "Masakali",
        "artist": "Mohit Chauhan, A.R. Rahman",
        "album": "Delhi-6",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f7c6e0a439f01c38bac5730c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Masakali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Masakali&artist_name=Mohit%20Chauhan%2C%20A.R.%20Rahman&album=Delhi-6"
    },
    {
        "id": 155,
        "title": "Sun Saathiya",
        "artist": "Divya Kumar, Priya Saraiya",
        "album": "ABCD 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024634da1d297644a35619f4fc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sun%20Saathiya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sun%20Saathiya&artist_name=Divya%20Kumar%2C%20Priya%20Saraiya&album=ABCD%202"
    },
    {
        "id": 156,
        "title": "Bebo",
        "artist": "Anu Malik, Alisha Chinai",
        "album": "Kambakkht Ishq",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0264699df17da4eea56a19b318",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bebo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bebo&artist_name=Anu%20Malik%2C%20Alisha%20Chinai&album=Kambakkht%20Ishq"
    },
    {
        "id": 157,
        "title": "Zaalima",
        "artist": "Arijit Singh, Harshdeep Kaur",
        "album": "Raees",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fced3ea9af59ad98c142279e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Zaalima.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zaalima&artist_name=Arijit%20Singh%2C%20Harshdeep%20Kaur&album=Raees"
    },
    {
        "id": 158,
        "title": "Softly",
        "artist": "Karan Aujla, Ikky",
        "album": "Making Memories",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bf6c7c24a33a49a5c2f0d423",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Softly.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Softly&artist_name=Karan%20Aujla%2C%20Ikky&album=Making%20Memories"
    },
    {
        "id": 159,
        "title": "Tu Hain Toh",
        "artist": "Bunny, Hunny, Sagar",
        "album": "Mr. And Mrs. Mahi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029c5e3a8b63998aa730bb0fbf",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Hain%20Toh.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Hain%20Toh&artist_name=Bunny%2C%20Hunny%2C%20Sagar&album=Mr.%20And%20Mrs.%20Mahi"
    },
    {
        "id": 160,
        "title": "Udi Udi",
        "artist": "Aneesh, Sarkar, Hruday",
        "album": "Udi Udi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0221d6e1053df28c5a33208c1a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Udi%20Udi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Udi%20Udi&artist_name=Aneesh%2C%20Sarkar%2C%20Hruday&album=Udi%20Udi"
    },
    {
        "id": 161,
        "title": "Maskara",
        "artist": "A.R. Rahman, Vedang Raina, Nilanjana Ghosh, Irshad Kamil",
        "album": "Main Vaapas Aaunga",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a54dd6f0ecc20ea21157caf0",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Maskara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Maskara&artist_name=A.R.%20Rahman%2C%20Vedang%20Raina%2C%20Nilanjana%20Ghosh%2C%20Irshad%20Kamil&album=Main%20Vaapas%20Aaunga"
    },
    {
        "id": 162,
        "title": "Breathless",
        "artist": "Abhay Jodhpurkar",
        "album": "Hai Junoon!",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0236d48b7d22bc1dc6181582d7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Breathless.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Breathless&artist_name=Abhay%20Jodhpurkar&album=Hai%20Junoon!"
    },
    {
        "id": 163,
        "title": "Piya Tose Naina Laage Re",
        "artist": "Jonita Gandhi",
        "album": "Piya Tose Naina Laage Re",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0205d5d8ce49ad5e159c1e83ac",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Piya%20Tose%20Naina%20Laage%20Re.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Piya%20Tose%20Naina%20Laage%20Re&artist_name=Jonita%20Gandhi&album=Piya%20Tose%20Naina%20Laage%20Re"
    },
    {
        "id": 164,
        "title": "Tere Naina",
        "artist": "Shankar-Ehsaan-Loy, Shafqat Amanat Ali",
        "album": "My Name Is Khan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b7a25dad85eb88ffb5f942d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tere%20Naina.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tere%20Naina&artist_name=Shankar-Ehsaan-Loy%2C%20Shafqat%20Amanat%20Ali&album=My%20Name%20Is%20Khan"
    },
    {
        "id": 165,
        "title": "Pee Loon",
        "artist": "Pritam",
        "album": "Once Upon A Time In Mumbaai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02df934f4de5f8dd46f8d75f5f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pee%20Loon.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pee%20Loon&artist_name=Pritam&album=Once%20Upon%20A%20Time%20In%20Mumbaai"
    },
    {
        "id": 166,
        "title": "Tu Hi Meri Shab Hai",
        "artist": "Mohit Chauhan; Pritam; Irshad Kamil",
        "album": "Gangster",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020e6e110d7edcb731e569bb38",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Hi%20Meri%20Shab%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Hi%20Meri%20Shab%20Hai&artist_name=Mohit%20Chauhan%3B%20Pritam%3B%20Irshad%20Kamil&album=Gangster"
    },
    {
        "id": 167,
        "title": "Tere Paas Main",
        "artist": "A.R. Rahman, Irshad Kamil, Deepali Sahay",
        "album": "Main Vaapas Aaunga",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02320d8311f82163512e3a4850",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tere%20Paas%20Main.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tere%20Paas%20Main&artist_name=A.R.%20Rahman%2C%20Irshad%20Kamil%2C%20Deepali%20Sahay&album=Main%20Vaapas%20Aaunga"
    },
    {
        "id": 168,
        "title": "Water",
        "artist": "Diljit Dosanjh, MixSingh, Raj Ranjodh",
        "album": "Water",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022e5a57898e013209aeaa136e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Water.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Water&artist_name=Diljit%20Dosanjh%2C%20MixSingh%2C%20Raj%20Ranjodh&album=Water"
    },
    {
        "id": 169,
        "title": "Pungi",
        "artist": "Mika Singh; Amitabh Bhattacharya; Nakash Aziz; Pritam; Javed Jaffrey",
        "album": "Agent Vinod",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e810a88d506b30bdc0935247",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pungi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pungi&artist_name=Mika%20Singh%3B%20Amitabh%20Bhattacharya%3B%20Nakash%20Aziz%3B%20Pritam%3B%20Javed%20Jaffrey&album=Agent%20Vinod"
    },
    {
        "id": 170,
        "title": "O More Saiyaan",
        "artist": "Arijit Dey, Ario",
        "album": "Unforgettable Love",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02272e754deaa210398bd664a3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20More%20Saiyaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20More%20Saiyaan&artist_name=Arijit%20Dey%2C%20Ario&album=Unforgettable%20Love"
    },
    {
        "id": 171,
        "title": "Saathiya",
        "artist": "A.R. Rahman, Sonu Nigam, Gulzar",
        "album": "Saathiya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fb2bce3c5716f9bd1f0aaad7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saathiya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saathiya&artist_name=A.R.%20Rahman%2C%20Sonu%20Nigam%2C%20Gulzar&album=Saathiya"
    },
    {
        "id": 172,
        "title": "O Rey Chhori",
        "artist": "A.R. Rahman, Udit Narayan, Alka Yagnik, Vasundhara Das",
        "album": "Lagaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c435f8cb3717f5765bfdb4aa",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Rey%20Chhori.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Rey%20Chhori&artist_name=A.R.%20Rahman%2C%20Udit%20Narayan%2C%20Alka%20Yagnik%2C%20Vasundhara%20Das&album=Lagaan"
    },
    {
        "id": 173,
        "title": "Tere Bina",
        "artist": "A.R. Rahman, Chinmayi, Murtuza Khan, Qadir Khan",
        "album": "Guru",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020504fdf58bae8cd52dd13047",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tere%20Bina.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tere%20Bina&artist_name=A.R.%20Rahman%2C%20Chinmayi%2C%20Murtuza%20Khan%2C%20Qadir%20Khan&album=Guru"
    },
    {
        "id": 174,
        "title": "Mere Nishaan",
        "artist": "Kailash Kher, Meet Bros Anjjan",
        "album": "Oh My God",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cae8942a913237e3839b37b4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mere%20Nishaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mere%20Nishaan&artist_name=Kailash%20Kher%2C%20Meet%20Bros%20Anjjan&album=Oh%20My%20God"
    }
];
// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "All Hindi Mix",
    defaultCover: "logo.png"
};
