import { FormEvent } from 'react'
 
export default function Page() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const jsonData = Object.fromEntries(formData.entries()); // Convert FormData to JSON
  
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify JSON content type
      },
      body: JSON.stringify(jsonData), // Send JSON data
    });  
  }
  

 
  return (
    <div className='flex flex-col items-center justify-center'>
    <form onSubmit={handleSubmit}>
      <label className=''>Name:</label>
      <input type="text" name="name" required placeholder="Enter your name" />
      <label className=''>Phone:</label>
      <input type ="text" name = "phone" required placeholder = "Enter your phone number"/> 
      <label className=''>Email:</label>
      <input type="text" name="email" required placeholder="Enter your email" />
      <input type ="checkbox" name = "checkbox" required placeholder = "Enter your checkbox"/>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}