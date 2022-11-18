import style from "../styles/trend.module.css";
import data from "../components/data/Data";

const insta: any = Array.isArray(data());
console.log(insta)

export function InstaTrend() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <h2>
          Instagram Top <span>Trends</span>
        </h2>
      </div>
      {/* section2 */}
      <div className={style.section2}>
        <div>
          <input
            type="date"
            placeholder="Today"
            style={{ border: "none", fontSize: "26px" }}
          />
          {/* icon */}
        </div>
        <div className={style.arrow}>arrow</div>
      </div>

      {insta.map((info: any) => {
        return <div>{info.name}</div>;
      })}
    </div>
  );
}
