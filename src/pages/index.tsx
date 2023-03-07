import Header from "@/components/Header"
import Textarea from "@/components/Textarea"
import { chatReducer } from "@/module/chatReducer"
import { chat } from "@/utils/interfaces"
import { useReducer } from "react"

export default function Home() {
  const [event, updateEvent] = useReducer(chatReducer, {
    chatList: [{ bot: true, message: '궁금한 점을 "아코"에게 물어보세요!' }]
  })
  return (
    <>
      <Header />
      <div>
        
      </div>
      <Textarea />
    </>
  )
}