import { Component } from "react"
import { CalenderCom, Header, Days, Footer,Header2,Button} from "../component/CalenderCom"

export default class Main extends Component{
    render(){
        return(
            <div className="body">
            <div className="main">
            Calender 
            <Button />
            <Header />
            <Header2/> 
            <Days/>
            <Footer/>
            </div>
            </div>
            
        )
    }
}