import React, { memo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from 'fBase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { TweetBoxForm, TweetFormHeader, TweetInput, TweetButton, AttachFileLabel, AttachFileInput, AttachmentContainer, AttachmentImg, AttachmentClear } from './style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const TweetBox = memo(( {userObj} ) => {
    const [tweet, setTweet] = useState('');
    const [attachment, setAttachment] = useState('');
    const [fileName, setFileName] = useState('');
    const fileInput = useRef();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        let attachmentUrl = '';
    
        if (attachment !== ""){
          const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
          const response = await uploadString(attachmentRef, attachment, "data_url");
          attachmentUrl = await getDownloadURL(response.ref);
        }
    
        const _tweetObj = {
          text: tweet, 
          createdAt: serverTimestamp(),
          creatorId: userObj.uid,
          userName: userObj.displayName,
          userAvatar: userObj.PhotoUrl | null,
          attachmentName: fileName | null, 
          attachmentUrl,
        }
        await addDoc(collection(dbService,"tweets"), _tweetObj);
    
        setTweet('');
        setAttachment('');
        fileInput.current.value = '';
    }

    const onChangeHandler = (e) => {
        setTweet(e.target.value)
    }
    
    const onFileChange = (e) => {
        const {
            target: {files}
        } = e
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setAttachment(result)
        }
        reader.readAsDataURL(theFile) 
        setFileName(theFile.name);
    }

    const onClearAttachment = () => {
        setAttachment('');
        fileInput.current.value = '';
    }
    return (
        <>
        <TweetBoxForm onSubmit={onSubmitHandler}>
            <TweetFormHeader>
            <TweetInput 
                type="text" 
                placeholder="What's on your mind?" 
                // required
                maxLength={120} 
                value={tweet} 
                onChange={onChangeHandler}
            />
            <TweetButton>Tweet</TweetButton>
            </TweetFormHeader>

            <AttachFileLabel htmlFor="attach-file">
                <span>Add photos</span>
                <FontAwesomeIcon icon={faPlus} />
            </AttachFileLabel>
            <AttachFileInput 
                id="attach-file"
                type="file" 
                accept='image/*' 
                onChange={onFileChange} 
                ref={fileInput}
            />

            { attachment && (
            <AttachmentContainer>
                <AttachmentImg src={attachment} alt={fileName}/>
                <AttachmentClear onClick={onClearAttachment}>Clear <FontAwesomeIcon icon={faTimes} /></AttachmentClear>
            </AttachmentContainer>
            )  }

        </TweetBoxForm>
        </>
    )
})

export default TweetBox