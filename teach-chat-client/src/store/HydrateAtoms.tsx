import { useHydrateAtoms } from 'jotai/utils'

import type { ReactNode } from 'react'
import type { WritableAtom } from 'jotai'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyWritableAtom = WritableAtom<unknown, any[], any>
type Props = {
	children: ReactNode
	initialState: Iterable<readonly [AnyWritableAtom, unknown]>
}

export default function HydrateAtoms({ children, initialState }: Props) {
	useHydrateAtoms(initialState)

	return children as JSX.Element
}
