import { Middleware } from 'redux'

const logger: Middleware = (store) => (next) => (action) => {
  const returnValue = next(action)
  return returnValue
}

export default logger
