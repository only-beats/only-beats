const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Chupke Chupke Raat Din",
        "artist": "Ghulam Ali",
        "album": "Nikaah",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a1fd486925da9490d70a9d2f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chupke%20Chupke%20Raat%20Din.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chupke%20Chupke%20Raat%20Din&artist_name=Ghulam%20Ali&album=Nikaah"
    },
    {
        "id": 2,
        "title": "Hothon Se Chhu Lo Tum",
        "artist": "Jagjit Singh",
        "album": "Dard-E-Jigar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b5eba194cd2f743be9a0f87b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hothon%20Se%20Chhu%20Lo%20Tum.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hothon%20Se%20Chhu%20Lo%20Tum&artist_name=Jagjit%20Singh&album=Dard-E-Jigar"
    },
    {
        "id": 3,
        "title": "Hoshwalon Ko Khabar Kya",
        "artist": "Jagjit Singh",
        "album": "Sarfarosh",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026adbe3457a317569ef6f92d4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hoshwalon%20Ko%20Khabar%20Kya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hoshwalon%20Ko%20Khabar%20Kya&artist_name=Jagjit%20Singh&album=Sarfarosh"
    },
    {
        "id": 4,
        "title": "Kal Chaudhvin Ki Raat Thi",
        "artist": "Jagjit Singh",
        "album": "Duniya Jise Kahte Hain",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020834391d500787443518c69c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kal%20Chaudhvin%20Ki%20Raat%20Thi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kal%20Chaudhvin%20Ki%20Raat%20Thi&artist_name=Jagjit%20Singh&album=Duniya%20Jise%20Kahte%20Hain"
    },
    {
        "id": 5,
        "title": "Tum Itna Jo Muskura Rahe Ho",
        "artist": "Jagjit Singh",
        "album": "Arth",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c5d9a7bbd5501e84d40d6a88",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Itna%20Jo%20Muskura%20Rahe%20Ho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Itna%20Jo%20Muskura%20Rahe%20Ho&artist_name=Jagjit%20Singh&album=Arth"
    },
    {
        "id": 6,
        "title": "Tum Ko Dekha To Yeh Khayal Aaya",
        "artist": "Jagjit Singh",
        "album": "Saath Saath",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e46ef29430a5521020619040",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Ko%20Dekha%20To%20Yeh%20Khayal%20Aaya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Ko%20Dekha%20To%20Yeh%20Khayal%20Aaya&artist_name=Jagjit%20Singh&album=Saath%20Saath"
    },
    {
        "id": 7,
        "title": "Koi Fariyaad",
        "artist": "Jagjit Singh",
        "album": "Tum Bin",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023a609c0033f8e08eb87e38fd",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Koi%20Fariyaad.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Koi%20Fariyaad&artist_name=Jagjit%20Singh&album=Tum%20Bin"
    },
    {
        "id": 8,
        "title": "Chithi Na Koi Sandesh",
        "artist": "Jagjit Singh",
        "album": "Dushman",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0292620aced0ee370c7952e8d2",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chithi%20Na%20Koi%20Sandesh.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chithi%20Na%20Koi%20Sandesh&artist_name=Jagjit%20Singh&album=Dushman"
    },
    {
        "id": 9,
        "title": "Jhuki Jhuki Si Nazar",
        "artist": "Jagjit Singh",
        "album": "Arth",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c5d9a7bbd5501e84d40d6a88",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jhuki%20Jhuki%20Si%20Nazar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jhuki%20Jhuki%20Si%20Nazar&artist_name=Jagjit%20Singh&album=Arth"
    },
    {
        "id": 10,
        "title": "Dil Mein Ek Lehar Si Uthi Hai",
        "artist": "Ghulam Ali",
        "album": "Dilkash Ghazlen",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0205d4da0a31736a4fdce4b293",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Mein%20Ek%20Lehar%20Si%20Uthi%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Mein%20Ek%20Lehar%20Si%20Uthi%20Hai&artist_name=Ghulam%20Ali&album=Dilkash%20Ghazlen"
    },
    {
        "id": 11,
        "title": "Yeh Dil Ye Pagal Dil Mera",
        "artist": "Ghulam Ali",
        "album": "Awargi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0234b33580fb6d25c4e5bfa1f7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Dil%20Ye%20Pagal%20Dil%20Mera.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Dil%20Ye%20Pagal%20Dil%20Mera&artist_name=Ghulam%20Ali&album=Awargi"
    },
    {
        "id": 12,
        "title": "Woh Kaghaz Ki Kashti",
        "artist": "Jagjit Singh, Chitra Singh",
        "album": "Aaj",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0240e4969ff3199d6546d79c89",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Woh%20Kaghaz%20Ki%20Kashti.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Woh%20Kaghaz%20Ki%20Kashti&artist_name=Jagjit%20Singh%2C%20Chitra%20Singh&album=Aaj"
    },
    {
        "id": 13,
        "title": "Rukh Se Parda",
        "artist": "Jagjit Singh",
        "album": "Rukh Se Parda",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02401df782d59a541d14cc0253",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Rukh%20Se%20Parda.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Rukh%20Se%20Parda&artist_name=Jagjit%20Singh&album=Rukh%20Se%20Parda"
    },
];
// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "Best ghazals",
    defaultCover: "logo.png"
};
