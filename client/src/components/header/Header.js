import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">News</span>
        <span className="headerTitleLg">Letters</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3727271/pexels-photo-3727271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}