import { FormEvent } from 'react'
import Image from 'next/image'

export default function Page() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const projectType = formData.getAll('projectType');
    const referralSource = formData.getAll('referralSource');
    formData.append('referralSource', referralSource.join(', ')); // Convert array to comma-separated string
    formData.append('projectType', projectType.join(', '));
    const jsonData = Object.fromEntries(formData.entries()); // Convert FormData to JSON
    document.getElementById("estimateForm").reset(); //Object is possibly 'null'

    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify JSON content type
      },
      body: JSON.stringify(jsonData), // Send JSON data
    });  
  }
  
  return (
    <div className='flex flex-col items-center min-h-screen p-4'>
      <div className='w-full max-w-xl mb-8 text-left'>
        <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
        <div className='space-y-4'>
          <p className='flex items-center gap-4 text-xl p-2 rounded-xl'>
            <Image 
              className="w-10 h-10 rounded-md transform -rotate-12" 
              src="/phone.png" 
              alt="Phone icon" 
              width={40} 
              height={40} 
            />
            <span className="font-medium">Call us at:</span>
            <a href="tel:626-394-1989" className='text-blue-600 hover:text-blue-800 font-semibold'>
              626-394-1989
            </a>
          </p>
          <p className='flex items-center gap-4 text-xl p-2 rounded-lg'>
            <Image 
              className="w-10 h-10 rounded-md" 
              src="/email.png" 
              alt="Email icon" 
              width={40} 
              height={40} 
            />
            <span className="font-medium">Email us here:</span>
            <a href="mailto:homecastlepainting@yahoo.com" className='text-blue-600 hover:text-blue-800 font-semibold'>
              homecastlepainting@yahoo.com
            </a>
          </p>
        </div>

        <h2 className='text-2xl font-bold my-6'>Here's our Free Estimate Process</h2>
  
        <div className='flex flex-row gap-4 mb-8'>
          <div className='flex-1 p-4 border rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold mb-2'>1. Schedule</h3>
            <p className='text-gray-600'>We'll schedule a convenient time to assess your project needs</p>
          </div>

          <div className='flex-1 p-4 border rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold mb-2'>2. Evaluate</h3>
            <p className='text-gray-600'>Our experts will thoroughly evaluate the scope of work</p>
          </div>

          <div className='flex-1 p-4 border rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold mb-2'>3. Quote</h3>
            <p className='text-gray-600'>You'll receive a detailed quote for your project</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} id = "estimateForm" className='flex flex-col w-full max-w-xl space-y-4'>
        <div className='flex flex-col'>
          <label className='mb-2'>Name:</label>
          <input type="text" name="name" required placeholder="Enter your name" className='p-2 border rounded' />
        </div>

        <div className='flex flex-col'>
          <label className='mb-2'>Phone:</label>
          <input type="text" name="phone" required placeholder="Enter your phone number" className='p-2 border rounded' />
        </div>

        <div className='flex flex-col'>
          <label className='mb-2'>Email:</label>
          <input type="email" name="email" required placeholder="Enter your email" className='p-2 border rounded' />
        </div>

        <div className='flex flex-col'>
          <label className='mb-2'>Address Line 1:</label>
          <input 
            type="text" 
            name="addressLine1" 
            required 
            placeholder="Street address" 
            className='p-2 border rounded' 
          />
        </div>

        <div className='flex flex-col'>
          <label className='mb-2'>Address Line 2:</label>
          <input 
            type="text" 
            name="addressLine2" 
            placeholder="Apt, Suite, Unit, etc. (optional)" 
            className='p-2 border rounded' 
          />
        </div>

        <div className='flex flex-row space-x-4'>
          <div className='flex flex-col flex-1'>
            <label className='mb-2'>City:</label>
            <input 
              type="text" 
              name="city" 
              required 
              placeholder="City" 
              className='p-2 border rounded' 
            />
          </div>
          
          <div className='flex flex-col w-24'>
            <label className='mb-2'>State:</label>
            <input 
              type="text" 
              name="state" 
              required 
              placeholder="State" 
              className='p-2 border rounded' 
            />
          </div>
          
          <div className='flex flex-col w-32'>
            <label className='mb-2'>ZIP Code:</label>
            <input 
              type="text" 
              name="zipCode" 
              required 
              placeholder="ZIP" 
              className='p-2 border rounded' 
            />
          </div>
        </div>

        <div className='flex flex-col space-y-2'>
          <label className='mb-2'>Preferred Contact Method:</label>
          <div className='space-x-4'>
            <label className='inline-flex items-center'>
              <input type="radio" name="contactMethod" value="phone" className='mr-2' required/>
              Phone
            </label>
            <label className='inline-flex items-center'>
              <input type="radio" name="contactMethod" value="email" className='mr-2' />
              Email
            </label>
          </div>
        </div>

        <div className='flex flex-col space-y-2'>
          <label className=''>Type of Project:</label>
          <label className='text-gray-400 text-small '>Select all that apply</label>
          <div className='flex flex-col space-y-2'>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="projectType" value="exterior" className='mr-2' />
              Exterior Painting
            </label>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="projectType" value="interior" className='mr-2' />
              Interior Painting
            </label>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="projectType" value="cabinets" className='mr-2' />
              Cabinets
            </label>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="projectType" value="fence/gate" className='mr-2' />
              Fence/Gate
            </label>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="projectType" value="other" className='mr-2' />
              Other
            </label>
          </div>
        </div>

        <div className='flex flex-col space-y-2'>
          <label className=''>How did you hear about us?</label>
          <label className='text-gray-400 text-small '>Select all that apply</label>

          <div className='flex flex-col space-y-2'>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="referralSource" value="repeatClient" className='mr-2' />
              Repeat Client 
            </label>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="referralSource" value="referral" className='mr-2' />
              Referral
            </label>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="referralSource" value="email" className='mr-2' />
              Email
            </label>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="referralSource" value="internetAd" className='mr-2' />
              Internet Ad
            </label>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="referralSource" value="vanWrap" className='mr-2' />
              Van Wrap
            </label>
            <label className='inline-flex items-center'>
              <input type="checkbox" name="referralSource" value="none of the above" className='mr-2' />
              None of the above
            </label>
          </div>
        </div> 

        <div className='flex flex-col'>
          <label className='mb-2'>Project Description:</label>
          <textarea
            name="projectDescription"
            placeholder="Please describe your project in detail..."
            required
            rows={4}
            className='p-2 border rounded resize-y'
          />
        </div>

        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
          Submit
        </button>
        
      </form>
    </div>
  )
}