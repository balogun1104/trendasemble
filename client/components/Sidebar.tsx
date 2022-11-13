import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SidebarRow from "./SidebarRow";
import { useState } from "react";
import style from "../styles/home.module.css";

const Sidebar = () => {
  const [change, setChange] = useState("1");

  const click = (e: any) => {
    setChange(e.target.id);
  };

  return (
    <div className={style.shayo}>
      <div className="flex flex-col">
        <img
          className="h-10 w-10 m-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdXudoh9rK6D215xEIfNqHXOBAgEs4rOZkQ&usqp=CAU"
          alt="logo"
        />
        <div
          id="1"
          className={change === "1" ? style.on : style.off}
          onClick={click}
        >
          <SidebarRow Icon={AiOutlineInstagram} title="Instagram Trends" />
        </div>
        <div
          id="2"
          onClick={click}
          className={change === "2" ? style.on : style.off}
        >
          <SidebarRow Icon={AiOutlineTwitter} title="Twitter Trends" />
        </div>
        <div
          id="3"
          onClick={click}
          className={change === "3" ? style.on : style.off}
        >
          <SidebarRow Icon={FaTiktok} title="TickTok Trends" />
        </div>
        <div
          id="4"
          onClick={click}
          className={change === "4" ? style.on : style.off}
        >
          <SidebarRow Icon={FcGoogle} title="Google Most Searched" />
        </div>
      </div>

      <div>
        {change === "2" ? (
          <div>
            <h1 className={style.h1}>THis is twitter</h1>
          </div>
        ) : change === "3" ? (
          <div>
            <h1 className={style.h1}>THis is tiktok</h1>
          </div>
        ) : change === "4" ? (
          <div>
            <h1>THi is Google</h1>
          </div>
        ) : (
          <div>
            <h1 className={style.h1}>THis is instagram</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
