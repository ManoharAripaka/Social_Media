import "./profile.css"
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Profile(){
    return (
        <>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="/assets/post/3.jpeg" alt=""/>
                            <img className="profileUserImg" src="/assets/pp.jpg" alt=""/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Manohar Aripaka</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                        </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}