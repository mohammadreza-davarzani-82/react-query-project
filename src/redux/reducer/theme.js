const ThemeProvider = (state = false , action )=>{
    switch(action.type){
        case "DARK" :
            return !state ;
        default:
            return state

    }

}
export default ThemeProvider