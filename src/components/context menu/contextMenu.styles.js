import styled from 'styled-components';

export const Wrapper = styled.ul`
    list-style-type:none;
    margin:0;
    padding:0;
    padding:5px 0px;
    font-size:14px;
    border:1px solid grey;
    border-radius:4px;
    position:absolute;
    color:white;
    background-color:#212124;
    &>li:hover{
        background-color:#161618;
    }
`;
export const Item = styled.li`
    padding:5px 10px;
    width:130px;
    cursor:pointer;
    // &:hover{
    //     opacity:0.7;
    //     color:white;
    // }
`;