
let music = [

    {
        id:1,
        name:"Hymn For The Weekend",
        artist:"ColdPlay",
        audioSrc:"Auido/Coldplay+Hymn+For+The+Weekend+Lyrics.mp3",
        imageSrc:"Images/hymn.jpg",
    },
    {
        id:2,
        name:"Perfect",
        artist:"Ed Sheeran",
        audioSrc:"Auido/Perfect - Ed Sheeran - JioAudio.In.mp3",
        imageSrc:"Images/perfect.jpg",
    },
    {
        id:3,
        name:"Shape Of You",
        artist:"Ed Sheeran",
        audioSrc:"Auido/Shape Of You Ed Sheeran(BigSongs).mp3",
        imageSrc:"Images/shape.jpg",
    },
    {
        id:4,
        name:"Dandelions",
        artist:"Ruth B",
        audioSrc:"Auido/Ruth-B-Dandelions.mp3",
        imageSrc:"Images/dandelion.jpg",

    },
    {
        id:5,
        name:"Baby",
        artist:"Justin Beiber",
        audioSrc:"Auido/Baby(PagalWorld).mp3",
        imageSrc:"Images/baby.jpg",
    },
    {
        id:6,
        name:"Bae",
        artist:"Adithy RK",
        audioSrc:"Auido/Bae (College Don)-(MastiMusic.Com).mp3",
        imageSrc:"Images/bae.jpg",
    },
    {
        id:7,
        name:"Love Me Like You Do",
        artist:"Ellie Goudling",
        audioSrc:"Auido/Love Me Like You Do(PagalWorld.com.se).mp3",
        imageSrc:"Images/love me.jpg",
    },
    {
        id:8,
        name:"Love Is Gone",
        artist:"Dylon Matthew",
        audioSrc:"Auido/Love-Is-Gone(PagalWorld).mp3",
        imageSrc:"Images/love is gone.jpg",
    },
    {
        id:9,
        name:"NCA",
        artist:"Andro",
        audioSrc:"Auido/Nca(PagalWorld).mp3",
        imageSrc:"Images/nca.jpg",
    },
    {
        id:10,
        name:"Let Me Down Slowly",
        artist:"Alec Benjamin",
        audioSrc:"Auido/Let Me Down Slowly(PagalWorld.com.se).mp3",
        imageSrc:"Images/down.jpg",
    },
    {
        id:11,
        name:"My You",
        artist:"Jungkook-BTS",
        audioSrc:"Auido/My-You.mp3",
        imageSrc:"Images/myyou.jpg",
    }

]


for(let i=0;i<music.length;i++)
{
    let tile = document.createElement("div");
    tile.classList.add("tile");

    let thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img = document.createElement("img");

    img.src=music[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description = document.createElement("div");
    description.classList.add("description");

    let h2= document.createElement("h2");
    h2.innerHTML=music[i].name;
    description.append(h2);
    let h3= document.createElement("h3");
    h3.innerHTML=music[i].artist;
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(music[i]);
    });
    document.querySelector(".music-list").append(tile);
}

function playMusic(music)
{
    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".player-img").src=music.imageSrc;
    document.querySelector(".songname").innerText=music.name;
    document.querySelector(".song").innerHTML=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();
}

function closeplayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    document.querySelector(".audio").pause();
}