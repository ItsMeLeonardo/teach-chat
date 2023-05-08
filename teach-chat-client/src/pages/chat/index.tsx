import ChatLayout from '@/layouts/Chat'
import { socket } from '@/services/socket'
import { useEffect } from 'react'

export default function ChatPage() {
	useEffect(() => {
		socket.on('connect', () => {
			console.log('connected')
		})
	}, [])

	return (
		<ChatLayout>
			<div className="h-full w-full overflow-hidden bg-purple-radial-gradient p-4">
				<section className="h-full w-full rounded-xl bg-white/75 flex flex-col items-center justify-center">
					<div className="w-full sm:w-[60%] text-center my-4">
						<h2 className="text-2xl md:text-5xl font-black my-4 bg-purple-radial-gradient bg-clip-text text-transparent">
							Connect with other students like never before.
						</h2>

						<h3 className="text-sm md:text-xl font-medium">easy to communicate, collaborate, and learn together.</h3>
					</div>

					<div className="w-full max-w-sm p-2 text-center my-4 flex flex-col gap-4">
						<label className="flex items-center gap-2 p-2 bg-white rounded-lg">
							<span className="text-bold px-2">Join</span>
							<input
								type="text"
								className="outline-none bg-neutral-100 w-full p-2 rounded-md border-none"
								placeholder="room code"
							/>
						</label>

						<span>or</span>

						<form className="flex items-center gap-2 p-2 bg-white rounded-lg">
							<input
								type="text"
								className="outline-none bg-neutral-100 w-full p-2 rounded-md border-none"
								placeholder="create a room"
							/>
							<button className="text-bold px-4 text-sm bg-violet-500 text-white h-full rounded-lg">Create</button>
						</form>
					</div>
				</section>
			</div>
		</ChatLayout>
	)
}
