// @flow

import _ from 'lodash'

import type {Scene} from './scene'
import {newGravityPlanet, newControlPlanet, ForbiddenPlanet, EndPlanet} from './scene'
import type {Vector} from './objects'
import {add, scale, fromAngle, TAU} from './objects'

export type RealLevel = number

export function getLevel(scene: Scene, level: RealLevel): void {
  const createLevel = levels[level - 1]
  if (createLevel) {
    createLevel(scene)
  }
}

let levels: Array<Scene => void> = []

// * levels

levels.push((scene) => {
  scene.name = "tutorial"
  scene.player.position = {x: -5, y: 0}
  scene.gravityPlanets = [
    newControlPlanet({x: -5, y: 0}, 0.1),
  ]
  scene.endPlanets = [
    new EndPlanet({x: 5, y: 0}, 1),
  ]
})

levels.push((scene) => {
  scene.name = "tutorial 2"
  scene.player.position = {x: 0, y: -5}
  scene.gravityPlanets = [
    newControlPlanet({x: 0, y: -5}, 0.1),
  ]
  scene.endPlanets = [
    new EndPlanet({x: 0, y: 5}, 1),
  ]
})

levels.push((scene) => {
  scene.name = "heavier"
  scene.player.position = {x: 5, y: 0}
  scene.gravityPlanets = [
    newControlPlanet({x: 5, y: 0}, 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet({x: -5, y: 0}, 1),
  ]
})

levels.push((scene) => {
  scene.name = "heavier 2"
  scene.player.position = {x: 0, y: 5}
  scene.gravityPlanets = [
    newControlPlanet({x: 0, y: 5}, 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet({x: 0, y: -5}, 1),
  ]
})

levels.push((scene) => {
  scene.name = "45 degrees"
  let unit = Math.sqrt(Math.pow(10.0, 2.0) / 2.0) / 2.0
  scene.player.position = {x: unit, y: unit}
  scene.gravityPlanets = [
    newControlPlanet({x: unit, y: unit}, 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet({x: -unit, y: -unit}, 1),
  ]
})

levels.push((scene) => {
  scene.name = "difficult angle"
  let unit = Math.sqrt(Math.pow(10.0, 2.0) / 2.0) / 2.0
  scene.player.position = {x: unit / 2, y: unit}
  scene.gravityPlanets = [
    newControlPlanet({x: unit / 2, y: unit}, 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet({x: -unit / 2, y: -unit}, 1),
  ]
})

levels.push((scene) => {
  scene.name = "difficult angle 2"
  let unit = Math.sqrt(Math.pow(10.0, 2.0) / 2.0) / 2.0
  scene.player.position = {x: unit / 2, y: unit * 1.5}
  scene.gravityPlanets = [
    newControlPlanet({x: unit / 2, y: unit * 1.5}, 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet({x: -unit / 2, y: -unit * 1.5}, 1),
  ]
})

levels.push((scene) => {
  scene.name = "difficult angle 3"
  let unit = Math.sqrt(Math.pow(10.0, 2.0) / 2.0) / 2.0
  scene.player.position = {x: unit / 2, y: unit * 2}
  scene.gravityPlanets = [
    newControlPlanet({x: unit / 2, y: unit * 2}, 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet({x: -unit / 2, y: -unit * 2}, 1),
  ]
})

levels.push((scene) => {
  scene.name = "difficult angle 4"
  let unit = Math.sqrt(Math.pow(10.0, 2.0) / 2.0) / 2.0
  scene.player.position = {x: unit / 2, y: unit * 2.5}
  scene.gravityPlanets = [
    newControlPlanet({x: unit / 2, y: unit * 2.5}, 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet({x: -unit / 2, y: -unit * 2.5}, 1),
  ]
})

levels.push((scene) => {
  scene.name = "corners"
  scene.player.position = scale({x: -5, y: 5}, 0.75)
  scene.gravityPlanets = [
    newControlPlanet(scale({x: -5, y: 5}, 0.75), 0.2),
    newControlPlanet(scale({x: 5, y: 5}, 0.75), 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet(scale({x: 5, y: -5}, 0.75), 1),
  ]
})

levels.push((scene) => {
  scene.name = "corners 2"
  scene.player.position = scale({x: -10, y: 5}, 0.75)
  scene.gravityPlanets = [
    newControlPlanet(scale({x: -10, y: 5}, 0.75), 0.2),
    newControlPlanet(scale({x: 0, y: 5}, 0.75), 0.2),
    newControlPlanet(scale({x: 0, y: -5}, 0.75), 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet(scale({x: 10, y: -5}, 0.75), 1),
  ]
})

levels.push((scene) => {
  scene.name = "corners 3"
  scene.player.position = scale({x: -10, y: 10}, 0.75)
  scene.gravityPlanets = [
    newControlPlanet(scale({x: -10, y: 10}, 0.75), 0.2),
    newControlPlanet(scale({x: -10, y: 0}, 0.75), 0.2),
    newControlPlanet(scale({x: 0, y: 0}, 0.75), 0.2),
    newControlPlanet(scale({x: 0, y: -10}, 0.75), 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet(scale({x: 10, y: -10}, 0.75), 1),
  ]
})

levels.push((scene) => {
  scene.name = "corners 4"
  scene.player.position = scale({x: -10, y: 10}, 0.75)
  scene.gravityPlanets = [
    newControlPlanet(scale({x: -10, y: 10}, 0.75), 0.2),
    newControlPlanet(scale({x: -10, y: 0}, 0.75), 0.2),
    newControlPlanet(scale({x: 0, y: 0}, 0.75), 0.55),
    newControlPlanet(scale({x: 0, y: -10}, 0.75), 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet(scale({x: 10, y: -10}, 0.75), 1),
  ]
})

levels.push((scene) => {
  scene.name = "corners 5"
  scene.player.position = scale({x: -10, y: 10}, 0.75)
  scene.gravityPlanets = [
    newControlPlanet(scale({x: -10, y: 10}, 0.75), 0.2),
    newControlPlanet(scale({x: -10, y: 0}, 0.75), 0.2),
    newControlPlanet(scale({x: 0, y: 0}, 0.75), 0.9),
    newControlPlanet(scale({x: 0, y: -10}, 0.75), 0.2),
  ]
  scene.endPlanets = [
    new EndPlanet(scale({x: 10, y: -10}, 0.75), 1),
  ]
})

levels.push((scene) => {
  scene.name = "corners 6"
  scene.player.position = scale({x: 0, y: 10}, 0.75)
  scene.gravityPlanets = [
    newControlPlanet(scale({x: 0, y: 10}, 0.75), 0.2),
    newControlPlanet(scale({x: 0, y: 0}, 0.75), 0.9),
  ]
  scene.endPlanets = [
    new EndPlanet(scale({x: 0, y: -10}, 0.75), 1),
  ]
})

levels.push((scene) => {
  scene.name = "corners 7"
  scene.player.position = scale({x: 0, y: 10}, 0.75)
  scene.gravityPlanets = [
    newControlPlanet(scale({x: 0, y: 10}, 0.75), 0.9),
    newControlPlanet(scale({x: 0, y: 0}, 0.75), 0.9),
  ]
  scene.endPlanets = [
    new EndPlanet(scale({x: 0, y: -10}, 0.75), 1),
  ]
})

function mkSwing(name, mkAngle: (number) => number) {
  return (scene) => {
    scene.name = name
    const unit = 9
    const origin = () => ({x: -(unit / 2), y: 0})
    scene.player.position = origin()
    scene.gravityPlanets = [
      newControlPlanet(origin(), 0.1, unit),
    ]

    function mkPosition(phase: number): Vector {
      const angle = mkAngle(phase)
      return add(origin(), scale(fromAngle(angle), unit))
    }
    let phase = 0
    const endPlanet = new EndPlanet(mkPosition(phase), 1)
    endPlanet.customStep = (timeDelta) => {
      phase += timeDelta
      endPlanet.position = mkPosition(phase)
    }
    scene.endPlanets = [endPlanet]
  }
}

levels.push(mkSwing('swing', () => 0))
levels.push(mkSwing('swing 2', () => TAU / 4))
levels.push(mkSwing('swing 3', () => TAU / 8))
levels.push(mkSwing('swing 4', () => TAU / 16))
levels.push(mkSwing('swing', (phase) => 0.023 * (phase / 1000) * TAU))

levels.push((scene) => {
  scene.name = "slope"
  const unit = 4
  scene.player.position = {x: unit * -5, y: unit * 3}
  for (let x = -5; x < 5; x++) {
    scene.gravityPlanets.push(
      newControlPlanet({x: unit * x, y: unit * - x * 3 / 5}, 0.1),
    )
  }
  scene.endPlanets = [
    new EndPlanet({x: unit * 5, y: unit * -3}, 1),
  ]
})

function mkOrbit({name, player}) {
  return (scene) => {
    scene.name = name
    const u = 10
    scene.player.position = player(u)
    scene.gravityPlanets = [
      newControlPlanet(player(u), 0.2)
    ]

    const length = 11
    const movingPlanets = []
    for (let i = 0; i < length; i++) {
      const position = mkPosition(i, 0)
      const planet = newControlPlanet(position, 0.6)
      movingPlanets.push(planet)

      let phase = 0
      planet.customStep = (timeDelta) => {
        phase += timeDelta
        planet.position = mkPosition(i, phase)
      }
    }
    scene.gravityPlanets = scene.gravityPlanets.concat(movingPlanets)
    scene.endPlanets = [
      new EndPlanet({x: u, y: 0}, 1),
    ]

    function mkPosition(i, phase) {
      const angle = (0.023 * (phase / 1000) * TAU) + (TAU / length) * i
      return add(scale(fromAngle(angle), u), {x: u, y: 0})
    }

  }
}

levels.push(mkOrbit({name: 'orbit', player: (u) => ({x: -u, y: 0})}))
levels.push(mkOrbit({name: 'orbit 2', player: (u) => ({x: -u, y: u})}))

levels.push((scene) => {
  scene.name = 'overlap'
  const u = 4
  scene.player.position = {x: -2 * u, y: 0}
  scene.endPlanets = [
    new EndPlanet({x: 2 * u, y: 0}, 1)
  ]
  const radius = 0.2
  const influence = 5
  scene.gravityPlanets = [
    newControlPlanet(_.cloneDeep(scene.player.position), 0.2),
    newControlPlanet({x: 0, y: -u}, radius, influence),
    newControlPlanet({x: 0, y: u}, radius, influence),
  ]
})

levels.push((scene) => {
  scene.name = 'which direction'
  const u = 10
  scene.gravityPlanets.push(newControlPlanet(_.cloneDeep(scene.player.position), 0.5))
  function mkPosition(phase) {
    const angle = 0.048 * (phase / 1000) * TAU
    return scale(fromAngle(angle), u)
  }
  const endPlanet = new EndPlanet(mkPosition(0), 1)
  scene.endPlanets.push(endPlanet)

  let phase = 0
  endPlanet.customStep = (timeDelta) => {
    phase += timeDelta
    endPlanet.position = mkPosition(phase)
  }
})

levels.push((s) => {
  s.name = 'pills'
  const u = 10
  s.gravityPlanets.push(newControlPlanet({x: 0, y: 0}, 0.3))
  s.forbiddenPlanets.push(new ForbiddenPlanet({x: -u, y: 0}, 1))
  s.endPlanets.push(new EndPlanet({x: u, y: 0}, 1))
})

levels.push((s) => {
  s.name = 'pills 2'
  const u = 10
  s.player.position = {x: 0, y: u}
  s.gravityPlanets = [
    newControlPlanet({x: 0, y: u}, 0.3),
    newControlPlanet({x: u, y: 0}, 0.3),
    newControlPlanet({x: -u, y: 0}, 0.3),
  ]
  s.forbiddenPlanets.push(new ForbiddenPlanet({x: 0, y: 0}, 1))
  s.endPlanets.push(new EndPlanet({x: 0, y: -u}, 1))
})

function mkAxis(name: string, custom: (Scene, number) => void) {
  return (s) => {
    s.name = name
    const u = 10
    s.player.position = {x: 0, y: u}
    s.gravityPlanets.push(newControlPlanet({x: 0, y: u}, 0.4))
    custom(s, u)
    function position(phase) {
      const angle = 0.5 * (phase / 1000) * TAU
      const position = fromAngle(angle)
      position.x *= u * 3
      position.y *= u * 0.25
      return position
    }
    const endPlanet = new EndPlanet(position(0), 1)
    s.endPlanets.push(endPlanet)
    let phase = 0
    endPlanet.customStep = (delta) => {
      phase += delta
      endPlanet.position = position(phase)
    }
  }
}

levels.push(mkAxis('axis', (s, u) => {
  s.gravityPlanets.push(newControlPlanet({x: 0, y: -u}, 0.4))
}))

levels.push(mkAxis('axis', (s, u) => {
  s.forbiddenPlanets.push(new ForbiddenPlanet({x: 0, y: -u}, 1))
}))

const detour = (name, custom) => (s) => {
  s.name = name
  const u = 8
  s.player.position = {x: -u, y: u}
  s.forbiddenPlanets = [
    new ForbiddenPlanet({x: -u, y: 0}, 0.1),
    new ForbiddenPlanet({x: 0, y: 0}, 0.1),
    new ForbiddenPlanet({x: u, y: 0}, 0.1),
  ]
  s.gravityPlanets = [
    newControlPlanet({x: -u, y: u}, 0.3),
    newControlPlanet({x: 0, y: u}, 0.3),
    newControlPlanet({x: u, y: u}, 0.3),
    newControlPlanet({x: 2 * u, y: 0}, 0.3),
    newControlPlanet({x: u, y: -u}, 0.3),
    newControlPlanet({x: 0, y: -u}, 0.3),
  ]
  s.endPlanets.push(new EndPlanet({x: -u, y: -u}, 1))
  custom(s, u)
}

levels.push(detour('detour', () => {}))
levels.push(detour('detour 2', (s, u) => {
  s.gravityPlanets.push(newControlPlanet({x: -2 * u, y: -2 * u}, 0.3))
}))

const squaredance = (length: number) => (s) => {
  s.name = `squaredance ${length - 1}`

  const u = 5
  const edge = ((length - 1) / 2)

  function isEdge(n: number): boolean {
    return (n === 0) || (n === (length - 1))
  }

  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length; i++) {
      const position = () => ({x: (-edge + i) * u, y: (-edge + j) * u})
      if (j === length - 1 && i === j) {
        s.player.position = position()
        s.gravityPlanets.push(newControlPlanet(position(), 0.2, u / 2))
      } else if (j === 0 && i === j) {
        s.gravityPlanets.push(newControlPlanet(position(), 0.2, u / 2))
      } else if (isEdge(j) && isEdge(i)) {
        s.endPlanets.push(new EndPlanet(position(), 1))
      } else if (isEdge(j) || isEdge(i)) {
      } else {
        s.gravityPlanets.push(newGravityPlanet(position(), 0.7, u / 2))
      }
    }
  }

  if (length > 2) {
    const size = 1
    s.forbiddenPlanets = [
      new ForbiddenPlanet({x: -edge * u, y: 0}, size),
      new ForbiddenPlanet({x: edge * u, y: 0}, size),
      new ForbiddenPlanet({x: 0, y: -edge * u}, size),
      new ForbiddenPlanet({x: 0, y: edge * u}, size),
    ]
  }
}

for (let length = 2; length <= 7; length++) {
  levels.push(squaredance(length))
}

const slingshot = (name, endPlanetSize) => (s) => {
  s.name = name
  const u = 10
  s.player.position = {x: u, y: 0}
  s.gravityPlanets = [
    newControlPlanet({x: u, y: 0}, 0.1, u / 2)
  ]
  s.forbiddenPlanets.push(new ForbiddenPlanet({x: 0, y: 0}, 1))
  s.endPlanets.push(new EndPlanet({x: -u, y: 0}, endPlanetSize(u)))
}

levels.push(slingshot('slingshot', (u) => u / 2))
levels.push(slingshot('slingshot 2', (u) => ((u / 2) + 1) / 2))
levels.push(slingshot('slingshot 3', (u) => 1))
