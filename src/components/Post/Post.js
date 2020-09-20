import React from 'react';
import moment from 'moment';
import {ReactComponent as Close} from '../../assets/close.svg'


import './Post.scss'


export default function Post(props){
    const {allPosts, setRefreshPosts} = props;
    
  const removePost = (index)=>{
    allPosts.splice(index, 1);
    localStorage.setItem("Messages",JSON.stringify(allPosts));
    setRefreshPosts(true)
  }
  console.log(allPosts)
    return(
        <div className="container">
            {
                allPosts?
                    (allPosts.length > 0 ?
                    allPosts.map((msg,index)=>(
                        <div key={index} className="container__post">
                            <div className="container__post-close" ><Close onClick={()=>removePost(index)}/></div>
                            <div className="container__post-name">
                                 <p>{msg.name} dice:</p>
                            </div>
                            <div className="container__post-msg">
                                 <p>{msg.message}</p>
                            </div>
                            <div className="container__post-date">
                                  <span>{moment(msg.date).startOf('minutes').fromNow() }</span>
                            </div>
                        </div>
                    ))
                    : <h1>Escribe tu primer post.</h1>
                    )      
                    : <h1>Escribe tu primer post.</h1>
                    
            }
      </div>
    )
}
