import style from "../styles/nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

interface PTypes {
  click: () => string;
  change: string;
}

const Nav: React.FC<PTypes> = ({ click, change }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  // const doubleFunc = () => {
  //   setOpen(false)

  // }

  return (
    <div className={style.nav}>
      <div className={style.top}>
        <div className={style.logo}>
          <label>GetHotTrends</label>
          <div className={`${open ? style.conActive : style.ulCon}`}>
            <ul className={`${open ? style.active : null}`}>
              <li
                id="1"
                className={change === "1" ? style.on : style.off}
                onClick={click}
              >
                <img src="/instagram.svg" alt="" className={style.svgs} />
                Trends
              </li>
              <li
                id="2"
                className={change === "2" ? style.on : style.off}
                onClick={click}
              >
                <img src="/twitter.svg" alt="" className={style.svgs} />
                Trends
              </li>
              <li
                id="3"
                className={change === "3" ? style.on : style.off}
                onClick={click}
              >
                <img src="/tiktok.svg" alt="" className={style.svgs} />
                Trends
              </li>
              <li
                id="4"
                className={change === "4" ? style.on : style.off}
                onClick={click}
              >
                <img src="/google.png" alt="" className={style.svgs} />
                Search Trends
              </li>
              <li
                id="5"
                className={change === "5" ? style.on : style.off}
                onClick={click}
              >
                #Trending News
              </li>
              <div className={style.search1}>
                <input type="text" placeholder="search" />
              </div>
            </ul>
          </div>
        </div>

        <div className={style.left}>
          <div className={style.search}>
            <input type="text" placeholder="search" />
          </div>
          <RxHamburgerMenu className={style.icon} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
