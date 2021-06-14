import FolderImg from '../../assets/folder.svg';

import { Container, FolderName,Img } from './folder.styles';

const Folder = (props) => {
   
    const handleChange = (value) => {
        props.onRenameFolder(value, props.id);
    }
    return (
        <Container onDoubleClick={props.onDoubleClick} onDragLeave={props.onDragLeave} onDragOver={props.onDragOver} onDrop={props.onDrop} id={props.id} onDragStart={props.onDragStart} draggable="true">
            <Img draggable="false" src={FolderImg} />
            <FolderName onChange={e => handleChange(e.target.value)} value={props.name} type="text" />
        </Container>
    )
}

export default Folder;