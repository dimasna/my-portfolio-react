import React from "react";
import AchievementCard from "./achievementCard";
import data from "../data/data";
import "./style.scss";


class Achievements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataAchievements: data.properties,
      dataAchievement: data.properties[0]
    };
  }
  render() {
    return (
      <section className="section adaptiveSection">
        <div className="columns" style={{ justifyContent: `flex-start` }}>
          <div className=" column is-narrow" style={{ paddingLeft: `2em` }}>
            <p className="adaptiveText">Achievements</p>
          </div>
          <div className="column bgAchievements">
            <div
              className="container"
              style={{ backgroundColor: `$secondary-color`, height: `300px` }}
            />{
            this.state.dataAchievements.map(dataAchievement =>
				<AchievementCard
                key={dataAchievement.index}
                dataAchievement={dataAchievement}
                />
			)
			}
          </div>
        </div>
      </section>
    );
  }
}

export default Achievements;
