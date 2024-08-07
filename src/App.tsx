import { useEffect, useState } from 'react'
import { UAParser } from 'ua-parser-js'
import './App.css'

function App() {
  const [specs, setSpecs] = useState("");
  useEffect(() => {
    const parser = new UAParser(navigator.userAgent);
    console.log(parser);
    const parserResults = parser.getResult();
    setSpecs(JSON.stringify(parserResults, null, 4));
  }, []);

  const onClickCopyText = (containerid: string) => {
    const textarea = document.createElement('textarea');
    textarea.id = 'temp';
    textarea.style.height = "0";
    document.body.appendChild(textarea);
    // @ts-expect-error may no element
    textarea.value = document.getElementById(containerid).innerText; 
    const selector = document.querySelector('#temp');
    // @ts-expect-error maybe null
    selector.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  return (
    <>
      <pre id='toCopy'>
        {specs}
      </pre>
      <button onClick={() => onClickCopyText('toCopy')}>Copy</button>
    </>
  )
}

export default App
