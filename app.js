// the user should select the genre of the song they want to learn or the artist
// should specify if the song should be on electric guitar or acustic guitar

const genres = {

    rock : [
        {name:"Nothing Else Mattters", artist:"Metallica", electric:true, acoustic:true},
        {name:"Enter Sand Man", artist:"Metallica", electric:true, acoustic:true},
        {name:"Seek & Destroy", artist:"Metallica", electric:true, acoustic:false}
    ],

    pop : [
        {name:"Perfect", artist:"Ed Sheeran", electric:false, acoustic:true},
        {name:"7 years", artist:"Lukas Graham", electric:false, acoustic:true},
        {name:"Photograph", artist:"Ed Sheeran", electric:false, acoustic:true}
    ]

}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Tell us what should it be: ', name => {
    
    let ans = name.split(",")
    let genre;let guitarType;let artist;
    if(ans[0]){genre = ans[0]}
    if(ans[1]){guitarType = ans[1]}
    if(ans[2]){artist = ans[2]}


    const forAll = (arrGenre, arrGuitarType, arrArtist) => {
            let songs = []
            const selectGenre = genres[arrGenre]
            for(i of selectGenre){   
                if(i[arrGuitarType] && i.artist==arrArtist){
                    songs.push([i.name,i.artist])
                }
            }
            const selectRandom = Math.floor(Math.random()*songs.length)
            console.log(songs[selectRandom][0]+ " by " +songs[selectRandom][1])}
    
    const onlyGenre = (arrGenre) =>{
        let songs = []
        const selectGenre = genres[arrGenre]
        for(i of selectGenre){
            songs.push([i.name,i.artist])
        }

        const selectRandom = Math.floor(Math.random()*songs.length)
        console.log(songs[selectRandom][0]+ " by " +songs[selectRandom][1])
    
    }
    
    

    if(genre && guitarType && artist){forAll(genre,guitarType,artist)}
    else if(genre){onlyGenre(genre)}

    readline.close();
  });