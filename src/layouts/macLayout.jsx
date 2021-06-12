import SidemenuContainer from "../containers/side menu";
import TopNav from "../containers/top nav";

const MacLayout = (props) => {
    return (
        <div style={{display:"flex"}}>
            <SidemenuContainer />
            <div style={{backgroundColor:"#161618",flex:1}}>
                <TopNav />
            </div>
        </div>
    )
}

export default MacLayout;