import React from "react";
import useTheme from "../contexts/theme";
export default function ThemeBtn(){

const {themeMode,lightTheme,dardTheme}=useTheme()

const onChangeBtn=(e)=>{

const dardModeStatus=e.currentTarget.checked
if (dardModeStatus){
    dardTheme
}
else{
    lightTheme
}

}
return(

<label>
<input type="checkbox" onChange={onChangeBtn} checked={themeMode==="dark"}></input>

<div>

<spam>Toggle Theme</spam>

</div>

</label>


)


}
