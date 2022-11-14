import { FC } from 'react'
import style from '../styles/nav.module.css'

const SideNav: FC  = (props):JSX.Element => {
  return (
    <div className={style.side}>
         <ul>
        <li>#Instagram Trends</li>
        <li>#Twitter Trends</li>
        <li>#Tiktok Trends</li>
        <li>#Google Search Trends</li>
      </ul>
    </div>
  )
}

export default SideNav