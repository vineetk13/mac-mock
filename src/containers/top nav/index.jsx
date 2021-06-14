import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';
import Search from '../../assets/search.svg';
import Dashboard from '../../assets/dashboard.svg';
import Menu from '../../assets/menu.svg';

import { Container, NavLabel, Section, ArrowBtn, OtherIcons } from './topNav.styles';

const TopNav = (props) => {
    return (
        <Container>
            <Section>
                <ArrowBtn onClick={props.handleNavBack}><img src={Left} /></ArrowBtn>&emsp;
                <ArrowBtn><img src={Right} /></ArrowBtn>
                <NavLabel>{props.name}</NavLabel>
            </Section>
            <OtherIcons>
                <img src={Dashboard} />
                <img src={Menu} />
                <img src={Search} />
            </OtherIcons>
        </Container>
    )
}

export default TopNav;