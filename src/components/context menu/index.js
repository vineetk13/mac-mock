import { Wrapper, Item } from "./contextMenu.styles";

const ContextMenu = (props) => {
    const { onCreateFolder, onDeleteFolder, onDuplicateFolder, selectedFolder } = props;
    return (
        <Wrapper style={{
            display:props.open?"block":"none",
            top:`calc(${props.y} - 65px)`,
            left:`calc(${props.x} - 20vw)`
        }}>
            {!selectedFolder ? <Item onClick={onCreateFolder}>Create folder</Item> : null}
            {selectedFolder ? <Item onClick={onDuplicateFolder}>Duplicate folder</Item> : null}
            {selectedFolder ? <Item onClick={onDeleteFolder}>Delete folder</Item> : null}
        </Wrapper>
    )
}

export default ContextMenu;