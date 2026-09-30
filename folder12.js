const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Afsos",
        "artist": "Anuv Jain, AP Dhillon",
        "album": "Afsos",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028537cf974af2c408bdd8e1a6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Afsos.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Afsos&artist_name=Anuv%20Jain%2C%20AP%20Dhillon&album=Afsos"
    },
    {
        "id": 2,
        "title": "Alag Aasmaan",
        "artist": "Anuv Jain - Alag Aasmaan (Acoustic)",
        "album": "Anuv Jain - Alag Aasmaan (Acoustic)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025d7a296e99b415bc012c03e3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Alag%20Aasmaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Alag%20Aasmaan&artist_name=Anuv%20Jain%20-%20Alag%20Aasmaan%20(Acoustic)&album=Anuv%20Jain%20-%20Alag%20Aasmaan%20(Acoustic)"
    },
    {
        "id": 3,
        "title": "Arz Kiya Hai",
        "artist": "Anuv Jain",
        "album": "Arz Kiya Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0225fa2d19b2363a9520a34409",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Arz%20Kiya%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Arz%20Kiya%20Hai&artist_name=Anuv%20Jain&album=Arz%20Kiya%20Hai"
    },
    {
        "id": 4,
        "title": "Baarishein",
        "artist": "Anuv Jain",
        "album": "Baarishein",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d8ca783fa570b57e082f4374",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Baarishein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Baarishein&artist_name=Anuv%20Jain&album=Baarishein"
    },
    {
        "id": 5,
        "title": "Gul",
        "artist": "Anuv Jain",
        "album": "Gul",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024cdf85ea439ad82b1b0a69ea",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Gul.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Gul&artist_name=Anuv%20Jain&album=Gul"
    },
    {
        "id": 6,
        "title": "Husn",
        "artist": "Anuv Jain",
        "album": "Husn",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020d3449f333a83a25feb423f8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Husn.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Husn&artist_name=Anuv%20Jain&album=Husn"
    },
    {
        "id": 7,
        "title": "Inaam-Anuv Jain",
        "artist": "Anuv Jain",
        "album": "Inaam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0240e37f95f57c1df4dbf9ebc4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Inaam-Anuv%20Jain.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Inaam&artist_name=Anuv%20Jain&album=Inaam"
    },
    {
        "id": 8,
        "title": "Jo Tum Mere Ho",
        "artist": "Anuv Jain",
        "album": "Jo Tum Mere Ho",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0272a77d038887cdc425f5ee55",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jo%20Tum%20Mere%20Ho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jo%20Tum%20Mere%20Ho&artist_name=Anuv%20Jain&album=Jo%20Tum%20Mere%20Ho"
    },
    {
        "id": 9,
        "title": "Mazaak",
        "artist": "Anuv Jain",
        "album": "Mazaak",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ad067fee73708c0f988d0201",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mazaak.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mazaak&artist_name=Anuv%20Jain&album=Mazaak"
    },
    {
        "id": 10,
        "title": "Meri Baaton Mein Tu",
        "artist": "Anuv Jain",
        "album": "Meri Baaton Mein Tu",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0249b147260e16e0cebd211dd1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Meri%20Baaton%20Mein%20Tu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Meri%20Baaton%20Mein%20Tu&artist_name=Anuv%20Jain&album=Meri%20Baaton%20Mein%20Tu"
    }

];

// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "Anuv Jain",
    defaultCover: "logo.png"
};
