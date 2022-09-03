import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Ator1 from "./Ator1/Ator1.js";
import Ball from "./Ball/Ball.js";
import Ball2 from "./Ball2/Ball2.js";
import Ball3 from "./Ball3/Ball3.js";
import Ball4 from "./Ball4/Ball4.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Ator1: new Ator1({
    x: -108,
    y: -67,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Ball: new Ball({
    x: 199,
    y: -148,
    direction: 78.46304099017871,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 2
  }),
  Ball2: new Ball2({
    x: 196,
    y: -55,
    direction: 78.46304099017871,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 3
  }),
  Ball3: new Ball3({
    x: 198,
    y: 51,
    direction: 78.46304099017871,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 4
  }),
  Ball4: new Ball4({
    x: 195,
    y: 144,
    direction: 78.46304099017871,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 5
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
