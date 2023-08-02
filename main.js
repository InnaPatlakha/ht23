/* Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися.
Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep();