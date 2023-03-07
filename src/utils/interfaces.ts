export interface chat {
  bot: boolean,
  message: string
}

export interface chatState {
  chatList: chat[]
}

export type chatAction = 
  | { type: 'send', chat: [chat] }