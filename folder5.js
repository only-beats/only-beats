const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Adhir Man Jhale",
        "artist": "Shreya Ghoshal",
        "album": "Nilkanth Master",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02004a54f13331b6ab5020bd77",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Adhir%20Man%20Jhale.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Adhir%20Man%20Jhale&artist_name=Shreya%20Ghoshal&album=Nilkanth%20Master"
    },
    {
        "id": 2,
        "title": "Aga Bai",
        "artist": "Shalmalia Kholgade, Monali Thakur",
        "album": "Aiyyaa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026781b0577a94267c83517328",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aga%20Bai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aga%20Bai&artist_name=Shalmalia%20Kholgade%2C%20Monali%20Thakur&album=Aiyyaa"
    },
    {
        "id": 3,
        "title": "Galavar Khali",
        "artist": "Swapnil Bandodkar",
        "album": "Bedhund",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cad59f7a724760f7f91daa16",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Galavar%20Khali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Galavar%20Khali&artist_name=Swapnil%20Bandodkar&album=Bedhund"
    },
    {
        "id": 4,
        "title": "Gulabi Sadi",
        "artist": "Sanju Rathod, G-SPXRK",
        "album": "Gulabi Sadi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0258ce01f471e8550949a5ac78",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Gulabi%20Sadi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Gulabi%20Sadi&artist_name=Sanju%20Rathod%2C%20G-SPXRK&album=Gulabi%20Sadi"
    },
    {
        "id": 5,
        "title": "He Assa Pahila",
        "artist": "Jaydeep Vaidya",
        "album": "Kesari",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c3afecc6b3e1517db233c939",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/He%20Assa%20Pahila.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=He%20Assa%20Pahila&artist_name=Jaydeep%20Vaidya&album=Kesari"
    },
    {
        "id": 6,
        "title": "Hrudayat Vaje Something",
        "artist": "Vidhit Patankar",
        "album": "Ti Saddhya Kay Karte",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0280aaf71a0e0d3da8eacf118e",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Hrudayat%20Vaje%20Something.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hrudayat%20Vaje%20Something&artist_name=Vidhit%20Patankar&album=Ti%20Saddhya%20Kay%20Karte"
    },
    {
        "id": 7,
        "title": "Jay Jay Maharashtra Majha",
        "artist": "Ajay-Atul, Ajay Gogavale",
        "album": "Maharashtra Shaheer",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0218fbb560eb1e2c6bd7753d50",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jay%20Jay%20Maharashtra%20Majha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jay%20Jay%20Maharashtra%20Majha&artist_name=Ajay-Atul%2C%20Ajay%20Gogavale&album=Maharashtra%20Shaheer"
    },
    {
        "id": 8,
        "title": "Kaakan",
        "artist": "Shankar Mahadevan, Neha Rajpal",
        "album": "Kaakan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023f9864a438a4a3206cb1d016",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Kaakan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kaakan&artist_name=Shankar%20Mahadevan%2C%20Neha%20Rajpal&album=Kaakan"
    },
    {
        "id": 9,
        "title": "Khulta Kali Khulena",
        "artist": "Shreya Ghoshal",
        "album": "Title Songs",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02510ee3230e863f215edbee13",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Khulta%20Kali%20Khulena.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Khulta%20Kali%20Khulena&artist_name=Shreya%20Ghoshal&album=Title%20Songs"
    },
    {
        "id": 10,
        "title": "Maze Maaher Pandhari",
        "artist": "Pandit Bhimsen Joshi",
        "album": "Abhanga Vani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d8db0753bc6258a1bbdae660",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Maze%20Maaher%20Pandhari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Maze%20Maaher%20Pandhari&artist_name=Pandit%20Bhimsen%20Joshi&album=Abhanga%20Vani"
    },
    {
        "id": 11,
        "title": "Nauvari",
        "artist": "Sanju Rathod",
        "album": "Nauvari",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02478b2b79652effae32188753",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Nauvari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Nauvari&artist_name=Sanju%20Rathod&album=Nauvari"
    },
    {
        "id": 12,
        "title": "O Nakhava Mala Botin Firaval Ka",
        "artist": "Krushna Shinde",
        "album": "O Nakhava Mala Botin Firaval Ka",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02898f998feea243d05070c63e",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/O%20Nakhava%20Mala%20Botin%20Firaval%20Ka.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Nakhava%20Mala%20Botin%20Firaval%20Ka&artist_name=Krushna%20Shinde&album=O%20Nakhava%20Mala%20Botin%20Firaval%20Ka"
    },
    {
        "id": 13,
        "title": "Radha Hi Bawari",
        "artist": "Swapnil Bandodkar",
        "album": "Tu Majha Kinara",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02526847b3bb0e703de1bfbe15",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Radha%20Hi%20Bawari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Radha%20Hi%20Bawari&artist_name=Swapnil%20Bandodkar&album=Tu%20Majha%20Kinara"
    },
    {
        "id": 14,
        "title": "Saaj Hyo Tuza",
        "artist": "Onkarswaroop",
        "album": "Baban",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025de0269f0cac9af9f9084d93",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Saaj%20Hyo%20Tuza.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saaj%20Hyo%20Tuza&artist_name=Onkarswaroop&album=Baban"
    },
    {
        "id": 15,
        "title": "Sundari",
        "artist": "Sanju Rathod",
        "album": "Sundari",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0203b41d32b65a4d6bca8ec665",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Sundari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sundari&artist_name=Sanju%20Rathod&album=Sundari"
    },
    {
        "id": 16,
        "title": "Swami",
        "artist": "Brahmaa",
        "album": "Swami",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027e09471e66039ecdd8d90442",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Swami.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Swami&artist_name=Brahmaa&album=Swami"
    },
    {
        "id": 17,
        "title": "Swamimay Zalo",
        "artist": "Rohit Raut",
        "album": "Swamimay Zalo",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021a25b570595743a9d1781955",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Swamimay%20Zalo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Swamimay%20Zalo&artist_name=Rohit%20Raut&album=Swamimay%20Zalo"
    },
    {
        "id": 18,
        "title": "Tujhe Naam Aale Othi",
        "artist": "Ajit Kadkade",
        "album": "Tujhe Naam Aale Othi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f41ec80a858d0fdc0e5f8f5f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tujhe%20Naam%20Aale%20Othi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tujhe%20Naam%20Aale%20Othi&artist_name=Ajit%20Kadkade&album=Tujhe%20Naam%20Aale%20Othi"
    },
    {
        "id": 19,
        "title": "Tula Pahate Re",
        "artist": "Sohni Bhatt",
        "album": "Tula Pahate Re",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eceb750a4a0f6a4207849afc",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tula%20Pahate%20Re.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tula%20Pahate%20Re&artist_name=Sohni%20Bhatt&album=Tula%20Pahate%20Re"
    },
    {
        "id": 20,
        "title": "Ye Go Ye Ye Maina",
        "artist": "Ajay Gogavale",
        "album": "Jatra",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fa0a2140061b510ddbcba750",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ye%20Go%20Ye%20Ye%20Maina.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ye%20Go%20Ye%20Ye%20Maina&artist_name=Ajay%20Gogavale&album=Jatra"
    },
    {
        "id": 21,
        "title": "Aika Dajiba",
        "artist": "Vaishali Samant",
        "album": "Best of Vaishali Samant",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e022b173af82f4f314b881ce6c1",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aika%20Dajiba.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aika%20Dajiba&artist_name=Vaishali%20Samant&album=Best%20of%20Vaishali%20Samant"
    },
    {
        "id": 22,
        "title": "Baharla Ha Madhumas",
        "artist": "Ajay-Atul, Ajay Gogavale",
        "album": "Maharashtra Shaheer",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0218fbb560eb1e2c6bd7753d50",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Baharla%20Ha%20Madhumas.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Baharla%20Ha%20Madhumas&artist_name=Ajay-Atul%2C%20Ajay%20Gogavale&album=Maharashtra%20Shaheer"
    },
    {
        "id": 23,
        "title": "Bangles",
        "artist": "Sanju Rathod, G-SPXRK",
        "album": "Bangles",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027ff6a68a330e81721829ec01",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Bangles.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bangles&artist_name=Sanju%20Rathod%2C%20G-SPXRK&album=Bangles"
    },
    {
        "id": 24,
        "title": "Chaltay Ki",
        "artist": "Abhay Jodhpurkar, Sonali Sonawane",
        "album": "Chaltay Ki",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e023c588ce1ad04dfd3296b4068",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Chaltay%20Ki.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chaltay%20Ki&artist_name=Abhay%20Jodhpurkar%2C%20Sonali%20Sonawane&album=Chaltay%20Ki"
    },
    {
        "id": 25,
        "title": "Cham Cham Karta",
        "artist": "Vaishali Samant",
        "album": "Best of Vaishali Samant",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e022b173af82f4f314b881ce6c1",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Cham%20Cham%20Karta.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Cham%20Cham%20Karta&artist_name=Vaishali%20Samant&album=Best%20of%20Vaishali%20Samant"
    },
    {
        "id": 26,
        "title": "Chandra",
        "artist": "Ajay-Atul, Shreya Ghoshal",
        "album": "Chandramukhi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f7e35041f34b8f957ac4ec22",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Chandra.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chandra&artist_name=Ajay-Atul%2C%20Shreya%20Ghoshal&album=Chandramukhi"
    },
    {
        "id": 27,
        "title": "Dhaga Dhaga",
        "artist": "Harsh Wavre, Anandi Joshi",
        "album": "Dagdi Chawl",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c9b23560190b0ca7da4f7ab4",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dhaga%20Dhaga.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dhaga%20Dhaga&artist_name=Harsh%20Wavre%2C%20Anandi%20Joshi&album=Dagdi%20Chawl"
    },
    {
        "id": 28,
        "title": "Dolby Walya",
        "artist": "Jau Dya Na Balasaheb",
        "album": "Nagesh Morwekar, Earl Edgar",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0254c350af21ce0538d3a936c9",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dolby%20Walya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dolby%20Walya&artist_name=Jau%20Dya%20Na%20Balasaheb&album=Nagesh%20Morwekar%2C%20Earl%20Edgar"
    },
    {
        "id": 29,
        "title": "Govyachya Kinaryav",
        "artist": "Shubhangii Kedar, Pravin Koli",
        "album": "Govyachya Kinaryav",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0281e1980e73b829e618a9fd71",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Govyachya%20Kinaryav.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Govyachya%20Kinaryav&artist_name=Shubhangii%20Kedar%2C%20Pravin%20Koli&album=Govyachya%20Kinaryav"
    },
    {
        "id": 30,
        "title": "Jeev Rangla",
        "artist": "Ajay-Atul, Hariharan, Shreya Ghoshal",
        "album": "Jogwa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e35d7be5af82b8455dbeabf0",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jeev%20Rangla.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jeev%20Rangla&artist_name=Ajay-Atul%2C%20Hariharan%2C%20Shreya%20Ghoshal&album=Jogwa"
    },
    {
        "id": 31,
        "title": "Jhumka",
        "artist": "Sanju Rathod, Sonali Sonawane",
        "album": "Jhumka",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02493bc531f91eaa790dc09c24",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Jhumka.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jhumka&artist_name=Sanju%20Rathod%2C%20Sonali%20Sonawane&album=Jhumka"
    },
    {
        "id": 32,
        "title": "Kaali Bindi",
        "artist": "Sanju Rathod, G-SPXRK",
        "album": "Kaali Bindi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e819a71097475621891587dc",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Kaali%20Bindi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kaali%20Bindi&artist_name=Sanju%20Rathod%2C%20G-SPXRK&album=Kaali%20Bindi"
    },
    {
        "id": 33,
        "title": "Kadhi Tu",
        "artist": "Avinash Vishwajeet, Hrishikesh Ranade",
        "album": "Kadhi Tu",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ea23505ec705bb7d330cb51a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Kadhi%20Tu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kadhi%20Tu&artist_name=Avinash%20Vishwajeet%2C%20Hrishikesh%20Ranade&album=Kadhi%20Tu"
    },
    {
        "id": 34,
        "title": "Kevadyacha Paan Tu",
        "artist": "Ajay Gogavale, Aarya Ambekar",
        "album": "Sarla Ek Koti",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ed7a9765a89cf24e51fbdfd1",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Kevadyacha%20Paan%20Tu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kevadyacha%20Paan%20Tu&artist_name=Ajay%20Gogavale%2C%20Aarya%20Ambekar&album=Sarla%20Ek%20Koti"
    },
    {
        "id": 35,
        "title": "Lallati Bhandar",
        "artist": "Ajay-Atul",
        "album": "Jogwa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e35d7be5af82b8455dbeabf0",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Lallati%20Bhandar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lallati%20Bhandar&artist_name=Ajay-Atul&album=Jogwa"
    },
    {
        "id": 36,
        "title": "Maai Bappa Vithala",
        "artist": "Prasad Shinde, Ajay-Atul",
        "album": "Maai Bappa Vithala",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0265f985304656d544423e7ddb",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Maai%20Bappa%20Vithala.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Maai%20Bappa%20Vithala&artist_name=Prasad%20Shinde%2C%20Ajay-Atul&album=Maai%20Bappa%20Vithala"
    },
    {
        "id": 37,
        "title": "Maharudra Shivray",
        "artist": "Avadhoot Gandhi, Mayur Raut",
        "album": "Maharudra Shivray",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02020827e0d86525d13b4a824c",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Maharudra%20Shivray.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Maharudra%20Shivray&artist_name=Avadhoot%20Gandhi%2C%20Mayur%20Raut&album=Maharudra%20Shivray"
    },
    {
        "id": 38,
        "title": "Majhi Baay Go",
        "artist": "Prashant Nakti, Sonali Sonawane",
        "album": "Majhi Baay Go",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020ae6561cefdc1f0544ca5e6a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Majhi%20Baay%20Go.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Majhi%20Baay%20Go&artist_name=Prashant%20Nakti%2C%20Sonali%20Sonawane&album=Majhi%20Baay%20Go"
    },
    {
        "id": 39,
        "title": "Mann Dhaavataya",
        "artist": "Radhika Bhide",
        "album": "I-Popstar: Episodes 1",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ec02e8c23ccebaba56517c7c",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Mann%20Dhaavataya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mann%20Dhaavataya&artist_name=Radhika%20Bhide&album=I-Popstar%3A%20Episodes%201"
    },
    {
        "id": 40,
        "title": "Mehbooba",
        "artist": "Preet Bandre",
        "album": "Mehbooba",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02f7b8ecea451a2c51d9c5ba97",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Mehbooba.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mehbooba&artist_name=Preet%20Bandre&album=Mehbooba"
    },
    {
        "id": 41,
        "title": "Mitwaa",
        "artist": "Shankar Mahadevan, Jaanvee  Arora",
        "album": "Mitwaa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021a8097c6f0a1f11ea3f64c01",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Mitwaa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mitwaa&artist_name=Shankar%20Mahadevan%2C%20Jaanvee%20%20Arora&album=Mitwaa"
    },
    {
        "id": 42,
        "title": "Nakhrewali",
        "artist": "Prashant Nakti, Sonali Sonawane",
        "album": "Nakhrewali",
        "cover": "https://i.scdn.co/image/ab67616d0000b273642519ee783eca4cb6074118",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Nakhrewali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Nakhrewali&artist_name=Prashant%20Nakti%2C%20Sonali%20Sonawane&album=Nakhrewali"
    },
    {
        "id": 43,
        "title": "Navari Mandva Khali",
        "artist": "Anand Shinde, Vaishali Samant",
        "album": "Navari Mandva Khali",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e427b8139ae9fcb5030f2920",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Navari%20Mandva%20Khali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Navari%20Mandva%20Khali&artist_name=Anand%20Shinde%2C%20Vaishali%20Samant&album=Navari%20Mandva%20Khali"
    },
    {
        "id": 44,
        "title": "Nawari Distes",
        "artist": "Karan Shelke",
        "album": "Nawari Distes",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025c1943b21bdbbf2cde576b2d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Nawari%20Distes.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Nawari%20Distes&artist_name=Karan%20Shelke&album=Nawari%20Distes"
    },
    {
        "id": 45,
        "title": "Papletwali",
        "artist": "Zubaan Music, Chintamani",
        "album": "Papletwali",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a0f5742be6e7f81ae200c84d",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Papletwali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Papletwali&artist_name=Zubaan%20Music%2C%20Chintamani&album=Papletwali"
    },
    {
        "id": 46,
        "title": "Raja Aala",
        "artist": "Devdutta Baji, Avadhoot Gupte",
        "album": "Pawankhind",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028cce6701ab25f5495275a1f3",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Raja%20Aala.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Raja%20Aala&artist_name=Devdutta%20Baji%2C%20Avadhoot%20Gupte&album=Pawankhind"
    },
    {
        "id": 47,
        "title": "Raja Shivaji Anthem",
        "artist": "Ajay-Atul",
        "album": "Raja Shivaji Anthem",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b72b8274c395d88986f9dd38",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Raja%20Shivaji%20Anthem.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Raja%20Shivaji%20Anthem&artist_name=Ajay-Atul&album=Raja%20Shivaji%20Anthem"
    },
    {
        "id": 48,
        "title": "Rang Lagala",
        "artist": "Amitraj, Anandi Joshi",
        "album": "Tamasha Live",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025eb0aa09ab3d3c0912a4bc4f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Rang%20Lagala.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Rang%20Lagala&artist_name=Amitraj%2C%20Anandi%20Joshi&album=Tamasha%20Live"
    },
    {
        "id": 49,
        "title": "Saavar Re Mana",
        "artist": "Jaanvee  Arora, Swapnil Bandodkar",
        "album": "Mitwaa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021a8097c6f0a1f11ea3f64c01",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Saavar%20Re%20Mana.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saavar%20Re%20Mana&artist_name=Jaanvee%20%20Arora%2C%20Swapnil%20Bandodkar&album=Mitwaa"
    },
    {
        "id": 50,
        "title": "Sar Sukhachi Shravani",
        "artist": "Abhijeet Sawant, Bela Shende",
        "album": "Mangalashtak Once More",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bcac6eb94bda3dd9f65f855f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Sar%20Sukhachi%20Shravani.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sar%20Sukhachi%20Shravani&artist_name=Abhijeet%20Sawant%2C%20Bela%20Shende&album=Mangalashtak%20Once%20More"
    },
    {
        "id": 51,
        "title": "Shaky",
        "artist": "Sanju Rathod, G-SPXRK",
        "album": "Shaky",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c05d5034282ebb1a0d94a26c",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Shaky.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shaky&artist_name=Sanju%20Rathod%2C%20G-SPXRK&album=Shaky"
    },
    {
        "id": 52,
        "title": "Shoorveer III",
        "artist": "Rapperiya Baalam, Jagirdar RV",
        "album": "Shoorveer III",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0257c966ee3968008282afd240",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Shoorveer%20III.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shoorveer%20III&artist_name=Rapperiya%20Baalam%2C%20Jagirdar%20RV&album=Shoorveer%20III"
    },
    {
        "id": 53,
        "title": "Sukh Kalale",
        "artist": "Ajay-Atul, Shreya Ghoshal",
        "album": "Ved",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02efdaa9b50132ce0f223fff42",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Sukh%20Kalale.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sukh%20Kalale&artist_name=Ajay-Atul%2C%20Shreya%20Ghoshal&album=Ved"
    },
    {
        "id": 54,
        "title": "Taambdi Chaamdi",
        "artist": "Kratex, Shreyas",
        "album": "Taambdi Chaamdi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a5fdec7411a1c6c67d8e4aac",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Taambdi%20Chaamdi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Taambdi%20Chaamdi&artist_name=Kratex%2C%20Shreyas&album=Taambdi%20Chaamdi"
    },
    {
        "id": 55,
        "title": "Tik Tik Vajate Dokyaat",
        "artist": "Sonu Nigam, Sayali Pankaj",
        "album": "Duniyadari",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d1bc2feb42a7ee92d51d0eee",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tik%20Tik%20Vajate%20Dokyaat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tik%20Tik%20Vajate%20Dokyaat&artist_name=Sonu%20Nigam%2C%20Sayali%20Pankaj&album=Duniyadari"
    },
    {
        "id": 56,
        "title": "Tola Tola",
        "artist": "Amitraj, Bela Shende, Guru Thakur",
        "album": "Tu Hi Re",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0235b736491b1674db453fcdae",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Tola%20Tola.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tola%20Tola&artist_name=Amitraj%2C%20Bela%20Shende%2C%20Guru%20Thakur&album=Tu%20Hi%20Re"
    },
    {
        "id": 57,
        "title": "Varyavarti Gandh",
        "artist": "Kunal Ganjawala",
        "album": "Savarkhed Ek Gaon",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e850b599097cc26ce4fac29c",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Varyavarti%20Gandh.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Varyavarti%20Gandh&artist_name=Kunal%20Ganjawala&album=Savarkhed%20Ek%20Gaon"
    },
    {
        "id": 58,
        "title": "Ved Lavla",
        "artist": "Nihar Shembekar, Shark, Vikas Satam",
        "album": "Ved Lavla",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022ba6fffb42b2399c86d626be",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ved%20Lavla.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ved%20Lavla&artist_name=Nihar%20Shembekar%2C%20Shark%2C%20Vikas%20Satam&album=Ved%20Lavla"
    },
    {
        "id": 59,
        "title": "Ved Lavlay",
        "artist": "Ajay-Atul, Vishal Dadlani",
        "album": "Ved",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02efdaa9b50132ce0f223fff42",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ved%20Lavlay.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ved%20Lavlay&artist_name=Ajay-Atul%2C%20Vishal%20Dadlani&album=Ved"
    },
    {
        "id": 60,
        "title": "Ved Tujha",
        "artist": "Ajay-Atul",
        "album": "Ved",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0233b8be7bd952bf6a9042217f",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ved%20Tujha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ved%20Tujha&artist_name=Ajay-Atul&album=Ved"
    },
    {
        "id": 61,
        "title": "Yugat Mandali",
        "artist": "Devdutta Baji, Avadhoot Gandhi",
        "album": "Pawankhind",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028cce6701ab25f5495275a1f3",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Yugat%20Mandali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yugat%20Mandali&artist_name=Devdutta%20Baji%2C%20Avadhoot%20Gandhi&album=Pawankhind"
    },
    {
        "id": 62,
        "title": "Zat Pat Pata Pat",
        "artist": "Danny Pandit, Brahmaa",
        "album": "Zat Pat Pata Pat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a61423fa82573a5c047374f0",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Zat%20Pat%20Pata%20Pat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zat%20Pat%20Pata%20Pat&artist_name=Danny%20Pandit%2C%20Brahmaa&album=Zat%20Pat%20Pata%20Pat"
    },
    {
        "id": 63,
        "title": "Bagh Ughaduni Dar",
        "artist": "Roop Kumar Rathod",
        "album": "Bharatiya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02665dea298c0e7fb6bc7f0971",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Bagh%20Ughaduni%20Dar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bagh%20Ughaduni%20Dar&artist_name=Roop%20Kumar%20Rathod&album=Bharatiya"
    },
    {
        "id": 64,
        "title": "Majhya Gabhari Majhi Pandhari",
        "artist": "Aarti Anklikar Tikekar",
        "album": "Majhya Gabhari Majhi Pandhari",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e54c9a115f989e4040a7b091",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Majhya%20Gabhari%20Majhi%20Pandhari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Majhya%20Gabhari%20Majhi%20Pandhari&artist_name=Aarti%20Anklikar%20Tikekar&album=Majhya%20Gabhari%20Majhi%20Pandhari"
    }
];

// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "All Marathi Mix",
    defaultCover: "logo.png"
};