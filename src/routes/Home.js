import React, { memo, useEffect, useState } from 'react';
import { authService, dbService } from 'fBase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { Main } from './style';
import Tweet from '../components/Tweet';
import TweetBox from 'components/TweetBox';

const Home = memo(( { userObj } ) => {
  const [tweets, setTweets] = useState([]);

  useEffect(()=>{
    const _query = query( collection(dbService, "tweets"), orderBy("createdAt", "desc"));
    
    const querySnapshot = onSnapshot(_query, (snapshot) => {
      const tweetArr = snapshot.docs.map( (doc) => ({
          id: doc.id, 
          ...doc.data(),
      }))
      setTweets(tweetArr)
    });

    authService.onAuthStateChanged((user) => {
      if(user == null){
        querySnapshot();
      }
    })
   
  },[]);


  return (
    <Main>
      <TweetBox userObj={userObj}/>
      <ul>
        {
          tweets.map( (tweet) => {
            return (
              <Tweet 
                key={tweet.id} 
                tweetObj={tweet} 
                isOwner={tweet.creatorId === userObj.uid}/>
            )
          })
        }
      </ul>
    </Main>
  )
});

export default Home;