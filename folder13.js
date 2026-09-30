const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "In Ankhon Ki Masti",
        "artist": "Asha Bhosle",
        "album": "Umrao Jaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0286d529c730fd8d79c20df6f6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/In%20Ankhon%20Ki%20Masti.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=In%20Ankhon%20Ki%20Masti&artist_name=Asha%20Bhosle&album=Umrao%20Jaan"
    },
    {
        "id": 2,
        "title": "Isharon Isharon Men Dil Lenewale",
        "artist": "Asha Bhosle, Mohammed Rafi",
        "album": "Kashmir Ki Kali",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0286f1ce790b11125f1cb98306",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Isharon%20Isharon%20Men%20Dil%20Lenewale.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Isharon%20Isharon%20Men%20Dil%20Lenewale&artist_name=O.%20P.%20Nayyar&album=Kashmir%20Ki%20Kali"
    },
    {
        "id": 3,
        "title": "Ajnabi Mujhko Itna Bata",
        "artist": "Asha Bhosle, Udit Narayan",
        "album": "Pyaar To Hona Hi Tha",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a23500c4e9bc131bdd6786a1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ajnabi%20Mujhko%20Itna%20Bata.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ajnabi%20Mujhko%20Itna%20Bata&artist_name=Asha%20Bhosle%2C%20Udit%20Narayan&album=Pyaar%20To%20Hona%20Hi%20Tha%20(Original%20Motion%20Picture%20Soundtrack)"
    },
    {
        "id": 4,
        "title": "Aur Is Dil Mein - Duet",
        "artist": "Suresh Wadkar, Asha Bhosle, Kalyanji-Anandji",
        "album": "Imaandaar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aee308bd15a8b9ebdd067089",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aur%20Is%20Dil%20Mein%20-%20Duet.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aur%20Is%20Dil%20Mein%20-%20Duet&artist_name=Suresh%20Wadkar%2C%20Asha%20Bhosle%2C%20Kalyanji-Anandji&album=Imaandaar"
    },
    {
        "id": 5,
        "title": "Chehra Kya Dekhte Ho",
        "artist": "Asha Bhosle, Kumar Sanu",
        "album": "Salaami",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c06114e2c14266b7a9c215b0",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chehra%20Kya%20Dekhte%20Ho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chehra%20Kya%20Dekhte%20Ho&artist_name=Asha%20Bhosle%2C%20Kumar%20Sanu&album=Salaami"
    },
    {
        "id": 6,
        "title": "Chura Liya Hai Tumne Jo Dil Ko",
        "artist": "Asha Bhosle, Mohammed Rafi",
        "album": "Yaadon Ki Baaraat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026261648ac57d64f518f2c801",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chura%20Liya%20Hai%20Tumne%20Jo%20Dil%20Ko.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chura%20Liya%20Hai%20Tumne%20Jo%20Dil%20Ko&artist_name=Asha%20Bhosle%2C%20Mohammed%20Rafi&album=Yaadon%20Ki%20Baaraat"
    },
    {
        "id": 7,
        "title": "Dhal Gaya Din Ho Gayi Sham",
        "artist": "Asha Bhosle, Mohammed Rafi",
        "album": "Humjoli",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02276bd7324c1bda7df0672150",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dhal%20Gaya%20Din%20Ho%20Gayi%20Sham.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dhal%20Gaya%20Din%20Ho%20Gayi%20Sham&artist_name=Asha%20Bhosle%2C%20Mohammed%20Rafi&album=Humjoli"
    },
    {
        "id": 8,
        "title": "Dil Cheez Kya Hai",
        "artist": "Asha Bhosle",
        "album": "Umrao Jaan",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0286d529c730fd8d79c20df6f6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Cheez%20Kya%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Cheez%20Kya%20Hai&artist_name=Asha%20Bhosle&album=Umrao%20Jaan"
    },
    {
        "id": 9,
        "title": "Diwana Hua Badal",
        "artist": "Asha Bhosle, Mohammed Rafi",
        "album": "Kashmir Ki Kali",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0286f1ce790b11125f1cb98306",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Diwana%20Hua%20Badal.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Diwana%20Hua%20Badal&artist_name=Asha%20Bhosle%2C%20Mohammed%20Rafi&album=Kashmir%20Ki%20Kali"
    },
    {
        "id": 10,
        "title": "Do Lafzon Ki Hai Dil Ki Kahani",
        "artist": "Amitabh Bachchan, Asha Bhosle, Sharad Kumar",
        "album": "The Great Gambler",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b74c4c5b961da237695fde79",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Do%20Lafzon%20Ki%20Hai%20Dil%20Ki%20Kahani.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Do%20Lafzon%20Ki%20Hai%20Dil%20Ki%20Kahani&artist_name=Amitabh%20Bachchan%2C%20Asha%20Bhosle%2C%20Sharad%20Kumar&album=The%20Great%20Gambler"
    },
    {
        "id": 11,
        "title": "Ek Main Aur Ek Tu",
        "artist": "Asha Bhosle, Kishore Kumar, R. D. Burman",
        "album": "Khel Khel Mein",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020aed8642e11d62906de856a8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ek%20Main%20Aur%20Ek%20Tu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ek%20Main%20Aur%20Ek%20Tu&artist_name=Asha%20Bhosle%2C%20Kishore%20Kumar%2C%20R.%20D.%20Burman&album=Khel%20Khel%20Mein"
    },
    {
        "id": 12,
        "title": "Gun Guna Rahe Hai Bhanvare",
        "artist": "Asha Bhosle, Mohammed Rafi, S. D. Burman",
        "album": "Aradhana",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023975f1250c598ee905d68ce0",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Gun%20Guna%20Rahe%20Hai%20Bhanvare.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Gun%20Guna%20Rahe%20Hai%20Bhanvare&artist_name=Asha%20Bhosle%2C%20Mohammed%20Rafi%2C%20S.%20D.%20Burman&album=Aradhana"
    },
    {
        "id": 13,
        "title": "Hum Laakh Chupaye",
        "artist": "Asha Bhosle, Kumar Sanu, Nadeem Shravan, Syed Rahi",
        "album": "Jaan Tere Naam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023c7153433957b271117bf54e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hum%20Laakh%20Chupaye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hum%20Laakh%20Chupaye&artist_name=Asha%20Bhosle%2C%20Kumar%20Sanu%2C%20Nadeem%20Shravan%2C%20Syed%20Rahi&album=Jaan%20Tere%20Naam"
    },
    {
        "id": 14,
        "title": "Hungamaa Ho Gaya",
        "artist": "Asha Bhosle, Arijit Singh, Amit Trivedi",
        "album": "Queen",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e78a08112af9db65dbeebae6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hungamaa%20Ho%20Gaya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hungamaa%20Ho%20Gaya&artist_name=Asha%20Bhosle%2C%20Arijit%20Singh%2C%20Amit%20Trivedi&album=Queen"
    },
    {
        "id": 15,
        "title": "Intaha Ho Gai Intezar Ki",
        "artist": "Kishore Kumar, Asha Bhosle",
        "album": "Sharaabi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0258a42313a77fc4786559853d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Intaha%20Ho%20Gai%20Intezar%20Ki.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Intaha%20Ho%20Gai%20Intezar%20Ki&artist_name=Kishore%20Kumar%2C%20Asha%20Bhosle&album=Sharaabi"
    },
    {
        "id": 16,
        "title": "Jahan Mein Aesa Kaun Hai",
        "artist": "Asha Bhosle",
        "album": "Hum Dono",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fbe87438ee8a4f2a220d1960",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jahan%20Mein%20Aesa%20Kaun%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jahan%20Mein%20Aesa%20Kaun%20Hai&artist_name=Asha%20Bhosle&album=Hum%20Dono"
    },
    {
        "id": 17,
        "title": "Kehdoon Tumhen",
        "artist": "Kishore Kumar, Asha Bhosle, R. D. Burman",
        "album": "Deewaar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024b5802588387e5d3e44debc3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kehdoon%20Tumhen.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kehdoon%20Tumhen&artist_name=Kishore%20Kumar%2C%20Asha%20Bhosle%2C%20R.%20D.%20Burman&album=Deewaar"
    },
    {
        "id": 18,
        "title": "Kisi Nazar Ko Tera Intezar",
        "artist": "Asha Bhosle, Bhupinder Singh",
        "album": "Aitbaar",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029820c90de1e0d16e69665a6d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kisi%20Nazar%20Ko%20Tera%20Intezar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kisi%20Nazar%20Ko%20Tera%20Intezar&artist_name=Asha%20Bhosle%2C%20Bhupinder%20Singh&album=Aitbaar"
    },
      {
        "id": 19,
        "title": "Kitaben Bahut Si",
        "artist": "Asha Bhosle, Vinod Rathod",
        "album": "Baazigar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dd80ae5413c53b309946196a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kitaben%20Bahut%20Si.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kitaben%20Bahut%20Si&artist_name=Asha%20Bhosle%2C%20Vinod%20Rathod&album=Baazigar"
    },
    {
        "id": 20,
        "title": "Kya Dekhte Ho",
        "artist": "Asha Bhosle, Mohammed Rafi",
        "album": "Qurbani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ce5864d4767fda884fdf6349",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kya%20Dekhte%20Ho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kya%20Dekhte%20Ho&artist_name=Asha%20Bhosle%2C%20Mohammed%20Rafi&album=Qurbani"
    },
    {
        "id": 21,
        "title": "Le Gayi",
        "artist": "Uttam Singh, Asha Bhosle, Anand Bakshi",
        "album": "Dil To Pagal Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b96494dc6eaedc90919365df",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Le%20Gayi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Le%20Gayi&artist_name=Uttam%20Singh%2C%20Asha%20Bhosle%2C%20Anand%20Bakshi&album=Dil%20To%20Pagal%20Hai"
    },
    {
        "id": 22,
        "title": "Mera Sanam Sabse Pyara Hai",
        "artist": "Asha Bhosle, Kumar Sanu",
        "album": "Dil Ka Kya Kasoor",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c306c2c18583509c1a1f3dac",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mera%20Sanam%20Sabse%20Pyara%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mera%20Sanam%20Sabse%20Pyara%20Hai&artist_name=Asha%20Bhosle%2C%20Kumar%20Sanu&album=Dil%20Ka%20Kya%20Kasoor"
    },
    {
        "id": 23,
        "title": "Meri Wafayen Yaad Karoge",
        "artist": "Kumar Sanu, Asha Bhosle",
        "album": "Sainik",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02f7ede2a921c0a0b041db805d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Meri%20Wafayen%20Yaad%20Karoge.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Meri%20Wafayen%20Yaad%20Karoge&artist_name=Kumar%20Sanu%2C%20Asha%20Bhosle&album=Sainik"
    },
    {
        "id": 24,
        "title": "Milne Ki Tum Koshish Karna",
        "artist": "Asha Bhosle, Kumar Sanu",
        "album": "Dil Ka Kya Kasoor",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c306c2c18583509c1a1f3dac",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Milne%20Ki%20Tum%20Koshish%20Karna.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Milne%20Ki%20Tum%20Koshish%20Karna&artist_name=Asha%20Bhosle%2C%20Kumar%20Sanu&album=Dil%20Ka%20Kya%20Kasoor"
    },
    {
        "id": 25,
        "title": "O Haseena Zulfonwale Jane Jahan",
        "artist": "Asha Bhosle, Mohammed Rafi, R. D. Burman",
        "album": "Teesri Manzil",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c016607af0377c3e5cb92e5f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Haseena%20Zulfonwale%20Jane%20Jahan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Haseena%20Zulfonwale%20Jane%20Jahan&artist_name=Asha%20Bhosle%2C%20Mohammed%20Rafi%2C%20R.%20D.%20Burman&album=Teesri%20Manzil"
    },
    {
        "id": 26,
        "title": "O Mere Sona Re Sona",
        "artist": "Asha Bhosle, Mohammed Rafi, R. D. Burman",
        "album": "Teesri Manzil",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c016607af0377c3e5cb92e5f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Mere%20Sona%20Re%20Sona.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Mere%20Sona%20Re%20Sona&artist_name=Asha%20Bhosle%2C%20Mohammed%20Rafi%2C%20R.%20D.%20Burman&album=Teesri%20Manzil"
    },
    {
        "id": 27,
        "title": "O Meri Soni Meri Tamanna",
        "artist": "Asha Bhosle, Kishore Kumar",
        "album": "Yaadon Ki Baaraat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026261648ac57d64f518f2c801",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Meri%20Soni%20Meri%20Tamanna.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Meri%20Soni%20Meri%20Tamanna&artist_name=Asha%20Bhosle%2C%20Kishore%20Kumar&album=Yaadon%20Ki%20Baaraat"
    },
    {
        "id": 28,
        "title": "O Sathi Chal",
        "artist": "Asha Bhosle, Kishore Kumar",
        "album": "Seeta Aur Geeta",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0222392d68dbec4e5b5e243249",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Sathi%20Chal.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Sathi%20Chal&artist_name=Asha%20Bhosle%2C%20Kishore%20Kumar&album=Seeta%20Aur%20Geeta"
    },
    {
        "id": 29,
        "title": "Parda Hata Do - Trap Mix",
        "artist": "Farooq Got Audio, Asha Bhosle, Mohammed Rafi",
        "album": "Bollywood Trap Mix",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023584876d084f971c78942bf6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Parda%20Hata%20Do%20-%20Trap%20Mix.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Parda%20Hata%20Do%20-%20Trap%20Mix&artist_name=Farooq%20Got%20Audio%2C%20Asha%20Bhosle%2C%20Mohammed%20Rafi&album=Bollywood%20Trap%20Mix"
    },
    {
        "id": 30,
        "title": "Phulale Re Kshan Majhe",
        "artist": "Asha Bhosle",
        "album": "Ritu Hirwa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022252fc99dbd8f377ae0e9588",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Phulale%20Re%20Kshan%20Majhe.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Phulale%20Re%20Kshan%20Majhe&artist_name=Asha%20Bhosle&album=Ritu%20Hirwa"
    }


];

// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "Asha Bhosle",
    defaultCover: "logo.png"
};
