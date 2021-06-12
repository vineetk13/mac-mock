import { useState, useRef } from 'react';

import FolderImg from '../../assets/folder.svg';

import { Container, FolderName,Img } from './folder.styles';

const Folder = (props) => {
    // const [name, setName] = useState(props.name);
    // const inputRef = useRef(null);
    // const handleInputClick = () => {
    //     // inputRef.current.readOnly=false;
    //     console.log(inputRef.current);
    // }
    const handleChange = (value) => {
        props.onRenameFolder(value, props.id);
    }
    return (
        <Container id={props.id} onDragStart={props.onDragStart} draggable="true">
            <Img draggable="false" src={FolderImg} />
            <FolderName onChange={e => handleChange(e.target.value)} value={props.name} type="text" />
        </Container>
    )
}

export default Folder;