import {useState} from 'react'

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
          value={name}
          id="name"
          type="text"
          onChange={e=> setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          value={email}
          id="email"
          type="text"
          onChange={e=> setEmail(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
          value={phone}
          id="phone"
          type="text"
          onChange={e=> setPhone(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
