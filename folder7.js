const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Dheera Dheera",
        "artist": "M. M. Keeravaani",
        "album": "Magadheera",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027722f8cc9eb81ac63de065d0",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Dheera%20Dheera.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dheera%20Dheera&artist_name=M.%20M.%20Keeravaani&album=Magadheera"
    },
    {
        "id": 2,
        "title": "Edhuta Nilichindhi",
        "artist": "Kamalakar, Karthik",
        "album": "Vaana",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0289c6dd12b46ab6485c050611",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Edhuta%20Nilichindhi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Edhuta%20Nilichindhi&artist_name=Karthik&album=Vaana"
    },
    {
        "id": 3,
        "title": "Inkem Inkem Inkem Kaavaale",
        "artist": "Sid Sriram",
        "album": "Geetha Govindam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d36ad1902c1eb3edc2639e4b",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Inkem%20Inkem%20Inkem%20Kaavaale.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Inkem%20Inkem%20Inkem%20Kaavaale&artist_name=Sid%20Sriram&album=Geetha%20Govindam"
    },
    {
        "id": 4,
        "title": "Oosupodu",
        "artist": "Hemachandra Vedala",
        "album": "Fidaa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02753e9ff22636d0ad65d8e92a",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Oosupodu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Oosupodu&artist_name=Hemachandra%20Vedala&album=Fidaa"
    },
    {
        "id": 5,
        "title": "Othaiyadi Pathayila",
        "artist": "Dhibu Ninan Thomas",
        "album": "Kanaa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02694a5c48a84156db02c9cbfb",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Othaiyadi%20Pathayila.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Othaiyadi%20Pathayila&artist_name=Dhibu%20Ninan%20Thomas&album=Kanaa"
    },
    {
        "id": 6,
        "title": "Panchadaara",
        "artist": "M. M. Keeravani, Rita Thyagarajan",
        "album": "Magadheera",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027722f8cc9eb81ac63de065d0",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Panchadaara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Panchadaara&artist_name=M.%20M.%20Keeravani%2C%20Rita%20Thyagarajan&album=Magadheera"
    },
    {
        "id": 7,
        "title": "Thalachi Thalachi",
        "artist": "Haricharan",
        "album": "Hello!",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b0ecf26226d1734c2a528586",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Thalachi%20Thalachi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Thalachi%20Thalachi&artist_name=Haricharan&album=Hello!"
    },
    {
        "id": 8,
        "title": "Vellake",
        "artist": "Bharatt-Saurabh",
        "album": "Vellake",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024f9afc3c2b184669e6c7b9ce",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Vellake.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Vellake&artist_name=Bharatt-Saurabh&album=Vellake"
    },
    {
        "id": 9,
        "title": "Yenti Yenti",
        "artist": "Chinmayi, Gopi Sundar",
        "album": "Geetha Govindam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d36ad1902c1eb3edc2639e4b",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Yenti%20Yenti.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yenti%20Yenti&artist_name=Chinmayi%2C%20Gopi%20Sundar&album=Geetha%20Govindam"
    },
    {
        "id": 10,
        "title": "Buttabomma",
        "artist": "Thaman S",
        "album": "Ala Vaikunthapurramuloo",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0263118748c712b6ac32c0feec",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Buttabomma.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Buttabomma&artist_name=Thaman%20S&album=Ala%20Vaikunthapurramuloo"
    },
    {
        "id": 11,
        "title": "Ramuloo Ramulaa",
        "artist": "Anurag Kulkarni",
        "album": "Ala Vaikunthapurramuloo",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ec8e1f5da18069b24fb43694",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Ramuloo%20Ramulaa.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ramuloo%20Ramulaa&artist_name=Anurag%20Kulkarni&album=Ala%20Vaikunthapurramuloo"
    },
    {
        "id": 12,
        "title": "Aradhya",
        "artist": "Hesham Abdul Wahab, Chinmayi",
        "album": "Kushi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0290081b3870910e47194b4226",
        "url": "https://raw.githubusercontent.com/BinaryC0DE4U/Forever-in-Sync/main/Aradhya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aradhya&artist_name=Hesham%20Abdul%20Wahab%2C%20Chinmayi&album=Kushi"
    }
];

