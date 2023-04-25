import { useState } from 'react'

function Form (){
    const [form, setForm] = useState('')

    return (
        <div>
            <form>
                <input type='text'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Form