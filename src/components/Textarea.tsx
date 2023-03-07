import styled from "styled-components"

export default function Textarea() {
  return (
    <Body>
      <ChatTextArea />
      <span>
        <ChatSubmit type={"submit"} value={"전송"} />
      </span>
    </Body>
  )
}

const Body = styled.form`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: white;
  height: 100px;
  padding: 5px;
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

  background-color: #65C2E4;
  color: white;

  border: none;
  border-radius: 5px;
`