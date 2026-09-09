import { Link } from 'react-router-dom';
import { useState } from 'react';
  
export default function LanguageTest_ControlledComponent({ words, thisLingo, nextLabel, nextPath }: {
    words: string[]
	thisLingo : string
	nextLabel : string
	nextPath : string
}){
	
	let [correctGuesses, setCorrectGuesses] = useState(0);
	let [totalGuesses, setTotalGuesses] = useState(0);
	let [availableWords, setAvailableWords] = useState([...words]);

    let [userInput, setUserInput] = useState('')
    let [index, setIndex] = useState(Math.floor(Math.random() * availableWords.length));
    
	let englishWord: string | undefined
	let translatedWord: string
	

    if (availableWords.length !== 0) {
		[englishWord, translatedWord] = availableWords[index].split(':'); 
	}

	

	function onSubmit() {		
		
		if (userInput.trim().toLowerCase() === translatedWord) {
			setCorrectGuesses(()=>correctGuesses + 1);
			availableWords.splice(index, 1)
			setAvailableWords(()=>availableWords)
            setIndex(Math.floor(Math.random() * availableWords.length))
		}
		setUserInput('');
		setTotalGuesses(totalGuesses + 1);
	}

	return (
		<>
			<h1>{thisLingo} test</h1>

			<div hidden={englishWord === undefined}>
				
				<div className="wordPanel">
					<b>{englishWord}</b>
				</div>
				
				<div className="guessPanel">
					<input 
						type="text" 
						value={userInput}
						placeholder={`What's it in ${thisLingo}?`}
						autoFocus
						onKeyUp={e => {
							if (e.key === 'Enter')
								onSubmit();
						}}

                        onChange={e=>setUserInput(e.target.value)}
					/>					
					<button onClick={onSubmit}>Submit</button>
				</div>
			</div>

			<div className="resultPanel">
				Correct guesses: {correctGuesses} out of {totalGuesses}
			</div>	

			<Link to={nextPath}>{nextLabel}</Link>
		</>
    )
}