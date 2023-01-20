import React, { memo, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { LogForm, LogInput, SubmitInput, SignInUp, AuthError } from './style'

const AuthForm = memo(( {auth} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [newAccout, setNewAccount] = useState(true);
    const [error, setError] = useState('');

    const toggleAccount = () => {
      setNewAccount( prev => !prev);
      setError('');
    }
    const onChangeHandler = (e) => {
        const { target: {name, value} } = e;
    
        if(name === 'email') setEmail(value)
        else if(name === 'password') setPassword(value)
        else if(name === 'username') setUsername(value)
      
      };
      const onSubmitHandler = async (e) => {
        e.preventDefault();
    
        try{
          if(newAccout){
            // create account
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
              displayName: username,
              photoURL: 'http://placeimg.com/640/480/animals%E2%80%8B'
            })
            .then( () => {console.log('UserName updated')} )
            .catch( (err) => {console.log(err.message)} )
          }
          else{
            //login
            await signInWithEmailAndPassword(auth, email, password);
          }
        }
        catch(err){
          setError(err.message)
        }
      };
    
    return (
        <>
        <LogForm onSubmit={onSubmitHandler}>
          <LogInput 
              type="email" 
              name="email" 
              required 
              value={email} 
              onChange={onChangeHandler} 
              placeholder='Email'
          />
          <LogInput 
              type="password" 
              name="password" 
              required 
              value={password} 
              onChange={onChangeHandler} 
              placeholder='Password'
          />
          
            {newAccout ? (
            <LogInput 
                type="text" 
                name="username" 
                required 
                value={username} 
                onChange={onChangeHandler} 
                placeholder='UserName'
            />
          
            ): ''}
            <SubmitInput type="submit" value={newAccout ? "Create Arrount" : "Login"} />
            {error && <AuthError>{error}</AuthError>}
        </LogForm>
        
        <span>
            {newAccout ? "Already have an account?" : "Create new account?"}
        </span>
        <SignInUp onClick={toggleAccount}>{newAccout ? "Sign In" : "Sign Up"}</SignInUp>
        </>
    )
})

export default AuthForm