import React, {Component} from 'react'

class DisplayComponent extends Component{
  render(){
    console.log('Props',this.props)
    
    return(
      
      <ol className = 'user-list' >
      
      {
       
      
this.props.users.map(user => ( 
      <li key = { user.id } className = 'user-list-item' >
         <div className = 'user-details' >
            <p > { user.phrase } < /p> 
		</div> 
	</li>
                ))
      }
      </ol>
    )
  }
}

export default DisplayComponent