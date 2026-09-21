const SONGS_DATABASE = [
    {
        "id": 1,
        "title": "Smack That",
        "artist": "Akon, Eminem",
        "album": "Konvicted",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d9bcf5565005950b353bc9cf",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Smack%20That.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Smack%20That&artist_name=Akon%2C%20Eminem&album=Konvicted"
    },
    {
        "id": 2,
        "title": "Baby",
        "artist": "Justin Bieber, Ludacris",
        "album": "My World 2.0",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02629dc9e2e3bc20bbd7d92e4a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Baby.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Baby&artist_name=Justin%20Bieber%2C%20Ludacris&album=My%20World%202.0"
    },
    {
        "id": 3,
        "title": "Danza Kuduro",
        "artist": "Don Omar",
        "album": "Meet The Orphans",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d4c273fe23a0950d7ac9fce2",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Danza%20Kuduro.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Danza%20Kuduro&artist_name=Don%20Omar&album=Meet%20The%20Orphans"
    },
    {
        "id": 4,
        "title": "See You Again",
        "artist": "Wiz Khalifa, Charlie Puth",
        "album": "WAP - New Rap Cutz",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024e5df11b17b2727da2b718d8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/See%20You%20Again.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=See%20You%20Again&artist_name=Wiz%20Khalifa%2C%20Charlie%20Puth&album=WAP%20-%20New%20Rap%20Cutz"
    },
    {
        "id": 5,
        "title": "Shape of You",
        "artist": "Ed Sheeran",
        "album": "÷ (Deluxe)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Shape%20of%20You.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Shape%20of%20You&artist_name=Ed%20Sheeran&album=%C3%B7%20(Deluxe)"
    },
    {
        "id": 6,
        "title": "No Lie",
        "artist": "Sean Paul, Dua Lipa",
        "album": "No Lie",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0213f54ffbe6457c912fd82bcb",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/No%20Lie.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=No%20Lie&artist_name=Sean%20Paul%2C%20Dua%20Lipa&album=No%20Lie"
    },
    {
        "id": 7,
        "title": "16 Shots",
        "artist": "Stefflon Don",
        "album": "16 Shots",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0234bafd1c3565c7eb50772bc5",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/16%20Shots.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=16%20Shots&artist_name=Stefflon%20Don&album=16%20Shots"
    },
    {
        "id": 8,
        "title": "Ain't Your Mama",
        "artist": "Jennifer Lopez",
        "album": "Ain't Your Mama",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0277681dc657ac6b6c96056acf",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Ain't%20Your%20Mama.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Ain't%20Your%20Mama&artist_name=Jennifer%20Lopez&album=Ain't%20Your%20Mama"
    },
    {
        "id": 9,
        "title": "Alone",
        "artist": "Alan Walker, Ava Max",
        "album": "Alone, Pt. II",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02513b53948060f023ab88a855",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Alone.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Alone&artist_name=Alan%20Walker%2C%20Ava%20Max&album=Alone%2C%20Pt.%20II"
    },
    {
        "id": 10,
        "title": "Bad Boy",
        "artist": "Raaban, Luana Kiara",
        "album": "Bad Boy (feat. Luana Kiara)",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029b93b7071e8f0d9e14aa5d1c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Bad%20Boy.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Bad%20Boy&artist_name=Raaban%2C%20Luana%20Kiara&album=Bad%20Boy%20(feat.%20Luana%20Kiara)"
    },
    {
        "id": 11,
        "title": "Boss Bitch",
        "artist": "Doja Cat",
        "album": "Boss Bitch",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a36907c0781897feae72ba7f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Boss%20Bitch.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Boss%20Bitch&artist_name=Doja%20Cat&album=Boss%20Bitch"
    },
    {
        "id": 12,
        "title": "Butter",
        "artist": "BTS",
        "album": "Butter (Hotter, Sweeter, Cooler)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02240447f2da1433d8f4303596",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Butter.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Butter&artist_name=BTS&album=Butter%20(Hotter%2C%20Sweeter%2C%20Cooler)"
    },
    {
        "id": 13,
        "title": "Collide",
        "artist": "Justine Skye, Tyga",
        "album": "Collide (feat. Tyga)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02adadb86bf3555eb27a383c76",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Collide.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Collide&artist_name=Justine%20Skye%2C%20Tyga&album=Collide%20(feat.%20Tyga)"
    },
    {
        "id": 14,
        "title": "Copines",
        "artist": "Aya Nakamura",
        "album": "NAKAMURA",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0256feea19a0436ec52a9217c9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Copines.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Copines&artist_name=Aya%20Nakamura&album=NAKAMURA"
    },
    {
        "id": 15,
        "title": "Cupid",
        "artist": "FIFTY FIFTY",
        "album": "The Beginning: Cupid",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eb535219dc875690e09dd8f9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Cupid.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Cupid&artist_name=FIFTY%20FIFTY&album=The%20Beginning%3A%20Cupid"
    },
    {
        "id": 16,
        "title": "Dandelions",
        "artist": "Ruth B.",
        "album": "Safe Haven",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b09403f05bc0c306cf96990f",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dandelions.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dandelions&artist_name=Ruth%20B.&album=Safe%20Haven"
    },
    {
        "id": 17,
        "title": "Darkside",
        "artist": "Neoni",
        "album": "Wars In A Wonderland",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025949fe5472d5ad4d30494569",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Darkside.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Darkside&artist_name=Neoni&album=Wars%20In%20A%20Wonderland"
    },
    {
        "id": 18,
        "title": "Dreamers",
        "artist": "Jung Kook, BTS",
        "album": "Dreamers FIFA World Cup Qatar",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cfe3ffeee2f4ec0291f9d969",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Dreamers.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Dreamers&artist_name=Jung%20Kook%2C%20BTS&album=Dreamers%20FIFA%20World%20Cup%20Qatar"
    },
    {
        "id": 19,
        "title": "Enemy",
        "artist": "Imagine Dragons, Arcane",
        "album": "Enemy",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02aa597e50829169e6994eb403",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Enemy.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Enemy&artist_name=Imagine%20Dragons%2C%20Arcane&album=Enemy"
    },
    {
        "id": 20,
        "title": "Faded",
        "artist": "Alan Walker",
        "album": "Different World",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a108e07c661f9fc54de9c43a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Faded.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Faded&artist_name=Alan%20Walker&album=Different%20World"
    },
    {
        "id": 21,
        "title": "Gasolina",
        "artist": "Daddy Yankee",
        "album": "Barrio Fino",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0211b9999b620ef9bc0e957623",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Gasolina.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Gasolina&artist_name=Daddy%20Yankee&album=Barrio%20Fino"
    },
    {
        "id": 22,
        "title": "Go Down Deh",
        "artist": "Spice, Sean Paul, Shaggy",
        "album": "Go Down Deh",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d7dc0a348b72f22d69268008",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Go%20Down%20Deh.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Go%20Down%20Deh&artist_name=Spice%2C%20Sean%20Paul%2C%20Shaggy&album=Go%20Down%20Deh"
    },
    {
        "id": 23,
        "title": "Guy",
        "artist": "Superfruit",
        "album": "Future Friends",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02f310e16d96499b241f7baabf",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Guy.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Guy&artist_name=Superfruit&album=Future%20Friends"
    },
    {
        "id": 24,
        "title": "Harleys In Hawaii",
        "artist": "Katy Perry",
        "album": "Harleys In Hawaii",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f36563773a882c66e3fca58e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Harleys%20In%20Hawaii.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Harleys%20In%20Hawaii&artist_name=Katy%20Perry&album=Harleys%20In%20Hawaii"
    },
    {
        "id": 25,
        "title": "Hips Don't Lie",
        "artist": "Shakira, Wyclef Jean",
        "album": "Oral Fixation",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0285432abc16fd92be0d435cb9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hips%20Don't%20Lie.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hips%20Don't%20Lie&artist_name=Shakira%2C%20Wyclef%20Jean&album=Oral%20Fixation"
    },
    {
        "id": 26,
        "title": "Honey, I'm Good",
        "artist": "Andy Grammer",
        "album": "Magazines Or Novels",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0235ab1495cb665ca6f73242d1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Honey%2C%20I'm%20Good.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Honey%2C%20I'm%20Good&artist_name=Andy%20Grammer&album=Magazines%20Or%20Novels"
    },
    {
        "id": 27,
        "title": "Hurts So Good",
        "artist": "Astrid S",
        "album": "Astrid S",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0231e760ae51990e7d9a32593a",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Hurts%20So%20Good.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Hurts%20So%20Good&artist_name=Astrid%20S&album=Astrid%20S"
    },
    {
        "id": 28,
        "title": "Let Me Love You",
        "artist": "DJ Snake, Justin Bieber",
        "album": "Encore",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02212d776c31027c511f0ee3bc",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Let%20Me%20Love%20You.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Let%20Me%20Love%20You&artist_name=DJ%20Snake%2C%20Justin%20Bieber&album=Encore"
    },
    {
        "id": 29,
        "title": "Levitating",
        "artist": "Dua Lipa",
        "album": "Future Nostalgia",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c88bae7846e62a8ba59ee0bd",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Levitating.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Levitating&artist_name=Dua%20Lipa&album=Future%20Nostalgia"
    },
    {
        "id": 30,
        "title": "Living Hell",
        "artist": "Bella Poarch",
        "album": "Dolls EP",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020c6b328e1d36b63689e572b2",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Living%20Hell.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Living%20Hell&artist_name=Bella%20Poarch&album=Dolls%20EP"
    },
    {
        "id": 31,
        "title": "Love Me Like You Do",
        "artist": "Ellie Goulding",
        "album": "Delirium (Deluxe)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026bdee14242f244d9d6ddf2fd",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Love%20Me%20Like%20You%20Do.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Love%20Me%20Like%20You%20Do&artist_name=Ellie%20Goulding&album=Delirium%20(Deluxe)"
    },
    {
        "id": 32,
        "title": "Mama",
        "artist": "Jonas Blue, William Singe",
        "album": "Blue",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025b6bcc59c3562a6f362344c6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mama.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mama&artist_name=Jonas%20Blue%2C%20William%20Singe&album=Blue"
    },
    {
        "id": 33,
        "title": "Middle of the Night",
        "artist": "Elley Duhé",
        "album": "MIDDLE OF THE NIGHT",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0253a2e11c1bde700722fecd2e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Middle%20of%20the%20Night.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Middle%20of%20the%20Night&artist_name=Elley%20Duh%C3%A9&album=MIDDLE%20OF%20THE%20NIGHT"
    },
    {
        "id": 34,
        "title": "Mockingbird",
        "artist": "Eminem",
        "album": "Encore (Deluxe Version)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021bec21e57fff76db49e15a70",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Mockingbird.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Mockingbird&artist_name=Eminem&album=Encore%20(Deluxe%20Version)"
    },
    {
        "id": 35,
        "title": "Money",
        "artist": "LISA",
        "album": "LALISA",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d814e7bfbbfd8fcfe4c1a08b",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Money.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Money&artist_name=LISA&album=LALISA"
    },
    {
        "id": 36,
        "title": "Never Let This Go",
        "artist": "Tom Frane",
        "album": "Never Let This Go",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02267846b5b7ff4a5e6d92ade2",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Never%20Let%20This%20Go.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Never%20Let%20This%20Go&artist_name=Tom%20Frane&album=Never%20Let%20This%20Go"
    },
    {
        "id": 37,
        "title": "New Rules",
        "artist": "Dua Lipa",
        "album": "Dua Lipa (Deluxe)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025966dfc026a261d899bc9d54",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/New%20Rules.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=New%20Rules&artist_name=Dua%20Lipa&album=Dua%20Lipa%20(Deluxe)"
    },
    {
        "id": 38,
        "title": "Night Changes",
        "artist": "One Direction",
        "album": "FOUR (Deluxe)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0234a29f220057810cce98e1b4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Night%20Changes.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Night%20Changes&artist_name=One%20Direction&album=FOUR%20(Deluxe)"
    },
    {
        "id": 39,
        "title": "No Lie",
        "artist": "Sean Paul, Dua Lipa",
        "album": "No Lie",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e022d564195ed3dd7b70d64862c",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/No%20Lie.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=No%20Lie&artist_name=Sean%20Paul%2C%20Dua%20Lipa&album=No%20Lie"
    },
    {
        "id": 40,
        "title": "NO",
        "artist": "Meghan Trainor",
        "album": "Thank You (Deluxe Version)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0262edffdb4d8b52cf89f39db6",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/NO.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=NO&artist_name=Meghan%20Trainor&album=Thank%20You%20(Deluxe%20Version)"
    },
    {
        "id": 41,
        "title": "On My Way",
        "artist": "Alan Walker, Sabrina Carpenter, Farruko",
        "album": "On My Way",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a2f5fd413729345c3cb33e9e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/On%20My%20Way.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=On%20My%20Way&artist_name=Alan%20Walker%2C%20Sabrina%20Carpenter%2C%20Farruko&album=On%20My%20Way"
    },
    {
        "id": 42,
        "title": "On The Floor",
        "artist": "Jennifer Lopez, Pitbull",
        "album": "Love?",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d7b2aa3834b82b1cbe899a48",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/On%20The%20Floor.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=On%20The%20Floor&artist_name=Jennifer%20Lopez%2C%20Pitbull&album=Love%3F"
    },
    {
        "id": 43,
        "title": "One Kiss",
        "artist": "Calvin Harris, Dua Lipa",
        "album": "One Kiss (with Dua Lipa)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d09f96d82310d4d77c14c108",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/One%20Kiss.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=One%20Kiss&artist_name=Calvin%20Harris%2C%20Dua%20Lipa&album=One%20Kiss%20(with%20Dua%20Lipa)"
    },
    {
        "id": 44,
        "title": "Pink Venom",
        "artist": "BLACKPINK",
        "album": "Pink Venom",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02580ac3ad7dfc81e509171120",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Pink%20Venom.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Pink%20Venom&artist_name=BLACKPINK&album=Pink%20Venom"
    },
    {
        "id": 45,
        "title": "Reason",
        "artist": "XO TEAM",
        "album": "Reason",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0245961774a8db73a1b5f77d84",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Reason.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Reason&artist_name=XO%20TEAM&album=Reason"
    },
    {
        "id": 46,
        "title": "Run Free",
        "artist": "Deep Chills, IVIE",
        "album": "Run Free",
        "cover": "https://i.scdn.co/image/4cfa2cf52c72c4d55b8dc286ad0548af784725de",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Run%20Free.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Run%20Free&artist_name=Deep%20Chills%2C%20IVIE&album=Run%20Free"
    },
    {
        "id": 47,
        "title": "Safari",
        "artist": "Serena",
        "album": "Safari",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d4ecc9efa75fb775522a78af",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Safari.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Safari&artist_name=Serena&album=Safari"
    },
    {
        "id": 48,
        "title": "Sorry",
        "artist": "Justin Bieber",
        "album": "Purpose (Deluxe)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f46b9d202509a8f7384b90de",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sorry.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sorry&artist_name=Justin%20Bieber&album=Purpose%20(Deluxe)"
    },
    {
        "id": 49,
        "title": "Symphony",
        "artist": "Clean Bandit, Zara Larsson",
        "album": "What Is Love?",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0258f9aad6bf6fcf19aee2874e",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Symphony.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Symphony&artist_name=Clean%20Bandit%2C%20Zara%20Larsson&album=What%20Is%20Love%3F"
    },
    {
        "id": 50,
        "title": "Taki Taki",
        "artist": "DJ Snake, Selena Gomez",
        "album": "Taki Taki",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e105c410a7b390c61a58cbf8",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Taki%20Taki.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Taki%20Taki&artist_name=DJ%20Snake%2C%20Selena%20Gomez&album=Taki%20Taki"
    },
    {
        "id": 51,
        "title": "The Nights",
        "artist": "Avicii",
        "album": "The Days / Nights",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020ae4f4d42e4a09f3a29f64ad",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/The%20Nights.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=The%20Nights&artist_name=Avicii&album=The%20Days%20%2F%20Nights"
    },
    {
        "id": 52,
        "title": "Under The Influence",
        "artist": "Chris Brown",
        "album": "Indigo (Extended)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0248f69a441c575fa5926a0831",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Under%20The%20Influence.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Under%20The%20Influence&artist_name=Chris%20Brown&album=Indigo%20(Extended)"
    },
    {
        "id": 53,
        "title": "Unholy",
        "artist": "Sam Smith, Kim Petras",
        "album": "Unholy (feat. Kim Petras)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a935e4689f15953311772cc4",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Unholy.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Unholy&artist_name=Sam%20Smith%2C%20Kim%20Petras&album=Unholy%20(feat.%20Kim%20Petras)"
    },
    {
        "id": 54,
        "title": "Unstoppable",
        "artist": "Sia",
        "album": "This Is Acting",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b9bea8700ca3c305eb9569a3",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Unstoppable.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Unstoppable&artist_name=Sia&album=This%20Is%20Acting"
    },
    {
        "id": 55,
        "title": "Waka Waka",
        "artist": "Shakira, Freshlyground",
        "album": "Waka Waka",
        "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84d35698c7f563d7e855e919d9",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Waka%20Waka.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Waka%20Waka&artist_name=Shakira%2C%20Freshlyground&album=Waka%20Waka"
    },
    {
        "id": 56,
        "title": "Wannabe",
        "artist": "Wannabe",
        "album": "why mona",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0259055eb970b07cb66e237417",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Wannabe.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Wannabe&artist_name=Wannabe&album=why%20mona"
    },
    {
        "id": 57,
        "title": "Wavin' Flag",
        "artist": "K'NAAN",
        "album": "Troubadour",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a3a8f20705f6f1d9adf84551",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Wavin'%20Flag.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Wavin'%20Flag&artist_name=K'NAAN&album=Troubadour"
    },
    {
        "id": 58,
        "title": "We Don't Talk Anymore",
        "artist": "Charlie Puth, Selena Gomez",
        "album": "Nine Track Mind",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02633a2d775747bccfbcb17a45",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/We%20Don't%20Talk%20Anymore.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=We%20Don't%20Talk%20Anymore&artist_name=Charlie%20Puth%2C%20Selena%20Gomez&album=Nine%20Track%20Mind"
    },
    {
        "id": 59,
        "title": "ilomilo",
        "artist": "MBNN, Rowald Steyn",
        "album": "ilomilo",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02967bee5c61a66e7ad7876434",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/ilomilo.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=ilomilo&artist_name=MBNN%2C%20Rowald%20Steyn&album=ilomilo"
    },
    {
        "id": 60,
        "title": "Sailor Song",
        "artist": "Gigi Perez",
        "album": "Sailor",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e6065f209e0a01986206bd53",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Sailor%20Song.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Sailor%20Song&artist_name=Gigi%20Perez&album=Sailor"
    },
    {
        "id": 61,
        "title": "infected",
        "artist": "SATVRN",
        "album": "infected",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b97747030ab838c32d1443b1",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/infected.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=infected&artist_name=SATVRN&album=infected"
    },
    {
        "id": 62,
        "title": "Jamaican",
        "artist": "Hugel & Solto",
        "album": "Jamaican (Bam Bam)",
        "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02450a730dd72f3bf49882ae9d",
        "url": "https://raw.githubusercontent.com/only-beats/Forever-in-Sync/main/Jamaican.mp3",
        "lyricsUrl": "https://lrclib.net/api/search?track_name=Jamaican%20(Bam%20Bam)&artist_name=Hugel%20%26%20Solto&album=Jamaican%20(Bam%20Bam)"
    }
];
// App settings
const APP_SETTINGS = {
    appName: "ONLY-BEATS",
    playlistName: "All English Mix",
    defaultCover: "logo.png"
};

