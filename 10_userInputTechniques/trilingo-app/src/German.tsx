import words from './GermanWords.json';
import LanguageTest_UncontrolledComponent from './LanguageTest_UncontrolledComponent';  

export default function German() {
  

	return (
		<LanguageTest_UncontrolledComponent words = {[...words]} thisLingo = 'German Uncontrolled Component' nextLabel='To Italian test ▶️' nextPath='/italian'  />
    )
}