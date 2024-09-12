import { useEffect, useState } from 'react';
import './App.css'
import { FieldSeen } from './components/fieldSeen';
import { useField } from './hooks/useField'
import { useCount } from './hooks/useCount';
import { useClear } from './hooks/useClear';
import { Result } from './components/result';
import { Question } from './components/question';

function App() {

  const [isStart, setIsStart] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);
  const { field, clearField, handleClick, resetField } = useField(isStart);
  const { isClear, clearText, intervalFlag, resetClear } = useClear(field, clearField, isStart);
  const { time, resetTime } = useCount(isStart, intervalFlag);

  useEffect(() => {
    if (intervalFlag) {
      setIsStart(false);
    }
  }, [intervalFlag]);

  const reset = () => {
    resetClear();
    resetTime();
    resetField();
  }
  console.log(isStart);


  return (
    <>
      <div className='question' onClick={() => { setIsQuestion(!isQuestion) }} style={{ zIndex: 100 }} ></div>
      {!isClear && !isQuestion ?
        <FieldSeen field={field}
          onPush={handleClick}
          onStart={setIsStart}
          time={time}
          isStart={isStart}
          clearText={clearText}
        ></FieldSeen>
        : <Result time={time} clearText={clearText} reset={reset} ></Result>}
      {isQuestion && <Question></Question>}
    </>
  )
}

export default App
