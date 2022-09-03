/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Ball3/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-b", "./Ball3/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Ball3/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball3/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Ball3/costumes/ball-e.svg", { x: 22, y: 22 })
    ];

    this.sounds = [
      new Sound("Boing", "./Ball3/sounds/Boing.wav"),
      new Sound("Pop", "./Ball3/sounds/Pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];

    this.vars.atorGato3 = [];
  }

  *whenGreenFlagClicked() {
    for (let i = 0; i < 100; i++) {
      yield* this.glide(1, this.random(-240, 240), this.random(-180, 180));
      yield;
    }
    while (!(this.stage.vars.tempo == 0 || this.stage.vars.pontos == 10)) {
      /* TODO: Implement stop all */ null;
      yield;
    }
    this.goto(203, -140);
  }

  *whenKeySpacePressed() {
    this.goto(198, 51);
    /* TODO: Implement stop all */ null;
  }
}
