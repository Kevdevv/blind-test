import React, { useEffect, useState } from 'react'

const Landing = () => {

    const api = "AIzaSyBwgtjyUrTcCltPYv9Yiz-0NwAJLOSU2EE"
    const chanel = "UCdyHHpeqJiiODq5janZAvCQ"

    let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${api}&channelId=${chanel}&part=snippet,id&order=date&maxResults=1`

    console.log('FETCH', fetchUrl)


    const [allVideo, setAllVideo] = useState([])

    useEffect(() => {
        fetch(fetchUrl).then((response) => response.json()).then((resJson) => {
            const result = resJson.items.map(doc => ({
                ...doc,
                VideoLink: "https://www.youtube.com/embed/"+doc.id.videoId
            }));
            setAllVideo(result)
        })
    },[fetchUrl])

    console.log('TEST',allVideo)
    
    
  return (
    <div>
      {allVideo.map ((item)=>{
          return(
            <div>
              <iframe width="560" height="315" src={item.VideoLink} title="youtube" allowfullscreen ng-show="showvideo"></iframe>
            </div>
          )
      })}
    </div>
  )
}

export default Landing