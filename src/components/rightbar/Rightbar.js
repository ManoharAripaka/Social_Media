import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"
export default function Rightbar({profile}){
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt=""/>
                    <span className="birthdayText"><b>3 friends</b> have a birthday today</span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=><Online key={u.id} user={u}/>)}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () =>{
        return (
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Visakhapatnam</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">India</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/1.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-1</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-2</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/3.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-3</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/4.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-4</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/5.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-5</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/6.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-6</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/7.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-7</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/8.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-8</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/9.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-9</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/10.jpeg" alt=""/>
                    <span className="rightbarFollowingName">Friends-10</span>
                </div>
            </div>
            </>
        )   
    }
    return (
        <div className="rightbar">
            <div className="rightContainer">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}