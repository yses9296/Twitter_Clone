import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { dbService } from 'fBase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import gravatar from 'gravatar';
import Tweet from 'components/Tweet';
import { ProfilePage, ProfileHeader, Avatar, UserName, EditProfile, EditForm, EditInput, EditButton, EditCancelButton, LogOutButton } from './style'

const Profile = memo(({ userObj, refreshUser }) => {
  const navigator = useNavigate();
  const auth = getAuth();
  const [data, setData] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState( userObj.displayName );

  const onClickLogoutBtn = () => {
    auth.signOut();
    // refreshUser();
    navigator('/');
  }
  const toggleUpdateProfile = () => {
    setIsEditing( prev => !prev)
  }
  const onChangeHandler = (e) => {
    setNewDisplayName(e.target.value)
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if(newDisplayName !== userObj.displayName){
      await updateProfile(userObj, { displayName: newDisplayName, }); 
      setIsEditing(false);
      refreshUser();
    }
  }

  const getMyTweets = async () => {
    const collectionRef = collection(dbService, "tweets")
    const _query = query( collectionRef, where("creatorId","==", userObj.uid ), orderBy("createdAt", "desc"));  //need to setup at the firestore
    const querySnapshot = await getDocs(_query);
    querySnapshot.forEach( doc => {
      setData(  [...data, doc.data()] )     
    });
  }

  useEffect(()=>{
    getMyTweets();
    console.log(data)
  }, [userObj]);

  return (
    <ProfilePage>
      <ProfileHeader>
        { isEditing ? (
          <>
            <Avatar src={gravatar.url(userObj.displayName, { s: '100px', d: 'retro' })} alt={userObj.displayName} />

            <EditForm onSubmit={onSubmitHandler}>
              <EditInput type='text' value={newDisplayName} onChange={onChangeHandler} />
              <EditButton>Edit</EditButton>
            </EditForm>
            <EditCancelButton onClick={toggleUpdateProfile}>Cancel</EditCancelButton>
          </>
        ) : (
        <>
          <Avatar src={gravatar.url(userObj.displayName, { s: '100px', d: 'retro' })} alt={userObj.displayName} />
          <UserName>@{userObj.displayName}</UserName>
          <EditProfile onClick={toggleUpdateProfile}>Edit Profile</EditProfile>
        </>

        )}
      </ProfileHeader>
      <LogOutButton onClick={onClickLogoutBtn}>Log Out</LogOutButton>
      <div>
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
      </div>
    </ProfilePage>
  )
})

export default Profile;