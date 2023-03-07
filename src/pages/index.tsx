import Header from "@/components/Header"
import Textarea from "@/components/Textarea"
import { chatReducer } from "@/module/chatReducer"
import { useReducer } from "react"
import styled from "styled-components"

export default function Home() {
  const [event, updateEvent] = useReducer(chatReducer, {
    chatList: [{ bot: true, message: '궁금한 점을 "아코"에게 물어보세요!' }],
    chat: "",
    loading: false
  })
  return (
    <>
      <Header />
      <ChatBody>
        {event.chatList.map((value, index) => (
          <>
            <span key={index} className={value.bot ? 'bot' : 'human'}>{value.message}</span>
            <br/>
            <br/>
          </>
        ))}
      </ChatBody>
      <Textarea state={event} updateEvent={updateEvent} />
    </>
  )
}

const ChatBody = styled.div`
  position: absolute;
  top: 9%;
  width: 100%;
  height: 79.2%;
  padding: 5px;

  span {
    margin-bottom: 5px;
  }

  span:last-child {
    margin-bottom: 30%;
  }

  span.bot {
    float: left;
    background-color: #FFF;
    max-width: 90%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
  }

  span.human {
    float: right;
    background-color: #B4DAF3;
    max-width: 90%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
  }
`