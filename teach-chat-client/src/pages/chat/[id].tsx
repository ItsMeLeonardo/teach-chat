import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'

import ChatLayout from '@/layouts/Chat'
import ChatForm from '@/components/ChatForm'
import { ChatProvider, Message } from '@/components/ChatForm/Store'
import { useEffect } from 'react'
import { socket } from '@/services/socket'
import { SOCKET_EVENTS } from '@/services/socket/SocketEvents'

type PreRenderProps = {
	initialChatState: {
		username: string
		messages: Message[]
		avatar: string
	}
}

export default function ChatConversation({ initialChatState }: PreRenderProps) {
	const router = useRouter()

	const id = router.query.id as string

	useEffect(() => {
		if (!id) return

		socket.emit(SOCKET_EVENTS.START_CONVERSATION, {
			userId: id,
		})
	}, [id])

	return (
		<ChatLayout>
			{initialChatState ? (
				<ChatProvider initialState={initialChatState}>
					<ChatForm id={id} />
				</ChatProvider>
			) : (
				<div className="flex flex-col items-center justify-center h-full">
					<h1 className="text-2xl font-bold">Chat not found</h1>
				</div>
			)}
		</ChatLayout>
	)
}

const dataBase = [
	{
		id: '1',
		username: 'John',
		messages: [
			{
				message: 'Hello',
				self: true,
			},
			{
				message: 'How are you?',
			},
			{
				message: 'I am fine, thanks',
				self: true,
			},
		],
		avatar:
			'https://plus.unsplash.com/premium_photo-1669888245224-8fe296e1bc60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
	},
	{
		id: '2',
		username: 'Jane',
		messages: [
			{
				message: 'Hi',
				self: true,
			},
			{
				message: 'I am fine, thanks',
				self: true,
			},
			{
				message: 'How are you?',
			},
			{
				message: 'How are you?',
			},
			{
				message: 'How are you?',
			},
			{
				message: 'How are you?',
			},
			{
				message: 'How are you?',
			},
			{
				message: 'How are you?',
			},
			{
				message: 'How are you?',
			},
		],
		avatar:
			'https://plus.unsplash.com/premium_photo-1667354155320-1557ec2f2be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
	},
]

ChatConversation.getInitialProps = async (ctx: GetServerSidePropsContext) => {
	const { id } = ctx.query

	const initialChatState = dataBase[0]
	// const initialChatState = dataBase.find((chat) => chat.id === id)
	return {
		initialChatState,
		key: id,
	}
}
