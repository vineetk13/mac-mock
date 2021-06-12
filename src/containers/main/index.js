import { useState } from 'react';

import Folder from '../../components/folder';
import ContextMenu from '../../components/context menu';

import { Container } from './main.styles';

const MainContainer = (props) => {
    const [count, setCount] = useState([{id:0},{id:1},{id:2}]);
    const [selectFolder, setSelectFolder] = useState("");
    const [xpos, setXpos] = useState("0px");
    const [ypos, setYpos] = useState("0px");
    const [openContextMenu, setOpenContextMenu] = useState(false);
    const onCreateFolder = () => {
        setCount([...count,{id:count.length}]);
    }
    const onDeleteFolder = (e) => {
        // console.log(e.target);
        setCount([...count.filter((f) => f.id!==Number(selectFolder))]);
    }
    const handleContextMenu = (e) => {
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.target.parentNode.getAttribute("id"));
        if(e.target.getAttribute("id")!==null || e.target.parentNode.getAttribute("id")!==null){
            setSelectFolder(e.target.getAttribute("id") || e.target.parentNode.getAttribute("id"));
        }
        // setCount(count+1);
        setXpos(`${e.pageX}px`);
        setYpos(`${e.pageY}px`);
        setOpenContextMenu(true);
    }
    const handleClick = () => {
        setOpenContextMenu(false);
    }
    const onDragStart = (e,id) => {
        e.dataTransfer.setData("id",id);
    }
    const onDrop = (e) => {
        console.log(e);
        e.preventDefault();
        var data = e.dataTransfer.getData("id");
        let reqNode = document.getElementById(data);
        reqNode.style.position = "absolute";
        reqNode.style.top = (e.pageY - 70)+"px";
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        reqNode.style.left = (e.pageX - 20*vw/100)+"px";

        // e.target.appendChild(reqNode);
    }
    return (
        <Container onClick={handleClick} onDragOver={(e) => e.preventDefault()} onDrop={onDrop} onContextMenu={handleContextMenu}>
            {count.map((f) => <Folder key={f.id} id={f.id} onDragStart={(e) => onDragStart(e,f.id)} />) }
            <ContextMenu x={xpos} y={ypos} open={openContextMenu} onCreateFolder={onCreateFolder} onDeleteFolder={onDeleteFolder} />
        </Container>
    )
}

export default MainContainer;