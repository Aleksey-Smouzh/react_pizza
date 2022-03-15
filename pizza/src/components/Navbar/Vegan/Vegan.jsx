import React from "react";
import vegan from "./Vegan.module.css";
import SamplePizza from "../../SamplePizza/SamplePizza";
function Vegan() {
  return (
    <div className={vegan.container}>
      <h1 className={vegan.title}>Вегетарианская</h1>
      <div className={vegan.wrapper}>
        <div className={vegan.blok1}>
          <SamplePizza />
        </div>
        <div className={vegan.blok2}>
          <SamplePizza />
        </div>
        <div className={vegan.blok3}>
          <SamplePizza />
        </div>
        <div className={vegan.blok4}>
          <SamplePizza />
        </div>
        <div className={vegan.blok5}>
          <SamplePizza />
        </div>
        <div className={vegan.blok6}>
          <SamplePizza />
        </div>
        <div className={vegan.blok7}>
          <SamplePizza />
        </div>
        <div className={vegan.blok8}>
          <SamplePizza />
        </div>
      </div>
    </div>
  );
}

export default Vegan;
