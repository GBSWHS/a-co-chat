import { chatAction, chatState } from "@/utils/interfaces";

export function chatReducer(state: chatState, action: chatAction) {
  switch(action.type) {
    case "send":
      return {
        ...state,
        chatList: [...(state.chatList ?? []), ...action.chat]
      };
  }
}