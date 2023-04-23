type Props = {
	self?: boolean
	message: string
	avatar: string
}

export default function Message(props: Props) {
	const { self, message, avatar } = props

	return (
		<li className={`flex gap-1 ${self && 'flex-row-reverse'}`}>
			<picture className="w-8 h-8 rounded-full overflow-hidden">
				<img src={avatar} alt="" className="object-cover w-full h-full" />
			</picture>
			<div className={`w-full flex ${self && 'flex-row-reverse'}`}>
				<div
					className={`flex flex-col items-start ${
						self ? 'bg-violet-500 text-white' : 'bg-gray-100'
					} rounded-xl p-3.5 max-w-[80%]`}
				>
					<p className="text-xs font-display w-full ">{message}</p>
				</div>
			</div>
		</li>
	)
}
