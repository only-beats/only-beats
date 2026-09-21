const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Aarti",
        "artist": "Anuradha Paudwal",
        "album": "Shree Samarth Akhand Naamsimran",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0281e99784c28cc281b4c1d5b4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aarti.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aarti&artist_name=Anuradha%20Paudwal&album=Shree%20Samarth%20Akhand%20Naamsimran"
    },
    {
        "id": 2,
        "title": "Abhir Gulal Udhalit Rang",
        "artist": "Jitendra Abhisheki",
        "album": "Mendichya Panavar,Vol. 3",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cae772a9390609efda2b2b8f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Abhir%20Gulal%20Udhalit%20Rang.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Abhir%20Gulal%20Udhalit%20Rang&artist_name=Jitendra%20Abhisheki&album=Mendichya%20Panavar%2CVol.%203"
    },
    {
        "id": 3,
        "title": "Abir Gulal Udhalit Rang",
        "artist": "Mahesh Hiremath, Shubhangi Joshi",
        "album": "Marathi Bhaktigeete",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02846220b6d40efb6183cd8cf4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Abir%20Gulal%20Udhalit%20Rang.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Abir%20Gulal%20Udhalit%20Rang&artist_name=Mahesh%20Hiremath%2C%20Shubhangi%20Joshi&album=Marathi%20Bhaktigeete"
    },
    {
        "id": 4,
        "title": "Adi Tuch Anti Tuch Swami",
        "artist": "Abhay Jodhpurkar",
        "album": "Adi Tuch Anti Tuch Swami",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024cdd9b364b2422579b8e3fd7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Adi%20Tuch%20Anti%20Tuch%20Swami.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Adi%20Tuch%20Anti%20Tuch%20Swami&artist_name=Abhay%20Jodhpurkar&album=Adi%20Tuch%20Anti%20Tuch%20Swami"
    },
    {
        "id": 5,
        "title": "Akkalkot Swamichi Palaswi",
        "artist": "Suresh Wadkar",
        "album": "Bola Swami Samarth",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c4e159106fd5200c0c243f74",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Akkalkot%20Swamichi%20Palaswi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Akkalkot%20Swamichi%20Palaswi&artist_name=Suresh%20Wadkar&album=Bola%20Swami%20Samarth"
    },
    {
        "id": 6,
        "title": "Amrutahuni God",
        "artist": "Manik Varma",
        "album": "Bhaktigeet",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02daee4613a8ca0542010f5922",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Amrutahuni%20God.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Amrutahuni%20God&artist_name=Manik%20Varma&album=Bhaktigeet"
    },
    {
        "id": 7,
        "title": "Avaghe Garje Pandharpur",
        "artist": "Suresh Wadkar",
        "album": "Avaghe Garje Pandharpur",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ac1d7eec1e98e312696a5c97",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Avaghe%20Garje%20Pandharpur.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Avaghe%20Garje%20Pandharpur&artist_name=Suresh%20Wadkar&album=Avaghe%20Garje%20Pandharpur"
    },
    {
        "id": 8,
        "title": "Bappa Morya Re",
        "artist": "DJ NeSH, SWAPNIL TAMBE",
        "album": "Bappa Morya Re",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02420d7426e45f01d191c76513",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bappa%20Morya%20Re.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bappa%20Morya%20Re&artist_name=DJ%20NeSH%2C%20SWAPNIL%20TAMBE&album=Bappa%20Morya%20Re"
    },
    {
        "id": 9,
        "title": "Chik Motyachi Maal Hoti Ga Tis Tolyachi Ga",
        "artist": "Vaishali Samant",
        "album": "Ganpati Top 13, Pt. 1",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026cdf7d27a5e4a0ebe2921d5b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chik%20Motyachi%20Maal%20Hoti%20Ga%20Tis%20Tolyachi%20Ga.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chik%20Motyachi%20Maal%20Hoti%20Ga%20Tis%20Tolyachi%20Ga&artist_name=Vaishali%20Samant&album=Ganpati%20Top%2013%2C%20Pt.%201"
    },
    {
        "id": 10,
        "title": "Deh Devache Mandir",
        "artist": "Nihar Shembekar, Sai Godbole",
        "album": "Deh Devache Mandir",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020167852fba6f1b2e419392fb",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Deh%20Devache%20Mandir.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Deh%20Devache%20Mandir&artist_name=Nihar%20Shembekar%2C%20Sai%20Godbole&album=Deh%20Devache%20Mandir"
    },
    {
        "id": 11,
        "title": "Dev Devharyat Nahi",
        "artist": "Sudhir Phadke",
        "album": "Zala Mahar Pandharinath",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0207e4da46d0e8aa41f05f832d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dev%20Devharyat%20Nahi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dev%20Devharyat%20Nahi&artist_name=Sudhir%20Phadke&album=Zala%20Mahar%20Pandharinath"
    },
    {
        "id": 12,
        "title": "Devachiye Dwari",
        "artist": "Suresh Wadkar",
        "album": "Omkar Swarupa (Abhang)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bc1a3258f4acac3d4a26d8e0",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Devachiye%20Dwari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Devachiye%20Dwari&artist_name=Suresh%20Wadkar&album=Omkar%20Swarupa%20(Abhang)"
    },
    {
        "id": 13,
        "title": "Dharila Pandharicha Chor",
        "artist": "Mahesh Hiremath, Shubhangi Joshi",
        "album": "Are Man Mohana",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02846220b6d40efb6183cd8cf4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dharila%20Pandharicha%20Chor.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dharila%20Pandharicha%20Chor&artist_name=Mahesh%20Hiremath%2C%20Shubhangi%20Joshi&album=Are%20Man%20Mohana"
    },
    {
        "id": 14,
        "title": "Ganpati Aarti",
        "artist": "Rohan Vinayak, Amitabh Bachchan",
        "album": "Sarkar 3",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028e1e1386d2b069a252d4ca1f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ganpati%20Aarti.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ganpati%20Aarti&artist_name=Rohan%20Vinayak%2C%20Amitabh%20Bachchan&album=Sarkar%203"
    },
    {
        "id": 15,
        "title": "Anand Potat",
        "artist": "Nihar Shembekar",
        "album": "Unknown Album",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02938b1112df0d7928306d780b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Anand%20Potat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Anand%20Potat&artist_name=Nihar%20Shembekar&album=Unknown%20Album"
    },
    {
        "id": 16,
        "title": "Jaise Jayache Karm",
        "artist": "Prahlad Shinde",
        "album": "Paule Chalati Pandharichi Vaat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a21782f056823053a1eb72d1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jaise%20Jayache%20Karm.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jaise%20Jayache%20Karm&artist_name=Prahlad%20Shinde&album=Paule%20Chalati%20Pandharichi%20Vaat"
    },
    {
        "id": 17,
        "title": "Kanda Raja Pandharicha",
        "artist": "Sudhir Phadke",
        "album": "Jhala Mahar Pandrinath",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0207e4da46d0e8aa41f05f832d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kanda%20Raja%20Pandharicha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kanda%20Raja%20Pandharicha&artist_name=Sudhir%20Phadke&album=Jhala%20Mahar%20Pandrinath"
    },
    {
        "id": 18,
        "title": "Karpurgauram",
        "artist": "Amitabh Bachchan, Kailash Kher",
        "album": "Shivoham",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02982dd27b7dd1003ff19f0d11",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Karpurgauram.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Karpurgauram&artist_name=Amitabh%20Bachchan%2C%20Kailash%20Kher&album=Shivoham"
    },
    {
        "id": 19,
        "title": "Keshava Madhava Tuzya Naamaat Re Godava",
        "artist": "Suman Kalyanpur",
        "album": "Sadabahar Sangeetkar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e1440c0656cf44a08eb34ea8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Keshava%20Madhava%20Tuzya%20Naamaat%20Re%20Godava.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Keshava%20Madhava%20Tuzya%20Naamaat%20Re%20Godava&artist_name=Suman%20Kalyanpur&album=Sadabahar%20Sangeetkar"
    },
    {
        "id": 20,
        "title": "Koushalyecha Ram Bai",
        "artist": "Manik Varma",
        "album": "Bhaktigeet",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026c831ab1e01fb12cdbb3ed0a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Koushalyecha%20Ram%20Bai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Koushalyecha%20Ram%20Bai&artist_name=Manik%20Varma&album=Bhaktigeet"
    },
    {
        "id": 21,
        "title": "Magto Mee Pandurang",
        "artist": "Prahlad Shinde",
        "album": "Paule Chalati Pandharichi Vaat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a21782f056823053a1eb72d1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Magto%20Mee%20Pandurang.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Magto%20Mee%20Pandurang&artist_name=Prahlad%20Shinde&album=Paule%20Chalati%20Pandharichi%20Vaat"
    },
    {
        "id": 22,
        "title": "Man Ha Mogara",
        "artist": "Suresh Wadkar",
        "album": "Man Ha Mogara",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0226721ae8f3090b52283bf91d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Man%20Ha%20Mogara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Man%20Ha%20Mogara&artist_name=Suresh%20Wadkar&album=Man%20Ha%20Mogara"
    },
    {
        "id": 23,
        "title": "Mazi Pandhari Chi Maay",
        "artist": "Ajay Gogavale",
        "album": "Mauli",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d5963fe5ec2a8824302bf8f5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mazi%20Pandhari%20Chi%20Maay.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mazi%20Pandhari%20Chi%20Maay&artist_name=Ajay%20Gogavale&album=Mauli"
    },
    {
        "id": 24,
        "title": "Natha Ghari Nache Maza Sakha Pandurang",
        "artist": "Mahesh Kale",
        "album": "Natyabhaktirang Mahesh Kale",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024a39bf87635c6843bd1d168d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Natha%20Ghari%20Nache%20Maza%20Sakha%20Pandurang.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Natha%20Ghari%20Nache%20Maza%20Sakha%20Pandurang&artist_name=Mahesh%20Kale&album=Natyabhaktirang%20Mahesh%20Kale"
    },
    {
        "id": 25,
        "title": "Pandurang Pandurang",
        "artist": "Chandrshekhar Gadgil",
        "album": "Naamdar Mukhyamantri Ganpya Gawade",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02adb6c904f223ba4565f3ad22",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pandurang%20Pandurang.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pandurang%20Pandurang&artist_name=Chandrshekhar%20Gadgil&album=Naamdar%20Mukhyamantri%20Ganpya%20Gawade"
    },
    {
        "id": 26,
        "title": "Shree Gajanan Maharaj Bavani",
        "artist": "Prathamesh Laghate",
        "album": "Shree Gajanan Maharaj Bavani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0256928c880b1d7b810ffd0c77",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Shree%20Gajanan%20Maharaj%20Bavani.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shree%20Gajanan%20Maharaj%20Bavani&artist_name=Prathamesh%20Laghate&album=Shree%20Gajanan%20Maharaj%20Bavani"
    },
    {
        "id": 27,
        "title": "Shri Swami Samartha",
        "artist": "Adarsh Shinde, Swapnil Bandodkar",
        "album": "Savita Damodar Paranjpe",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029a3937188ecc6655f28b920a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Shri%20Swami%20Samartha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shri%20Swami%20Samartha&artist_name=Adarsh%20Shinde%2C%20Swapnil%20Bandodkar&album=Savita%20Damodar%20Paranjpe"
    },
    {
        "id": 28,
        "title": "Sundar Te Dhyan",
        "artist": "Lata Mangeshkar",
        "album": "Abhang Tukayache",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026c86a733623ebb8919659540",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sundar%20Te%20Dhyan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sundar%20Te%20Dhyan&artist_name=Lata%20Mangeshkar&album=Abhang%20Tukayache"
    },
    {
        "id": 29,
        "title": "Taal Bole Chipalia",
        "artist": "Pandit Bhimsen Joshi, Vasantrao Deshpande",
        "album": "Bholi Bhabdi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0273c3757cfaff3551a07b2736",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Taal%20Bole%20Chipalia.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Taal%20Bole%20Chipalia&artist_name=Pandit%20Bhimsen%20Joshi%2C%20Vasantrao%20Deshpande&album=Bholi%20Bhabdi"
    },
    {
        "id": 30,
        "title": "Tuj Magto Mi Aata",
        "artist": "Lata Mangeshkar",
        "album": "Ashtavinayak",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02edce254795a49799573f2d9d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tuj%20Magto%20Mi%20Aata.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tuj%20Magto%20Mi%20Aata&artist_name=Lata%20Mangeshkar&album=Ashtavinayak"
    },
    {
        "id": 31,
        "title": "Vithu Mauli Tu",
        "artist": "Sudhir Waghmode, L. Padmaja",
        "album": "Maharashtrachi Lokdhara",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67706f0000000283d2868d24883ffed602117b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Vithu%20Mauli%20Tu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Vithu%20Mauli%20Tu&artist_name=Sudhir%20Waghmode%2C%20L.%20Padmaja&album=Maharashtrachi%20Lokdhara"
    },
    {
        "id": 32,
        "title": "Vitthal Aawadi Prembhav",
        "artist": "Suresh Wadkar",
        "album": "Omkar Swarupa (Abhang)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bc1a3258f4acac3d4a26d8e0",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Vitthal%20Aawadi%20Prembhav.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Vitthal%20Aawadi%20Prembhav&artist_name=Suresh%20Wadkar&album=Omkar%20Swarupa%20(Abhang)"
    },
    {
        "id": 33,
        "title": "Vitthala Shappath",
        "artist": "Rahul Deshpande",
        "album": "Vitthala Shappath",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020af8fb793ddd25e1a0cd49b5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Vitthala%20Shappath.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Vitthala%20Shappath&artist_name=Rahul%20Deshpande&album=Vitthala%20Shappath"
    }
];
// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "Best ghazals",
    defaultCover: "logo.png"
};
