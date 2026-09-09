import words from './ItalianWords.json';
import LanguageTest_ControlledComponent from './LanguageTest_ControlledComponent';

export default function German() {
  

	return (
		<LanguageTest_ControlledComponent words = {[...words]} thisLingo = 'Italian Controlled Component' nextLabel='To home' nextPath='/'  />
    )
}