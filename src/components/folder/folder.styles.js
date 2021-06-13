import styled from 'styled-components';

export const Container = styled.div`
    // border:1px solid grey;
    display:inline-block;
    width:70px;
    text-align:center;
    // &:hover{
    //     background-color:#818181;
    // }
`;
export const Img = styled.img`
    &:hover{
        cursor:pointer;
    }
`;
export const FolderName = styled.textarea`
    display:inline-block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    border:none;
    // border:1px solid grey;
    max-width:60px;
    padding:0;
    resize:none;
    outline:none;
    background:none;
    color:#ffffff;
    font-size:14px;
    text-align:center;
    overflow:hidden;
    // overflow-wrap:break-word;
    &:focus{
        border:1px solid grey;
        border-radius:4px;
    }
`;