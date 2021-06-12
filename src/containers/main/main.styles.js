import styled from 'styled-components';

export const Container = styled.div`
    padding:30px 45px;
    // border:1px solid white;
    height:calc(100% - 65px);
    box-sizing:border-box;
    position:relative;
    display: grid;
    // background-color: #2196F3;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(90px, 1fr));
    grid-gap: 30px;
`;