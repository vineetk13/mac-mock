import { useState } from 'react';

import SidemenuContainer from "../containers/side menu";
import TopNav from "../containers/top nav";
import MainContainer from '../containers/main';

export const createFolder = (folders,topstack) => {
    let newFolder = null;
    if(folders.length>0){
        newFolder = {
            id:folders[folders.length-1].id+1,
            name:`Folder ${folders[folders.length-1].id+2}`,
            parent:topstack
        } 
    }
    else{
        newFolder = {
            id:0,
            name:"Folder 1",
            parent:topstack
        }
    }   
    return [...folders,newFolder];
}

export const deleteFolder = (selectFolder, folders) => {
    // Filter the respective folder from the folder list
    const folderToBeDeleted = folders.find((f) => f.id===Number(selectFolder));
    const filteredList = folders.filter((f) => f.id!==Number(selectFolder));
    let newList;

    // If it was duplicated, remove from original duplicates list too
    if(folderToBeDeleted.duplicateOf>=0){
        newList = filteredList.map((f) => {
            if(f.id===folderToBeDeleted.duplicateOf){
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
    
    return [...newList];
}

export const duplicateFolder = (selectFolder, folders) => {
    // Read the folder details to duplicate
    const toDuplicate = folders.find((f) => f.id===Number(selectFolder));

    // Create the duplicate folder object
    const newFolder = {
        id:folders[folders.length-1].id+1,
        name:`${toDuplicate.name} (${toDuplicate.duplicates ? toDuplicate.duplicates.length+1 : 1})`,
        duplicateOf:toDuplicate.id, // Specify which folder is duplicated
        parent:toDuplicate.parent
    }

    // Update the list by specifying the list of duplicates to the corresponding folder 
    const newList = folders.map((f) => {
        if(toDuplicate.id===f.id){
            return {
                ...f,
                duplicates:f.duplicates ? [...f.duplicates,newFolder] : [newFolder]
            }
        }
        return f;
    })
    return [...newList,newFolder];
}


const MacLayout = (props) => {
    const [folders, setFolders] = useState([]);
    const [navName, setNavName] = useState("Music");
    const [parentStack, setParentStack] = useState([-1])

    const [topstack, setTopstack] = useState(-1);

    const onCreateFolder = () => {
        setFolders([...createFolder(folders, topstack)]);
    }

    const onDeleteFolder = (selectFolder) => {
        setFolders([...deleteFolder(selectFolder, folders)]);
    }

    const onDuplicateFolder = (selectFolder) => {
        setFolders([...duplicateFolder(selectFolder, folders)]);
    }

    const onDoubleClickFolder = (e,id) => {
        // push the current id to the parent stack
        setParentStack([...parentStack,id]);

        // Set the top of stack
        setTopstack(id);
        setNavName(folders.find((f) => f.id===id)?.name ?? "Music");
    }

    const onRenameFolder = (value,id) => {
        // Use the respective input value to update the corresponding name in the list
        const updated = folders.map((f) => {
            if(f.id===id){
                return {
                    ...f,
                    name:value
                }
            }
            return f;
        })
        setFolders([...updated]);
    }

    const onFolderDrop = (dragFolderId, dropFolderId) => {
        // Use the dropFolderId to set the parent of the dragged folder
        const newList = folders.map((f) => {
            if(f.id===dragFolderId){
                return {
                    ...f,
                    parent:dropFolderId
                }
            }
            return f;
        });
        setFolders([...newList]);
    }
    const handleNavBack = () => {
        // Check if the user is not at the root folder(with parent -1) and pop the top stack element
        if(parentStack.length>1){
            const newList = parentStack;
            newList.pop();

            // set the new parent stack
            setParentStack([...newList]);

            // set the top of parent stack
            setTopstack(newList[newList.length-1]);

            // set the respective name of the parent folder
            setNavName(folders.find((f) => f.id===newList[newList.length-1])?.name ?? "Music");
        }
    }

    return (
        <div style={{display:"flex"}}>
            <SidemenuContainer />
            <div style={{backgroundColor:"#161618",flex:1,boxSizing:"border-box"}}>
                <TopNav name={navName} handleNavBack={handleNavBack} />
                <MainContainer
                    createFolder={onCreateFolder}
                    deleteFolder={onDeleteFolder}
                    duplicateFolder={onDuplicateFolder}
                    renameFolder={onRenameFolder}
                    moveFolder={onFolderDrop}
                    exploreFolder={onDoubleClickFolder}
                    folders={[...folders.filter((f) => f.parent===topstack)]}
                />
            </div>
        </div>
    )
}

export default MacLayout;