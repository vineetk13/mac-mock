import SidemenuContainer from "../containers/side menu";
import TopNav from "../containers/top nav";
import MainContainer from '../containers/main';

const MacLayout = (props) => {
    return (
        <div style={{display:"flex"}}>
            <SidemenuContainer />
            <div style={{backgroundColor:"#161618",flex:1,boxSizing:"border-box"}}>
                <TopNav />
                <MainContainer />
            </div>
        </div>
    )
}

export default MacLayout;