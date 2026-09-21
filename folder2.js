const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Bebo",
        "artist": "Anu Malik, Alisha Chinai",
        "album": "Kambakkht Ishq",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0264699df17da4eea56a19b318",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Bebo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bebo&artist_name=Anu%20Malik%2C%20Alisha%20Chinai&album=Kambakkht%20Ishq"
    },
    {
        "id": 2,
        "title": "Tu Mera Hero",
        "artist": "Pritam, Shefali Alvares",
        "album": "Desi Boyz",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02daa89593cc2cde9651665d03",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tu%20Mera%20Hero.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Mera%20Hero&artist_name=Pritam%2C%20Shefali%20Alvares&album=Desi%20Boyz"
    },
    {
        "id": 3,
        "title": "Zara Zara Touch Me",
        "artist": "Monali Thakur, Earl Edgar",
        "album": "Race",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0276d2a4ed8b935f366d9612d8",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Zara%20Zara%20Touch%20Me.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zara%20Zara%20Touch%20Me&artist_name=Monali%20Thakur%2C%20Earl%20Edgar&album=Race"
    },
    {
        "id": 4,
        "title": "Party On My Mind",
        "artist": "Pritam, Yo Yo Honey Singh",
        "album": "Race 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024e335a523158ef70bd1b93b6",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Party%20On%20My%20Mind.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Party%20On%20My%20Mind&artist_name=Pritam%2C%20Yo%20Yo%20Honey%20Singh&album=Race%202"
    },
    {
        "id": 5,
        "title": "Tum Hi Ho Bandhu",
        "artist": "Pritam, Neeraj Shridhar",
        "album": "Cocktail",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02347c0ed05d0fc9392c7d883e",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tum%20Hi%20Ho%20Bandhu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Hi%20Ho%20Bandhu&artist_name=Pritam%2C%20Neeraj%20Shridhar&album=Cocktail"
    },
    {
        "id": 6,
        "title": "Pappu Can't Dance",
        "artist": "Benny Dayal, Naresh Iyer",
        "album": "Jaane Tu... Ya Jaane Na",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02abf91851997179d195afab5f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Pappu%20Can't%20Dance.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pappu%20Can't%20Dance&artist_name=Benny%20Dayal%2C%20Naresh%20Iyer&album=Jaane%20Tu...%20Ya%20Jaane%20Na"
    },
    {
        "id": 7,
        "title": "Desi Kalakaar",
        "artist": "Yo Yo Honey Singh",
        "album": "Desi Kalakaar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0265ce8c712e4fb894bc88461b",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Desi%20Kalakaar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Desi%20Kalakaar&artist_name=Yo%20Yo%20Honey%20Singh&album=Desi%20Kalakaar"
    },
    {
        "id": 8,
        "title": "Aga Bai",
        "artist": "Shalmalia Kholgade, Monali Thakur",
        "album": "Aiyyaa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026781b0577a94267c83517328",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aga%20Bai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aga%20Bai&artist_name=Shalmalia%20Kholgade%2C%20Monali%20Thakur&album=Aiyyaa"
    },
    {
        "id": 9,
        "title": "Lat Lag Gayee",
        "artist": "Benny Dayal",
        "album": "Race 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024e335a523158ef70bd1b93b6",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Lat%20Lag%20Gayee.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lat%20Lag%20Gayee&artist_name=Benny%20Dayal&album=Race%202"
    },
    {
        "id": 10,
        "title": "Blue Eyes",
        "artist": "Yo Yo Honey Singh",
        "album": "Blue Eyes",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0246a4f62d210c2cb02158eac7",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Blue%20Eyes.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Blue%20Eyes&artist_name=Yo%20Yo%20Honey%20Singh&album=Blue%20Eyes"
    },
    {
        "id": 11,
        "title": "O Meri Laila",
        "artist": "Atif Aslam",
        "album": "Laila Majnu",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fc8c4535825cdc0bcafde19a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/O%20Meri%20Laila.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Meri%20Laila&artist_name=Atif%20Aslam&album=Laila%20Majnu"
    },
    {
        "id": 12,
        "title": "Uff Teri Adaa",
        "artist": "Shankar Mahadevan",
        "album": "Karthik Calling Karthik",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020e0eae488b99b7c7b901f659",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Uff%20Teri%20Adaa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Uff%20Teri%20Adaa&artist_name=Shankar%20Mahadevan&album=Karthik%20Calling%20Karthik"
    },
    {
        "id": 13,
        "title": "Ud-daa Punjab",
        "artist": "Amit Trivedi",
        "album": "Udta Punjab",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ae6d60a0e2e11cf61fa5aa57",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ud-daa%20Punjab.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ud-daa%20Punjab&artist_name=Amit%20Trivedi&album=Udta%20Punjab"
    },
    {
        "id": 14,
        "title": "Chaar Botal Vodka",
        "artist": "Yo Yo Honey Singh",
        "album": "Yo Yo Honey Singh Is Back",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0246a4f62d210c2cb02158eac7",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Chaar%20Botal%20Vodka.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chaar%20Botal%20Vodka&artist_name=Yo%20Yo%20Honey%20Singh&album=Yo%20Yo%20Honey%20Singh%20Is%20Back"
    },
    {
        "id": 15,
        "title": "Senorita",
        "artist": "Farhan Akhtar",
        "album": "Zindagi Na Milegi Dobara",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020acb5a72549287bf33b51b71",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Senorita.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Senorita&artist_name=Farhan%20Akhtar&album=Zindagi%20Na%20Milegi%20Dobara"
    },
    {
        "id": 16,
        "title": "Afghan Jalebi",
        "artist": "Pritam",
        "album": "Phantom",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027037561f1e7a2c5ff3cd0a38",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Afghan%20Jalebi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Afghan%20Jalebi&artist_name=Pritam&album=Phantom"
    },
    {
        "id": 17,
        "title": "Aa Re Pritam Pyaare",
        "artist": "Sajid-Wajid, Mamta Sharma",
        "album": "Rowdy Rathore",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024056bfa0599a8cad7a9a88b4",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aa%20Re%20Pritam%20Pyaare.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aa%20Re%20Pritam%20Pyaare&artist_name=Sajid-Wajid%2C%20Mamta%20Sharma&album=Rowdy%20Rathore"
    },
    {
        "id": 18,
        "title": "Aaj Ki Raat",
        "artist": "Sachin-Jigar, Madhubanti Bagchi",
        "album": "Stree 2",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025e16168f7e8ff4fb8aace6cf",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aaj%20Ki%20Raat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aaj%20Ki%20Raat&artist_name=Sachin-Jigar%2C%20Madhubanti%20Bagchi&album=Stree%202"
    },
    {
        "id": 19,
        "title": "Aankh Marey",
        "artist": "Neha Kakkar, Mika Singh",
        "album": "Simmba",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02dc1f496d2a8d75f7fda092b6",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aankh%20Marey.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aankh%20Marey&artist_name=Neha%20Kakkar%2C%20Mika%20Singh&album=Simmba"
    },
    {
        "id": 20,
        "title": "Aao Kabhi Haveli Pe",
        "artist": "Badshah, Nikhita Gandhi, Sachin-Jigar",
        "album": "Stree",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02757e3e10c59c6e71affce6d6",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aao%20Kabhi%20Haveli%20Pe.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aao%20Kabhi%20Haveli%20Pe&artist_name=Badshah%2C%20Nikhita%20Gandhi%2C%20Sachin-Jigar&album=Stree"
    },
    {
        "id": 21,
        "title": "Aarzu",
        "artist": "Noor, Khan, Madhurxo",
        "album": "Aarzu",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020c28f02f30c669201ac4471d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aarzu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aarzu&artist_name=Noor%2C%20Khan%2C%20Madhurxo&album=Aarzu"
    },
    {
        "id": 22,
        "title": "Aata Majhi Satakli",
        "artist": "Yo Yo Honey Singh, Mamta Sharma, Nitu Choudhary",
        "album": "Singham Returns",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e1bbc24e73fd5d42df35afda",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aata%20Majhi%20Satakli.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aata%20Majhi%20Satakli&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Mamta%20Sharma%2C%20Nitu%20Choudhary&album=Singham%20Returns"
    },
    {
        "id": 23,
        "title": "Aayi Nai",
        "artist": "Sachin-Jigar, Pawan Singh",
        "album": "Stree 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c617a7ebd0cfe5bdbb26d262",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aayi%20Nai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aayi%20Nai&artist_name=Sachin-Jigar%2C%20Pawan%20Singh&album=Stree%202"
    },
    {
        "id": 24,
        "title": "Abhi Toh Party Shuru Hui Hai",
        "artist": "Badshah, Aastha Gill",
        "album": "Khoobsurat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023b37f6de72015eefce8ee5d3",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Abhi%20Toh%20Party%20Shuru%20Hui%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Abhi%20Toh%20Party%20Shuru%20Hui%20Hai&artist_name=Badshah%2C%20Aastha%20Gill&album=Khoobsurat"
    },
    {
        "id": 25,
        "title": "Ainvayi Ainvayi",
        "artist": "Salim–Sulaiman, Salim Merchant",
        "album": "Band Baaja Baaraat",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e8a91c48543ddaf13583a09a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ainvayi%20Ainvayi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ainvayi%20Ainvayi&artist_name=Salim%E2%80%93Sulaiman%2C%20Salim%20Merchant&album=Band%20Baaja%20Baaraat"
    },
    {
        "id": 26,
        "title": "Akkad Bakkad",
        "artist": "Badshah, Neha Kakkar",
        "album": "Akkad Bakkad",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e08e48b169f405639e6e8f3b",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Akkad%20Bakkad.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Akkad%20Bakkad&artist_name=Badshah%2C%20Neha%20Kakkar&album=Akkad%20Bakkad"
    },
    {
        "id": 27,
        "title": "Alcoholia",
        "artist": "Vishal-Shekhar, Snigdhajit Bhowmik",
        "album": "Alcoholia",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c29f8d4b408ba1652e918280",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Alcoholia.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Alcoholia&artist_name=Vishal-Shekhar%2C%20Snigdhajit%20Bhowmik&album=Alcoholia"
    },
    {
        "id": 28,
        "title": "Ali Ali",
        "artist": "Diorange, A.R. Rahman",
        "album": "Ali Ali",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cd26f999cf30dde65d6a54ac",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ali%20Ali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ali%20Ali&artist_name=Diorange%2C%20A.R.%20Rahman&album=Ali%20Ali"
    },
    {
        "id": 29,
        "title": "Allah Duhai Hai",
        "artist": "Atif Aslam, Anushka Manchanda",
        "album": "Race 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024e335a523158ef70bd1b93b6",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Allah%20Duhai%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Allah%20Duhai%20Hai&artist_name=Atif%20Aslam%2C%20Anushka%20Manchanda&album=Race%202"
    },
    {
        "id": 30,
        "title": "Ankhiyon Se Goli Mare",
        "artist": "Mika Singh, Tulsi Kumar",
        "album": "Pati Patni Aur Woh",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b211327c24bd83626e55e43",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ankhiyon%20Se%20Goli%20Mare.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ankhiyon%20Se%20Goli%20Mare&artist_name=Mika%20Singh%2C%20Tulsi%20Kumar&album=Pati%20Patni%20Aur%20Woh"
    },
    {
        "id": 31,
        "title": "Baby Bring It On",
        "artist": "Ajay-Atul, Nikhita Gandhi",
        "album": "Madgaon Express",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024b133f7eb25cc2f5c4f7f6a5",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Baby%20Bring%20It%20On.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Baby%20Bring%20It%20On&artist_name=Ajay-Atul%2C%20Nikhita%20Gandhi&album=Madgaon%20Express"
    },
    {
        "id": 32,
        "title": "Baby Doll",
        "artist": "Ragini Mms 2",
        "album": "Meet Bros Anjjan, Kanika Kapoor",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a4812e63c61c30210b9b7508",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Baby%20Doll.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Baby%20Doll&artist_name=Ragini%20Mms%202&album=Meet%20Bros%20Anjjan%2C%20Kanika%20Kapoor"
    },
    {
        "id": 33,
        "title": "Baby Ko Bass Pasand Hai",
        "artist": "Sultan",
        "album": "Vishal-Shekhar, Vishal Dadlani",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b2abfd2439b6c23c3664df87",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Baby%20Ko%20Bass%20Pasand%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Baby%20Ko%20Bass%20Pasand%20Hai&artist_name=Sultan&album=Vishal-Shekhar%2C%20Vishal%20Dadlani"
    },
    {
        "id": 34,
        "title": "Badri Ki Dulhania",
        "artist": "Dev Negi, Neha Kakkar",
        "album": "Badri Ki Dulhania",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fa3617fcd0dd0f23e7174219",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Badri%20Ki%20Dulhania.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Badri%20Ki%20Dulhania&artist_name=Dev%20Negi%2C%20Neha%20Kakkar&album=Badri%20Ki%20Dulhania"
    },
    {
        "id": 35,
        "title": "Badtameez Dil",
        "artist": "Pritam, Amitabh Bhattacharya",
        "album": "Yeh Jawaani Hai Deewani",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02707ea5b8023ac77d31756ed4",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Badtameez%20Dil.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Badtameez%20Dil&artist_name=Pritam%2C%20Amitabh%20Bhattacharya&album=Yeh%20Jawaani%20Hai%20Deewani"
    },
    {
        "id": 36,
        "title": "Balam Pichkari",
        "artist": "Pritam, Shalmali Kholgade",
        "album": "Yeh Jawaani Hai Deewani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02707ea5b8023ac77d31756ed4",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Balam%20Pichkari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Balam%20Pichkari&artist_name=Pritam%2C%20Shalmali%20Kholgade&album=Yeh%20Jawaani%20Hai%20Deewani"
    },
    {
        "id": 37,
        "title": "Ban Ja Rani",
        "artist": "Guru Randhawa",
        "album": "Tumhari Sulu",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024fefec285d23c3938d90c658",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ban%20Ja%20Rani.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ban%20Ja%20Rani&artist_name=Guru%20Randhawa&album=Tumhari%20Sulu"
    },
    {
        "id": 38,
        "title": "Bandeya",
        "artist": "Abhishek Dubey",
        "album": "Bandey",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0228d175493e8f2bba65d12531",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Bandeya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bandeya&artist_name=Abhishek%20Dubey&album=Bandey"
    },
    {
        "id": 39,
        "title": "Bang Bang",
        "artist": "Vishal-Shekhar, Benny Dayal",
        "album": "Bang Bang",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02058494835ee23ad6104f81f2",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Bang%20Bang.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bang%20Bang&artist_name=Vishal-Shekhar%2C%20Benny%20Dayal&album=Bang%20Bang"
    },
    {
        "id": 40,
        "title": "Be With Me",
        "artist": "Abhishek Dubey, SubhoBeatz",
        "album": "Be With Me",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02317cd040506efc1cc201eeef",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Be%20With%20Me.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Be%20With%20Me&artist_name=Abhishek%20Dubey%2C%20SubhoBeatz&album=Be%20With%20Me"
    },
    {
        "id": 41,
        "title": "Besharam Rang",
        "artist": "Vishal-Shekhar, Shilpa Rao",
        "album": "Pathaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0213d49ed65bac50bf72524091",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Besharam%20Rang.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Besharam%20Rang&artist_name=Vishal-Shekhar%2C%20Shilpa%20Rao&album=Pathaan"
    },
    {
        "id": 42,
        "title": "Besharmi Ki Height",
        "artist": "Benny Dayal, Shalmali Kholgade",
        "album": "Main Tera Hero",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0240c98561f61a572a20ba71e1",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Besharmi%20Ki%20Height.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Besharmi%20Ki%20Height&artist_name=Benny%20Dayal%2C%20Shalmali%20Kholgade&album=Main%20Tera%20Hero"
    },
    {
        "id": 43,
        "title": "Bhool Bhulaiyaa 2",
        "artist": "Pritam, Tanishk Bagchi, Neeraj Shridhar",
        "album": "Bhool Bhulaiyaa 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aca38bbbc4bdaa23155b4802",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Bhool%20Bhulaiyaa%202.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bhool%20Bhulaiyaa%202&artist_name=Pritam%2C%20Tanishk%20Bagchi%2C%20Neeraj%20Shridhar&album=Bhool%20Bhulaiyaa%202"
    },
    {
        "id": 44,
        "title": "Bom Diggy Diggy",
        "artist": "Zack Knight, Jasmin Walia",
        "album": "Sonu Ke Titu Ki Sweety",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0282f0b09ca518a1563175ed85",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Bom%20Diggy%20Diggy.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bom%20Diggy%20Diggy&artist_name=Zack%20Knight%2C%20Jasmin%20Walia&album=Sonu%20Ke%20Titu%20Ki%20Sweety"
    },
    {
        "id": 45,
        "title": "Breakup Party",
        "artist": "Yo Yo Honey Singh, Leo Grewal",
        "album": "Breakup Party",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0257c4e7c8c075536c0bc1ca91",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Breakup%20Party.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Breakup%20Party&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Leo%20Grewal&album=Breakup%20Party"
    },
    {
        "id": 46,
        "title": "Buzz",
        "artist": "Aastha Gill, Badshah",
        "album": "Buzz",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0289d9354e8f0df35bb8155085",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Buzz.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Buzz&artist_name=Aastha%20Gill%2C%20Badshah&album=Buzz"
    },
    {
        "id": 47,
        "title": "Chalti Hai Kya 9 Se 12",
        "artist": "Dev Negi, Neha Kakkar",
        "album": "Judwaa 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c0bf5a04d33a302c2eada1d6",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Chalti%20Hai%20Kya%209%20Se%2012.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chalti%20Hai%20Kya%209%20Se%2012&artist_name=Dev%20Negi%2C%20Neha%20Kakkar&album=Judwaa%202"
    },
    {
        "id": 48,
        "title": "Chand Mera Dil",
        "artist": "Sachin-Jigar, Faheem Abdullah",
        "album": "Chand Mera Dil",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ddbbd19c853dffcc23e894ff",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Chand%20Mera%20Dil.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chand%20Mera%20Dil&artist_name=Sachin-Jigar%2C%20Faheem%20Abdullah&album=Chand%20Mera%20Dil"
    },
    {
        "id": 49,
        "title": "Chhote Chhote Peg",
        "artist": "Yo Yo Honey Singh, Neha Kakkar",
        "album": "Sonu Ke Titu Ki Sweety",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024ba2466aa6c47a2a87afd079",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Chhote%20Chhote%20Peg.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chhote%20Chhote%20Peg&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Neha%20Kakkar&album=Sonu%20Ke%20Titu%20Ki%20Sweety"
    },
    {
        "id": 50,
        "title": "Chikni Chameli",
        "artist": "Ajay-Atul, Shreya Ghoshal",
        "album": "Agneepath",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d54393280e88a142bf31265f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Chikni%20Chameli.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chikni%20Chameli&artist_name=Ajay-Atul%2C%20Shreya%20Ghoshal&album=Agneepath"
    },
    {
        "id": 51,
        "title": "Chittiyaan Kalaiyaan",
        "artist": "Meet Bros Anjjan, Kanika Kapoor",
        "album": "Roy",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f6371011af4c82fb31d54820",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Chittiyaan%20Kalaiyaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chittiyaan%20Kalaiyaan&artist_name=Meet%20Bros%20Anjjan%2C%20Kanika%20Kapoor&album=Roy"
    },
    {
        "id": 52,
        "title": "Chogada",
        "artist": "Darshan Raval, Asees Kaur",
        "album": "Loveyatri",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022e15fbd6a10bc9d5994e3abf",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Chogada.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chogada&artist_name=Darshan%20Raval%2C%20Asees%20Kaur&album=Loveyatri"
    },
    {
        "id": 53,
        "title": "Choli Ke Peeche",
        "artist": "Diljit Dosanjh, Alka Yagnik",
        "album": "Crew",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027ba595918bb7da19681b2c44",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Choli%20Ke%20Peeche.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Choli%20Ke%20Peeche&artist_name=Diljit%20Dosanjh%2C%20Alka%20Yagnik&album=Crew"
    },
    {
        "id": 54,
        "title": "Coca Cola",
        "artist": "Tony Kakkar, Neha Kakkar",
        "album": "Luka Chuppi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aae447f2cdb31024a4cd4f1d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Coca%20Cola.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Coca%20Cola&artist_name=Tony%20Kakkar%2C%20Neha%20Kakkar&album=Luka%20Chuppi"
    },
    {
        "id": 55,
        "title": "Current Laga Re",
        "artist": "Nakash Aziz, Dhvani Bhanushali",
        "album": "Cirkus",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02324f79540ef24bb2e34be5db",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Current%20Laga%20Re.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Current%20Laga%20Re&artist_name=Nakash%20Aziz%2C%20Dhvani%20Bhanushali&album=Cirkus"
    },
    {
        "id": 56,
        "title": "Cutiepie",
        "artist": "Pritam, Pardeep Sran, Nakash Aziz",
        "album": "Ae Dil Hai Mushkil",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0258397d59e15b5149adf86033",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Cutiepie.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Cutiepie&artist_name=Pritam%2C%20Pardeep%20Sran%2C%20Nakash%20Aziz&album=Ae%20Dil%20Hai%20Mushkil"
    },
    {
        "id": 57,
        "title": "Daddy Mummy",
        "artist": "Devi Sri Prasad, M.M.Manasi",
        "album": "Bhaag Johnny",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0241f8d8609fd9b955e54ce9ff",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Daddy%20Mummy.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Daddy%20Mummy&artist_name=Devi%20Sri%20Prasad%2C%20M.M.Manasi&album=Bhaag%20Johnny"
    },
    {
        "id": 58,
        "title": "Dance Ka Bhoot",
        "artist": "Pritam, Arijit Singh",
        "album": "Brahmastra",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028f506bed9721592907dbf95e",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dance%20Ka%20Bhoot.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dance%20Ka%20Bhoot&artist_name=Pritam%2C%20Arijit%20Singh&album=Brahmastra"
    },
    {
        "id": 59,
        "title": "Deedar De",
        "artist": "Vishal-Shekhar, Asees Kaur",
        "album": "Chhalaang",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c3d991204236b99ca390ae86",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Deedar%20De.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Deedar%20De&artist_name=Vishal-Shekhar%2C%20Asees%20Kaur&album=Chhalaang"
    },
    {
        "id": 60,
        "title": "Dheeme Dheeme",
        "artist": "Tony Kakkar, Neha Kakkar",
        "album": "Pati Patni Aur Woh",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02031d4fd5dc4581cc52f21225",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dheeme%20Dheeme.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dheeme%20Dheeme&artist_name=Tony%20Kakkar%2C%20Neha%20Kakkar&album=Pati%20Patni%20Aur%20Woh"
    },
    {
        "id": 61,
        "title": "Dhinka Chika",
        "artist": "Amrita Kak, Mika Singh",
        "album": "Ready",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029f769025df6975a318f2b74a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dhinka%20Chika.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dhinka%20Chika&artist_name=Amrita%20Kak%2C%20Mika%20Singh&album=Ready"
    },
    {
        "id": 62,
        "title": "Dhoom Machale Dhoom",
        "artist": "Pritam, Aditi Sharma, Sameer Anjaan",
        "album": "Dhoom: 3",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dhoom%20Machale%20Dhoom.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dhoom%20Machale%20Dhoom&artist_name=Pritam%2C%20Aditi%20Sharma%2C%20Sameer%20Anjaan&album=Dhoom%3A%203"
    },
    {
        "id": 63,
        "title": "Dil Cheez Tujhe Dedi",
        "artist": "Ankit Tiwari, Arijit Singh",
        "album": "Airlift",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026b047c1401c8c18a54e4377d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dil%20Cheez%20Tujhe%20Dedi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Cheez%20Tujhe%20Dedi&artist_name=Ankit%20Tiwari%2C%20Arijit%20Singh&album=Airlift"
    },
    {
        "id": 64,
        "title": "Dil Chori",
        "artist": "Yo Yo Honey Singh, Simar Kaur",
        "album": "Sonu Ke Titu Ki Sweety",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0222927ab54277255e23fc4756",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dil%20Chori.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Chori&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Simar%20Kaur&album=Sonu%20Ke%20Titu%20Ki%20Sweety"
    },
    {
        "id": 65,
        "title": "Dil Dhadakne Do",
        "artist": "Joi Barua, Suraj Jagan",
        "album": "Zindagi Na Milegi Dobara",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020acb5a72549287bf33b51b71",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dil%20Dhadakne%20Do.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Dhadakne%20Do&artist_name=Joi%20Barua%2C%20Suraj%20Jagan&album=Zindagi%20Na%20Milegi%20Dobara"
    },
    {
        "id": 66,
        "title": "Dilli Waley Totey",
        "artist": "Abhishek Dubey",
        "album": "Dilli Waley Totey",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02be8080f20c62fe063285a6b2",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dilli%20Waley%20Totey.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dilli%20Waley%20Totey&artist_name=Abhishek%20Dubey&album=Dilli%20Waley%20Totey"
    },
    {
        "id": 67,
        "title": "Dilliwaali Girlfriend",
        "artist": "Pritam, Arijit Singh",
        "album": "Yeh Jawaani Hai Deewani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02707ea5b8023ac77d31756ed4",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dilliwaali%20Girlfriend.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dilliwaali%20Girlfriend&artist_name=Pritam%2C%20Arijit%20Singh&album=Yeh%20Jawaani%20Hai%20Deewani"
    },
    {
        "id": 68,
        "title": "Dj Waley Babu",
        "artist": "Badshah, Aastha Gill",
        "album": "Dj Waley Babu",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029ac6eba2d093af40e7ad3b94",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dj%20Waley%20Babu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dj%20Waley%20Babu&artist_name=Badshah%2C%20Aastha%20Gill&album=Dj%20Waley%20Babu"
    },
    {
        "id": 69,
        "title": "Dolby Walya",
        "artist": "Jau Dya Na Balasaheb",
        "album": "Nagesh Morwekar, Earl Edgar",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0254c350af21ce0538d3a936c9",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dolby%20Walya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dolby%20Walya&artist_name=Jau%20Dya%20Na%20Balasaheb&album=Nagesh%20Morwekar%2C%20Earl%20Edgar"
    },
    {
        "id": 70,
        "title": "Dus Bahane 2.0",
        "artist": "Vishal Dadlani, Shekhar Ravjiani",
        "album": "Baaghi 3",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b3acdf05052a65eaf3d4e622",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dus%20Bahane%202.0.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dus%20Bahane%202.0&artist_name=Vishal%20Dadlani%2C%20Shekhar%20Ravjiani&album=Baaghi%203"
    },
    {
        "id": 71,
        "title": "Ek Toh Kum Zindagani",
        "artist": "Neha Kakkar, Yash Narvekar",
        "album": "Marjaavaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028701c51e56b94dde2dba35d2",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ek%20Toh%20Kum%20Zindagani.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ek%20Toh%20Kum%20Zindagani&artist_name=Neha%20Kakkar%2C%20Yash%20Narvekar&album=Marjaavaan"
    },
    {
        "id": 72,
        "title": "FA9LA",
        "artist": "Flipperachi",
        "album": "FA9LA",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023d8df7193d625455be369fc3",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/FA9LA.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=FA9LA&artist_name=Flipperachi&album=FA9LA"
    },
    {
        "id": 73,
        "title": "Fevicol Se",
        "artist": "Mamta Sharma, Wajid",
        "album": "Dabangg 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0205b3ca44c67b40e983179d1c",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Fevicol%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Fevicol%20Se&artist_name=Mamta%20Sharma%2C%20Wajid&album=Dabangg%202"
    },
    {
        "id": 74,
        "title": "Gali Gali",
        "artist": "Neha Kakkar, Tanishk Bagchi",
        "album": "Kgf Chapter 1",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026e7b5231a4e16b8013f49e1a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Gali%20Gali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Gali%20Gali&artist_name=Neha%20Kakkar%2C%20Tanishk%20Bagchi&album=Kgf%20Chapter%201"
    },
    {
        "id": 75,
        "title": "Gallan Goodiyaan",
        "artist": "Farhan Akhtar, Shankar Mahadevan",
        "album": "Dil Dhadakne Do",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cff978906e5901b8efacc904",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Gallan%20Goodiyaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Gallan%20Goodiyaan&artist_name=Farhan%20Akhtar%2C%20Shankar%20Mahadevan&album=Dil%20Dhadakne%20Do"
    },
    {
        "id": 76,
        "title": "Gandi Baat",
        "artist": "Mika Singh, Kalpana Patowary",
        "album": "R... Rajkumar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d37310a3dba9e8065f2e348f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Gandi%20Baat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Gandi%20Baat&artist_name=Mika%20Singh%2C%20Kalpana%20Patowary&album=R...%20Rajkumar"
    },
    {
        "id": 77,
        "title": "Garmi",
        "artist": "Badshah, Neha Kakkar",
        "album": "Street Dancer 3D",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02366d5bd2f22edaa6504721ee",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Garmi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Garmi&artist_name=Badshah%2C%20Neha%20Kakkar&album=Street%20Dancer%203D"
    },
    {
        "id": 78,
        "title": "Genda Phool",
        "artist": "Badshah, Payal Dev",
        "album": "Genda Phool",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0278296afe42cfc595e702abfd",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Genda%20Phool.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Genda%20Phool&artist_name=Badshah%2C%20Payal%20Dev&album=Genda%20Phool"
    },
    {
        "id": 79,
        "title": "Ghungroo",
        "artist": "Vishal-Shekhar, Arijit Singh, Shilpa Rao",
        "album": "War",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02281650a8e8c5d04658d31ac1",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ghungroo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ghungroo&artist_name=Vishal-Shekhar%2C%20Arijit%20Singh%2C%20Shilpa%20Rao&album=War"
    },
    {
        "id": 80,
        "title": "Haseeno Ka Deewana",
        "artist": "Raftaar, Payal Dev, Gourov-Roshin",
        "album": "Kaabil",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023e841e7cac60d1a9e580fc94",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Haseeno%20Ka%20Deewana.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Haseeno%20Ka%20Deewana&artist_name=Raftaar%2C%20Payal%20Dev%2C%20Gourov-Roshin&album=Kaabil"
    },
    {
        "id": 81,
        "title": "Hauli Hauli",
        "artist": "Garry Sandhu, Neha Kakkar",
        "album": "De De Pyaar De",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028af4338d27f144a6296043a4",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Hauli%20Hauli.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hauli%20Hauli&artist_name=Garry%20Sandhu%2C%20Neha%20Kakkar&album=De%20De%20Pyaar%20De"
    },
    {
        "id": 82,
        "title": "Hawa Hawa",
        "artist": "Mika Singh, Prakriti Kakar",
        "album": "Mubarakan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028dfb436a57e6238c8aa21d56",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Hawa%20Hawa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hawa%20Hawa&artist_name=Mika%20Singh%2C%20Prakriti%20Kakar&album=Mubarakan"
    },
    {
        "id": 83,
        "title": "High Heels Te Nachche",
        "artist": "Meet Bros, Yo Yo Honey Singh",
        "album": "Ki & Ka",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020555c8e66595f8c8f246443f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/High%20Heels%20Te%20Nachche.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=High%20Heels%20Te%20Nachche&artist_name=Meet%20Bros%2C%20Yo%20Yo%20Honey%20Singh&album=Ki%20%26%20Ka"
    },
    {
        "id": 84,
        "title": "High Heels",
        "artist": "Jaz Dhami, Yo Yo Honey Singh",
        "album": "High Heels",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0256510367aba6e946b17e626a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/High%20Heels.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=High%20Heels&artist_name=Jaz%20Dhami%2C%20Yo%20Yo%20Honey%20Singh&album=High%20Heels"
    },
    {
        "id": 85,
        "title": "High Rated Gabru",
        "artist": "Guru Randhawa",
        "album": "Nawabzaade",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d8229d0bb20ca18ec806b74f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/High%20Rated%20Gabru.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=High%20Rated%20Gabru&artist_name=Guru%20Randhawa&album=Nawabzaade"
    },
    {
        "id": 86,
        "title": "Hu Wahi",
        "artist": "Abhishek Dubey, SubhoBeatz",
        "album": "Hu Wahi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0270b8ba0997ce44be212e9bc0",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Hu%20Wahi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hu%20Wahi&artist_name=Abhishek%20Dubey%2C%20SubhoBeatz&album=Hu%20Wahi"
    },
    {
        "id": 87,
        "title": "HUA ASAR TERA",
        "artist": "Abhishek Dubey, SubhoBeatz",
        "album": "HUA ASAR TERA",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029c097226dc09536c047c13f0",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/HUA%20ASAR%20TERA.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=HUA%20ASAR%20TERA&artist_name=Abhishek%20Dubey%2C%20SubhoBeatz&album=HUA%20ASAR%20TERA"
    },
    {
        "id": 88,
        "title": "Hum Pyaar Karne Wale",
        "artist": "Shashwat Sachdev, Anuradha Paudwal",
        "album": "Dhurandhar The Revenge",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025721a6565bedfab70ebf532e",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Hum%20Pyaar%20Karne%20Wale.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hum%20Pyaar%20Karne%20Wale&artist_name=Shashwat%20Sachdev%2C%20Anuradha%20Paudwal&album=Dhurandhar%20The%20Revenge"
    },
    {
        "id": 89,
        "title": "Husn Parcham",
        "artist": "Bhoomi Trivedi, Raja Kumari",
        "album": "Zero",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0243b2e009fd566e98d09f8012",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Husn%20Parcham.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Husn%20Parcham&artist_name=Bhoomi%20Trivedi%2C%20Raja%20Kumari&album=Zero"
    },
    {
        "id": 90,
        "title": "Illegal Weapon 2.0",
        "artist": "Jasmine Sandlas, Garry Sandhu",
        "album": "Street Dancer 3D",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b9c46d2b8d5604c33cc578b7",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Illegal%20Weapon%202.0.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Illegal%20Weapon%202.0&artist_name=Jasmine%20Sandlas%2C%20Garry%20Sandhu&album=Street%20Dancer%203D"
    },
    {
        "id": 91,
        "title": "Inaam",
        "artist": "Jasleen Royal, Badshah",
        "album": "Inaam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02974c87c4d1b73970e0f45f70",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Inaam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Inaam&artist_name=Jasleen%20Royal%2C%20Badshah&album=Inaam"
    },
    {
        "id": 92,
        "title": "Jaan Se Guzarte Hain",
        "artist": "Shashwat Sachdev, Khan Saab",
        "album": "Dhurandhar The Revenge",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024c3eeb98521e02693a46d6db",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jaan%20Se%20Guzarte%20Hain.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jaan%20Se%20Guzarte%20Hain&artist_name=Shashwat%20Sachdev%2C%20Khan%20Saab&album=Dhurandhar%20The%20Revenge"
    },
    {
        "id": 93,
        "title": "Jab Talak",
        "artist": "Arijit Singh, Madhubanti Bagchi",
        "album": "Cocktail 2",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ef8b82436833330bf4f0370a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jab%20Talak.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jab%20Talak&artist_name=Arijit%20Singh%2C%20Madhubanti%20Bagchi&album=Cocktail%202"
    },
    {
        "id": 94,
        "title": "Jai Jai Shivshankar",
        "artist": "Vishal Dadlani, Benny Dayal",
        "album": "War",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028874d42c6591770e15618d13",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jai%20Jai%20Shivshankar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jai%20Jai%20Shivshankar&artist_name=Vishal%20Dadlani%2C%20Benny%20Dayal&album=War"
    },
    {
        "id": 95,
        "title": "Jhoome Jo Pathaan",
        "artist": "Vishal-Shekhar, Arijit Singh",
        "album": "Pathaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027d46ff19532fdba734bfd4e0",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jhoome%20Jo%20Pathaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jhoome%20Jo%20Pathaan&artist_name=Vishal-Shekhar%2C%20Arijit%20Singh&album=Pathaan"
    },
    {
        "id": 96,
        "title": "Jogi",
        "artist": "Sunanda Sharma",
        "album": "Jogi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a806116532533ecfe17c2a29",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jogi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jogi&artist_name=Sunanda%20Sharma&album=Jogi"
    },
    {
        "id": 97,
        "title": "Jugnu",
        "artist": "Badshah, Nikhita Gandhi",
        "album": "Jugnu",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02efe374ffabeb543840dee228",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jugnu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jugnu&artist_name=Badshah%2C%20Nikhita%20Gandhi&album=Jugnu"
    },
    {
        "id": 98,
        "title": "Jumme Ki Raat",
        "artist": "Palak Muchhal, Himesh Reshammiya",
        "album": "Kick",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02232bade47d843bb107ec169f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jumme%20Ki%20Raat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jumme%20Ki%20Raat&artist_name=Palak%20Muchhal%2C%20Himesh%20Reshammiya&album=Kick"
    },
    {
        "id": 99,
        "title": "Kala Chashma",
        "artist": "Amar Arshi, Badshah, Neha Kakkar",
        "album": "Baar Baar Dekho",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02edfe45782ad611717d77b2ee",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Kala%20Chashma.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kala%20Chashma&artist_name=Amar%20Arshi%2C%20Badshah%2C%20Neha%20Kakkar&album=Baar%20Baar%20Dekho"
    },
    {
        "id": 100,
        "title": "Kala Sha Kala",
        "artist": "Siam Howlader",
        "album": "Kala Sha Kala",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d17691b403f1acc1d587decd",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Kala%20Sha%20Kala.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kala%20Sha%20Kala&artist_name=Siam%20Howlader&album=Kala%20Sha%20Kala"
    },
    {
        "id": 101,
        "title": "Kamariya",
        "artist": "Aastha Gill, Sachin Sanghvi",
        "album": "Stree",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02757e3e10c59c6e71affce6d6",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Kamariya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kamariya&artist_name=Aastha%20Gill%2C%20Sachin%20Sanghvi&album=Stree"
    },
    {
        "id": 102,
        "title": "Kar Gayi Chull",
        "artist": "Neha Kakkar",
        "album": "Kapoor & Sons",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0221c2eda68f386c438ba2f1aa",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Kar%20Gayi%20Chull.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kar%20Gayi%20Chull&artist_name=Neha%20Kakkar&album=Kapoor%20%26%20Sons"
    },
    {
        "id": 103,
        "title": "Khalibali",
        "artist": "Shivam Pathak, Shail Hada",
        "album": "Padmaavat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b07fa198edaf969b74dd160a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Khalibali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Khalibali&artist_name=Shivam%20Pathak%2C%20Shail%20Hada&album=Padmaavat"
    },
    {
        "id": 104,
        "title": "Khudkhushi",
        "artist": "Neeti Mohan, Sourav Roy",
        "album": "Khudkhushi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bcb53ee3315133fe88be9c65",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Khudkhushi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Khudkhushi&artist_name=Neeti%20Mohan%2C%20Sourav%20Roy&album=Khudkhushi"
    },
    {
        "id": 105,
        "title": "Laal Pari",
        "artist": "Yo Yo Honey Singh, Simar Kaur",
        "album": "Housefull 5",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e7a80f2e7ff3ef311f16a442",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Laal%20Pari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Laal%20Pari&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Simar%20Kaur&album=Housefull%205"
    },
    {
        "id": 106,
        "title": "Laal Peeli Akhiyaan",
        "artist": "Tanishk Bagchi, Romy, Neeraj Rajawat",
        "album": "Teri Baaton Mein Aisa Uljha Jiya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026039b4e6fbd1c21f4b3c582d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Laal%20Peeli%20Akhiyaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Laal%20Peeli%20Akhiyaan&artist_name=Tanishk%20Bagchi%2C%20Romy%2C%20Neeraj%20Rajawat&album=Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya"
    },
    {
        "id": 107,
        "title": "Lagdi Lahore Di",
        "artist": "Guru Randhawa, Tulsi Kumar",
        "album": "Street Dancer 3D",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0247478a4ab783457fe6766576",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Lagdi%20Lahore%20Di.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lagdi%20Lahore%20Di&artist_name=Guru%20Randhawa%2C%20Tulsi%20Kumar&album=Street%20Dancer%203D"
    },
    {
        "id": 108,
        "title": "Laila Main Laila",
        "artist": "Pawni Pandey",
        "album": "Raees",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fced3ea9af59ad98c142279e",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Laila%20Main%20Laila.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Laila%20Main%20Laila&artist_name=Pawni%20Pandey&album=Raees"
    },
    {
        "id": 109,
        "title": "Lamborghini",
        "artist": "Meet Bros., Neha Kakkar, Jassie Gill",
        "album": "Jai Mummy Di",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e22c786794d6374e0bebe350",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Lamborghini.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lamborghini&artist_name=Meet%20Bros.%2C%20Neha%20Kakkar%2C%20Jassie%20Gill&album=Jai%20Mummy%20Di"
    },
    {
        "id": 110,
        "title": "Leja Re",
        "artist": "Tanishk Bagchi, Dhvani Bhanushali",
        "album": "Leja Re",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f7d2a56220308f87f643ef4d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Leja%20Re.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Leja%20Re&artist_name=Tanishk%20Bagchi%2C%20Dhvani%20Bhanushali&album=Leja%20Re"
    },
    {
        "id": 111,
        "title": "Leke Prabhu Ka Naam",
        "artist": "Pritam, Arijit Singh, Nikhita Gandhi",
        "album": "Tiger 3",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cfaf4fdf8ed871d373a92fa7",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Leke%20Prabhu%20Ka%20Naam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Leke%20Prabhu%20Ka%20Naam&artist_name=Pritam%2C%20Arijit%20Singh%2C%20Nikhita%20Gandhi&album=Tiger%203"
    },
    {
        "id": 112,
        "title": "Lift Teri Bandh Hai",
        "artist": "Anu Malik, Neha Kakkar",
        "album": "Judwaa 2",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c0bf5a04d33a302c2eada1d6",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Lift%20Teri%20Bandh%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lift%20Teri%20Bandh%20Hai&artist_name=Anu%20Malik%2C%20Neha%20Kakkar&album=Judwaa%202"
    },
    {
        "id": 113,
        "title": "London Thumakda",
        "artist": "Labh Janjua, Sonu Kakkar, Neha Kakkar",
        "album": "Queen",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026d5222aff82ede55a6f2f813",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/London%20Thumakda.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=London%20Thumakda&artist_name=Labh%20Janjua%2C%20Sonu%20Kakkar%2C%20Neha%20Kakkar&album=Queen"
    },
    {
        "id": 114,
        "title": "Lost",
        "artist": "Abhishek Dubey, Priyanka Gajanan",
        "album": "Lost",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b22ac9e09e0e4ea370fdf12d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Lost.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lost&artist_name=Abhishek%20Dubey%2C%20Priyanka%20Gajanan&album=Lost"
    },
    {
        "id": 115,
        "title": "Lovely",
        "artist": "Vishal-Shekhar, Kanika Kapoor",
        "album": "Happy New Year",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02295f7adceff63a32bbcf95f2",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Lovely.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lovely&artist_name=Vishal-Shekhar%2C%20Kanika%20Kapoor&album=Happy%20New%20Year"
    },
    {
        "id": 116,
        "title": "Lungi Dance",
        "artist": "Yo Yo Honey Singh",
        "album": "Chennai Express",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0294c54b0918e86cb477b594f4",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Lungi%20Dance.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lungi%20Dance&artist_name=Yo%20Yo%20Honey%20Singh&album=Chennai%20Express"
    },
    {
        "id": 117,
        "title": "Lutt Le Gaya",
        "artist": "Shashwat Sachdev, Simran Choudhary",
        "album": "Dhurandhar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c53e5adf9f81693d62f98019",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Lutt%20Le%20Gaya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lutt%20Le%20Gaya&artist_name=Shashwat%20Sachdev%2C%20Simran%20Choudhary&album=Dhurandhar"
    },
    {
        "id": 118,
        "title": "Madamiyan",
        "artist": "Mika Singh, Mamta Sharma",
        "album": "Tevar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d8bd1822c8f3b580b9200568",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Madamiyan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Madamiyan&artist_name=Mika%20Singh%2C%20Mamta%20Sharma&album=Tevar"
    },
    {
        "id": 119,
        "title": "Main Tera Boyfriend",
        "artist": "Arijit Singh, Neha Kakkar",
        "album": "Raabta",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022e44757f6ea4eb34d2a0d42f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Main%20Tera%20Boyfriend.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Main%20Tera%20Boyfriend&artist_name=Arijit%20Singh%2C%20Neha%20Kakkar&album=Raabta"
    },
    {
        "id": 120,
        "title": "Maine Pi Rakhi Hai",
        "artist": "Pritam, Shreya Ghoshal, Amitabh Bhattacharya",
        "album": "Tu Jhoothi Main Makkaar",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b774caa118ec0e8fd5b1c8b9",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Maine%20Pi%20Rakhi%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Maine%20Pi%20Rakhi%20Hai&artist_name=Pritam%2C%20Shreya%20Ghoshal%2C%20Amitabh%20Bhattacharya&album=Tu%20Jhoothi%20Main%20Makkaar"
    },
    {
        "id": 121,
        "title": "Maine Tujhko Dekha",
        "artist": "Neeraj Shridhar, Sukriti Kakar",
        "album": "Golmaal Again!!!",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0274af53c6e6a503f52652c428",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Maine%20Tujhko%20Dekha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Maine%20Tujhko%20Dekha&artist_name=Neeraj%20Shridhar%2C%20Sukriti%20Kakar&album=Golmaal%20Again!!!"
    },
    {
        "id": 122,
        "title": "Make Some Noise For The Desi Boyz",
        "artist": "Pritam, KK, Bob",
        "album": "Desi Boyz",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02daa89593cc2cde9651665d03",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Make%20Some%20Noise%20For%20The%20Desi%20Boyz.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Make%20Some%20Noise%20For%20The%20Desi%20Boyz&artist_name=Pritam%2C%20KK%2C%20Bob&album=Desi%20Boyz"
    },
    {
        "id": 123,
        "title": "Makhna",
        "artist": "Yo Yo Honey Singh, Neha Kakkar",
        "album": "Makhna",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0292cc8d50313d609bfd060a70",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Makhna.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Makhna&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Neha%20Kakkar&album=Makhna"
    },
    {
        "id": 124,
        "title": "Maniac",
        "artist": "Yo Yo Honey Singh, Ragini Vishwakarma",
        "album": "Glory",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c23fc5c23c494a83d14908d2",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Maniac.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Maniac&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Ragini%20Vishwakarma&album=Glory"
    },
    {
        "id": 125,
        "title": "Mashooqa",
        "artist": "Pritam, Mahmood, Raghav Chaitanya",
        "album": "Cocktail 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bd164e3bbec608aedda85a22",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Mashooqa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mashooqa&artist_name=Pritam%2C%20Mahmood%2C%20Raghav%20Chaitanya&album=Cocktail%202"
    },
    {
        "id": 126,
        "title": "Mera Naam Mary",
        "artist": "Ajay-Atul, Chinmayi",
        "album": "Brothers",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02daea2798c5f8f8b2105174f5",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Mera%20Naam%20Mary.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mera%20Naam%20Mary&artist_name=Ajay-Atul%2C%20Chinmayi&album=Brothers"
    },
    {
        "id": 127,
        "title": "Mere Soneya",
        "artist": "Abhishek Dubey, SubhoBeatz",
        "album": "Mere Soneya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b69f03f09a313000760825a5",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Mere%20Soneya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mere%20Soneya&artist_name=Abhishek%20Dubey%2C%20SubhoBeatz&album=Mere%20Soneya"
    },
    {
        "id": 128,
        "title": "Milegi Milegi",
        "artist": "Mika Singh, Sachin-Jigar",
        "album": "Stree",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026d3eb740a87b5c21d2ac345f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Milegi%20Milegi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Milegi%20Milegi&artist_name=Mika%20Singh%2C%20Sachin-Jigar&album=Stree"
    },
    {
        "id": 129,
        "title": "Millionaire",
        "artist": "Yo Yo Honey Singh",
        "album": "GLORY",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Millionaire.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Millionaire&artist_name=Yo%20Yo%20Honey%20Singh&album=GLORY"
    },
    {
        "id": 130,
        "title": "Mirchi",
        "artist": "DIVINE, MC Altaf, Stylo G",
        "album": "Mirchi",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025ac573b4ef43591be197a78b",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Mirchi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mirchi&artist_name=DIVINE%2C%20MC%20Altaf%2C%20Stylo%20G&album=Mirchi"
    },
    {
        "id": 131,
        "title": "Mora Piya",
        "artist": "Abhishek Dubey, SubhoBeatz",
        "album": "Mora Piya",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02f4d91123cc4143225c160c25",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Mora%20Piya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mora%20Piya&artist_name=Abhishek%20Dubey%2C%20SubhoBeatz&album=Mora%20Piya"
    },
    {
        "id": 132,
        "title": "Mundiyan",
        "artist": "Navraj Hans, Palak Muchhal",
        "album": "Baaghi 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0218bf8c0d6070820f03dc1bff",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Mundiyan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mundiyan&artist_name=Navraj%20Hans%2C%20Palak%20Muchhal&album=Baaghi%202"
    },
    {
        "id": 133,
        "title": "Muqabla",
        "artist": "Yash Narvekar, Parampara Tandon",
        "album": "Street Dancer 3D",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f57f022d8751d518b3dc5f40",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Muqabla.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Muqabla&artist_name=Yash%20Narvekar%2C%20Parampara%20Tandon&album=Street%20Dancer%203D"
    },
    {
        "id": 134,
        "title": "Naah Goriye",
        "artist": "Harrdy Sandhu, Swasti Mehul",
        "album": "Bala",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02407ac87f8941a57484ba18cf",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Naah%20Goriye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Naah%20Goriye&artist_name=Harrdy%20Sandhu%2C%20Swasti%20Mehul&album=Bala"
    },
    {
        "id": 135,
        "title": "Naal Nachna",
        "artist": "Shashwat Sachdev, Afsana Khan",
        "album": "Dhurandhar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c53e5adf9f81693d62f98019",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Naal%20Nachna.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Naal%20Nachna&artist_name=Shashwat%20Sachdev%2C%20Afsana%20Khan&album=Dhurandhar"
    },
    {
        "id": 136,
        "title": "Nashe Si Chadh Gayi",
        "artist": "Vishal-Shekhar, Arijit Singh, Caralisa Monteiro",
        "album": "Befikre",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f5dc36d5000145375a41c3b8",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Nashe%20Si%20Chadh%20Gayi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Nashe%20Si%20Chadh%20Gayi&artist_name=Vishal-Shekhar%2C%20Arijit%20Singh%2C%20Caralisa%20Monteiro&album=Befikre"
    },
    {
        "id": 137,
        "title": "O Gujariya",
        "artist": "Shefali Alvares, Nikhil D'Souza, Amit Trivedi",
        "album": "Queen",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026d5222aff82ede55a6f2f813",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/O%20Gujariya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Gujariya&artist_name=Shefali%20Alvares%2C%20Nikhil%20D'Souza%2C%20Amit%20Trivedi&album=Queen"
    },
    {
        "id": 138,
        "title": "O Saki Saki",
        "artist": "Neha Kakkar, Tulsi Kumar, B Praak",
        "album": "Batla House",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0245ba33de8115217429c19c1f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/O%20Saki%20Saki.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Saki%20Saki&artist_name=Neha%20Kakkar%2C%20Tulsi%20Kumar%2C%20B%20Praak&album=Batla%20House"
    },
    {
        "id": 139,
        "title": "Oh Ho Ho Ho",
        "artist": "Sukhbir, Ikka",
        "album": "Hindi Medium",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a71488f39620ba195aede1c3",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Oh%20Ho%20Ho%20Ho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Oh%20Ho%20Ho%20Ho&artist_name=Sukhbir%2C%20Ikka&album=Hindi%20Medium"
    },
    {
        "id": 140,
        "title": "One Two Three Four",
        "artist": "Vishal-Shekhar, Vishal Dadlani, Hamsika Iyer",
        "album": "Chennai Express",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0294c54b0918e86cb477b594f4",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/One%20Two%20Three%20Four.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=One%20Two%20Three%20Four&artist_name=Vishal-Shekhar%2C%20Vishal%20Dadlani%2C%20Hamsika%20Iyer&album=Chennai%20Express"
    },
    {
        "id": 141,
        "title": "Paagal",
        "artist": "Badshah",
        "album": "Paagal",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025f07a542582aff9b46786e42",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Paagal.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Paagal&artist_name=Badshah&album=Paagal"
    },
    {
        "id": 142,
        "title": "Paan Ki Dukaan",
        "artist": "Vishal Bhardwaj, Sukhwinder Singh, Rekha Bhardwaj",
        "album": "Paan Ki Dukaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fb5478035ea05d0de7e8cead",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Paan%20Ki%20Dukaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Paan%20Ki%20Dukaan&artist_name=Vishal%20Bhardwaj%2C%20Sukhwinder%20Singh%2C%20Rekha%20Bhardwaj&album=Paan%20Ki%20Dukaan"
    },
    {
        "id": 143,
        "title": "Param Sundari",
        "artist": "A.R. Rahman, Shreya Ghoshal",
        "album": "Mimi",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0222f2a067de39e01e402f23e3",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Param%20Sundari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Param%20Sundari&artist_name=A.R.%20Rahman%2C%20Shreya%20Ghoshal&album=Mimi"
    },
    {
        "id": 144,
        "title": "Party All Night",
        "artist": "Yo Yo Honey Singh, Sahil Kaushal",
        "album": "Boss",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0215bdb7a86250e53e8a80163d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Party%20All%20Night.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Party%20All%20Night&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Sahil%20Kaushal&album=Boss"
    },
    {
        "id": 145,
        "title": "Payal",
        "artist": "Yo Yo Honey Singh, Paradox",
        "album": "GLORY",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Payal.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Payal&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Paradox&album=GLORY"
    },
    {
        "id": 146,
        "title": "Proper Patola",
        "artist": "Badshah, Diljit Dosanjh, Aastha Gill",
        "album": "Namaste England",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a592055601417c539a19a135",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Proper%20Patola.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Proper%20Patola&artist_name=Badshah%2C%20Diljit%20Dosanjh%2C%20Aastha%20Gill&album=Namaste%20England"
    },
    {
        "id": 147,
        "title": "Psycho Saiyaan",
        "artist": "Sachet Tandon, Dhvani Bhanushali",
        "album": "Saaho",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d492ab4a1950dcfe213ab8d2",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Psycho%20Saiyaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Psycho%20Saiyaan&artist_name=Sachet%20Tandon%2C%20Dhvani%20Bhanushali&album=Saaho"
    },
    {
        "id": 149,
        "title": "Ramba Ho",
        "artist": "Shashwat Sachdev, Madhubanti Bagchi, Bappi Lahiri, Indiwar",
        "album": "Dhurandhar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027838ccbef3fb712228e23fc5",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ramba%20Ho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ramba%20Ho&artist_name=Shashwat%20Sachdev%2C%20Madhubanti%20Bagchi%2C%20Bappi%20Lahiri%2C%20Indiwar&album=Dhurandhar"
    },
    {
        "id": 150,
        "title": "Rang De Lal",
        "artist": "Shashwat Sachdev, Jasmine Sandlas, Afsana Khan",
        "album": "Dhurandhar The Revenge",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026f9b48486b57fbec6b219790",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Rang%20De%20Lal.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Rang%20De%20Lal&artist_name=Shashwat%20Sachdev%2C%20Jasmine%20Sandlas%2C%20Afsana%20Khan&album=Dhurandhar%20The%20Revenge"
    },
    {
        "id": 151,
        "title": "Ranjha",
        "artist": "Diljit Dosanjh, Sia, David Guetta",
        "album": "Ranjha",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022ee6259a91835039a96dc674",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ranjha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ranjha&artist_name=Diljit%20Dosanjh%2C%20Sia%2C%20David%20Guetta&album=Ranjha"
    },
    {
        "id": 152,
        "title": "Run Down The City",
        "artist": "Shashwat Sachdev, Reble, Asha Bhosle",
        "album": "Dhurandhar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027838ccbef3fb712228e23fc5",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Run%20Down%20The%20City.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Run%20Down%20The%20City&artist_name=Shashwat%20Sachdev%2C%20Reble%2C%20Asha%20Bhosle&album=Dhurandhar"
    },
    {
        "id": 153,
        "title": "Sadi Gali",
        "artist": "Tanu Weds Manu",
        "album": "Lehmber Hussainpuri, Raj Shekhar",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0288cd0451da5de305f16ae6f9",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Sadi%20Gali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sadi%20Gali&artist_name=Tanu%20Weds%20Manu&album=Lehmber%20Hussainpuri%2C%20Raj%20Shekhar"
    },
    {
        "id": 154,
        "title": "Saiyaan Ji",
        "artist": "Yo Yo Honey Singh, Neha Kakkar, Nushrratt Bharuccha",
        "album": "Saiyaan Ji",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027a4ca76abadaf4b0733c6955",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Saiyaan%20Ji.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saiyaan%20Ji&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Neha%20Kakkar%2C%20Nushrratt%20Bharuccha&album=Saiyaan%20Ji"
    },
    {
        "id": 155,
        "title": "Saree Ke Fall Sa",
        "artist": "Nakash Aziz, Antara Mitra, Pritam, Mayur Puri",
        "album": "R...Rajkumar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d37310a3dba9e8065f2e348f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Saree%20Ke%20Fall%20Sa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saree%20Ke%20Fall%20Sa&artist_name=Nakash%20Aziz%2C%20Antara%20Mitra%2C%20Pritam%2C%20Mayur%20Puri&album=R...Rajkumar"
    },
    {
        "id": 156,
        "title": "Saturday Saturday",
        "artist": "Shaarib Toshi, Badshah, Indeep Bakshi, Akriti Kakar",
        "album": "Humpty Sharma Ki Dulhania",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02529133de1bab20f2d18ba930",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Saturday%20Saturday.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saturday%20Saturday&artist_name=Shaarib%20Toshi%2C%20Badshah%2C%20Indeep%20Bakshi%2C%20Akriti%20Kakar&album=Humpty%20Sharma%20Ki%20Dulhania"
    },
    {
        "id": 157,
        "title": "Sau Tarah Ke",
        "artist": "Pritam, Jonita Gandhi, Amit Mishra, Kumaar, Ashish Pandit",
        "album": "Dishoom",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d40f14fbc589329567858fc0",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Sau%20Tarah%20Ke.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sau%20Tarah%20Ke&artist_name=Pritam%2C%20Jonita%20Gandhi%2C%20Amit%20Mishra%2C%20Kumaar%2C%20Ashish%20Pandit&album=Dishoom"
    },
    {
        "id": 158,
        "title": "Shaitan Ka Saala",
        "artist": "Sohail Sen, Vishal Dadlani",
        "album": "Housefull 4",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b47ce73c38e8f06f5513c843",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Shaitan%20Ka%20Saala.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shaitan%20Ka%20Saala&artist_name=Sohail%20Sen%2C%20Vishal%20Dadlani&album=Housefull%204"
    },
    {
        "id": 159,
        "title": "Shararat",
        "artist": "Shashwat Sachdev, Madhubanti Bagchi, Jasmine Sandlas",
        "album": "Dhurandhar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027838ccbef3fb712228e23fc5",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Shararat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shararat&artist_name=Shashwat%20Sachdev%2C%20Madhubanti%20Bagchi%2C%20Jasmine%20Sandlas&album=Dhurandhar"
    },
    {
        "id": 160,
        "title": "She Move It Like",
        "artist": "Badshah",
        "album": "ONE",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027b8d8ca1a8e14506c8f35233",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/She%20Move%20It%20Like.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=She%20Move%20It%20Like&artist_name=Badshah&album=ONE"
    },
    {
        "id": 161,
        "title": "Show Me The Thumka",
        "artist": "Pritam, Amitabh Bhattacharya, Sunidhi Chauhan, Shashwat Singh",
        "album": "Tu Jhoothi Main Makkaar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02113734646dba79ae2634c344",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Show%20Me%20The%20Thumka.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Show%20Me%20The%20Thumka&artist_name=Pritam%2C%20Amitabh%20Bhattacharya%2C%20Sunidhi%20Chauhan%2C%20Shashwat%20Singh&album=Tu%20Jhoothi%20Main%20Makkaar"
    },
    {
        "id": 162,
        "title": "Slow Motion",
        "artist": "Shreya Ghoshal, Nakash Aziz, Vishal-Shekhar",
        "album": "Bharat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d2c2d56006664964c1a6ffc3",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Slow%20Motion.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Slow%20Motion&artist_name=Shreya%20Ghoshal%2C%20Nakash%20Aziz%2C%20Vishal-Shekhar&album=Bharat"
    },
    {
        "id": 163,
        "title": "Sooraj Dooba Hain",
        "artist": "Amaal Mallik, Arijit Singh, Aditi Singh Sharma, Kumaar",
        "album": "Roy",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f6371011af4c82fb31d54820",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Sooraj%20Dooba%20Hain.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sooraj%20Dooba%20Hain&artist_name=Amaal%20Mallik%2C%20Arijit%20Singh%2C%20Aditi%20Singh%20Sharma%2C%20Kumaar&album=Roy"
    },
    {
        "id": 164,
        "title": "Sooraj Ki Baahon Mein",
        "artist": "Dominique Cerejo, Clinton Cerejo, Loy Mendonsa",
        "album": "Zindagi Na Milegi Dobara",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020acb5a72549287bf33b51b71",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Sooraj%20Ki%20Baahon%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sooraj%20Ki%20Baahon%20Mein&artist_name=Dominique%20Cerejo%2C%20Clinton%20Cerejo%2C%20Loy%20Mendonsa&album=Zindagi%20Na%20Milegi%20Dobara"
    },
    {
        "id": 165,
        "title": "Subha Hone Na De",
        "artist": "Pritam, Mika Singh, Shefali Alvares",
        "album": "Desi Boyz",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02daa89593cc2cde9651665d03",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Subha%20Hone%20Na%20De.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Subha%20Hone%20Na%20De&artist_name=Pritam%2C%20Mika%20Singh%2C%20Shefali%20Alvares&album=Desi%20Boyz"
    },
    {
        "id": 166,
        "title": "Suit Suit",
        "artist": "Guru Randhawa, Arjun",
        "album": "Suit Suit",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b092dbb02f474b81fc300e24",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Suit%20Suit.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Suit%20Suit&artist_name=Guru%20Randhawa%2C%20Arjun&album=Suit%20Suit"
    },
    {
        "id": 167,
        "title": "Sunny Sunny",
        "artist": "Yo Yo Honey Singh, Neha Kakkar",
        "album": "Yaariyan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a51f57ce4e92c152479caab7",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Sunny%20Sunny.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sunny%20Sunny&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Neha%20Kakkar&album=Yaariyan"
    },
    {
        "id": 168,
        "title": "Superstar",
        "artist": "Abhishek Dubey, SubhoBeatz",
        "album": "Superstar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025714e562ea30b6d3e3a14ec4",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Superstar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Superstar&artist_name=Abhishek%20Dubey%2C%20SubhoBeatz&album=Superstar"
    },
    {
        "id": 169,
        "title": "Swag Se Swagat",
        "artist": "Vishal-Shekhar, Julius Packiam",
        "album": "Tiger Zinda Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02576521b1bf3ec2fd7fdfcbd5",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Swag%20Se%20Swagat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Swag%20Se%20Swagat&artist_name=Vishal-Shekhar%2C%20Julius%20Packiam&album=Tiger%20Zinda%20Hai"
    },
    {
        "id": 170,
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "album": "Bad Newz",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026531b74a25be3ba1e2359130",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tauba%20Tauba.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tauba%20Tauba&artist_name=Karan%20Aujla&album=Bad%20Newz"
    },
    {
        "id": 171,
        "title": "Tere Naal Nachna",
        "artist": "Tere Naal Nachna",
        "album": "Nawabzaade",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0258c284e51ba6dcd3dc6fd682",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tere%20Naal%20Nachna.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tere%20Naal%20Nachna&artist_name=Tere%20Naal%20Nachna&album=Nawabzaade"
    },
    {
        "id": 172,
        "title": "Teri Baaton Mein Aisa Uljha Jiya",
        "artist": "Raghav, Tanishk Bagchi, Asees Kaur",
        "album": "Teri Baaton Mein Aisa Uljha Jiya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dfa8e0dab093f6a7c638c7fc",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya&artist_name=Raghav%2C%20Tanishk%20Bagchi%2C%20Asees%20Kaur&album=Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya"
    },
    {
        "id": 173,
        "title": "The Breakup Song",
        "artist": "Pritam, Arijit Singh, Badshah, Jonita Gandhi, Nakash Aziz",
        "album": "Ae Dil Hai Mushkil",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0258397d59e15b5149adf86033",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/The%20Breakup%20Song.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=The%20Breakup%20Song&artist_name=Pritam%2C%20Arijit%20Singh%2C%20Badshah%2C%20Jonita%20Gandhi%2C%20Nakash%20Aziz&album=Ae%20Dil%20Hai%20Mushkil"
    },
    {
        "id": 174,
        "title": "The Humma Song",
        "artist": "A.R. Rahman, Badshah, Tanishk Bagchi, Shashaa Tirupati, Jubin Nautiyal",
        "album": "OK Jaanu",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027871ae506e494a7722b38962",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/The%20Humma%20Song.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=The%20Humma%20Song&artist_name=A.R.%20Rahman%2C%20Badshah%2C%20Tanishk%20Bagchi%2C%20Shashaa%20Tirupati%2C%20Jubin%20Nautiyal&album=OK%20Jaanu"
    },
    {
        "id": 175,
        "title": "The Naari Naari Song",
        "artist": "Sachin-Jigar, Vishal Dadlani, Jonita Gandhi",
        "album": "Made in China",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fe0652f9fcfa41dde8b3449d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/The%20Naari%20Naari%20Song.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=The%20Naari%20Naari%20Song&artist_name=Sachin-Jigar%2C%20Vishal%20Dadlani%2C%20Jonita%20Gandhi&album=Made%20in%20China"
    },
    {
        "id": 176,
        "title": "Trippy Trippy",
        "artist": "Neha Kakkar, Benny Dayal, Brijesh Shandilya, Badshah, Sachin-Jigar",
        "album": "Bhoomi",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d1ef1bddf28af32f64c24545",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Trippy%20Trippy.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Trippy%20Trippy&artist_name=Neha%20Kakkar%2C%20Benny%20Dayal%2C%20Brijesh%20Shandilya%2C%20Badshah%2C%20Sachin-Jigar&album=Bhoomi"
    },
    {
        "id": 177,
        "title": "Tu Nahi Hai",
        "artist": "Abhishek Dubey, SubhoBeatz, Akansha Tripathi",
        "album": "Tu Nahi Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0244b3c610477f39323d1c1703",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tu%20Nahi%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Nahi%20Hai&artist_name=Abhishek%20Dubey%2C%20SubhoBeatz%2C%20Akansha%20Tripathi&album=Tu%20Nahi%20Hai"
    },
    {
        "id": 178,
        "title": "Tujhe Aksa Beach Ghuma Doon",
        "artist": "Wajid, Amrita Kak",
        "album": "God Tussi Great Ho",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0237be0915d1201cfdf47420e9",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tujhe%20Aksa%20Beach%20Ghuma%20Doon.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tujhe%20Aksa%20Beach%20Ghuma%20Doon&artist_name=Wajid%2C%20Amrita%20Kak&album=God%20Tussi%20Great%20Ho"
    },
    {
        "id": 179,
        "title": "Tujhko",
        "artist": "Pritam, Arijit Singh, Sunidhi Chauhan, Amitabh Bhattacharya",
        "album": "Cocktail 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b70e6ef0759aac7d134de3f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tujhko.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tujhko&artist_name=Pritam%2C%20Arijit%20Singh%2C%20Sunidhi%20Chauhan%2C%20Amitabh%20Bhattacharya&album=Cocktail%202"
    },
    {
        "id": 180,
        "title": "Twist",
        "artist": "Neeraj Shridhar, Pritam",
        "album": "Love Aaj Kal",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02379298ceb1e3c8e52048eeba",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Twist.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Twist&artist_name=Neeraj%20Shridhar%2C%20Pritam&album=Love%20Aaj%20Kal"
    },
    {
        "id": 181,
        "title": "Ucha Lamba Kad Forever",
        "artist": "Anand Raj Anand, Vikram Montrose, Rubai, Meggha Bali",
        "album": "Welcome To The Jungle",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027a91de4dd74a42daa4af0037",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ucha%20Lamba%20Kad%20Forever.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ucha%20Lamba%20Kad%20Forever&artist_name=Anand%20Raj%20Anand%2C%20Vikram%20Montrose%2C%20Rubai%2C%20Meggha%20Bali&album=Welcome%20To%20The%20Jungle"
    },
    {
        "id": 182,
        "title": "Ude Dil Befikre",
        "artist": "Vishal-Shekhar, Benny Dayal, Jaideep Sahni",
        "album": "Befikre",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02f5dc36d5000145375a41c3b8",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ude%20Dil%20Befikre.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ude%20Dil%20Befikre&artist_name=Vishal-Shekhar%2C%20Benny%20Dayal%2C%20Jaideep%20Sahni&album=Befikre"
    },
    {
        "id": 183,
        "title": "Uyi Amma",
        "artist": "Amit Trivedi",
        "album": "Azaad",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ff602926eb81f594fc034034",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Uyi%20Amma.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Uyi%20Amma&artist_name=Amit%20Trivedi&album=Azaad"
    },
    {
        "id": 184,
        "title": "Wallah Habibi",
        "artist": "Vishal Mishra, Vishal Dadlani, Dipakshi Kalita, Irshad Kamil",
        "album": "Bade Miyan Chote Miyan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eb6d8ff5934c120dbc0ba9c3",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Wallah%20Habibi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Wallah%20Habibi&artist_name=Vishal%20Mishra%2C%20Vishal%20Dadlani%2C%20Dipakshi%20Kalita%2C%20Irshad%20Kamil&album=Bade%20Miyan%20Chote%20Miyan"
    },
    {
        "id": 185,
        "title": "Yaar Naa Miley",
        "artist": "Yo Yo Honey Singh, Jasmine Sandlas",
        "album": "Kick",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02232bade47d843bb107ec169f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Yaar%20Naa%20Miley.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yaar%20Naa%20Miley&artist_name=Yo%20Yo%20Honey%20Singh%2C%20Jasmine%20Sandlas&album=Kick"
    }
];
// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "Best Party Mix",
    defaultCover: "logo.png"
};