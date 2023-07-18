import { Component } from "react"
import Mycom3 from "../component/Mycom3"


export default class Main extends Component{
    render(){
        return(
            <>
            메인페이지 <br />
            <Mycom3 newnum={1} newnum2={2} newnum3={3}/>
            </>
        )
    }   
}

