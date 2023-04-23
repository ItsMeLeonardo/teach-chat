import { Menu, SendDiagonal } from 'iconoir-react'
import Message from '@/components/Message'
import { useChatForm } from './Store/utils'
import { useRef, type FormEvent as ReactFormEvent, useEffect } from 'react'

type Props = {
	id: string
}

export default function ChatForm(props: Props) {
	const { sendMessage, user, messages } = useChatForm()

	const bottomFlagRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const scrollingElement = bottomFlagRef.current
		if (!scrollingElement) return

		scrollingElement.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	const handleSubmit = (event: ReactFormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const form = event.currentTarget
		const message = form.message.value as string

		if (!message || !message.trim()) return form.reset()

		sendMessage({
			message,
			self: true,
			avatar: user.avatar,
			username: user.username,
		})

		form.reset()
	}

	return (
		<div className="h-full w-full overflow-hidden flex flex-col">
			<header className="w-full p-4 flex justify-between items-center border-b-[1px] border-gray-400">
				<div>
					<span className="text-sm font-bold opacity-60">To: </span>
					<span className="text-sm font-bold ">{user.username}</span>
				</div>
				<button>
					<Menu />
				</button>
			</header>

			<div className="flex-grow overflow-auto h-1">
				<ul className="flex flex-col w-full p-2 gap-4">
					{messages.map((message, index) => (
						<Message key={index} message={message.message} avatar={user.avatar} self={message.self} />
					))}
				</ul>
				{/* <span className="animate-pulse p-4 text-sm text-gray-500">... is typing</span> */}
				<div ref={bottomFlagRef}></div>
			</div>

			<footer className="w-full p-2 border-t-[1px] border-gray-400">
				<form className="w-full flex items-center px-2" onSubmit={handleSubmit}>
					<input
						type="text"
						name="message"
						autoComplete="off"
						placeholder="Type a message"
						className="bg-transparent w-full text-xs outline-none"
					/>
					<button className="p-2 rounded-2xl color-violet-500 bg-purple-radial-gradient text-white text-sm transition duration-300 hover:scale-105 active:scale-95">
						<SendDiagonal />
					</button>
				</form>
			</footer>
		</div>
	)
}
