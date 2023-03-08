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
    <ChatBody>
      <Header />
      <ChatContent>
        <ChatMainFlex>
          <Chat>
            <div>
              {event.chatList.map((value, index) => (
                <ChatItemBody key={index}>
                  <ChatItemContent>
                    <ChatItemflex>
                      <ChatItems bot={value.bot}>
                        <ChatItem bot={value.bot}>
                          <div>
                            <div>
                              {value.message}
                            </div>
                          </div>
                        </ChatItem>
                      </ChatItems>
                    </ChatItemflex>
                  </ChatItemContent>
                </ChatItemBody>
              ))}
            </div>
          </Chat>
        </ChatMainFlex>
      </ChatContent>
      <Textarea state={event} updateEvent={updateEvent} />
    </ChatBody>
  )
}

const ChatBody = styled.div`
  height: auto;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  display: flex;
  background-color: #000;
  box-sizing: border-box;
  position: relative;
`

const ChatContent = styled.div`
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  height: 87%;
  margin: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
  width: 100%;
`

const ChatMainFlex = styled.div`
  padding-top: 44px;
  width: 100%;
  display: flex;
  flex: 2 1 auto;
  flex-direction: column;
`

const Chat = styled.div`
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  justify-content: flex-end;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  display: flex;
  position: relative;

  > div {
    padding: 20px 20px 0;
    flex: 0 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

const ChatItemBody = styled.div`
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-end;
  align-content: stretch;
  display: flex;
  position: relative;
  color: white;
  :last-child {
    margin-bottom: 130px;
  }
`

const ChatItemContent = styled.div`
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`

const ChatItemflex = styled.div`
  flex-direction: column;
  display: flex;
`

const ChatItems = styled.div`
  align-self: ${(props: { bot:boolean }) => (!props.bot ? 'flex-end' : 'flex-start')};
  border-radius: 22px;
  cursor: default;
  display: flex;
  justify-content: center;
  min-height: 44px;
`

const ChatItem = styled.div`
  flex-direction: row-reverse;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  display: flex;
  
  > div {
    margin-bottom: 8px;
  }
  
  > div > div {
    border-radius: 22px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 236px;
    border: 1px solid rgb(38, 38, 38);
    background-color: ${(props: { bot: boolean }) => (!props.bot ? 'rgb(38, 38, 38)' : '#000')};
    min-height: 44px;
    overflow: hidden;
    padding: 16px;
  }
`