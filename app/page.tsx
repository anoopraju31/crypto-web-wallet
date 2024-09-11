'use client'

import { useState, type FC } from 'react'
import GenerateSeedPhrase from '@/components/GenerateSeedPhrase'

const HomePage: FC = () => {
	const [mnemonic, setMnemonic] = useState<string>('')
	const handleMnemonicChange = (value: string) => setMnemonic(value)

	return (
		<main className='bg-gray-200 min-h-screen'>
			<div className='w-full max-w-2xl mx-auto px-6 md:px-0 py-12 flex flex-col gap-6'>
				<GenerateSeedPhrase
					mnemonic={mnemonic}
					handleMnemonicChange={handleMnemonicChange}
				/>
			</div>
		</main>
	)
}

export default HomePage
