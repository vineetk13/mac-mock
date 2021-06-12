import { Wrapper, Item } from "./contextMenu.styles";

const ContextMenu = (props) => {
    const { onCreateFolder, onDeleteFolder, selectedFolder } = props;
    return (
        <Wrapper style={{
            display:props.open?"block":"none",
            top:`calc(${props.y} - 65px)`,
            left:`calc(${props.x} - 20vw)`
        }}>
            <Item onClick={onCreateFolder}>Create folder</Item>
            {selectedFolder ? <Item onClick={onDeleteFolder}>Delete folder</Item> : null}
        </Wrapper>
    )
}

export default ContextMenu;