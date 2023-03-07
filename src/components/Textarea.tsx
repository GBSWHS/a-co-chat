import { chatAction, chatState } from "@/utils/interfaces"
import { Dispatch } from "react"
import styled from "styled-components"

export default function Textarea({ state, updateEvent }: { state: chatState, updateEvent: Dispatch<chatAction> }) {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (state.loading) return;
    else {
      updateEvent({ type: 'send', chat: [{ message: state.chat, bot: false }] });
      updateEvent({ type: 'change', chat: '' })
      updateEvent({ type: 'load' })
      const res = await fetch('/api/aco', {
        method: 'post',
        body: JSON.stringify({
          quest: state.chat
        })
      }).then((res) => res.json())
      updateEvent({ type: 'send', chat: [{ message: res.text, bot: true }] })
      updateEvent({ type: 'notLoad' })
      return
    }
  }
  
  return (
    <Body onSubmit={onSubmit}>
      <ChatTextArea value={state.chat} onChange={(e) => updateEvent({ type: 'change', chat: e.target.value })} />
      <span>
        <ChatSubmit status={!state.chat ? false : state.loading ? false : true} type={"submit"} value={"전송"} />
      </span>
    </Body>
  )
}

const Body = styled.form`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: white;
  height: 13%;
  padding: 5px;
  z-index: 99999;
`

const ChatTextArea = styled.textarea`
  margin: 2px;
  width: 100%;
  height: 58px;
  border: none;
  resize: none;
  outline: none;
`

const ChatSubmit = styled.input`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 2px;
  height: 35px;
  width: 70px;

  background-color: ${(props: {status: boolean}) => (!props.status ? '#444' : '#65C2E4')};
  color: white;

  border: none;
  border-radius: 5px;
  cursor: pointer;
`