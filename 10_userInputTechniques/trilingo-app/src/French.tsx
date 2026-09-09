import words from './ItalianWords.json';
import LanguageTest from './LanguageTest';  

export default function French() {
  

	return (
		<LanguageTest words = {[...words]} thisLingo = 'French' nextLabel='To German test ▶️' nextPath='/german'  />
    )
}