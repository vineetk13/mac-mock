import { useState, useContext } from 'react';

import Folder from '../../components/folder';
import ContextMenu from '../../components/context menu';

import { Container } from './main.styles';



const MainContainer = (props) => {
    const [selectFolder, setSelectFolder] = useState("");
    const [xpos, setXpos] = useState("0px");
    const [ypos, setYpos] = useState("0px");
    const [openContextMenu, setOpenContextMenu] = useState(false);
    

    // Handling data and actions on right-click
    const handleContextMenu = (e) => {
        e.preventDefault();
        
        // Recording id of the folder that is right clicked upon
        if(e.target.getAttribute("id")!==null || e.target.parentNode.getAttribute("id")!==null){
            setSelectFolder(e.target.getAttribute("id") || e.target.parentNode.getAttribute("id"));
        }else{
            setSelectFolder("");
        }
       
        setXpos(`${e.pageX}px`);
        setYpos(`${e.pageY}px`);
        setOpenContextMenu(true);
    }

    // Handling click anywhere on the canvas
    const handleClick = () => {
        setOpenContextMenu(false);
    }

    // Handling drag start of folder component
    const onDragStart = (e,id) => {
        e.dataTransfer.setData("id",id);
    }

    // Handling drop on the canvas
    const onDrop = (e) => {
        e.preventDefault();
        let data = e.dataTransfer.getData("id");
        let reqNode = document.getElementById(data);
        reqNode.style.position = "absolute";
        reqNode.style.top = (e.pageY - 70)+"px";
        let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        reqNode.style.left = (e.pageX - 20*vw/100)+"px";
    }

    // Moving one folder into another
    const onFolderDrop = (e,id) => {
        e.preventDefault();

        const dropFolderId = id; 
        const dragFolderId = Number(e.dataTransfer.getData("id"));

        props.moveFolder(dragFolderId, dropFolderId);
    }

    //Styling folder component on drag over
    const onDragOverFolder = (e) => {
        e.preventDefault()
        if(e.target.getAttribute("id")!==null){
            e.target.style.backgroundColor="#818181";
        }
        else if(e.target.parentNode.getAttribute("id")!==null){
            e.target.parentNode.style.backgroundColor="#818181";
        }
    }

     //Styling folder component on drag leave
    const onDragLeaveFolder = (e) => {
        if(e.target.getAttribute("id")!==null){
            e.target.style.backgroundColor="initial";
        }
        else if(e.target.parentNode.getAttribute("id")!==null){
            e.target.parentNode.style.backgroundColor="initial";
        }
    }
   
    // console.log(topstack);
    return (
        <Container 
            onClick={handleClick} 
            onDragOver={(e) => e.preventDefault()} 
            onDrop={onDrop} 
            onContextMenu={handleContextMenu}
        >
            {props.folders.map((f) => (<Folder 
                key={f.id} 
                name={f.name} 
                id={f.id} 
                onDragStart={(e) => onDragStart(e,f.id)} 
                onRenameFolder={props.renameFolder}
                onDrop={(e) => onFolderDrop(e,f.id)}
                onDragOver={onDragOverFolder} 
                onDragLeave={onDragLeaveFolder}
                onDoubleClick={(e) => props.exploreFolder(e,f.id)}
            />)) }
            <ContextMenu 
                x={xpos} 
                selectedFolder={selectFolder} 
                y={ypos} 
                open={openContextMenu} 
                onCreateFolder={props.createFolder} 
                onDeleteFolder={() => props.deleteFolder(selectFolder)} 
                onDuplicateFolder={() => props.duplicateFolder(selectFolder)}
            />
        </Container>
    )
}

export default MainContainer;