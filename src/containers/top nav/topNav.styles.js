import styled from 'styled-components';

export const Container = styled.div`
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    // border:1px solid white;
`;

export const Section = styled.div`
    // border:1px solid white;
    width:50%;
    display:flex;
    align-items:center;
`;
export const OtherIcons = styled.div`
    // border:1px solid white;
    width:150px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const ArrowBtn = styled.button`
    border:none;
    background-color:transparent;
    width:auto;
    cursor:pointer;
`;

export const NavLabel = styled.p`
    margin:0;
    padding:0;
    display:inline-block;
    font-weight:500;
    font-size:16px;
    color:#ffffff;
    margin-left:25px;
`;