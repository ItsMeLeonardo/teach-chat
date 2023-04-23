import { useSetAtom, useAtomValue } from 'jotai'
import { addMessageAtom, chatUserAtom, chatMessagesAtom } from '.'

export function useChatForm() {
	const sendMessage = useSetAtom(addMessageAtom)
	const user = useAtomValue(chatUserAtom)
	const messages = useAtomValue(chatMessagesAtom)

	return {
		sendMessage,
		user,
		messages,
	}
}
