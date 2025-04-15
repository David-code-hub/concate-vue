export default {
    install: (app, options) => {
      // allow to add params to func()
      // type : ellipsis | astrix
      // start : number
      // end : number
      app.config.globalProperties.$concatenator = (word:string,concateType: 'ellipsis' | 'astrix',start:number,end:number) => {
        const cleanedString = String(word) 
        if(cleanedString.length > start && cleanedString.length > end){
          const sliceEnd = end - (end * 2)
          let astrixString = ''
          if(concateType === 'astrix'){
            let astrixCount = cleanedString.length - (start+end)
            while(astrixCount--){
             astrixString += '*' 
            }
          }
          const concatedString = `${cleanedString.slice(0,start)}${
            concateType === 'astrix' ? astrixString  : '...' 
          }${cleanedString.slice(sliceEnd)}`
          return concatedString 
        }
        else{
          throw Error('[concate-vue] start and end params cannot be longer than string!')
        }
      }
    }
  }