import { Wrapper, Item } from "./contextMenu.styles";

const ContextMenu = (props) => {
    return (
        <Wrapper style={{
            display:props.open?"block":"none",
            top:`calc(${props.y} - 65px)`,
            left:`calc(${props.x} - 20vw)`
        }}>
            <Item onClick={props.onCreateFolder}>Create folder</Item>
            <Item onClick={props.onDeleteFolder}>Delete folder</Item>
        </Wrapper>
    )
}

export default ContextMenu;