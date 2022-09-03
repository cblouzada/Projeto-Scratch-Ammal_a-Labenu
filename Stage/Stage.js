/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Bedroom 3", "./Stage/costumes/Bedroom 3.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bedroom 2", "./Stage/costumes/Bedroom 2.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("saltar", "./Stage/sounds/saltar.wav")];

    this.triggers = [];

    this.vars.minhaVariVel = 0;
    this.vars.tempo = 30;
    this.vars.pontos = 1;

    this.watchers.tempo = new Watcher({
      label: "Tempo",
      style: "normal",
      visible: true,
      value: () => this.vars.tempo,
      x: 246,
      y: 178
    });
    this.watchers.pontos = new Watcher({
      label: "Pontos",
      style: "normal",
      visible: true,
      value: () => this.vars.pontos,
      x: 360,
      y: 177
    });
  }
}
