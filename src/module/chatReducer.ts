import { chatAction, chatState } from "@/utils/interfaces";

export function chatReducer(state: chatState, action: chatAction) {
  switch(action.type) {
    case "send":
      return {
        ...state,
        chatList: [...(state.chatList ?? []), ...action.chat]
      };
    case "change":
      return {
        ...state,
        chat: action.chat
      }
    case 'load':
      return {
        ...state,
        loading: true
      }
    case 'notLoad':
      return {
        ...state,
        loading: false
      }
    default:
      throw new Error('not handle')
  }
}