import AirDrop from '../../assets/airdrop.svg';
import Apps from '../../assets/apps.svg';
import Recent from '../../assets/recent.svg';
import Music from '../../assets/music.svg';
import Cloud from '../../assets/cloud.svg';
import File from '../../assets/file.svg';

import { Container, PanelBtn, CategorySection, CategoryHeading, CategoryItem, ItemName } from './sideMenu.styles';

const SidemenuContainer = () => {
    return (
        <Container>
            <div>
                <PanelBtn $type="close"></PanelBtn>
                <PanelBtn $type="resize"></PanelBtn>
                <PanelBtn $type="minimize"></PanelBtn>
            </div>
            <CategorySection>
                <CategoryHeading>Favourites</CategoryHeading>
                <CategoryItem>
                    <img src={AirDrop} />
                    <ItemName>AirDrop</ItemName>
                </CategoryItem>
                <CategoryItem>
                    <img src={Recent} />
                    <ItemName>Recents</ItemName>
                </CategoryItem>
                <CategoryItem>
                    <img src={Apps} />
                    <ItemName>Applications</ItemName>
                </CategoryItem>
                <CategoryItem>
                    <img src={Music} />
                    <ItemName>Music</ItemName>
                </CategoryItem>
            </CategorySection>
            <CategorySection>
                <CategoryHeading>iCloud</CategoryHeading>
                <CategoryItem>
                    <img src={Cloud} />
                    <ItemName>iCloud Drive</ItemName>
                </CategoryItem>
                <CategoryItem>
                    <img src={File} />
                    <ItemName>Documents</ItemName>
                </CategoryItem>
                <CategoryItem>
                    <img src={Apps} />
                    <ItemName>Applications</ItemName>
                </CategoryItem>
            </CategorySection>
        </Container>
    )
}

export default SidemenuContainer;