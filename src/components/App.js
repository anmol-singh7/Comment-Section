import React from 'react';
import CommentBar from './InputComment';
import CommentCard from './CommentList';

class App extends React.Component{ 
     render(){
        return(
            <div style={{margin:'15px',backgroundColor:'white'}}>
              
                
                <div style={{marginBottom:'50px'}}><CommentCard/></div>
                <div style={{position:'sticky',bottom:'16px'}}><CommentBar /></div>
            </div>
            
        );
     };
};
export default App;