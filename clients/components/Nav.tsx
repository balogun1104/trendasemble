import style from "../styles/nav.module.css";
import { BsSearch } from "react-icons/bs";

interface PTypes {
  click: () => string;
  change: string;
}

const Nav: React.FC<PTypes> = ({ click, change }) => {
  return (
    <div className={style.nav}>
      <div className={style.top}>
        <div className={style.logo}>
          <label>GetHotTrends</label>
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
            <li
              id="5"
              className={change === "5" ? style.on : style.off}
              onClick={click}
            >
              #Trending News
            </li>
          </ul>
        </div>

        <div className={style.search}>
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
