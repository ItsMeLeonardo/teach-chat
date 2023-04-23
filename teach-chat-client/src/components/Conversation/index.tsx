import Link from 'next/link'

type Props = {
	id: string
	username: string
	avatar: string
	lastMessage: string
	lastMessageTime: string
	unreadMessages?: number
	onClick?: () => void
	active?: boolean
}

export default function Conversation(props: Props) {
	const { username, avatar, lastMessage, lastMessageTime, unreadMessages, id, active } = props

	return (
		<Link
			href={`/chat/${id}`}
			className={`relative w-full flex items-start gap-2 p-4 active:shadow-inner rounded-lg transition duration-300 hover:shadow-pale-1 ${
				active && 'shadow-pale-1'
			}`}
		>
			{active && <span className="absolute top-0 left-0 h-full w-2 rounded-l-lg bg-purple-radial-gradient"></span>}
			<picture className="w-8 h-8 rounded-full">
				<img src={avatar} alt="winter avatar" className="w-full h-full object-cover rounded-full" />
			</picture>

			<div className="flex flex-col items-start w-[20%] flex-grow">
				<header className={`text-sm font-bold ${active && 'bg-purple-radial-gradient bg-clip-text text-transparent'}`}>
					{username}
				</header>
				<p className="text-xs text-ellipsis text-start whitespace-nowrap w-full overflow-hidden">{lastMessage}</p>
			</div>

			<footer className="flex flex-col items-end">
				<span className="text-sm">{lastMessageTime}</span>
				{unreadMessages && (
					<span className="flex items-center justify-center w-4 h-4 text-xs font-bold rounded-full text-white bg-purple-500">
						{unreadMessages}
					</span>
				)}
			</footer>
		</Link>
	)
}
