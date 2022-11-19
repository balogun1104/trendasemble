import style from "../styles/trend.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'

interface PTypes {
  infos: any;
}

const InstaTrend: React.FC<PTypes> = ({ infos }) => {
  // console.log(infos.title)

  return (
    <>
    <div className={style.trendWrapper}>
        <div className={style.trendHead}>
          <p>Instagram Trend Worldwide</p>
        </div>
       <div className={style.trendData}>
       { infos.map((info: any) => (
         <>
         <div className={style.trendDataContent}>
          <div className="container">
         <div className="row">
         {/* NoSection */}
         <section className="col-1">
         <div className={style.number_section}>
         <p className={style.ns_num}>{info.id}</p>
         </div>
          </section>
         {/* COntentSection */}
         <section className="col-10">
          <div className={style.content_Section_Wrapper}>
          <div className={style.contentSection}>
            
           <p className={style.cs_title}>{info.title} </p>
           <p className={style.cs_body}>  {info.body} </p>
          </div>
          </div>
          </section>

          {/* PlaySection  */}
          <section className="col-1">
            <div className={style.play_sec}  >
            <img src="https://yt3.ggpht.com/FkvaknHAWVtUQTqAPKWhJ0n-eAS795cuWbYGHbK04DImaRhEiU-49RPOLcl0Gb17EaGa4ICN=s88-c-k-c0x00ffffff-no-rj"  className={style.play_sec_img}/>
            </div>
          </section>
         </div>
         </div>
         </div>
         </>
       ))
        }
       </div>
    </div>
    </>
  );
};
export default InstaTrend;
