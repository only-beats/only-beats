const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "3:59 AM",
        "artist": "DIVINE",
        "album": "Punya Paap",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0283c726c3768d0981c76acd38",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/3_59%20AM.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=3%3A59%20AM&artist_name=DIVINE&album=Punya%20Paap"
    },
    {
        "id": 2,
        "title": "52 Bars",
        "artist": "Karan Aujla, Ikky",
        "album": "Four You",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026c8802411130056f447257a6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/52%20Bars.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=52%20Bars&artist_name=Karan%20Aujla%2C%20Ikky&album=Four%20You"
    },
    {
        "id": 3,
        "title": "Aage Chal",
        "artist": "Raftaar",
        "album": "Aage Chal",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024947ccc787a854db0b2484e5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aage%20Chal.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aage%20Chal&artist_name=Raftaar&album=Aage%20Chal"
    },
    {
        "id": 4,
        "title": "AAHISTE SE",
        "artist": "Dxvta",
        "album": "AAHISTE SE",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0243d6b6c40ee8d8c7f40e5b1f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/AAHISTE%20SE.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=AAHISTE%20SE&artist_name=Dxvta&album=AAHISTE%20SE"
    },
    {
        "id": 5,
        "title": "Aam Jahe Munde",
        "artist": "Parmish Verma, PARDHAAN, Desi Crew",
        "album": "Aam Jahe Munde",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0228c90366eb01fbb476a981e4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aam%20Jahe%20Munde.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aam%20Jahe%20Munde&artist_name=Parmish%20Verma%2C%20PARDHAAN%2C%20Desi%20Crew&album=Aam%20Jahe%20Munde"
    },
    {
        "id": 6,
        "title": "Aankhein Milayenge Darr Se",
        "artist": "K. Mohan, Neha Bhasin, Vishal Khurana",
        "album": "Neerja",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02328366cbdebf00b0654f1999",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aankhein%20Milayenge%20Darr%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aankhein%20Milayenge%20Darr%20Se&artist_name=K.%20Mohan%2C%20Neha%20Bhasin%2C%20Vishal%20Khurana&album=Neerja"
    },
    {
        "id": 7,
        "title": "Aarambh",
        "artist": "Piyush Mishra",
        "album": "Gulaal",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c45169492ebc6af70588df7d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aarambh.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aarambh&artist_name=Piyush%20Mishra&album=Gulaal"
    },
    {
        "id": 8,
        "title": "Aas Paas Khuda",
        "artist": "Vishal-Shekhar, Rahat Fateh Ali Khan",
        "album": "Anjaana Anjaani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021da0a37c5bad81580d49ef05",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aas%20Paas%20Khuda.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aas%20Paas%20Khuda&artist_name=Vishal-Shekhar%2C%20Rahat%20Fateh%20Ali%20Khan&album=Anjaana%20Anjaani"
    },
    {
        "id": 9,
        "title": "Aashayein",
        "artist": "KK, Salim Merchant",
        "album": "Iqbal",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02891e0c17f252e109c20a7882",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aashayein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aashayein&artist_name=KK%2C%20Salim%20Merchant&album=Iqbal"
    },
    {
        "id": 10,
        "title": "Ab Mujhko Jeena",
        "artist": "Zubeen, Salim–Sulaiman, Mir Ali Husain",
        "album": "Aashayein",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02fb37e33b94aca38c4479f62d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ab%20Mujhko%20Jeena.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ab%20Mujhko%20Jeena&artist_name=Zubeen%2C%20Salim%E2%80%93Sulaiman%2C%20Mir%20Ali%20Husain&album=Aashayein"
    },
    {
        "id": 11,
        "title": "Apna Time Aayega",
        "artist": "DIVINE, Ranveer Singh, Dub Sharma",
        "album": "Gully Boy",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0299241710b1b1b590b79d444e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Apna%20Time%20Aayega.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Apna%20Time%20Aayega&artist_name=DIVINE%2C%20Ranveer%20Singh%2C%20Dub%20Sharma&album=Gully%20Boy"
    },
    {
        "id": 12,
        "title": "Bande Hain Hum Uske",
        "artist": "Kausar Munir",
        "album": "Dhoom:3",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bande%20Hain%20Hum%20Uske.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bande%20Hain%20Hum%20Uske&artist_name=Kausar%20Munir&album=Dhoom%3A3"
    },
    {
        "id": 13,
        "title": "Bandeya Rey Bandeya",
        "artist": "Arijit Singh, Asees Kaur",
        "album": "Simmba",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021563e3ab78422f323f54c57f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bandeya%20Rey%20Bandeya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bandeya%20Rey%20Bandeya&artist_name=Arijit%20Singh%2C%20Asees%20Kaur&album=Simmba"
    },
    {
        "id": 14,
        "title": "Behe Chala",
        "artist": "Yasser Desai & Shashwat Sachdev",
        "album": "Uri - The Surgical Strike",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025a63efb352e4b9cf64b5b6e4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Behe%20Chala.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Behe%20Chala&artist_name=Yasser%20Desai%20%26%20Shashwat%20Sachdev&album=Uri%20-%20The%20Surgical%20Strike"
    },
    {
        "id": 15,
        "title": "Besabriyaan",
        "artist": "Armaan Malik, Amaal Mallik, Manoj Muntashir",
        "album": "M.S.Dhoni - The Untold Story",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0202dde7bfff94df00c8b76eb4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Besabriyaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Besabriyaan&artist_name=Armaan%20Malik%2C%20Amaal%20Mallik%2C%20Manoj%20Muntashir&album=M.S.Dhoni%20-%20The%20Untold%20Story"
    },
    {
        "id": 16,
        "title": "Bezubaan Phir Se",
        "artist": "Anushka Manchanda, Madhav Krishna & Vishal Dadlani",
        "album": "ABCD 2",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024634da1d297644a35619f4fc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bezubaan%20Phir%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bezubaan%20Phir%20Se&artist_name=Anushka%20Manchanda%2C%20Madhav%20Krishna%20%26%20Vishal%20Dadlani&album=ABCD%202"
    },
    {
        "id": 17,
        "title": "Bhaag Milkha Bhaag",
        "artist": "Shankar-Ehsaan-Loy, Arif Lohar",
        "album": "Bhaag Milkha Bhaag",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b414911b2d52d2601220603a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bhaag%20Milkha%20Bhaag.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bhaag%20Milkha%20Bhaag&artist_name=Shankar-Ehsaan-Loy%2C%20Arif%20Lohar&album=Bhaag%20Milkha%20Bhaag"
    },
    {
        "id": 18,
        "title": "Bolo Har Har Har",
        "artist": "Mohit Chauhan, Sukhwinder Singh, Badshah, Megha Sriram Dalton, Anugrah",
        "album": "Shivaay",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e7fe7d656750737e8d369f95",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bolo%20Har%20Har%20Har.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bolo%20Har%20Har%20Har&artist_name=Mohit%20Chauhan%2C%20Sukhwinder%20Singh%2C%20Badshah%2C%20Megha%20Sriram%20Dalton%2C%20Anugrah&album=Shivaay"
    },
    {
        "id": 19,
        "title": "Brothers Anthem",
        "artist": "Ajay-Atul, Vishal Dadlani",
        "album": "Brothers",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02276db1b64b5f1d9060405fbc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Brothers%20Anthem.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Brothers%20Anthem&artist_name=Ajay-Atul%2C%20Vishal%20Dadlani&album=Brothers"
    },
    {
        "id": 20,
        "title": "Chak De India",
        "artist": "Sukhvinder Singh, Salim Merchant & Marianne D'Cruz",
        "album": "Chak De India",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d9366c007bfea889d08c61ec",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chak%20De%20India.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chak%20De%20India&artist_name=Sukhvinder%20Singh%2C%20Salim%20Merchant%20%26%20Marianne%20D'Cruz&album=Chak%20De%20India"
    },
    {
        "id": 21,
        "title": "Chak Lein De",
        "artist": "KAILASH KHER, KAILASH-PARESH-NARESH",
        "album": "Chandni Chowk To China",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022e33f85b9e16a0659f3a0539",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chak%20Lein%20De.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chak%20Lein%20De&artist_name=KAILASH%20KHER%2C%20KAILASH-PARESH-NARESH&album=Chandni%20Chowk%20To%20China"
    },
    {
        "id": 22,
        "title": "Challa",
        "artist": "Shashwat Sachdev",
        "album": "Uri: The Surgical Strike",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025a63efb352e4b9cf64b5b6e4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Challa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Challa&artist_name=Shashwat%20Sachdev&album=Uri%3A%20The%20Surgical%20Strike"
    },
    {
        "id": 23,
        "title": "Dangal",
        "artist": "Pritam & Amitabh Bhattacharya",
        "album": "Dangal",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020d4c0c61f40c3f95723ad60c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dangal.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dangal&artist_name=Pritam%20%26%20Amitabh%20Bhattacharya&album=Dangal"
    },
    {
        "id": 24,
        "title": "De Mauka Zindagi",
        "artist": "Nilotpal Bora SOUNDSCAPE",
        "album": "Aspirants: Season 1",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0230f2ffd8591c9422ebf36e84",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/De%20Mauka%20Zindagi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=De%20Mauka%20Zindagi&artist_name=Nilotpal%20Bora%20SOUNDSCAPE&album=Aspirants%3A%20Season%201%20(Music%20From%20the%20TVF%20Original%20Series)"
    },
    {
        "id": 25,
        "title": "Dhaakad",
        "artist": "Raftaar & Pritam",
        "album": "Dangal",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020d4c0c61f40c3f95723ad60c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dhaakad.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dhaakad&artist_name=Raftaar%20%26%20Pritam&album=Dangal"
    },
    {
        "id": 26,
        "title": "Dhurandhar The Revenge",
        "artist": "Shashwat Sachdev",
        "album": "Dhurandhar The Revenge",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024c3eeb98521e02693a46d6db",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dhurandhar%20The%20Revenge.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dhurandhar%20The%20Revenge&artist_name=Shashwat%20Sachdev&album=Dhurandhar%20The%20Revenge"
    },
    {
        "id": 27,
        "title": "Do Numbari",
        "artist": "Dhanda Nyoliwala",
        "album": "Mirzapur The Movie",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0292eaf3601f19ba618f3bb63a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Do%20Numbari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Do%20Numbari&artist_name=Dhanda%20Nyoliwala&album=Mirzapur%20The%20Movie"
    },
    {
        "id": 28,
        "title": "Ek Zindagi",
        "artist": "Taniskaa Sanghvi Sachinjigar",
        "album": "Angrezi Medium",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ca5585b4e97cd9deeafb5c63",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ek%20Zindagi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ek%20Zindagi&artist_name=taniskaa%20sanghvi%20sachinjigar&album=Angrezi%20Medium"
    },
    {
        "id": 29,
        "title": "Get Ready To Fight",
        "artist": "Benny Dayal",
        "album": "Get Ready To Fight",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022276caa6421a2da6feeea44b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Get%20Ready%20To%20Fight.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Get%20Ready%20To%20Fight&artist_name=Benny%20Dayal&album=Get%20Ready%20To%20Fight"
    },
    {
        "id": 30,
        "title": "Ghamand Kar",
        "artist": "Parampara Thakur & Sachet Tandon",
        "album": "Tanhaji: The Unsung Warrior",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e7c04de440551fe74643638a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ghamand%20Kar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ghamand%20Kar&artist_name=Parampara%20Thakur%20%26%20Sachet%20Tandon&album=Tanhaji%3A%20The%20Unsung%20Warrior"
    },
    {
        "id": 31,
        "title": "Ishq Jalakar",
        "artist": "Shashwat Sachdev",
        "album": "Dhurandhar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0238da56c296cd6e1d88144b32",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ishq%20Jalakar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ishq%20Jalakar%20-%20Karvaan&artist_name=Shashwat%20Sachdev&album=Dhurandhar"
    },
    {
        "id": 32,
        "title": "Jagga Jiteya",
        "artist": "Daler Mehndi, Dee MC, Shashwat Sachdev, Kumaar",
        "album": "Uri - The Surgical Strike",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025a63efb352e4b9cf64b5b6e4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jagga%20Jiteya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jagga%20Jiteya&artist_name=Daler%20Mehndi%2C%20Dee%20MC%2C%20Shashwat%20Sachdev%2C%20Kumaar&album=Uri%20-%20The%20Surgical%20Strike"
    },
    {
        "id": 33,
        "title": "Jame Raho",
        "artist": "Vishal Dadlani, Shankar-Ehsaan-Loy, Prasoon Joshi",
        "album": "Taare Zameen Par",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020f431c71dd2ac4dafc0c828f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jame%20Raho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jame%20Raho&artist_name=Vishal%20Dadlani%2C%20Shankar-Ehsaan-Loy%2C%20Prasoon%20Joshi&album=Taare%20Zameen%20Par"
    },
    {
        "id": 34,
        "title": "Jashn-e-Ishqa",
        "artist": "Javed Ali",
        "album": "Gunday",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e9c00ca1d7085a7ea56e2337",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jashn-e-Ishqa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jashn-e-Ishqa&artist_name=Javed%20Ali&album=Gunday"
    },
    {
        "id": 35,
        "title": "Jay-Jaykara",
        "artist": "Kailash Kher",
        "album": "Baahubali 2",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026724a21713a8fb7698b6d9cf",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jay-Jaykara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jay-Jaykara&artist_name=Kailash%20Kher&album=Baahubali%202"
    },
    {
        "id": 36,
        "title": "Jee Karda",
        "artist": "Divya Kumar",
        "album": "Badlapur",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02972a8fa058a13f91a1a46850",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jee%20Karda.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jee%20Karda%20-%20Rock%20Version&artist_name=Divya%20Kumar&album=Badlapur"
    },
    {
        "id": 37,
        "title": "Jeetne Ke Liye",
        "artist": "KK",
        "album": "Azhar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ac47a8ab83d832318df5a9fc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jeetne%20Ke%20Liye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jeetne%20Ke%20Liye&artist_name=KK&album=Azhar"
    },
    {
        "id": 38,
        "title": "Jhuk Na Paunga",
        "artist": "Raid",
        "album": "Papon, Amit Trivedi, Indraneel",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c28e3d518785a79613a5d9cb",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jhuk%20Na%20Paunga.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jhuk%20Na%20Paunga&artist_name=Raid&album=Papon%2C%20Amit%20Trivedi%2C%20Indraneel"
    },
    {
        "id": 39,
        "title": "Jigra",
        "artist": "Shashwat Sachdev",
        "album": "Uri - The Surgical Strike",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025a63efb352e4b9cf64b5b6e4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jigra.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jigra&artist_name=Shashwat%20Sachdev&album=Uri%20-%20The%20Surgical%20Strike"
    },
    {
        "id": 40,
        "title": "Kandhon Se Milte Hain Kandhe",
        "artist": "Shankar Mahadevan",
        "album": "Lakshya",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02441b53722d32e65078a35a14",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kandhon%20Se%20Milte%20Hain%20Kandhe.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kandhon%20Se%20Milte%20Hain%20Kandhe&artist_name=Shankar%20Mahadevan&album=Lakshya"
    },
    {
        "id": 41,
        "title": "Kar Har Maidaan Fateh",
        "artist": "Vikram Montrose, Paresh Rawal, Dia Mirza, Jim Sarbh",
        "album": "Sanju",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02badc10f3684a57f23c26f6c1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kar%20Har%20Maidaan%20Fateh.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kar%20Har%20Maidaan%20Fateh&artist_name=Vikram%20Montrose%2C%20Paresh%20Rawal%2C%20Dia%20Mirza%2C%20Jim%20Sarbh%2C%20Ranbir%20Kapoor%2C%20Sukhwinder%20Singh%2C%20Manisha%20Koirala%2C%20Vicky%20Kaushal%2C%20Boman%20Irani%2C%20Shekhar%20Astitwa%2C%20Shreya%20Ghoshal%2C%20Anushka%20Sharma%2C%20Sonam%20Kapoor&album=Sanju"
    },
    {
        "id": 42,
        "title": "Kholo Kholo",
        "artist": "Raman Mahadevan, Shankar-Ehsaan-Loy, Prasoon Joshi",
        "album": "Taare Zameen Par",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020f431c71dd2ac4dafc0c828f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kholo%20Kholo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kholo%20Kholo&artist_name=Raman%20Mahadevan%2C%20Shankar-Ehsaan-Loy%2C%20Prasoon%20Joshi&album=Taare%20Zameen%20Par"
    },
    {
        "id": 43,
        "title": "Lakshya",
        "artist": "Shankar Mahadevan",
        "album": "Lakshya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02441b53722d32e65078a35a14",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Lakshya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lakshya&artist_name=Shankar%20Mahadevan&album=Lakshya"
    },
    {
        "id": 44,
        "title": "Lalkara",
        "artist": "Intense & DILJIT DOSANJH",
        "album": "Ghost",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cb2f9520171129a3df7a241a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Lalkara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lalkara&artist_name=Intense%20%26%20DILJIT%20DOSANJH&album=Ghost"
    },
    {
        "id": 45,
        "title": "Let's Crack It!",
        "artist": "Naezy",
        "album": "Let's Crack It! - Student Anthem",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e45697565ef15227c2665c50",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Let's%20Crack%20It!.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Let's%20Crack%20It!%20-%20Student%20Anthem&artist_name=Naezy&album=Let's%20Crack%20It!%20-%20Student%20Anthem"
    },
    {
        "id": 46,
        "title": "Live Without Regret",
        "artist": "Akhil Redhu",
        "album": "Live Without Regret",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0244e600d4861fa3483125f1f6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Live%20Without%20Regret.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Live%20Without%20Regret&artist_name=Akhil%20Redhu&album=Live%20Without%20Regret"
    },
    {
        "id": 47,
        "title": "Maay Bhavani",
        "artist": "Sukhwinder Singh, Shreya Ghoshal & Ajay-Atul",
        "album": "Tanhaji - The Unsung Warrior",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e80780de66ba8da2ffe2de1a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Maay%20Bhavani.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Maay%20Bhavani&artist_name=Sukhwinder%20Singh%2C%20Shreya%20Ghoshal%20%26%20Ajay-Atul&album=Tanhaji%20-%20The%20Unsung%20Warrior"
    },
    {
        "id": 48,
        "title": "Malhari",
        "artist": "Vishal Dadlani",
        "album": "Bajirao Mastani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d296ae49d6d7f22f5bb26cf4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Malhari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Malhari&artist_name=Vishal%20Dadlani&album=Bajirao%20Mastani"
    },
    {
        "id": 49,
        "title": "Manzar Hai Ye Naya",
        "artist": "Shashwat Sachdev",
        "album": "Uri - The Surgical Strike",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025a63efb352e4b9cf64b5b6e4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Manzar%20Hai%20Ye%20Naya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Manzar%20Hai%20Ye%20Naya&artist_name=Shashwat%20Sachdev&album=Uri%20-%20The%20Surgical%20Strike"
    },
    {
        "id": 50,
        "title": "Mera Intkam Dekhegi",
        "artist": "Krishna Beuraa",
        "album": "Shaadi Mein Zaroor Aana",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d4a5a5ee4adcda7ec1695766",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mera%20Intkam%20Dekhegi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mera%20Intkam%20Dekhegi&artist_name=Krishna%20Beuraa&album=Shaadi%20Mein%20Zaroor%20Aana"
    },
    {
        "id": 51,
        "title": "Mera Safar",
        "artist": "Iqlipse Nova",
        "album": "Mera Safar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d856fdbe479745c557b9600a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mera%20Safar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mera%20Safar&artist_name=Iqlipse%20Nova&album=Mera%20Safar"
    },
    {
        "id": 52,
        "title": "Mere Nishaan",
        "artist": "Kailash Kher, Meet Bros Anjjan",
        "album": "Oh My God",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cae8942a913237e3839b37b4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mere%20Nishaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mere%20Nishaan&artist_name=Kailash%20Kher%2C%20Meet%20Bros%20Anjjan&album=Oh%20My%20God"
    },
    {
        "id": 53,
        "title": "Mila Toh Marega",
        "artist": "RAVINDRA UPADHYAY, VISHVESH PARMAR",
        "album": "RAKHT CHARITRA",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e3c6be130b8eebe213394266",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mila%20Toh%20Marega.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mila%20Toh%20Marega&artist_name=RAVINDRA%20UPADHYAY%2C%20VISHVESH%20PARMAR%2C%20SANDEEP%20PATIL%2C%20DHARAM%2C%20SANDEEP%2C%20VAYU&album=RAKHT%20CHARITRA"
    },
    {
        "id": 54,
        "title": "Parinda",
        "artist": "Amaal Mallik",
        "album": "Saina",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c8aa7b0301ab7133b9d69f0c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Parinda.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Parinda&artist_name=Amaal%20Mallik&album=Saina"
    },
    {
        "id": 55,
        "title": "Parwah Nahin",
        "artist": "Siddharth Basrur",
        "album": "M.S.Dhoni - The Untold Story",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0202dde7bfff94df00c8b76eb4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Parwah%20Nahin.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Parwah%20Nahin&artist_name=Siddharth%20Basrur&album=M.S.Dhoni%20-%20The%20Untold%20Story"
    },
    {
        "id": 56,
        "title": "Prassthanam",
        "artist": "Dev Negi",
        "album": "Prassthanam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027e5353c4c379257935daabe9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Prassthanam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Prassthanam&artist_name=Dev%20Negi&album=Prassthanam"
    },
    {
        "id": 57,
        "title": "Prithvi",
        "artist": "Rapperiya Baalam, Jagirdar RV, Rajneesh Jaipuri",
        "album": "Prithvi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02497e40e868a08683871a5f01",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Prithvi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Prithvi&artist_name=Rapperiya%20Baalam%2C%20Jagirdar%20RV%2C%20Rajneesh%20Jaipuri&album=Prithvi"
    },
    {
        "id": 58,
        "title": "Restart",
        "artist": "Swanand Kirkire, Shaan, Vidhu Vinod Chopra, Shantanu Moitra",
        "album": "12th Fail",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02be1b86eabcb8836249ce4e2e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Restart.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Restart&artist_name=Swanand%20Kirkire%2C%20Shaan%2C%20Vidhu%20Vinod%20Chopra%2C%20Shantanu%20Moitra&album=12th%20Fail"
    },
    {
        "id": 59,
        "title": "Rise of Sultan",
        "artist": "Shekhar Ravjiani & Chorus",
        "album": "Sultan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b2abfd2439b6c23c3664df87",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Rise%20of%20Sultan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Rise%20of%20Sultan&artist_name=Shekhar%20Ravjiani%20%26%20Chorus&album=Sultan"
    },
    {
        "id": 60,
        "title": "Shaabaashiyaan",
        "artist": "Shilpa Rao",
        "album": "Mission Mangal",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02f5e7f6b019c6efe44b609bae",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Shaabaashiyaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shaabaashiyaan&artist_name=Shilpa%20Rao&album=Mission%20Mangal"
    },
    {
        "id": 61,
        "title": "Sher Aaya Sher",
        "artist": "DIVINE, Major C",
        "album": "Gully Boy",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0299241710b1b1b590b79d444e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sher%20Aaya%20Sher.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sher%20Aaya%20Sher&artist_name=DIVINE%2C%20Major%20C&album=Gully%20Boy"
    },
    {
        "id": 62,
        "title": "Shiv Tandav Stotram",
        "artist": "Shankar Mahadevan",
        "album": "Shiv Tandav Stotram",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0263521cf4f0ca24a244f26e8b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Shiv%20Tandav%20Stotram.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shiv%20Tandav%20Stotram&artist_name=Shankar%20Mahadevan&album=Shiv%20Tandav%20Stotram"
    },
    {
        "id": 63,
        "title": "Shoorveer III",
        "artist": "Rapperiya Baalam",
        "album": "Shoorveer III",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0257c966ee3968008282afd240",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Shoorveer%20III.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shoorveer%20III&artist_name=Rapperiya%20Baalam&album=Shoorveer%20III"
    },
    {
        "id": 64,
        "title": "Shoorveer II",
        "artist": "Rapperiya Baalam, Jagirdar RV",
        "album": "Shoorveer II",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a49885e2e98a3c5d26fb6ae8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Shoorveer%20II.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shoorveer%20II&artist_name=Rapperiya%20Baalam%2C%20Jagirdar%20RV&album=Shoorveer%20II"
    },
    {
        "id": 65,
        "title": "Shoorveer",
        "artist": "Rapperiya Baalam",
        "album": "Shoorveer",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e882116207e139e515337da6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Shoorveer.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shoorveer&artist_name=Rapperiya%20Baalam&album=Shoorveer"
    },
    {
        "id": 66,
        "title": "Soorma Anthem",
        "artist": "Shankar Mahadevan",
        "album": "Soorma",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02812487194156bd6146ffa6c9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Soorma%20Anthem.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Soorma%20Anthem&artist_name=Shankar%20Mahadevan&album=Soorma"
    },
    {
        "id": 67,
        "title": "Sultan",
        "artist": "Sukhwinder Singh",
        "album": "Sultan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b2abfd2439b6c23c3664df87",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sultan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sultan&artist_name=Sukhwinder%20Singh&album=Sultan"
    },
    {
        "id": 68,
        "title": "Thaan Liya",
        "artist": "Sachin-Jigar, Sukhwinder Singh, Taniskaa Sanghvi",
        "album": "Dasvi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0207b353acee627e97c5bfa0ec",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Thaan%20Liya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Thaan%20Liya&artist_name=Sachin-Jigar%2C%20Sukhwinder%20Singh%2C%20Taniskaa%20Sanghvi&album=Dasvi"
    },
    {
        "id": 69,
        "title": "Triple OG",
        "artist": "DIVINE",
        "album": "Triple OG",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c9750cf7a3824ab5499302f9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Triple%20OG.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Triple%20OG&artist_name=DIVINE&album=Triple%20OG"
    },
    {
        "id": 70,
        "title": "Tu Na Jaane",
        "artist": "Dxvta, Nishikar Chhibber",
        "album": "Tu Na Jaane",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02531f09f304d3fe916d85966e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Na%20Jaane.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Na%20Jaane&artist_name=Dxvta%2C%20Nishikar%20Chhibber&album=Tu%20Na%20Jaane"
    },
    {
        "id": 71,
        "title": "Ud-daa Punjab",
        "artist": "Vishal Dadlani, Amit Trivedi",
        "album": "Udta Punjab",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ae6d60a0e2e11cf61fa5aa57",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ud-daa%20Punjab.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ud-daa%20Punjab&artist_name=Vishal%20Dadlani%2C%20Amit%20Trivedi&album=Udta%20Punjab"
    },
    {
        "id": 72,
        "title": "Vande Mataram",
        "artist": "Vishal Dadlani, Sheykhar Ravjiani",
        "album": "Fighter]",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024a046f8a1ea0f4de59ed7eec",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Vande%20Mataram.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Vande%20Mataram&artist_name=Vishal%20Dadlani%2C%20Sheykhar%20Ravjiani%2C%20Vaibhav%20Gupta%2C%20Subhadeep%20Das%20Chowdhury%2C%20Dipan%20Mitra%2C%20Utkarsh%20Wankhede%2C%20Piyush%20Panwar%2C%20Obom%20Tangu%2C%20Kumaar&album=Vande%20Mataram%20(The%20Fighter%20Anthem)%20From%20%5B%22Fighter%22%5D"
    },
    {
        "id": 73,
        "title": "Vijayi Bhava",
        "artist": "Shankar Mahadevan",
        "album": "Manikarnika - The Queen Of Jhansi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b970f5efa252a0afafe6104f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Vijayi%20Bhava.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Vijayi%20Bhava&artist_name=Shankar%20Mahadevan&album=Manikarnika%20-%20The%20Queen%20Of%20Jhansi"
    },
    {
        "id": 74,
        "title": "Ziddi Dil",
        "artist": "Vishal Dadlani, Prashant Ingole",
        "album": "Mary Kom",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02156d7b245cc2038c06b1d799",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ziddi%20Dil.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ziddi%20Dil&artist_name=Vishal%20Dadlani%20%26%20Prashant%20Ingole&album=Mary%20Kom%20(Original%20Motion%20Picture%20Soundtrack)"
    },
    {
        "id": 75,
        "title": "Zinda",
        "artist": "Shankar Ehsaan Loy, Siddharth Mahadevan",
        "album": "Zinda",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b414911b2d52d2601220603a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Zinda.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zinda&artist_name=Shankar%20Ehsaan%20Loy%20and%20Siddharth%20Mahadevan&album=Zinda"
    }

];
// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "Motivational Songs",
    defaultCover: "logo.png"
};
