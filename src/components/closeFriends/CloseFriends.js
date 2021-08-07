import "./closeFriends.css"

export default function CloseFirends({user}){
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture} alt=""/>
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}