import { dbService, storageService } from 'fBase';
import React, { memo, useState } from 'react';
import gravatar from 'gravatar';
import { TweetSide, TweetHeader, TweetUser, TweetDate, TweetList, TweetContent, TweetBtns, TweetBtn, TweetAvatar, TextInput, ButtonInput } from './style';
import { doc, deleteDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { ref, deleteObject } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Tweet = memo(({ tweetObj, isOwner }) => {
    const TweetTextRef = doc(dbService, "tweets", `${tweetObj.id}`);
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(tweetObj.text);
    const [date, setDate] = useState('');
  
    const removeTweet = async () => {
        const confirmMsg = window.confirm("Are you sure you want to delete this tweet?");
        if(confirmMsg){
            //delete tweet from database
            await deleteDoc(TweetTextRef);
            if(tweetObj.attachmentUrl !== ''){
                await deleteObject(ref(storageService, tweetObj.attachmentUrl));
            }
        }
    }
    const updateTweet = async (e) => {
        e.preventDefault();
        await updateDoc(TweetTextRef, {text: newText, }); //createdAt: serverTimestamp()
        setIsEditing(false);
    }
    const toggleUpdateTweet = () => {
        setIsEditing( prev => !prev )
    }
    const onChangeHandler = (e) => {
        setNewText(e.target.value)
    }

    const dateFormat = (createdAt) => {
        const time = new Date(createdAt.seconds*1000)
        const formattedDate = time.toLocaleDateString("en-US");
        const formattedTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const newDate = `${formattedDate} ·  ${formattedTime}`;
        return (<span>{newDate}</span>)
    }

    return (
        <>
        { isEditing ? (
            <>
            <TweetList key={tweetObj.id}>
                <TweetSide>
                    <TweetAvatar src={gravatar.url(tweetObj.userName, { s: '40px', d: 'retro' })} alt={tweetObj.userName} />
                </TweetSide>
                <TweetContent>
                    <TweetHeader>
                        <TweetUser>{tweetObj.userName}</TweetUser>
                    </TweetHeader>
                    <form onSubmit={updateTweet} style={{ marginBottom: '10px'}}>
                        <TextInput type="text" value={newText} required onChange={onChangeHandler}/>
                        <ButtonInput type="submit" value="Update"/>
                    </form>
                    <TweetBtn onClick={toggleUpdateTweet}>Cancel</TweetBtn>
                </TweetContent>
            </TweetList>
            </>
        ) : (
            <>
            <TweetList key={tweetObj.id}>
                <TweetSide>
                    <TweetAvatar src={gravatar.url(tweetObj.userName, { s: '40px', d: 'retro' })} alt={tweetObj.userName} />
                </TweetSide>
                
                <TweetContent>
                    <TweetHeader>
                        <TweetUser>{tweetObj.userName}</TweetUser>
                        {/* <TweetDate>{dateFormat(tweetObj.createdAt)}</TweetDate> */}
                    </TweetHeader>

                    {tweetObj.text}
                    {tweetObj.attachmentUrl && (
                        <img src={tweetObj.attachmentUrl} width="200px" height='200px' alt={tweetObj.fileName}/>
                    )}

                    {isOwner && (
                        <TweetBtns>
                            <TweetBtn onClick={removeTweet}><FontAwesomeIcon icon={faTrash} /></TweetBtn>
                            <TweetBtn onClick={toggleUpdateTweet}><FontAwesomeIcon icon={faPencilAlt} /></TweetBtn>
                        </TweetBtns>
                    )}
                </TweetContent>
            </TweetList>
            </>
        ) }
            
        </>
    )
})

export default Tweet;