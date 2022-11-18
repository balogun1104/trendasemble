import style from '../styles/trend.module.css'



interface PTypes {
  infos: any;

}

const InstaTrend: React.FC<PTypes> = ({infos}) => {
// console.log(infos.title)

  return (
    <div className={style.main}>
      <div className=  {style.header}>
      <h2>Instagram Top <span>Trends</span></h2>
      </div>
      {/* section2 */}
      <div className={style.section2}>
      <div>
        <input type="date"placeholder='Today' style={{'border': 'none', 'fontSize': '26px'}}/>
        {/* icon */}
      </div>
      <div className={style.arrow}>
        arrow
      </div>
      </div>
      {/* Data section */}
      <div className={style.datalist}>
        {
          infos.map((info: any) => (
            <div key={info.id}>
              <h3>{info.title}</h3>
            </div>
          ))
        } </div>
    </div>
  )}
  export default InstaTrend

