const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Zindagi Ki Yahi Reet Hai",
        "artist": "Kishore Kumar",
        "album": "Mr. India",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ac2dad16a7b8d79161852438",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Zindagi%20Ki%20Yahi%20Reet%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zindagi%20Ki%20Yahi%20Reet%20Hai&artist_name=Kishore%20Kumar&album=Mr.%20India"
    },
    {
        "id": 2,
        "title": "Tum Ho",
        "artist": "Mohit Chauhan",
        "album": "Rockstar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0254e544672baa16145d67612b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Ho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Ho&artist_name=Mohit%20Chauhan&album=Rockstar"
    },
    {
        "id": 3,
        "title": "Tum Jo Aaye",
        "artist": "Pritam",
        "album": "Once Upon A Time In Mumbaai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02df934f4de5f8dd46f8d75f5f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Jo%20Aaye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Jo%20Aaye&artist_name=Pritam&album=Once%20Upon%20A%20Time%20In%20Mumbaai"
    },
    {
        "id": 4,
        "title": "Tum Se Hi",
        "artist": "Pritam",
        "album": "Jab We Met",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0252fe6875028c892308ffc2f7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Se%20Hi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Se%20Hi&artist_name=Pritam&album=Jab%20We%20Met"
    },
    {
        "id": 5,
        "title": "Tum Tak",
        "artist": "A.R. Rahman",
        "album": "Raanjhanaa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020c556f210b927ca230f32241",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Tak.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Tak&artist_name=A.R.%20Rahman&album=Raanjhanaa"
    },
    {
        "id": 6,
        "title": "Yeh Haseen Vadiyan Yeh Khula Aasman",
        "artist": "A.R. Rahman",
        "album": "Roja",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020a6413faed4599fdcbf15c37",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Haseen%20Vadiyan%20Yeh%20Khula%20Aasman.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Haseen%20Vadiyan%20Yeh%20Khula%20Aasman&artist_name=A.R.%20Rahman&album=Roja"
    },
    {
        "id": 7,
        "title": "Yeh Raaten Yeh Mausam",
        "artist": "Sanam",
        "album": "Yeh Raaten Yeh Mausam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f47f3f44f4a7311a66c7a770",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Raaten%20Yeh%20Mausam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Raaten%20Yeh%20Mausam&artist_name=Sanam&album=Yeh%20Raaten%20Yeh%20Mausam"
    },
    {
        "id": 8,
        "title": "Tu Chale",
        "artist": "Arijit Singh, Shreya Ghoshal",
        "album": "I",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a4686f3b95e096ba4ce53f83",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Chale.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Chale&artist_name=Arijit%20Singh%2C%20Shreya%20Ghoshal&album=I"
    },
    {
        "id": 9,
        "title": "Falak Tak",
        "artist": "Vishal & Shekhar, Mahalakshmi Iyer",
        "album": "Tashan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02350fe52fe51edbfe385b6228",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Falak%20Tak.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Falak%20Tak&artist_name=Vishal%20%26%20Shekhar%2C%20Mahalakshmi%20Iyer&album=Tashan"
    },
    {
        "id": 10,
        "title": "Iktara",
        "artist": "Amit Trivedi",
        "album": "Wake Up Sid",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02051d9cc7db941e7ba051b9af",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Iktara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Iktara&artist_name=Amit%20Trivedi&album=Wake%20Up%20Sid"
    },
    {
        "id": 11,
        "title": "Tu Chahiye",
        "artist": "Pritam",
        "album": "Bajrangi Bhaijaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e7f1ff44b74df429307f4164",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Chahiye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Chahiye&artist_name=Pritam&album=Bajrangi%20Bhaijaan"
    },
    {
        "id": 12,
        "title": "Chaar Kadam",
        "artist": "Shaan",
        "album": "Pk",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0219fa40d5313010b1a2d971dc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chaar%20Kadam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chaar%20Kadam&artist_name=Shaan&album=Pk"
    },
    {
        "id": 13,
        "title": "Aao Milo Chalo",
        "artist": "Pritam",
        "album": "Jab We Met",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0252fe6875028c892308ffc2f7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aao%20Milo%20Chalo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aao%20Milo%20Chalo&artist_name=Pritam&album=Jab%20We%20Met"
    }
];

// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "Travel Songs",
    defaultCover: "logo.png"
};
