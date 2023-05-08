import { useEffect } from 'react'

import { socket } from '@/services/socket'

export function useConnectSocketAutomatically() {
	useEffect(() => {
		const isConnected = socket.connected

		if (!isConnected) {
			socket.connect()
		}

		return () => {
			if (isConnected) {
				socket.disconnect()
			}
		}
	}, [])
}
