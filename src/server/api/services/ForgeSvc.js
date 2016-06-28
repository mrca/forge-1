
import BaseSvc from './BaseSvc'

export default class ForgeSvc extends BaseSvc {

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  constructor (opts) {

    super(opts)
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  name () {

    return 'ForgeSvc'
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  setToken(session, token) {

    session.forge = session.forge || {}

    session.forge.token = token

    session.cookie.expires = false
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  getToken (req) {

    return req.session.forge.token || {
        access_token: this._config.forge.oauth.hardcodedToken
    }
  }
}
