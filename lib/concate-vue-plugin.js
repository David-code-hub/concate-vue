export default {
    install: (app, options) => {
      // allow to add params to func()
      // type : ellipsis | astrix
      // start? : number
      // end? : number
      app.config.globalProperties.$concatenator = (string) => {
        return 'hello uchiah' 
      }
    }
  }