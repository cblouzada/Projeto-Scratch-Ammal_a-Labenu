/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ator1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./Ator1/costumes/fantasia1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("fantasia2", "./Ator1/costumes/fantasia2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Miau", "./Ator1/sounds/Miau.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];
  }

  *whenKeyUpArrowPressed() {
    this.y += 20;
  }

  *whenKeyDownArrowPressed() {
    this.y += -20;
  }

  *whenKeyLeftArrowPressed() {
    this.x += -20;
  }

  *whenKeyRightArrowPressed() {
    this.x += 20;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.pontos = 0;
    this.stage.vars.tempo = 30;
    while (true) {
      yield* this.wait(1);
      this.stage.vars.tempo += -1;
      if (this.stage.vars.tempo == 0) {
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.pontos = 0;
    while (true) {
      if (this.touching(this.sprites["Ball"].andClones())) {
        this.stage.vars.pontos += 1;
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.pontos = 0;
    while (true) {
      if (this.touching(this.sprites["Ball2"].andClones())) {
        this.stage.vars.pontos += 1;
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.pontos = 0;
    while (true) {
      if (this.touching(this.sprites["Ball3"].andClones())) {
        this.stage.vars.pontos += 1;
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.stage.vars.pontos = 0;
    while (true) {
      if (this.touching(this.sprites["Ball4"].andClones())) {
        this.stage.vars.pontos += 1;
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenKeySpacePressed() {
    this.goto(-156, -107);
  }
}
