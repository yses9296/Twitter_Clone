import styled from "styled-components";
import { Link } from 'react-router-dom';

export const LogPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LogContainer = styled.div`
    width: 460px;
    margin: 0 auto;
    padding: 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;
export const SocialLogBtn = styled.button`
    display: block;
    width: 300px;
    height: 40px;
    padding: 8px 20px;
    margin: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    background-color: transparent;
    transition: .25s;
    &: hover {
        background-color: rgb(238 248 255);
        transition: .25s;
    }
`

export const Main = styled.div`
    width: 600px;
    min-height: 100vh;
    margin: 0 auto;
`
// Profile
export const ProfilePage = styled.div`
    width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 30px 50px;
`;
export const ProfileHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 30px;
`;
export const UserName = styled.div`
    font-size: 1.2em;
    font-weight: 700;
    margin-right: 20px;
`;
export const EditProfile = styled.button`
    display: block;
    float: right;
    font-size: 1em;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    padding: 5px 10px;
    cursor: pointer;
    transition: .25s;
    &: hover {
        transition: .25s;
        background-color: #dddddd;
    }
`;

export const EditForm = styled.form ``
export const EditInput = styled.input `
    display: inline-block;
    background-color: transparent;
    border: none;
    border: 2px solid #e2e2e2;
    outline: none;
    padding: 10px 8px;
    margin-right: 20px;
    &: focus {
        border: 2px solid rgb(29, 155, 240);
    }
`
export const EditButton = styled.button `
    width: 100px;
    height: 30px;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    margin-right: 10px;
`
export const EditCancelButton = styled.button `
    width: 100px;
    height: 30px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
`

export const LogOutButton = styled.button`
    display: block;
    width: 50%;
    background-color: #000;
    color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px 0;
    cursor: pointer;
    transition: .25s;
    &: hover {
        transition: .25s;
        background-color: #333;
    }
`