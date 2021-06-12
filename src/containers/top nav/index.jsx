import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';
import Search from '../../assets/search.svg';
import Dashboard from '../../assets/dashboard.svg';
import Menu from '../../assets/menu.svg';

import { Container, NavLabel, Section } from './topNav.styles';

const TopNav = () => {
    return (
        <Container>
            <Section>
                <img style={{marginRight:20}} src={Left} />
                <img src={Right} />
                <NavLabel>Music</NavLabel>
            </Section>
            <img src={Dashboard} />
            <img src={Menu} />
            <img src={Search} />
        </Container>
    )
}

export default TopNav;