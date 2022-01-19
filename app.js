// the user should select the genre of the song they want to learn or the artist
// should specify if the song should be on electric guitar or acustic guitar

const genres = {

    rock : [
        {name:"Nothing Else Mattters", artist:"Metallica", electric:false, acoustic:true},
        {name:"Enter Sand Man", artist:"Metallica", electric:true, acoustic:true},
        {name:"Seek & Destroy", artist:"Metallica", electric:true, acoustic:false},
        {name:"The Unforgiven",artist:"Metallica",electric:true,acoustic:true},
        {name:"Fade to Black",artist:"Metallica",electric:false,acoustic:true},
        {name:"Master Of Puppets",artist:"Metallica",electric:true,acoustic:false},
        {name:"Sad But True",artist:"Mettalica",electric:true,acoustic:false},
        {name:"Wherever I May Roam",artist:"Metallica",electric:true,acoustic:false},
        {name:"For Whom The Bell Tolls",artist:"Metallica",electric:true,acoustic:false},
        {name:"One",artist:"Metallica",electric:true,acoustic:true},
        {name:"Stairway to Heaven",artist:"Led Zeppelin",electric:true,acoustic:true},
        {name:"Whole Lotta Love",artist:"Led Zeppelin",electric:true,acoustic:false},
        {name:"Immigrant Song",artist:"Led Zeppelin",electric:true,acoustic:false},
        {name:"Kashmir",artist:"Led Zeppelin",electric:true,acoustic:true},
        {name:"Another Brick in the Wall",artist:"Pink Floyd",electric:true,acoustic:true},
        {name:"Comfortably Numb",artist:"Pink Floyd",electric:true,acoustic:true},
        {name:"Wish You Were Here",artist:"Pink Floyd",electric:true,acoustic:true},
        {name:"Hey You",artist:"Pink Floyd",electric:false,acoustic:true},
        {name:"Money",artist:"Pink Floyd",electric:false,acoustic:true},
        {name:"Sweet Child O'Mine",artist:"Guns N'Roses",electric:true,acoustic:true},

    ],

    pop : [
        {name:"Perfect", artist:"Ed Sheeran", electric:false, acoustic:true},
        {name:"7 years", artist:"Lukas Graham", electric:false, acoustic:true},
        {name:"Photograph", artist:"Ed Sheeran", electric:false, acoustic:true},
        {name:"Just the Way You Are",artist:"Bruno Mars",electric:false,acoustic:true},
        {name:"You're Beautiful",artist:"James Blunt",electric:false,acoustic:true},
        {name:"Let Her Go",artist:"Passenger",electric:false,acoustic:true},
        {name:"Wonderwall",artist:"Oasis",electric:false,acoustic:true},
        {name:"Thinking Out Loud",artist:"Ed Sheeran",electric:true,acoustic:false},
        {name:"Someone You Loved",artist:"Lewis Capaldi",electric:false,acoustic:true},
        {name:"I'm Yours",artist:"Jason Mraz",electric:false,acoustic:true},
        {name:"Yellow",artist:"Coldplay",electric:true,acoustic:true},
    ]

}

const sorry =[
    "We are not vibin' with this one but in short we will...",
    "Maybe another one should bite the dust?",
    "We don't have that, is sad but true",
    "We know is unforgiven but we will add this one later."
]

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log("\n")
  console.log("Welcome to 'Some songs you could play on guitar'.\nTo use the prgram like you should use it please read the README.md from github. Thanks! :D\n")
  readline.question('Tell us what should it be: ', name => {
  
    
    let ans = name.split(",")
    let genre;let guitarType;let artist;
    if(ans[0]){genre = ans[0]}
    if(ans[2]){guitarType = ans[2]}
    if(ans[1]){artist = ans[1]}


    const forAll = (arrGenre, arrGuitarType, arrArtist) => {
            let songs = []
            let ok=0;
            const selectGenre = genres[arrGenre]
            if(selectGenre){
                for(i of selectGenre){   
                    if(i[arrGuitarType] && i.artist==arrArtist){
                        songs.push([i.name,i.artist]);ok=1;
                    }
                }
                const selectRandom = Math.floor(Math.random()*songs.length)
                
                if(ok){return songs[selectRandom][0]+ " by " +songs[selectRandom][1]}
                else{return false}
            }
            else{return false}
    }
    
    const onlyGenre = (arrGenre) =>{
        let songs = []
        let ok=0;
        const selectGenre = genres[arrGenre]
        if(selectGenre){
            ok=1
            for(i of selectGenre){
            
                let guitar;
                if(i.electric && i.acoustic){
                    guitar = " both electric guitar and acoustic guitar"
                }else if(i.electric && !i.acoustic){
                    guitar = " electric guitar"
                }else if(!i.electric && i.acoustic){
                    guitar = " acoustic guitar"
                }
    
                songs.push([i.name,i.artist,guitar])
            }
    
            const selectRandom = Math.floor(Math.random()*songs.length)
            if(ok){return songs[selectRandom][0]+ " by " +songs[selectRandom][1] + " and sounds good on"+songs[selectRandom][2]}
            else{return false}
        }
        else{return false}
    
    }

    const genreAndArtist = (arrGenre,arrArtist) =>{
        let songs = []
        let ok=0;
        const selectGenre = genres[arrGenre]
        if(selectGenre){
            for(i of selectGenre){   
                if(i.artist==arrArtist){
                    let guitar;
                    if(i.electric && i.acoustic){
                        guitar = " both electric guitar and acoustic guitar"
                    }else if(i.electric && !i.acoustic){
                        guitar = " electric guitar"
                    }else if(!i.electric && i.acoustic){
                        guitar = " acoustic guitar"
                    }
        
                    songs.push([i.name,i.artist,guitar]);ok=1;
                }
            }
            const selectRandom = Math.floor(Math.random()*songs.length)
            
            if(ok){return songs[selectRandom][0]+ " by " +songs[selectRandom][1] + " and sounds good on"+songs[selectRandom][2]}
            else{return false}
        }
        else{return false}
    }
    
    console.log('\n')
    
    selectAnExcuse = Math.floor(Math.random()*sorry.length)
    if(genre && guitarType && artist){
        if(forAll(genre,guitarType,artist))
            {console.log(forAll(genre,guitarType,artist))}
        else
            {console.log(sorry[selectAnExcuse])}
    }
    else if(genre && artist){
        if(genreAndArtist(genre,artist)){
            console.log(genreAndArtist(genre,artist))
        }
        else{
            console.log(sorry[selectAnExcuse])
        }
    }
    else if(genre){
        if(onlyGenre(genre)){
            console.log(onlyGenre(genre))
        }
        else{
            console.log(sorry[selectAnExcuse])
        }
    }
    console.log("\n")

    readline.close();
  });