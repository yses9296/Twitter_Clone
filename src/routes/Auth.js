import React, { memo } from 'react'
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "@firebase/auth";
import AuthForm from 'components/AuthForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { LogPage, LogContainer, SocialLogBtn } from './style'

const Auth = memo(() => {

  const auth = getAuth();
  const onSocialClick = async (e) => {
    const { target: {name} } = e;
    let provider;
    if(name === 'google'){
      provider = new GoogleAuthProvider();
    }
    else if(name === 'github'){
      provider = new GithubAuthProvider();
    }

    await signInWithPopup(auth, provider)
  }

  return (
    <LogPage>
      <LogContainer>

        <FontAwesomeIcon
          icon={faTwitter}
          color={"#04AAFF"}
          size="3x"
          style={{ marginBottom: 30 }}
        />

      <AuthForm auth={auth}/>

      <div>
        <SocialLogBtn name="google" onClick={onSocialClick}>
          Continue with Google <FontAwesomeIcon icon={faGoogle} style={{ marginLeft: 10 }}/>
        </SocialLogBtn>
        <SocialLogBtn name="github" onClick={onSocialClick}>
          Continue with Github <FontAwesomeIcon icon={faGithub} style={{ marginLeft: 10 }}/>
        </SocialLogBtn>
      </div>
      </LogContainer>
    </LogPage>
  )
})

export default Auth;