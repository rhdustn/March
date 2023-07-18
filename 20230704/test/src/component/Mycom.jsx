
import {Component} from "react"

export default class Mycom extends Component{
    // 컴포넌트의 구조는 같은데 내용이 다른경우
    // 재사용성이 용이해서 컴포넌트를 만든다고 했는데
    // props라는 값으로 받아서 그려주면 된다
    constructor(props){
        super(props)
        // super : 부모의 생성자함수를 생성해줘야 this를 사용할 수 있다
        // this
        this.state ={
            num :0
        }
    }
    // 컴포넌트가 초기에 생성되면 
    //  constructor -> render -> componentDidMount
    componentDidMount(){
        console.log("나 생성")
    }
    // 컴포넌트의 상태가 변화되면
    // 상태변환후 ->componentDidUpdate
    componentDidUpdate(){
        console.log(this.props.name +" 상태 변함")
    }
    render(){
        return(
            <div className={"com " + this.props.Cname}>
                {this.props.name}
                <button onClick={()=>{
                    this.setState({...this.state,num : this.state.num+=1})
                    console.log(this.state.num)
                    }}>상태변경</button>
            </div>
        )
    }
}

class Mycom2 extends Component{
    render(){
        return(
          
            <div>
                안녕 컴포넌트 2
            </div>
            
        )
    }
}

// 다수의 컴포넌트를 내보낼 경우
export {Mycom,Mycom2};

// 단일로 한개만 내보낼 경우
// export default Mycom
