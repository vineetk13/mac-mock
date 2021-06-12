import FolderImg from '../../assets/folder.svg';

import { Container, FolderName } from './folder.styles';

const Folder = (props) => {
    return (
        <Container id={props.id} onDragStart={props.onDragStart} draggable="true">
            <img draggable="false" src={FolderImg} />
            <FolderName readOnly value={`Folder ${props.id+1}`} type="text" />
        </Container>
    )
}

export default Folder;