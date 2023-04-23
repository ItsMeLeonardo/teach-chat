import HydrateAtoms from '@/store/HydrateAtoms'
import { Provider, atom } from 'jotai'
import type { ReactNode } from 'react'

export type Message = {
	avatar: string
	username: string
	message: string
	self?: boolean
}

type ChatState = {
	username: string
	messages: Message[]
	avatar: string
	isSending?: boolean
	isTyping?: boolean
	error?: string
}

const initialState: ChatState = {
	username: '',
	messages: [],
	avatar: '',
}

export const chatAtom = atom<ChatState>(initialState)

export const chatMessagesAtom = atom((get) => get(chatAtom).messages)

export const chatUserAtom = atom((get) => {
	const { username, avatar } = get(chatAtom)

	return {
		username,
		avatar,
	}
})

export const addMessageAtom = atom(null, (get, set, message: Message) => {
	const state = get(chatAtom)
	set(chatAtom, {
		...state,
		messages: [...state.messages, message],
	})
})

type Props = {
	children: ReactNode
	initialState: ChatState
}

export function ChatProvider({ children, initialState }: Props) {
	return (
		<Provider>
			<HydrateAtoms initialState={new Map([[chatAtom, initialState]])}>{children}</HydrateAtoms>
		</Provider>
	)
}
