import { useEffect, useState } from 'react'
import { UAParser } from 'ua-parser-js'
import './App.css'

function App() {
  const [specs, setSpecs] = useState("");
  useEffect(()=>{
    let parser = new UAParser(navigator.userAgent);
    console.log(parser); 
    let parserResults = parser.getResult();
    setSpecs(JSON.stringify(parserResults, null, 4));
  }, []);

  const onClickCopyText = (containerid:string) => {
    let textarea = document.createElement('textarea');
	    textarea.id = 'temp';
	    textarea.style.height = "0";
	    document.body.appendChild(textarea);
	    textarea.value = document.getElementById(containerid).innerText;
	    let selector = document.querySelector('#temp');
	    selector.select();
	    document.execCommand('copy');
	    document.body.removeChild(textarea);
  }

  return (
    <>
      <pre id='toCopy'>
        {specs}
      </pre>
      <button onClick={ () => onClickCopyText('toCopy')}>Copy</button>
    </>
  )
}

export default App
