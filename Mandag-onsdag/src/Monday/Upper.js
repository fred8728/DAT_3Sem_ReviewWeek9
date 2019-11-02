import React from 'react';
import upper, {text1,text2, text3} from "./File1";

function test(){
    return(
    <div> 
    <p>{upper(text1)}</p>
    <p>{upper(text2)}</p>
    <p>{upper(text3)}</p>
    <p>{upper("please uppercase me")}</p>
    </div>
    );
  }

export default test;