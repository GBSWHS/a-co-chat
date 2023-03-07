export interface chat {
  bot: boolean,
  message: string
}

export interface chatState {
  chatList: chat[],
  chat: string,
  loading: boolean
}

export type chatAction = 
  | { type: 'send', chat: [chat] }
  | { type: 'change', chat: string }
  | { type: 'load' }
  | { type: 'notLoad' }