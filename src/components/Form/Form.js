import React,{useState} from 'react';
import {ReactComponent as Add} from '../../assets/agregar-archivo.svg'
import {ReactComponent as Close} from '../../assets/close.svg'

import './Form.scss'

export default function Form(props){

    const {setData, data, setRefreshPosts}= props;
    const [show, setShow]= useState(false)
        var messages = [];
    const handleLocalStorage = (data)=>{
        messages = JSON.parse(localStorage.getItem("Messages")) || []
        messages.push(data);
        localStorage.setItem("Messages",JSON.stringify(messages));
        setRefreshPosts(true)
    }

    const onChange=(e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value,
            date : new Date()

        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleLocalStorage(data)
        setShow(false)
    }
    const handleForm = ()=>{
       setShow(!show)
    }
    return(
        <>
        {
            !show ? <div className="add">
                        <Add onClick={handleForm}/>
                    </div>
                : null
        }
     
          {
              show ? 
              <div className="form-container">
                <form className="form" onChange={onChange} onSubmit={handleSubmit}>
                        <div className="form__close">
                            <Close onClick={handleForm} />
                        </div>
                        <div className="form__row">
                            <div className="form__label">
                                <label htmlFor="name">Nombre:</label>
                            </div>
                            <div>
                                <input type="text" name="name" />
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="form__label">
                                <label htmlFor="message">Mensaje:</label>
                            </div>
                            <div>
                                <textarea className="form__message" type="text" name="message" />
                            </div>
                        </div>
                    <button>Publicar</button>
                </form> 
              </div>
              : null
          }
          </>
  
    )
}