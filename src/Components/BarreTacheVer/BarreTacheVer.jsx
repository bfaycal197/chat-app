import feed from "../../assets/feed.png";
import post from "../../assets/post.png";
import chat from "../../assets/chat.png";
import Logout from "../../assets/logout.png";
import fsociety from "../../assets/icons8fsociety50.png"
import '../../style/NavVer.css';
function BarreTacheV() {
  const items = [
    { icon: fsociety, text:'fsociety', link: '#' },
    { icon: feed, text:'feed', link: '../Pages/FeedPage' },
    { icon: post, text:'post', link: '../Pages/PostPage' },
    { icon: chat, text:'chat', link: '../Pages/ChatPage' },
    { icon: Logout , text:'Logout', link :'../Pages/LoginPage'}
  ];

  const handleItemClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="Nav-ver">
    <ul className="list-NavBarV">
      {items.map((item, index) => (
        <li className={item.text} key={index} onClick={() => handleItemClick(item.link)}>
          <img className="imaghover" src={item.icon} alt={`Icon ${index}`} />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default BarreTacheV;
