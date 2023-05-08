import { useConnectSocketAutomatically } from '@/hooks/socket'
import '@/styles/globals.css'
import { IconoirProvider } from 'iconoir-react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	useConnectSocketAutomatically()
	return (
		<IconoirProvider>
			<Component {...pageProps} />
		</IconoirProvider>
	)
}
