import localStorage from './localStorage'
import sessionStorage from './sessionStorage'

export * from './localStorage'
export * from './sessionStorage'
export {
  localStorage,
  sessionStorage
}

export default {
  localStorage,
  sessionStorage,
  ...localStorage,
  ...sessionStorage
}