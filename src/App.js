import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {
  const [videos, setVideos] = useState([]);

  // Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'videos');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = setVideos(citySnapshot.docs.map(doc => doc.data()));
  return cityList;
}

  useEffect(() => {
    getCities(db)
    // db.collection("videos").onSnapshot((snapshot) =>
    //   setVideos(snapshot.docs.map((doc) => doc.data()))
    // );
    
  }, []);


  // const videos = [
  //   {
  //     id: 1,
  //     url: "https://www.youtube.com/watch?v=3iIQ_TiOr64", // 30 seconds video
  //     channel: "Channel 1",
  //     song: "Dummy Song 1",
  //     likes: 100,
  //     messages: 20,
  //     description: "Description of Video 1",
  //     shares: 10
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.youtube.com/watch?v=BZVH2d-SwPQ", // 45 seconds video
  //     channel: "Channel 2",
  //     song: "Dummy Song 2",
  //     likes: 200,
  //     messages: 30,
  //     description: "Description of Video 2",
  //     shares: 15
  //   },
  //   {
  //     id: 3,
  //     url: "https://www.youtube.com/watch?v=3Q_qS5SWWzo", // 50 seconds video
  //     channel: "Channel 3",
  //     song: "Dummy Song 3",
  //     likes: 150,
  //     messages: 25,
  //     description: "Description of Video 3",
  //     shares: 12
  //   },
  //   {
  //     id: 4,
  //     url: "https://www.youtube.com/watch?v=UcFB6EBpgyo", // 55 seconds video
  //     channel: "Channel 4",
  //     song: "Dummy Song 4",
  //     likes: 180,
  //     messages: 18,
  //     description: "Description of Video 4",
  //     shares: 8
  //   },
  //   {
  //     id: 5,
  //     url: "https://www.youtube.com/watch?v=VnWfFYIuEag", // 1 minute video
  //     channel: "Channel 5",
  //     song: "Dummy Song 5",
  //     likes: 220,
  //     messages: 35,
  //     description: "Description of Video 5",
  //     shares: 20
  //   },
  //   {
  //     id: 6,
  //     url: "https://www.youtube.com/watch?v=1Ahg8z3d00w", // 30 seconds video
  //     channel: "Channel 6",
  //     song: "Dummy Song 6",
  //     likes: 120,
  //     messages: 15,
  //     description: "Description of Video 6",
  //     shares: 6
  //   },
  //   {
  //     id: 7,
  //     url: "https://www.youtube.com/watch?v=9h9TysoYW5I", // 45 seconds video
  //     channel: "Channel 7",
  //     song: "Dummy Song 7",
  //     likes: 180,
  //     messages: 22,
  //     description: "Description of Video 7",
  //     shares: 18
  //   },
  //   {
  //     id: 8,
  //     url: "https://www.youtube.com/watch?v=2RcYst1yV8M", // 50 seconds video
  //     channel: "Channel 8",
  //     song: "Dummy Song 8",
  //     likes: 250,
  //     messages: 40,
  //     description: "Description of Video 8",
  //     shares: 25
  //   },
  //   {
  //     id: 9,
  //     url: "https://www.youtube.com/watch?v=Pk5pAtEJtM0", // 55 seconds video
  //     channel: "Channel 9",
  //     song: "Dummy Song 9",
  //     likes: 300,
  //     messages: 50,
  //     description: "Description of Video 9",
  //     shares: 30
  //   },
  //   {
  //     id: 10,
  //     url: "https://www.youtube.com/watch?v=ZcOoI8I0tVo", // 1 minute video
  //     channel: "Channel 10",
  //     song: "Dummy Song 10",
  //     likes: 200,
  //     messages: 25,
  //     description: "Description of Video 10",
  //     shares: 15
  //   }
  // ];
  
console.log({videos})

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ id,url, channel, description, song, likes, messages, shares }) => (
            <Video
            key={id}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
