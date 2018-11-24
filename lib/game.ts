import * as P from 'pixi.js'
import pixiLogoUrl from './pixijs-logo.url'

export default class Game {
  private _app : P.Application

  constructor(app : P.Application) {
    this._app = app
  }

  start() : void {
    const logo = P.Sprite.fromImage(pixiLogoUrl)
    logo.anchor.set(0.5)
    logo.x = this._app.screen.width / 2
    logo.y = this._app.screen.height / 2

    this._app.stage.addChild(logo)
    this._app.ticker.add(delta => {
      logo.rotation += 0.05 * delta
      logo.skew.x += 0.01 * delta
      logo.skew.y += 0.01 * delta
    })
  }
}
