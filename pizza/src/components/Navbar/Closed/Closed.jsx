import React from "react";
import closed from "./Closed.module.css";
import SamplePizza from "../../SamplePizza/SamplePizza";
function Closed() {
  return (
    <div className={closed.container}>
      <h1 className={closed.title}>Закрытая</h1>
      <div className={closed.wrapper}>
        <div className={closed.blok1}>
          <SamplePizza />
        </div>
        <div className={closed.blok2}>
          <SamplePizza />
        </div>
        <div className={closed.blok3}>
          <SamplePizza />
        </div>
        <div className={closed.blok4}>
          <SamplePizza />
        </div>
        <div className={closed.blok5}>
          <SamplePizza />
        </div>
        <div className={closed.blok6}>
          <SamplePizza />
        </div>
        <div className={closed.blok7}>
          <SamplePizza />
        </div>
        <div className={closed.blok8}>
          <SamplePizza />
        </div>
      </div>
    </div>
  );
}

export default Closed;
