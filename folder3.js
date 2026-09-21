const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Aaja Piya Tohe Pyar Doon",
        "artist": "Lata Mangeshkar",
        "album": "Baharon Ke Sapne",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0250557f616c35cf935dc7681b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aaja%20Piya%20Tohe%20Pyar%20Doon.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aaja%20Piya%20Tohe%20Pyar%20Doon&artist_name=Lata%20Mangeshkar&album=Baharon%20Ke%20Sapne"
    },
    {
        "id": 2,
        "title": "Aajkal Tere Mere Pyar Ke",
        "artist": "Suman Kalyanpur, Mohammed Rafi",
        "album": "Brahmachari",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0201f976992b990a5028f8444b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aajkal%20Tere%20Mere%20Pyar%20Ke.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aajkal%20Tere%20Mere%20Pyar%20Ke&artist_name=Suman%20Kalyanpur%2C%20Mohammed%20Rafi&album=Brahmachari"
    },
    {
        "id": 3,
        "title": "Aap Ke Aa Jane Se",
        "artist": "Mohammed Aziz",
        "album": "Khudgarz",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023518cf5a5c588742a1324554",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aap%20Ke%20Aa%20Jane%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aap%20Ke%20Aa%20Jane%20Se&artist_name=Mohammed%20Aziz&album=Khudgarz"
    },
    {
        "id": 4,
        "title": "Aap Ki Ankhon Mein Kuch",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Ghar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0225176145c80e3a16f5b1f4a7",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aap%20Ki%20Ankhon%20Mein%20Kuch.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aap%20Ki%20Ankhon%20Mein%20Kuch&artist_name=Kishore%20Kumar%2C%20Lata%20Mangeshkar&album=Ghar"
    },
    {
        "id": 5,
        "title": "Abhi Na Jao Chhod Kar",
        "artist": "Asha Bhosle, Mohammed Rafi",
        "album": "Dev",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fbe87438ee8a4f2a220d1960",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Abhi%20Na%20Jao%20Chhod%20Kar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Abhi%20Na%20Jao%20Chhod%20Kar&artist_name=Asha%20Bhosle%2C%20Mohammed%20Rafi&album=Dev"
    },
    {
        "id": 6,
        "title": "Ae Kash Ke Hum",
        "artist": "Jatin-Lalit",
        "album": "Kabhi Haan Kabhi Naa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0240806cd6dfc7b82254f45889",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ae%20Kash%20Ke%20Hum.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ae%20Kash%20Ke%20Hum&artist_name=Jatin-Lalit&album=Kabhi%20Haan%20Kabhi%20Naa"
    },
    {
        "id": 7,
        "title": "Bade Achhe Lagte Hain",
        "artist": "Amit Kumar, R. D. Burman",
        "album": "Balika Badhu",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027b3ff6520b83f18b271bf0fe",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bade%20Achhe%20Lagte%20Hain.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bade%20Achhe%20Lagte%20Hain&artist_name=Amit%20Kumar%2C%20R.%20D.%20Burman&album=Balika%20Badhu"
    },
    {
        "id": 8,
        "title": "Bahon Ke Darmiyan",
        "artist": "Alka Yagnik, Hariharan",
        "album": "Khamoshi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029bf25039733399650b2267a9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bahon%20Ke%20Darmiyan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bahon%20Ke%20Darmiyan&artist_name=Alka%20Yagnik%2C%20Hariharan&album=Khamoshi"
    },
    {
        "id": 9,
        "title": "Bahon Mein Chale Aao",
        "artist": "Lata Mangeshkar, R. D. Burman",
        "album": "Anamika",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0249c1949911566df218c5f0dd",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bahon%20Mein%20Chale%20Aao.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bahon%20Mein%20Chale%20Aao&artist_name=Lata%20Mangeshkar%2C%20R.%20D.%20Burman&album=Anamika"
    },
    {
        "id": 10,
        "title": "Bangle Ke Peechhe",
        "artist": "Lata Mangeshkar",
        "album": "Samadhi",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b5d74fc06db6abd836f99700",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bangle%20Ke%20Peechhe.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bangle%20Ke%20Peechhe&artist_name=Lata%20Mangeshkar&album=Samadhi"
    },
    {
        "id": 11,
        "title": "Dil Hoom Hoom Kare",
        "artist": "Lata Mangeshkar",
        "album": "Rudaali",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025ee50519416d3adffefe591d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Hoom%20Hoom%20Kare.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Hoom%20Hoom%20Kare&artist_name=Lata%20Mangeshkar&album=Rudaali"
    },
    {
        "id": 12,
        "title": "Ek Ajnabee Haseena Se",
        "artist": "Kishore Kumar",
        "album": "Ajanabee",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eb275240fe306c412f535f8c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ek%20Ajnabee%20Haseena%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ek%20Ajnabee%20Haseena%20Se&artist_name=Kishore%20Kumar&album=Ajanabee"
    },
    {
        "id": 13,
        "title": "Ek Din Aap",
        "artist": "Kumar Sanu",
        "album": "Yes Boss",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02fdc712431d79bcacf01d6131",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ek%20Din%20Aap.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ek%20Din%20Aap&artist_name=Kumar%20Sanu&album=Yes%20Boss"
    },
    {
        "id": 14,
        "title": "Hai Apna Dil To Aawara",
        "artist": "Hemant Kumar",
        "album": "Baarishein",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0203d5016697846304152cd126",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hai%20Apna%20Dil%20To%20Aawara.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hai%20Apna%20Dil%20To%20Aawara&artist_name=Hemant%20Kumar&album=Baarishein"
    },
    {
        "id": 15,
        "title": "Ham Tere Pyar Mein",
        "artist": "Lata Mangeshkar",
        "album": "Dil Ek Mandir",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0257482489b688d2b4e9d91be9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ham%20Tere%20Pyar%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ham%20Tere%20Pyar%20Mein&artist_name=Lata%20Mangeshkar&album=Dil%20Ek%20Mandir"
    },
    {
        "id": 16,
        "title": "In Ankhon Ki Masti",
        "artist": "Asha Bhosle",
        "album": "Umrao Jaan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0286d529c730fd8d79c20df6f6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/In%20Ankhon%20Ki%20Masti.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=In%20Ankhon%20Ki%20Masti&artist_name=Asha%20Bhosle&album=Umrao%20Jaan"
    },
    {
        "id": 17,
        "title": "Itna Na Mujhse Tu Pyar Badha",
        "artist": "Talat Mahmood, Lata Mangeshkar",
        "album": "Chhaya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020ec64fd2f466c3799a63c900",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Itna%20Na%20Mujhse%20Tu%20Pyar%20Badha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Itna%20Na%20Mujhse%20Tu%20Pyar%20Badha&artist_name=Talat%20Mahmood%2C%20Lata%20Mangeshkar&album=Chhaya"
    },
    {
        "id": 18,
        "title": "Jane Woh Kaise Log The",
        "artist": "Hemant Kumar, S. D. Burman",
        "album": "Pyaasa",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0203d5016697846304152cd126",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jane%20Woh%20Kaise%20Log%20The.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jane%20Woh%20Kaise%20Log%20The&artist_name=Hemant%20Kumar%2C%20S.%20D.%20Burman&album=Pyaasa"
    },
    {
        "id": 19,
        "title": "Kabhi Kabhi Mere Dil Mein",
        "artist": "Mukesh, Lata Mangeshkar",
        "album": "Kabhi Kabhie",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021a53cb45af75e30370c7e0ee",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kabhi%20Kabhi%20Mere%20Dil%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kabhi%20Kabhi%20Mere%20Dil%20Mein&artist_name=Mukesh%2C%20Lata%20Mangeshkar&album=Kabhi%20Kabhie"
    },
    {
        "id": 20,
        "title": "Kajra Mohabbat Wala",
        "artist": "Asha Bhosle",
        "album": "Kismet",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a6bc2e73e75c2259725cabf5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kajra%20Mohabbat%20Wala.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kajra%20Mohabbat%20Wala&artist_name=Asha%20Bhosle&album=Kismet"
    },
    {
        "id": 21,
        "title": "Kya Hua Tera Vada",
        "artist": "Sushma Shrestha",
        "album": "Hum Kisise Kum Naheen",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b9c2d5169d45911d8f499f93",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kya%20Hua%20Tera%20Vada.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kya%20Hua%20Tera%20Vada&artist_name=Sushma%20Shrestha&album=Hum%20Kisise%20Kum%20Naheen"
    },
    {
        "id": 22,
        "title": "Lag Ja Gale Se Phir",
        "artist": "Lata Mangeshkar",
        "album": "Woh Kaun Thi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fa15d4d0cdda455df45c413d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Lag%20Ja%20Gale%20Se%20Phir.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Lag%20Ja%20Gale%20Se%20Phir&artist_name=Lata%20Mangeshkar&album=Woh%20Kaun%20Thi"
    },
    {
        "id": 23,
        "title": "Main Koi Aisa Geet Gaoon",
        "artist": "Abhijeet",
        "album": "Yes Boss",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020f0e4b68ed5159c70422c18f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Main%20Koi%20Aisa%20Geet%20Gaoon.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Main%20Koi%20Aisa%20Geet%20Gaoon&artist_name=Abhijeet&album=Yes%20Boss"
    },
    {
        "id": 24,
        "title": "Neele Neele Ambar Par",
        "artist": "Kalyanji-Anandji",
        "album": "Kalaakaar",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0202ec3d2efa698e442568f4a4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Neele%20Neele%20Ambar%20Par.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Neele%20Neele%20Ambar%20Par&artist_name=Kalyanji-Anandji&album=Kalaakaar"
    },
    {
        "id": 25,
        "title": "Pal Pal Dil Ke Paas",
        "artist": "Kishore Kumar",
        "album": "Blackmail",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c14fb9e3b201671a5268a271",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pal%20Pal%20Dil%20Ke%20Paas.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pal%20Pal%20Dil%20Ke%20Paas&artist_name=Kishore%20Kumar&album=Blackmail"
    },
    {
        "id": 26,
        "title": "Panna Ki Tamanna Hai",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Heera Panna",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0202ed3280a797d0a02115bb08",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Panna%20Ki%20Tamanna%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Panna%20Ki%20Tamanna%20Hai&artist_name=Kishore%20Kumar%2C%20Lata%20Mangeshkar&album=Heera%20Panna"
    },
    {
        "id": 27,
        "title": "Saagar Jaisi Aankhonwali",
        "artist": "Kishore Kumar",
        "album": "Saagar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fbb0937acbbb0ae0ac8c21eb",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saagar%20Jaisi%20Aankhonwali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saagar%20Jaisi%20Aankhonwali&artist_name=Kishore%20Kumar&album=Saagar"
    },
    {
        "id": 28,
        "title": "Yeh Raaten Yeh Mausam",
        "artist": "Sanam",
        "album": "Yeh Raaten Yeh Mausam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f47f3f44f4a7311a66c7a770",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Raaten%20Yeh%20Mausam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Raaten%20Yeh%20Mausam&artist_name=Sanam&album=Yeh%20Raaten%20Yeh%20Mausam"
    },
    {
        "id": 29,
        "title": "Zindagi Ki Yahi Reet Hai",
        "artist": "Kishore Kumar",
        "album": "Mr. India",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ac2dad16a7b8d79161852438",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Zindagi%20Ki%20Yahi%20Reet%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Zindagi%20Ki%20Yahi%20Reet%20Hai&artist_name=Kishore%20Kumar&album=Mr.%20India"
    },
    {
        "id": 30,
        "title": "Aaye Ho Meri Zindagi Mein",
        "artist": "Alka Yagnik",
        "album": "Raja Hindustani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021455b75335a478a77845c4ae",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aaye%20Ho%20Meri%20Zindagi%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aaye%20Ho%20Meri%20Zindagi%20Mein&artist_name=Alka%20Yagnik&album=Raja%20Hindustani"
    },
    {
        "id": 31,
        "title": "Sun Sahiba Sun",
        "artist": "Lata Mangeshkar",
        "album": "Ram Teri Ganga Maili",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c626cf6f81c8dd9ac6cf796e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sun%20Sahiba%20Sun.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sun%20Sahiba%20Sun&artist_name=Lata%20Mangeshkar&album=Ram%20Teri%20Ganga%20Maili"
    },
    {
        "id": 32,
        "title": "Yeh Mera Dil Yaar Ka Diwana",
        "artist": "Asha Bhosle, Kalyanji-Anandji",
        "album": "Don 78",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024ce7a531beda03062022daa9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Mera%20Dil%20Yaar%20Ka%20Diwana.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Mera%20Dil%20Yaar%20Ka%20Diwana&artist_name=Asha%20Bhosle%2C%20Kalyanji-Anandji&album=Don%2078"
    },
    {
        "id": 33,
        "title": "Aankhon Ki Gustakhiyan",
        "artist": "Kumar Sanu & Kavita Krishnamurthy",
        "album": "Hum Dil De Chuke Sanam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d8ea7a41af1775559b857d68",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aankhon%20Ki%20Gustakhiyan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aankhon%20Ki%20Gustakhiyan&artist_name=Kumar%20Sanu%20%26%20Kavita%20Krishnamurthy&album=Hum%20Dil%20De%20Chuke%20Sanam"
    },
    {
        "id": 34,
        "title": "Aankhon Mein Base Ho Tum",
        "artist": "Abhijeet, Alka Yagnik",
        "album": "Takkar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023df604eb1ce502af78af9204",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aankhon%20Mein%20Base%20Ho%20Tum.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aankhon%20Mein%20Base%20Ho%20Tum&artist_name=Abhijeet%2C%20Alka%20Yagnik&album=Takkar"
    },
    {
        "id": 35,
        "title": "Aate Jaate Hanste Gaate",
        "artist": "Lata Mangeshkar, S. P. Balasubrahmanyam",
        "album": "Maine Pyar Kiya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fd746356c5cae3f0702bacc6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aate%20Jaate%20Hanste%20Gaate.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aate%20Jaate%20Hanste%20Gaate&artist_name=Lata%20Mangeshkar%2C%20S.%20P.%20Balasubrahmanyam&album=Maine%20Pyar%20Kiya"
    },
    {
        "id": 36,
        "title": "Ae Mere Humsafar",
        "artist": "Vinod Rathod, Alka Yagnik",
        "album": "Baazigar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dd80ae5413c53b309946196a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ae%20Mere%20Humsafar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ae%20Mere%20Humsafar&artist_name=Vinod%20Rathod%2C%20Alka%20Yagnik&album=Baazigar"
    },
    {
        "id": 37,
        "title": "Ae Nazneen Suno Na",
        "artist": "A.R. Rahman, Abhijeet",
        "album": "Dil Hi Dil Mein",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b9488b8618661cbc4745c8c6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ae%20Nazneen%20Suno%20Na.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ae%20Nazneen%20Suno%20Na&artist_name=A.R.%20Rahman%2C%20Abhijeet&album=Dil%20Hi%20Dil%20Mein"
    },
    {
        "id": 38,
        "title": "Are Re Are",
        "artist": "Lata Mangeshkar, Udit Narayan",
        "album": "Dil To Pagal Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b96494dc6eaedc90919365df",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Are%20Re%20Are.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Are%20Re%20Are&artist_name=Lata%20Mangeshkar%2C%20Udit%20Narayan&album=Dil%20To%20Pagal%20Hai"
    },
    {
        "id": 39,
        "title": "Aur Kya",
        "artist": "Jatin-Lalit, Abhijeet, Alka Yagnik",
        "album": "Phir Bhi Dil Hai Hindustani",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ea07c69b16f11f7e0c09c9e1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Aur%20Kya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Aur%20Kya&artist_name=Jatin-Lalit%2C%20Abhijeet%2C%20Alka%20Yagnik&album=Phir%20Bhi%20Dil%20Hai%20Hindustani"
    },
    {
        "id": 40,
        "title": "Baadalon Mein Chup Raha Chand",
        "artist": "Alka Yagnik, Kumar Sanu",
        "album": "Phir Teri Kahani Yaad Aayee",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0208263c60c0c87952788a1881",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Baadalon%20Mein%20Chup%20Raha%20Chand.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Baadalon%20Mein%20Chup%20Raha%20Chand&artist_name=Alka%20Yagnik%2C%20Kumar%20Sanu&album=Phir%20Teri%20Kahani%20Yaad%20Aayee"
    },
    {
        "id": 41,
        "title": "Bahut Pyar Karte Hai",
        "artist": "Anuradha Paudwal",
        "album": "Saajan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029711c40e3ffc7e7f179336ed",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bahut%20Pyar%20Karte%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bahut%20Pyar%20Karte%20Hai&artist_name=Anuradha%20Paudwal&album=Saajan"
    },
    {
        "id": 42,
        "title": "Chhupana Bhi Nahin Aata",
        "artist": "Pankaj Udhas",
        "album": "Baazigar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dd80ae5413c53b309946196a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chhupana%20Bhi%20Nahin%20Aata.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chhupana%20Bhi%20Nahin%20Aata&artist_name=Pankaj%20Udhas&album=Baazigar"
    },
    {
        "id": 43,
        "title": "Chori Chori Jab Nazrein Mili",
        "artist": "Kumar Sanu, Sanjivani",
        "album": "Kareeb",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02383ff2c090eb75d75d661309",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chori%20Chori%20Jab%20Nazrein%20Mili.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chori%20Chori%20Jab%20Nazrein%20Mili&artist_name=Kumar%20Sanu%2C%20Sanjivani&album=Kareeb"
    },
    {
        "id": 44,
        "title": "Chupke Se Sun",
        "artist": "Udit Narayan, Alka Yagnik, Ehsaan, Loy, Shankar",
        "album": "Mission Kashmir",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026113f3e58125e348e9c17692",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Chupke%20Se%20Sun.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Chupke%20Se%20Sun&artist_name=Udit%20Narayan%2C%20Alka%20Yagnik%2C%20Ehsaan%2C%20Loy%2C%20Shankar&album=Mission%20Kashmir"
    },
    {
        "id": 45,
        "title": "Dheere Dheere Pyar Ko",
        "artist": "Alka Yagnik, Kumar Sanu",
        "album": "Phool Aur Kaante",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a833fdb8b4fa93b8491ed25f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dheere%20Dheere%20Pyar%20Ko.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dheere%20Dheere%20Pyar%20Ko&artist_name=Alka%20Yagnik%2C%20Kumar%20Sanu&album=Phool%20Aur%20Kaante"
    },
    {
        "id": 46,
        "title": "Dholna",
        "artist": "Lata Mangeshkar, Udit Narayan",
        "album": "Dil To Pagal Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b96494dc6eaedc90919365df",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dholna.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dholna&artist_name=Lata%20Mangeshkar%2C%20Udit%20Narayan&album=Dil%20To%20Pagal%20Hai"
    },
    {
        "id": 47,
        "title": "Dil Deewana",
        "artist": "Lata Mangeshkar",
        "album": "Maine Pyar Kiya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fd746356c5cae3f0702bacc6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Deewana.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Deewana&artist_name=Lata%20Mangeshkar&album=Maine%20Pyar%20Kiya"
    },
    {
        "id": 48,
        "title": "Dil Hai Ke Manta Nahin",
        "artist": "Anuradha Paudwal",
        "album": "Dil Hai Ke Manta Nahin",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eef5d8ba5626de47f6878c42",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Hai%20Ke%20Manta%20Nahin.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Hai%20Ke%20Manta%20Nahin&artist_name=Anuradha%20Paudwal&album=Dil%20Hai%20Ke%20Manta%20Nahin"
    },
    {
        "id": 49,
        "title": "Dil Ka Qaraar",
        "artist": "Shraddha Pandit, Sonu Nigam",
        "album": "Sangharsh",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d20fea39c76ec106c854c334",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Ka%20Qaraar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Ka%20Qaraar&artist_name=Shraddha%20Pandit%2C%20Sonu%20Nigam&album=Sangharsh"
    },
    {
        "id": 50,
        "title": "Dil Kehta Hai",
        "artist": "Alka Yagnik, Kumar Sanu",
        "album": "Akele Hum Akele Tum",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cf01fe6536d9a76d1df94a65",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Kehta%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Kehta%20Hai&artist_name=Alka%20Yagnik%2C%20Kumar%20Sanu&album=Akele%20Hum%20Akele%20Tum"
    },
    {
        "id": 51,
        "title": "Dil Kya Kare",
        "artist": "Jatin-Lalit, Udit Narayan, Alka Yagnik",
        "album": "Dil Kya Kare",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027994644ee7ecd0a587cd6602",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Kya%20Kare.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Kya%20Kare&artist_name=Jatin-Lalit%2C%20Udit%20Narayan%2C%20Alka%20Yagnik&album=Dil%20Kya%20Kare"
    },
    {
        "id": 52,
        "title": "Dil Mein Sanam Ki Soorat",
        "artist": "Alka Yagnik, Kumar Sanu",
        "album": "Phir Teri Kahani Yaad Aayee",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0208263c60c0c87952788a1881",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Mein%20Sanam%20Ki%20Soorat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Mein%20Sanam%20Ki%20Soorat&artist_name=Alka%20Yagnik%2C%20Kumar%20Sanu&album=Phir%20Teri%20Kahani%20Yaad%20Aayee"
    },
    {
        "id": 53,
        "title": "Dil Mera Churaya Kyun",
        "artist": "Kumar Sanu, Anu Malik",
        "album": "Akele Hum Akele Tum",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cf01fe6536d9a76d1df94a65",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Mera%20Churaya%20Kyun.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Mera%20Churaya%20Kyun&artist_name=Kumar%20Sanu%2C%20Anu%20Malik&album=Akele%20Hum%20Akele%20Tum"
    },
    {
        "id": 54,
        "title": "Dil Ne Yeh Kaha Hain Dil Se",
        "artist": "Sonu Nigam, Alka Yagnik",
        "album": "Dhadkan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cac69d193e1c48f5c87893e5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Ne%20Yeh%20Kaha%20Hain%20Dil%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Ne%20Yeh%20Kaha%20Hain%20Dil%20Se&artist_name=Sonu%20Nigam%2C%20Alka%20Yagnik&album=Dhadkan"
    },
    {
        "id": 55,
        "title": "Dil Se Dil Tak Baat Pahunchi",
        "artist": "Sonu Nigam",
        "album": "Deewana",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028d071fec739d2355e95f9dbf",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Se%20Dil%20Tak%20Baat%20Pahunchi.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Se%20Dil%20Tak%20Baat%20Pahunchi&artist_name=Sonu%20Nigam&album=Deewana"
    },
    {
        "id": 56,
        "title": "Dil Se Mere",
        "artist": "Shekhar Ravjiani, Mahalaxmi Iyer",
        "album": "Pyaar Mein Kabhi Kabhi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024d130aa779f503c703ea1591",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dil%20Se%20Mere.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dil%20Se%20Mere&artist_name=Shekhar%20Ravjiani%2C%20Mahalaxmi%20Iyer&album=Pyaar%20Mein%20Kabhi%20Kabhi"
    },
    {
        "id": 57,
        "title": "Dilko Tumse Pyar Hua",
        "artist": "Roop Kumar Rathod",
        "album": "Rehnaa Hai Terre Dil Mein",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aedf6f748f73e59cf25bcf25",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dilko%20Tumse%20Pyar%20Hua.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dilko%20Tumse%20Pyar%20Hua&artist_name=Roop%20Kumar%20Rathod&album=Rehnaa%20Hai%20Terre%20Dil%20Mein"
    },
    {
        "id": 58,
        "title": "Do Dil Mil Rahe Hai",
        "artist": "Kumar Sanu",
        "album": "Pardes",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a9df849755dad656e002852e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Do%20Dil%20Mil%20Rahe%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Do%20Dil%20Mil%20Rahe%20Hai&artist_name=Kumar%20Sanu&album=Pardes"
    },
    {
        "id": 59,
        "title": "Gali Mein Chand",
        "artist": "Alka Yagnik",
        "album": "Zakhm",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02034d7f0d1049835d7439cfef",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Gali%20Mein%20Chand.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Gali%20Mein%20Chand&artist_name=Alka%20Yagnik&album=Zakhm"
    },
    {
        "id": 60,
        "title": "Gawah Hai Chand Tare",
        "artist": "Kumar Sanu, Alka Yagnik",
        "album": "Damini",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027eaa516777248a4cf3b55e76",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Gawah%20Hai%20Chand%20Tare.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Gawah%20Hai%20Chand%20Tare&artist_name=Kumar%20Sanu%2C%20Alka%20Yagnik&album=Damini"
    },
    {
        "id": 61,
        "title": "Ghoonghat Ki Aadh Se",
        "artist": "Kumar Sanu, Alka Yagnik",
        "album": "Hum Hain Rahi Pyar Ke",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025a5d99f08ec514c24dc3ac01",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ghoonghat%20Ki%20Aadh%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ghoonghat%20Ki%20Aadh%20Se&artist_name=Kumar%20Sanu%2C%20Alka%20Yagnik&album=Hum%20Hain%20Rahi%20Pyar%20Ke"
    },
    {
        "id": 62,
        "title": "Hamen Jab Se Mohabbat",
        "artist": "Sonu Nigam, Alka Yagnik",
        "album": "Border",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ca5a0cd685e0cc5d40547e2a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hamen%20Jab%20Se%20Mohabbat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hamen%20Jab%20Se%20Mohabbat&artist_name=Sonu%20Nigam%2C%20Alka%20Yagnik&album=Border"
    },
    {
        "id": 63,
        "title": "Hum Aapke Hain Koun",
        "artist": "Lata Mangeshkar, S. P. Balasubrahmanyam",
        "album": "Hum Aapke Hain Koun",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02025844622b87102743e5bd4b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hum%20Aapke%20Hain%20Koun.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hum%20Aapke%20Hain%20Koun&artist_name=Lata%20Mangeshkar%2C%20S.%20P.%20Balasubrahmanyam&album=Hum%20Aapke%20Hain%20Koun"
    },
    {
        "id": 64,
        "title": "Hum Dil De Chuke Sanam",
        "artist": "Kavita Krishnamurthy, Mohammad Salamat, Dominique",
        "album": "Hum Dil De Chuke Sanam",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d8ea7a41af1775559b857d68",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hum%20Dil%20De%20Chuke%20Sanam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hum%20Dil%20De%20Chuke%20Sanam&artist_name=Kavita%20Krishnamurthy%2C%20Mohammad%20Salamat%2C%20Dominique&album=Hum%20Dil%20De%20Chuke%20Sanam"
    },
    {
        "id": 65,
        "title": "Hum to Deewane Huye",
        "artist": "Abhijeet, Alka Yagnik",
        "album": "Baadshah",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027cf199d96a5f08888bfd2d69",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hum%20to%20Deewane%20Huye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hum%20to%20Deewane%20Huye&artist_name=Abhijeet%2C%20Alka%20Yagnik&album=Baadshah"
    },
    {
        "id": 66,
        "title": "Is Kadar Pyar Hai Tumse",
        "artist": "Sonu Nigam",
        "album": "Deewana",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d071fec739d2355e95f9dbf",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Is%20Kadar%20Pyar%20Hai%20Tumse.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Is%20Kadar%20Pyar%20Hai%20Tumse&artist_name=Sonu%20Nigam&album=Deewana"
    },
    {
        "id": 67,
        "title": "Is Pyar Se Meri Taraf Na Dekho",
        "artist": "Kumar Sanu, Alka Yagnik",
        "album": "Chamatkar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024659141462fecd4e373f8ca4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Is%20Pyar%20Se%20Meri%20Taraf%20Na%20Dekho.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Is%20Pyar%20Se%20Meri%20Taraf%20Na%20Dekho&artist_name=Kumar%20Sanu%2C%20Alka%20Yagnik&album=Chamatkar"
    },
    {
        "id": 68,
        "title": "Is Tarah Aashiqui Ka",
        "artist": "Kumar Sanu",
        "album": "Imtihan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a987bb655cb167d9edb31ec6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Is%20Tarah%20Aashiqui%20Ka.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Is%20Tarah%20Aashiqui%20Ka&artist_name=Kumar%20Sanu&album=Imtihan"
    },
    {
        "id": 69,
        "title": "Jaan - E - Jigar Jaaneman",
        "artist": "Anuradha Paudwal, Kumar Sanu, Super Cassettes Industries Private Limited, Sameer",
        "album": "Aashiqui",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0249e862c57d46af9c26a97201",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jaan%20-%20E%20-%20Jigar%20Jaaneman.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jaan%20-%20E%20-%20Jigar%20Jaaneman&artist_name=Anuradha%20Paudwal%2C%20Kumar%20Sanu%2C%20Super%20Cassettes%20Industries%20Private%20Limited%2C%20Sameer&album=Aashiqui"
    },
    {
        "id": 70,
        "title": "Jaati Hoon Main",
        "artist": "Kumar Sanu, Alka Yagnik",
        "album": "Karan Arjun",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027fb82695e3547618dfb10d67",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jaati%20Hoon%20Main.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jaati%20Hoon%20Main&artist_name=Kumar%20Sanu&album=Karan%20Arjun"
    },
    {
        "id": 71,
        "title": "Jab Kisiki Taraf Dil",
        "artist": "Jatin-Lalit, Kumar Sanu",
        "album": "Pyaar To Hona Hi Tha",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a23500c4e9bc131bdd6786a1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jab%20Kisiki%20Taraf%20Dil.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jab%20Kisiki%20Taraf%20Dil&artist_name=Jatin-Lalit%2C%20Kumar%20Sanu&album=Pyaar%20To%20Hona%20Hi%20Tha"
    },
    {
        "id": 72,
        "title": "Jab Se Tumko Dekha",
        "artist": "Kumar Sanu, Sadhana Sargam",
        "album": "Damini",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027eaa516777248a4cf3b55e76",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jab%20Se%20Tumko%20Dekha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jab%20Se%20Tumko%20Dekha&artist_name=Kumar%20Sanu%2C%20Sadhana%20Sargam&album=Damini"
    },
    {
        "id": 73,
        "title": "Jadoo Bhari",
        "artist": "Udit Narayan",
        "album": "Dastak",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b904f56642b0e6973b77877a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jadoo%20Bhari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jadoo%20Bhari&artist_name=Udit%20Narayan&album=Dastak"
    },
    {
        "id": 74,
        "title": "Jadoo Hai Tera",
        "artist": "Kumar Sanu, Alka Yagnik",
        "album": "Ghulam",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f102cdccec25b4022260a089",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jadoo%20Hai%20Tera.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jadoo%20Hai%20Tera&artist_name=Kumar%20Sanu%2C%20Alka%20Yagnik&album=Ghulam"
    },
    {
        "id": 75,
        "title": "Jahan Piya Wahan Mein",
        "artist": "K. S. Chithra, Shankar Mahadevan",
        "album": "Pardes",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a9df849755dad656e002852e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jahan%20Piya%20Wahan%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jahan%20Piya%20Wahan%20Mein&artist_name=K.%20S.%20Chithra%2C%20Shankar%20Mahadevan&album=Pardes"
    },
    {
        "id": 76,
        "title": "Jeeye To Jeeye Kaise",
        "artist": "Kumar Sanu",
        "album": "Saajan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029711c40e3ffc7e7f179336ed",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jeeye%20To%20Jeeye%20Kaise.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jeeye%20To%20Jeeye%20Kaise&artist_name=Kumar%20Sanu&album=Saajan"
    },
    {
        "id": 77,
        "title": "Kahin Mujhe Pyar Hua Toh Nahin",
        "artist": "Alka Yagnik, Kumar Sanu",
        "album": "Rang",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bd2293acbdb847bc57e5ebe9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kahin%20Mujhe%20Pyar%20Hua%20Toh%20Nahin.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kahin%20Mujhe%20Pyar%20Hua%20Toh%20Nahin&artist_name=Alka%20Yagnik%2C%20Kumar%20Sanu&album=Rang"
    },
    {
        "id": 78,
        "title": "Kaho Naa Pyar Hai",
        "artist": "Udit Narayan, Alka Yagnik",
        "album": "Kaho Naa Pyar Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fb36b3cdbab3b03cc12e807b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kaho%20Naa%20Pyar%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kaho%20Naa%20Pyar%20Hai&artist_name=Udit%20Narayan%2C%20Alka%20Yagnik&album=Kaho%20Naa%20Pyar%20Hai"
    },
    {
        "id": 79,
        "title": "Kathai Aankhon Wali",
        "artist": "Kumar Sanu",
        "album": "Duplicate",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02363a2e444d41091dd3a95064",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kathai%20Aankhon%20Wali.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kathai%20Aankhon%20Wali&artist_name=Kumar%20Sanu&album=Duplicate"
    },
    {
        "id": 80,
        "title": "Kisi Din Banoongi Main",
        "artist": "Alka Yagnik, Udit Narayan",
        "album": "Raja",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026867fa779258eedae633c587",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Kisi%20Din%20Banoongi%20Main.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Kisi%20Din%20Banoongi%20Main&artist_name=Alka%20Yagnik%2C%20Udit%20Narayan&album=Raja"
    },
    {
        "id": 81,
        "title": "Madhosh Dil Ki Dhadkan",
        "artist": "Lata Mangeshkar, Kumar Sanu",
        "album": "Jab Pyaar Kisise Hota Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02013f5b6e9239d60b964c66a3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Madhosh%20Dil%20Ki%20Dhadkan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Madhosh%20Dil%20Ki%20Dhadkan&artist_name=Lata%20Mangeshkar%2C%20Kumar%20Sanu&album=Jab%20Pyaar%20Kisise%20Hota%20Hai"
    },
    {
        "id": 82,
        "title": "Mausam Ka Jaadu",
        "artist": "Lata Mangeshkar, S. P. Balasubrahmanyam",
        "album": "Hum Aapke Hain Koun",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02025844622b87102743e5bd4b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mausam%20Ka%20Jaadu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mausam%20Ka%20Jaadu&artist_name=Lata%20Mangeshkar%2C%20S.%20P.%20Balasubrahmanyam&album=Hum%20Aapke%20Hain%20Koun"
    },
    {
        "id": 83,
        "title": "Mera Chand Mujhe Aaya Hai Nazar",
        "artist": "Kumar Sanu",
        "album": "Mr. Aashiq",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02631226ef1ea77f7aa4e37dda",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mera%20Chand%20Mujhe%20Aaya%20Hai%20Nazar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mera%20Chand%20Mujhe%20Aaya%20Hai%20Nazar&artist_name=Kumar%20Sanu&album=Mr.%20Aashiq"
    },
    {
        "id": 84,
        "title": "Mera Dil Bhi Kitna Pagal Hai",
        "artist": "Kumar Sanu, Alka Yagnik",
        "album": "Saajan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029711c40e3ffc7e7f179336ed",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mera%20Dil%20Bhi%20Kitna%20Pagal%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mera%20Dil%20Bhi%20Kitna%20Pagal%20Hai&artist_name=Kumar%20Sanu%2C%20Alka%20Yagnik&album=Saajan"
    },
    {
        "id": 85,
        "title": "Mera Ek Sapne Hai",
        "artist": "Kumar Sanu, Kavita Krishnamurthy",
        "album": "Khoobsurat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0270e828d89df66a30d20be631",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mera%20Ek%20Sapne%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mera%20Ek%20Sapne%20Hai&artist_name=Kumar%20Sanu%2C%20Kavita%20Krishnamurthy&album=Khoobsurat"
    },
    {
        "id": 86,
        "title": "Mere Khayalon Ki Malika",
        "artist": "Abhijeet",
        "album": "Josh",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025e054db60005f5f70f89e700",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mere%20Khayalon%20Ki%20Malika.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mere%20Khayalon%20Ki%20Malika&artist_name=Abhijeet&album=Josh"
    },
    {
        "id": 87,
        "title": "Meri Duniya Hai",
        "artist": "Sonu Nigam, Kavita Krishnamurthy",
        "album": "Vaastav: The Reality",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024ac49cbfcbad925437b11428",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Meri%20Duniya%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Meri%20Duniya%20Hai&artist_name=Sonu%20Nigam%2C%20Kavita%20Krishnamurthy&album=Vaastav%3A%20The%20Reality"
    },
    {
        "id": 88,
        "title": "Meri Sanson Mein",
        "artist": "Udit Narayan",
        "album": "Aur Pyar Ho Gaya",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c4b858abf36cbd46d4a8ca2d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Meri%20Sanson%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Meri%20Sanson%20Mein&artist_name=Udit%20Narayan&album=Aur%20Pyar%20Ho%20Gaya"
    },
    {
        "id": 89,
        "title": "Na Tum Jano Na Hum",
        "artist": "Lucky Ali, Ramya",
        "album": "Kaho Naa Pyaar Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fb36b3cdbab3b03cc12e807b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Na%20Tum%20Jano%20Na%20Hum.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Na%20Tum%20Jano%20Na%20Hum&artist_name=Lucky%20Ali%2C%20Ramya&album=Kaho%20Naa%20Pyaar%20Hai"
    },
    {
        "id": 90,
        "title": "Nahin Saamne Tu",
        "artist": "Hariharan, Sukhwinder Singh",
        "album": "Taal",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0298754a3b7cbff68a9ccbd5de",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Nahin%20Saamne%20Tu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Nahin%20Saamne%20Tu&artist_name=Hariharan%2C%20Sukhwinder%20Singh&album=Taal"
    },
    {
        "id": 91,
        "title": "Nazar Ke Samne",
        "artist": "Anuradha Paudwal",
        "album": "Aashiqui",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0249e862c57d46af9c26a97201",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Nazar%20Ke%20Samne.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Nazar%20Ke%20Samne&artist_name=Anuradha%20Paudwal&album=Aashiqui"
    },
    {
        "id": 92,
        "title": "O Jaana Yeh Maana",
        "artist": "Lata Mangeshkar",
        "album": "Jab Pyaar Kisise Hota Hai",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02013f5b6e9239d60b964c66a3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/O%20Jaana%20Yeh%20Maana.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=O%20Jaana%20Yeh%20Maana&artist_name=Lata%20Mangeshkar&album=Jab%20Pyaar%20Kisise%20Hota%20Hai"
    },
    {
        "id": 93,
        "title": "Palki Pe Hoke",
        "artist": "Alka Yagnik",
        "album": "Khal Nayak",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028cbe90b8eceebec8c43cecfc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Palki%20Pe%20Hoke.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Palki%20Pe%20Hoke&artist_name=Alka%20Yagnik&album=Khal%20Nayak"
    },
    {
        "id": 94,
        "title": "Pehla Nasha",
        "artist": "Udit Narayan, Sadhana Sargam",
        "album": "Jo Jeeta Wohi Sikandar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02206e7788d2e4e4aee63046fb",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pehla%20Nasha.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pehla%20Nasha&artist_name=Udit%20Narayan%2C%20Sadhana%20Sargam&album=Jo%20Jeeta%20Wohi%20Sikandar"
    },
    {
        "id": 95,
        "title": "Pyar Hua Chupke Se",
        "artist": "Kavita Krishnamurthy, R. D. Burman",
        "album": "1942 A Love Story",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0213e0f656d7fc4be63a45918e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pyar%20Hua%20Chupke%20Se.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pyar%20Hua%20Chupke%20Se&artist_name=Kavita%20Krishnamurthy%2C%20R.%20D.%20Burman&album=1942%20A%20Love%20Story"
    },
    {
        "id": 96,
        "title": "Pyar Ke Liye",
        "artist": "Jatin-Lalit, Alka Yagnik",
        "album": "Dil Kya Kare",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027994644ee7ecd0a587cd6602",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pyar%20Ke%20Liye.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pyar%20Ke%20Liye&artist_name=Jatin-Lalit%2C%20Alka%20Yagnik&album=Dil%20Kya%20Kare"
    },
    {
        "id": 97,
        "title": "Pyar Ko Ho Jane Do",
        "artist": "Kumar Sanu, Lata Mangeshkar",
        "album": "Dushman",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292620aced0ee370c7952e8d2",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pyar%20Ko%20Ho%20Jane%20Do.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pyar%20Ko%20Ho%20Jane%20Do&artist_name=Kumar%20Sanu%2C%20Lata%20Mangeshkar&album=Dushman"
    },
    {
        "id": 98,
        "title": "Raah Mein Unse Mulaqat",
        "artist": "Kumar Sanu, Alka Yagnik",
        "album": "Vijaypath",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e023e4a4b9acf4819d3be575295",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Raah%20Mein%20Unse%20Mulaqat.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Raah%20Mein%20Unse%20Mulaqat&artist_name=Kumar%20Sanu%2C%20Alka%20Yagnik&album=Vijaypath"
    },
    {
        "id": 99,
        "title": "Saathiya Tune Kya Kiya",
        "artist": "S. P. Balasubrahmanyam, K. S. Chithra",
        "album": "Love",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02df4a64ca9e198fcad038520e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saathiya%20Tune%20Kya%20Kiya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saathiya%20Tune%20Kya%20Kiya&artist_name=S.%20P.%20Balasubrahmanyam%2C%20K.%20S.%20Chithra&album=Love"
    },
    {
        "id": 100,
        "title": "Saawan Barse",
        "artist": "Hariharan, Sadhana Sargam",
        "album": "Dahek",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027c14e0d134084183673ab096",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Saawan%20Barse.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Saawan%20Barse&artist_name=Hariharan%2C%20Sadhana%20Sargam&album=Dahek"
    },
    {
        "id": 101,
        "title": "Sambhala Hai Maine",
        "artist": "Kumar Sanu, Anu Malik, Qateel Shifai",
        "album": "Naaraaz",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024d6942863b8780fc9e583c5d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sambhala%20Hai%20Maine.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sambhala%20Hai%20Maine&artist_name=Kumar%20Sanu&album=Naaraaz"
    },
    {
        "id": 102,
        "title": "Seene Mein Dil Hai",
        "artist": "Alka Yagnik, Kumar Sanu",
        "album": "Raju Ban Gaya Gentleman",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f59e6ba12c1e6f8d57ab3eb4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Seene%20Mein%20Dil%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Seene%20Mein%20Dil%20Hai&artist_name=Alka%20Yagnik%2C%20Kumar%20Sanu&album=Raju%20Ban%20Gaya%20Gentleman"
    },
    {
        "id": 103,
        "title": "Sochenge Tumhe Pyar",
        "artist": "Kumar Sanu",
        "album": "Deewana",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020d345e6c5c252b8461dc3733",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sochenge%20Tumhe%20Pyar.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sochenge%20Tumhe%20Pyar&artist_name=Kumar%20Sanu&album=Deewana"
    },
    {
        "id": 104,
        "title": "Sun Beliya",
        "artist": "Lata Mangeshkar, S. P. Balasubrahmanyam",
        "album": "100 Days",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02628e088e6e5ee5cbb5a991e8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sun%20Beliya.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sun%20Beliya&artist_name=Lata%20Mangeshkar&album=100%20Days"
    },
    {
        "id": 105,
        "title": "Suno Na",
        "artist": "Vishal-Shekhar, Shaan",
        "album": "Jhankaar Beats",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ee17526f2c4ec3710d40c514",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Suno%20Na.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Suno%20Na&artist_name=Vishal-Shekhar%2C%20Shaan&album=Jhankaar%20Beats"
    },
    {
        "id": 106,
        "title": "Tanhai Tanhai",
        "artist": "Udit Narayan, Alka Yagnik",
        "album": "Koyla",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028166e681948128194edc628d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tanhai%20Tanhai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tanhai%20Tanhai&artist_name=Udit%20Narayan%2C%20Alka%20Yagnik&album=Koyla"
    },
    {
        "id": 107,
        "title": "Tare Hain Barati",
        "artist": "Kumar Sanu, Jaspinder Narula",
        "album": "Virasat",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d939aea6edf470cefdb49a70",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tare%20Hain%20Barati.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tare%20Hain%20Barati&artist_name=Kumar%20Sanu%2C%20Jaspinder%20Narula&album=Virasat"
    },
    {
        "id": 108,
        "title": "Tere Dar Par Sanam",
        "artist": "Kumar Sanu",
        "album": "Phir Teri Kahani Yaad Aayee",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0208263c60c0c87952788a1881",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tere%20Dar%20Par%20Sanam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tere%20Dar%20Par%20Sanam&artist_name=Kumar%20Sanu&album=Phir%20Teri%20Kahani%20Yaad%20Aayee"
    },
    {
        "id": 109,
        "title": "Tu Mere Samne",
        "artist": "Lata Mangeshkar, Udit Narayan",
        "album": "Darr",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026bede6ac32180f208abdae0a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Mere%20Samne.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Mere%20Samne&artist_name=Lata%20Mangeshkar%2C%20Udit%20Narayan&album=Darr%20&%20Hits%20of%20Yash%20Chopra"
    },
    {
        "id": 110,
        "title": "Tu Mile Dil Khile",
        "artist": "Kumar Sanu, Indeevar",
        "album": "Criminal",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fcfd2ce1257f0615265cc08b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tu%20Mile%20Dil%20Khile.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tu%20Mile%20Dil%20Khile&artist_name=Kumar%20Sanu%2C%20Indeevar&album=Criminal"
    },
    {
        "id": 111,
        "title": "Tujhe Dekha To",
        "artist": "Lata Mangeshkar, Kumar Sanu",
        "album": "Dilwale Dulhania Le Jayenge",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022458b3ff529345f251a6d001",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tujhe%20Dekha%20To.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tujhe%20Dekha%20To&artist_name=Lata%20Mangeshkar%2C%20Kumar%20Sanu&album=Dilwale%20Dulhania%20Le%20Jayenge"
    },
    {
        "id": 112,
        "title": "Tum Bin",
        "artist": "K. S. Chithra",
        "album": "Tum Bin",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023a609c0033f8e08eb87e38fd",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Bin.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Bin&artist_name=K.%20S.%20Chithra&album=Tum%20Bin"
    },
    {
        "id": 113,
        "title": "Tum Dil Ki Dhadkan Mein",
        "artist": "Kumar Sanu",
        "album": "Dhadkan",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cac69d193e1c48f5c87893e5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Dil%20Ki%20Dhadkan%20Mein.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Dil%20Ki%20Dhadkan%20Mein&artist_name=Kumar%20Sanu&album=Dhadkan"
    },
    {
        "id": 114,
        "title": "Tum Kya Mile Jaane Jaan",
        "artist": "Lata Mangeshkar, Udit Narayan",
        "album": "Saatwan Aasman",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024f59fe4fb7d218104ae6a512",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tum%20Kya%20Mile%20Jaane%20Jaan.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tum%20Kya%20Mile%20Jaane%20Jaan&artist_name=Lata%20Mangeshkar%2C%20Udit%20Narayan&album=Saatwan%20Aasman%20(Original%20Motion%20Picture%20Soundtrack)"
    },
    {
        "id": 115,
        "title": "Tumhein Apna Banane Ki Kasam Khai Hai",
        "artist": "Anuradha Paudwal, Kumar Sanu",
        "album": "Sadak",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02df70d76da3c8f0c850cac437",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Tumhein%20Apna%20Banane%20Ki%20Kasam%20Khai%20Hai.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Tumhein%20Apna%20Banane%20Ki%20Kasam%20Khai%20Hai&artist_name=Anuradha%20Paudwal%2C%20Kumar%20Sanu&album=Sadak"
    },
    {
        "id": 116,
        "title": "Uljhi Hai Yeh Kis Jaal Mein Tu",
        "artist": "Anupama",
        "album": "Sailaab",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0280863a7bb3e58112d1c47bb6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Uljhi%20Hai%20Yeh%20Kis%20Jaal%20Mein%20Tu.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Uljhi%20Hai%20Yeh%20Kis%20Jaal%20Mein%20Tu&artist_name=Anupama&album=Sailaab"
    },
    {
        "id": 117,
        "title": "Waada Raha Sanam",
        "artist": "Abhijeet, Alka Yagnik",
        "album": "Khiladi",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ee975c4d9269c9abd133ff9d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Waada%20Raha%20Sanam.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Waada%20Raha%20Sanam&artist_name=Abhijeet%2C%20Alka%20Yagnik&album=Khiladi"
    },
    {
        "id": 118,
        "title": "Yeh Sham Mastani",
        "artist": "Kishore Kumar, R. D. Burman",
        "album": "Kati Patang",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02828e961ca63ad2ac4444dbfd",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Yeh%20Sham%20Mastani.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Yeh%20Sham%20Mastani&artist_name=Kishore%20Kumar%2C%20R.%20D.%20Burman&album=Kati%20Patang"
    }


];

// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "90's Hindi Mix",
    defaultCover: "logo.png"
};
