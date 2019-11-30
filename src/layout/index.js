import React,{Component,Fragment} from "react"
import Tabbar from "components/tabbar"
class Layout extends Component{

    render(){
        console.log(this.props)
        return (
            <Fragment>
          {
              this.props.children
          }
          <Tabbar path={this.props.path}/>
            </Fragment>
        )
    }
}

export default Layout