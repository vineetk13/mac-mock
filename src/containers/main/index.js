import { useState } from 'react';

import Folder from '../../components/folder';
import ContextMenu from '../../components/context menu';

import { Container } from './main.styles';

const MainContainer = (props) => {
    const [count, setCount] = useState([]);
    const [selectFolder, setSelectFolder] = useState("");
    const [xpos, setXpos] = useState("0px");
    const [ypos, setYpos] = useState("0px");
    const [openContextMenu, setOpenContextMenu] = useState(false);
    const onCreateFolder = () => {
        const newFolder = count.length>0 ? {id:count[count.length-1].id+1,name:`Folder ${count[count.length-1].id+2}`} : {id:0,name:"Folder 1"};
        setCount([...count,newFolder]);
    }
    const onDeleteFolder = (e) => {
        // console.log(e.target);
        const folderToBeDeleted = count.find((f) => f.id===Number(selectFolder));
        const filteredList = count.filter((f) => f.id!==Number(selectFolder));
        let newList;
        if(folderToBeDeleted.parent>=0){
            newList = filteredList.map((f) => {
                if(f.id===folderToBeDeleted.parent){
                    return {
                        ...f,
                        duplicates:f.duplicates.filter((d) => d.id!==folderToBeDeleted.id)
                    }
                }
                return f;
            })
        }
        else{
            newList = filteredList;
        }
        
        setCount([...newList]);
    }
    const onDuplicateFolder = (e) => {
        const toDuplicate = count.find((f) => f.id===Number(selectFolder));
        const newFolder = {
            id:count[count.length-1].id+1,
            name:`${toDuplicate.name} (${toDuplicate.duplicates ? toDuplicate.duplicates.length+1 : 1})`,
            parent:toDuplicate.id
        }
        const newList = count.map((f) => {
            if(toDuplicate.id===f.id){
                return {
                    ...f,
                    duplicates:f.duplicates ? [...f.duplicates,newFolder] : [newFolder]
                }
            }
            return f;
        })
        setCount([...newList,newFolder]);
    }
    const onRenameFolder = (value,id) => {
        const updated = count.map((f) => {
            if(f.id===id){
                return {
                    ...f,
                    name:value
                }
            }
            return f;
        })
        setCount([...updated]);
    }
    console.log(count);
    const handleContextMenu = (e) => {
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.target.parentNode.getAttribute("id"));
        if(e.target.getAttribute("id")!==null || e.target.parentNode.getAttribute("id")!==null){
            setSelectFolder(e.target.getAttribute("id") || e.target.parentNode.getAttribute("id"));
        }else{
            setSelectFolder("");
        }
       
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
        let data = e.dataTransfer.getData("id");
        let reqNode = document.getElementById(data);
        reqNode.style.position = "absolute";
        reqNode.style.top = (e.pageY - 70)+"px";
        let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        reqNode.style.left = (e.pageX - 20*vw/100)+"px";

        // e.target.appendChild(reqNode);
    }
    return (
        <Container 
            onClick={handleClick} 
            onDragOver={(e) => e.preventDefault()} 
            onDrop={onDrop} 
            onContextMenu={handleContextMenu}
        >
            {count.map((f) => (<Folder 
                key={f.id} 
                name={f.name} 
                id={f.id} 
                onDragStart={(e) => onDragStart(e,f.id)} 
                onRenameFolder={onRenameFolder}
            />)) }
            <ContextMenu 
                x={xpos} 
                selectedFolder={selectFolder} 
                y={ypos} 
                open={openContextMenu} 
                onCreateFolder={onCreateFolder} 
                onDeleteFolder={onDeleteFolder} 
                onDuplicateFolder={onDuplicateFolder}
            />
        </Container>
    )
}

export default MainContainer;