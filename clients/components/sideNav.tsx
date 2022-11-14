import style from '../styles/nav.module.css'

interface PTypes {
  click:() => string;
  change: string;
}

const SideNav: React.FC<PTypes> = ({ click, change }) => {
  return (
    <div className={style.side}>
      <ul>
        <li
          id="1"
          className={change === "1" ? style.on : style.off}
          onClick={click}
        >
          #Instagram Trends
        </li>
        <li
          id="2"
          className={change === "2" ? style.on : style.off}
          onClick={click}
        >
          #Twitter Trends
        </li>
        <li
          id="3"
          className={change === "3" ? style.on : style.off}
          onClick={click}
        >
          #Tiktok Trends
        </li>
        <li
          id="4"
          className={change === "4" ? style.on : style.off}
          onClick={click}
        >
          #Google Search Trends
        </li>
      </ul>
    </div>
  );
};

export default SideNav