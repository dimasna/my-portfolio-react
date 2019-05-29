import React from "react";
import AchievementCard from "./achievementCard";
import data from "../data/data";
import "./style.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


class Achievements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataAchievements: data.properties,
      slidePosition: 0,
      index: 0,
      nextSpace: 0,
      eachSpace: 0,
      cardLeft: null,
      cardRight: null,
    };
  }
  componentDidMount(){
    
    const sizeCardWrapper = this.cardW.getBoundingClientRect().width;
    const sizeAchievementCard = 227;
    const sizeBgAchievementCard = this.bg.getBoundingClientRect().width;
    const space = sizeCardWrapper-sizeBgAchievementCard;
    const nextSpace = Math.round(space/sizeAchievementCard);
    console.log(sizeBgAchievementCard);
    console.log(nextSpace);
    this.setState({
      
      nextSpace: nextSpace,
      eachSpace: 250
    })

    if(nextSpace !== 0){
      this.setState({
        cardRight: data.properties.length-nextSpace //get index of right card side
      })
    }
    
  }
  nextSlide = event => {
    const position =
      this.state.index === this.state.nextSpace
        ? null
        : this.setState({
            slidePosition: this.state.slidePosition - this.state.eachSpace,
            index: this.state.index+1,
            cardLeft: this.state.cardLeft !== null ? this.state.cardLeft+1 : 0,
            cardRight: this.state.cardRight+1
          });
  };
  prevSlide = event => {
    const position =
      this.state.slidePosition === 0
        ? null
        : this.setState({
            slidePosition: this.state.slidePosition + this.state.eachSpace,
            index: this.state.index-1,
            cardLeft: this.state.cardLeft !== null ? this.state.cardLeft-1 : 0,
            cardRight: this.state.cardRight-1
          });
  };

  render() {
    return (
      <section className="section adaptiveSection">
        <div className="columns" style={{ justifyContent: `flex-start` }}>
          <div className=" column is-narrow" style={{ paddingLeft: `2em` }}>
            <p className="adaptiveText">Achievements</p>
          </div>
          <a
            className="column is-narrow is-hidden-mobile"
            style={{ alignSelf: `center`, zIndex: `20`, marginRight: `-4em` }}
            onClick={this.prevSlide}
          >
            <span
              className="icon socialButton"
              style={{ position: `relative` }}
            >
              <FaChevronLeft className="iconn" />
            </span>
          </a>
          <div className="column bgAchievements"
            ref={bg => { this.bg = bg } }
          >
            <div
              className="cardWrapper" 
              style={{
                  'transform': `translateX(${this.state.slidePosition}px)`
                }}
                ref={cardW => { this.cardW = cardW }}
            >
              {this.state.dataAchievements.map(dataAchievement => (
                <AchievementCard 
                  key={dataAchievement.index}
                  dataAchievement={dataAchievement} rightCard={this.state.cardRight}
                />
              ))}
            </div>
          </div>
          <a
            className="section column is-2 is-hidden-mobile"
            style={{ alignSelf: `center`, zIndex: `20`, marginLeft: `-10.3em` }}
            onClick={this.nextSlide}
          >
            <span
              className="icon socialButton"
              style={{ position: `relative` }}
            >
              <FaChevronRight className="iconn" />
            </span>
          </a>
        </div>
      </section>
    );
  }
}

export default Achievements;
