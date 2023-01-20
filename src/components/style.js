import styled from "styled-components";
import { Link } from 'react-router-dom';

// Sign In/Up Page

export const LogForm = styled.form`
    width: 300px;
    padding: 30px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
`;

export const LogInput = styled.input`   
    width: 100%;
    height: 30px;
    padding: 5px 10px;
    display: block;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    line-height: 30px;
    font-size: 1.1em;
    margin-bottom: 20px;

    &: focus {
        border: 2px solid rgb(29, 155, 240);
    }

`;
export const SubmitInput = styled.input`
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
    font-weight: 800;
    transition: .25s;

    &: hover {
        background-color: #5c5c5c;
        transition: .25s;
    }
`
export const SignInUp = styled.button`
    font-size: 1.1em;
    font-weight: 700;
    color: #5C95DA;
    margin: 10px 0;
    border: none;
    background-color: transparent;
    transition: .25s;
    cursor: pointer ;
`
export const AuthError = styled.span`
    margin-top: 10px;
    color: tomato;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
`

// Main Page

export const Menu = styled.div`
    width: 600px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export const MenuSection = styled.ul`
    width: 600px;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const MenuItem = styled.li`
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5em;
    text-align: center;
    list-style: none;

    border-radius: 50%;
    transition: .25s;
    margin-right: 30px;

    &: last-child {
        margin: 0;
    }
    &: hover {
        background-color: #dbdbdb;
        transition: .25s
    }
`;

export const LinkItem = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    text-decoration: none;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    &: hover {
        color: #e2e2e2;
    }
    
`;
export const Logo = styled(Link)`
    display: block;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// TweetBox
export const TweetBoxForm = styled.form`
    padding: 10px 0; 
    margin: 20px 0;
    border-bottom: 1px solid rgb(239, 243, 244);
`
export const TweetFormHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const TweetInput = styled.input`
    width: 80%;
    height: 40px;
    border: none;
    border-bottom: 1px solid rgb(239, 243, 244);
    background-color: transparent;
    outline: none;
    font-size: 1.2rem;
    line-height: 40px;
`;
export const AttachFileLabel = styled.label`
    display: inline-block;
    color: #04aaff;
    cursor: pointer;
    margin-top: 10px;
    height: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    > span {
        & {
            margin-right: 10px;
            font-size: 12px;
        }
    }
`
export const AttachFileInput = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
`;
export const AttachmentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`
export const AttachmentImg = styled.img`
    width: 100px;
    height: 100px;
`
export const AttachmentClear = styled.button`
    display: block;
    width: 100px;
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TweetButton = styled.button`
    width: 15%;
    height: 32px;
    background-color: rgb(29, 155, 240);;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 5px 10px;
    margin-left: 5%;
    transition: .25s;

    &: hover {
        background-color: rgb(26, 140, 216);
        transition: .25s;
    }
`;


// Tweet
export const TweetSide = styled.div`
    width: 50px;
    margin-right: 20px;
`;
export const TweetHeader = styled.div`
    display: flex;
    margin-bottom: 12px;
`;

export const TweetAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 30px;
`;
export const TweetUser = styled.strong`
    font-size: 1.1em;
    margin-right: 10px;
`;
export const TweetDate = styled.span`
    font-size: .85em;
`;
export const TweetList = styled.li`
    font-size: 1em;
    list-style: none;
    padding: 18px 0;
    border-bottom: 1px solid #dbdbdb;
    display: flex;

    &: last-child {
        border-bottom: 0;
    }
`;
export const TweetContent = styled.div`

`

export const TweetBtns = styled.div`
    display: block;
    margin-top: 15px;
`
export const TweetBtn = styled.button`
    border: 1px solid #e2e2e2;
    background-color: transparent;
    color: #000;
    border-radius: 5px;
    padding: 3px 8px;
    margin-right: 10px;
    cursor: pointer;

    transition: .25s;

    &: last-child {
        margin-right: 0;
    }

    &: hover {
        background-color: #dddddd;
        transition: .25s;
    }
`

// Footer
export const FooterSection = styled.div`
    padding: 40px 80px;
`
export const FooterElement = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;

    > li {
        & {
            margin: 0 10px;
            text-transform: capitalize;
        }
    }
`
export const FooterAddress = styled.address`
    margin-top: 20px;
    text-align: center;
`


// Default
export const Label = styled.label``
export const TextInput = styled.input`
    min-height: 24px;
    border: none;
    background-color: transparent;
    font-size: 16px;
`
export const ButtonInput = styled.input`
    background-color: transparent;
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    cursor: pointer;
`
export const Button = styled.button`
    background-color: transparent;
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    cursor: pointer;
    `