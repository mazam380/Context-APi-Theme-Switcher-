import { useEffect,useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./comp/ThemeBtn";
import Card from "./comp/Card";


function App(){

const [themeMode,setThemeMode]=useState("light")

const lightTheme=()=>{

setThemeMode("light")

}

const darkTheme=()=>{

setThemeMode("dark")

}
useEffect(()=>{

  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

return(
<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>

<div>
<ThemeBtn></ThemeBtn>

</div>
<div>
<Card></Card>

</div>

</ThemeProvider>
)
}
export default App