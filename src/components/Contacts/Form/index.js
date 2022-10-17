import { useState, useEffect } from 'react';

const initialFormValue = { fullname: '', phone_number: '' };;

function Form({ addContact, contacts }) {

    const [form, setForm] = useState(initialFormValue)

    useEffect(() => {
        setForm(initialFormValue)
    }, [contacts])

    const onChangeInput = (e) => {

        setForm({...form, [e.target.name]: e.target.value })

    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === '' || form.phone_number === '') {
            return false;
        }

        addContact([...contacts, form])

        console.log(form);
    }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name='fullname' placeholder='enter the name' value={form.fullname} onChange={onChangeInput}/>
      </div>
      
      <div>
        <input name='phone_number' placeholder='enter the phone number' value={form.phone_number} onChange={onChangeInput}/>
      </div>

      <div className='btn'>
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form
