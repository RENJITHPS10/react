
import { useState } from 'react';
import './App.css'
import TextField from '@mui/material/TextField';
function App() {
  const [pr, setpr] = useState('')
  const [rate, setrate] = useState('')
  const [year, setyear] = useState('')
  const [interset, setinterset] = useState('')
  const [isp, setIspPrincipal] = useState(true)
  const [isr, setIsrRate] = useState(true)
  const [isy, setIsy] = useState(true)
  const validate = (e) => {
    console.log(e.target.name)
    console.log(!!e.target.value.match('^[0-9]*$'))

    if (!!e.target.value.match('^[0-9]*$')) {
      if (e.target.name == 'principle') {
        setpr(e.target.value)
        setIspPrincipal(true)
      } else if (e.target.name == 'rate') {
        setrate(e.target.value)
        setIsrRate(true)
      } else {
        setyear(e.target.value)
        setIsy(true)
      }
    }else{
      if (e.target.name == 'principle') {
        setpr(e.target.value)
        setIspPrincipal(false)
      } else if (e.target.name == 'rate') {
        setrate(e.target.value)
        setIsrRate(false)
      } else {
        setyear(e.target.value)
        setIsy(false)
      }

    }


  }

  const handleReset=()=>{
    setpr('')
    setrate('')
    setyear('')
    setIspPrincipal(true)
    setIsrRate(true)
    setIsy(true)

  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className="col-md-4 bg-dark mt-5 text-white p-4 rounded-3">
            <h1>simple interset app</h1>
            <h6>Calculate your simple interest</h6>
            <div className='w-full bg-secondary rounded -3 d-flex justify-content-center align-items-center flex-column' style={{ height: "150px" }}>
              <h1>₹1200</h1>
              <p>Total simple interest</p>
            </div>
            <TextField name='principle' id="filled-basic" value={pr} label="Principle amount" variant="filled" className='bg-light rounded-3 w-100 mt-3' onChange={(e) => { validate(e) }} />
            {!isp && <span className='text-danger'>Invalid input</span>}
            <TextField id="filled-basic" name="rate" value={rate} label="Rate of interest" variant="filled" className='bg-light rounded-3 w-100 mt-3' onChange={(e) => { validate(e) }} />
            {!isr && <span className='text-danger'>Invalid input</span>}
            <TextField id="filled-basic" name='year' value={year} label="Time" variant="filled" className='bg-light rounded-3 w-100 mt-3' onChange={(e) => { validate(e) }} />
            {!isy && <span className='text-danger'>Invalid input</span>}
            <div className='d-flex justify-content-between'>
              <button className='btn btn-success px-4 py-3 mt-4'>Calculate</button>
              <button className='btn btn-light px-4 py-3 mt-4 '  onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
