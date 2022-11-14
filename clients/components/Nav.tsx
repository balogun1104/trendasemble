import style from "../styles/nav.module.css";
import { BsSearch } from "react-icons/bs";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.top}>
        <div className={style.logo}>
          <label>GetHotTrends</label>
          <p>Trending</p>
          <p>Top</p>
          <p>Help</p>
        </div>

        <div className={style.search}>
          <input type="text" placeholder="search"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
