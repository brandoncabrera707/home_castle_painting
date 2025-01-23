import { FormEvent } from 'react';

export default function Page(){
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formdata,
    });
    const data = await response.json();
}
return (
  <form onSubmit={handleSubmit}>
    <label>
      Name
      <input type="text" name="name" />
    </label>
    <button type="submit">Submit</button>
  </form>
);
}