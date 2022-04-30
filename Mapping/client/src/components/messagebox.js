import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import 'emoji-mart/css/emoji-mart.css'
import InputEmoji from "react-input-emoji";
import Picker from "emoji-picker-react"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from "react-router-dom";

let socket

function MessageBox(props) {


  const ENDPOINT = "https://socialmapchat.herokuapp.com/"

  const [roomName, setroomName] = useState("")

  const [message, setmessage] = useState("")

  const [picker, setpicker] = useState(false)


  const params = useParams()
  console.log(params)
  function Change(text) {


    setmessage(text)

  }

  console.log(message)

  useEffect(() => {
    socket = io(ENDPOINT)
    function helper() {
      // var max = "";
      // var min = ""
      // if (props.username.length > props.currentuser.length) {
      //   max = props.username
      //   min = props.currentuser
      // }
      // else {
      //   max = props.currentuser
      //   min = props.username
      // }
      socket.emit("chat", props.rN)
      setroomName(props.rN)
    }

    helper()
    return () => {

      socket.off()
    }



  }, [ENDPOINT])


  useEffect(() => {





    socket.on("prevMessage", (m) => {
      props.messagesetter(m, props.id)
    })
  }, [])

  useEffect(() => {
    socket.on("prevMessages", (m) => {
      props.messagesetter(m, props.id)
    })
  }, [])





  function Send(event) {

    event.preventDefault()
    socket.emit("message", { msg: { message: message, username: localStorage.getItem("token").username }, roomName: roomName })
    setmessage("")
  }



  function Messages() {
    var i = -1
    return (
      <div id="msgbox">
        {props.messages[props.id].map((e) => {
          i++
          return (
            <div key={i}>
              <p className={e.username === props.currentuser ? "messagepara1" : "messagepara2"}>{e.message}</p>
            </div>
          )
        })}
      </div>
    )
  }

  function Close(event) {
    event.preventDefault()
    props.CloseChat(props.id)
    socket.emit("remove")
  }


  function EmojiChooser(event, emojiobj) {

    setmessage(message + emojiobj.emoji)
  }

  return (
    <div >
      <div className="mainchatdiv">
        <div className="headerdiv">

          <p className="chatusername">{props.username}</p>
          <button className="closebtn" onClick={(event) => Close(event)}><HighlightOffIcon /></button>
        </div>
        <div className="card2" >
          <div style={{ height: "auto", minHeight: "240px" }}>
            {props.messages[props.id] !== undefined && Messages()}
          </div>
          {/* <input className="inpt" onChange={} /> */}
          <div className="writingoptions">
            <div>
              <InputEmoji
                className="inpt"
                value={message}
                onChange={(text) => Change(text)}
                cleanOnEnter
                // onEnter={handleOnEnter}
                placeholder="Type a message"
              />
              <div className="chatbtn2">
                <button style={{ background: "transparent", border: "none" }} onClick={() => picker ? setpicker(false) : setpicker(true)}><InsertEmoticonIcon /></button>
                <button className="send_btn" style={{ margin: "0" }} onClick={(event) => Send(event)}><SendIcon /></button>
              </div>
            </div>
            <span>
              {picker ? <Picker className="picker" onEmojiClick={EmojiChooser} /> : null}
            </span>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  )

}

export default MessageBox