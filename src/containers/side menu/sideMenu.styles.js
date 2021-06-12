import styled from 'styled-components';

export const Container = styled.div`
    background-color:#212124;
    height:100vh;
    width:20vw;
    padding:20px;
    box-sizing:border-box;
`;
export const PanelBtn = styled.button`
    border:none;
    border-radius:50%;
    height:12px;
    width:12px;
    background-color:${props => {
        if(props.$type==="close") return "#F12B43";
        else if(props.$type==="resize") return "#FFD613";
        else return "#06A561";
    }};
    margin-right:7px;
    cursor:pointer;
`;
export const CategorySection = styled.div`
    margin:20px 0;
`;
export const CategoryHeading = styled.p`
    margin:0;
    padding:0;
    font-size:14px;
    color:#818181;
    font-weight:500;
`;
export const CategoryItem = styled.div`
    // border:1px solid white;
    display:flex;
    align-items:flex-end;
    padding:5px 0;
    border-radius:4px;
    &:hover{
        background-color:#818181;
        cursor:pointer;
        padding:5px -5px;
        // opacity:.5;
    }
`;
export const ItemName = styled.p`
    margin:0;
    padding:0;
    font-size:16px;
    color:#ffffff;
    display:inline-block;
    margin-left:8px;
`;