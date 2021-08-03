let show_videos=document.getElementById("videos")


async function findVideos(){
    show_videos.innerHTML=null
    let q=document.getElementById("query").value;
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyBVuRgpXQOGuZNS5lyRFabRLC2BCZKv7rY&maxResults=30`);
    let data=await res.json()
  
    let {items}=data;
    items = items.filter((el) => {return el.id.videoId != undefined})
    items.forEach(({id:{ videoId } } ) => {
        let div=document.createElement("div")
        div.innerHTML=`<iframe width="260" height="180" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        show_videos.appendChild(div)

    })
    

}

async function defaultVideos(){
    show_videos.innerHTML=null
    
    let res=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBVuRgpXQOGuZNS5lyRFabRLC2BCZKv7rY&maxResults=30`);
    let data=await res.json()
    console.log(data);
   
    let {items}=data;
    items = items.filter((el) => {return el.id != undefined})
    items.forEach(({id} ) => {
        let div=document.createElement("div")
         div.setAttribute("class","default")
        div.innerHTML=`<iframe width="260" height="180" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        show_videos.appendChild(div)

    })
    

}
defaultVideos()