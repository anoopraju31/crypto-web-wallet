'use client'

import type { ChangeEvent, FC } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { generateMnemonic } from 'bip39'

type Props = {
	mnemonic: string
	handleMnemonicChange: (value: string) => void
}

const GenerateSeedPhrase: FC<Props> = ({ mnemonic, handleMnemonicChange }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleMnemonicChange(e.target.value)
	}
	const generateMnemonics = async () => {
		const mnemonic = await generateMnemonic()
		handleMnemonicChange(mnemonic)
	}

	return (
		<div className='flex items-center flex-col md:flex-row gap-4'>
			<Input
				type='text'
				placeholder='Enter your mnemonic'
				value={mnemonic}
				onChange={handleChange}
				className='border-gray-950'
			/>

			<Button
				type='button'
				className='bg-gray-800 hover:bg-gray-950/90 active:bg-gray-950/80'
				onClick={generateMnemonics}>
				Generate Mnemonic
			</Button>
		</div>
	)
}

export default GenerateSeedPhrase
