import React, { useEffect, useState } from 'react'

import type { ReactNode } from 'react'

import Link from 'next/link'

import Conversation from '@/components/Conversation'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { socket } from '@/services/socket'
import { SOCKET_EVENTS } from '@/services/socket/SocketEvents'

type Props = {
	children: ReactNode
}

const ChatLines = dynamic(() => import('iconoir-react').then((mod) => mod.ChatLines), {
	ssr: false,
})
const MenuScale = dynamic(() => import('iconoir-react').then((mod) => mod.MenuScale), {
	ssr: false,
})

export default function ChatLayout({ children }: Props) {
	const route = useRouter()
	const { id } = route.query

	const [users, setUsers] = useState([])

	useEffect(() => {
		socket.on(SOCKET_EVENTS.USER_CONNECTED, (data) => {
			console.log({ data })
			setUsers(data.list)
		})
	}, [])

	return (
		<aside className=" w-screen h-screen grid grid-cols-8">
			<section className="hidden lg:flex flex-col w-full h-full overflow-hidden col-span-2">
				<header className="w-full flex items-center justify-between p-4">
					<Link href="/chat" className="text-lg font-bold flex gap-2 ">
						<span className="text-violet-500">
							<ChatLines />
						</span>
						<span className="bg-purple-radial-gradient bg-clip-text text-transparent">Education chat</span>
					</Link>
					<button>
						<MenuScale />
					</button>
				</header>

				<ul className="flex flex-col w-full p-1 overflow-auto">
					{users.map((user) => (
						<li key={user}>
							<Conversation
								id={user}
								avatar="https://images.unsplash.com/photo-1682098155729-c0aff2dd10cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
								lastMessage="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
								lastMessageTime="12:00"
								unreadMessages={2}
								username={`Jhon ${user}`}
								active={id === '1'}
							/>
						</li>
					))}
					{/* 					<li>
						<Conversation
							id="2"
							avatar="https://images.unsplash.com/photo-1681860317375-fdcc92563f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							lastMessage="lorem ipsum dolor sit"
							lastMessageTime="04:00"
							username="Jane"
							active={id === '2'}
						/>
					</li> */}
				</ul>
			</section>
			<section className="w-full h-full lg:border-l-[1px] border-gray-400 col-span-8 lg:col-span-6">{children}</section>
		</aside>
	)
}
