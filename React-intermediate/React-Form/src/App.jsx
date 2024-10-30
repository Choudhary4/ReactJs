import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    comments: false,
    candidates: false,
    offers: false,
    mode: ''
  });

  function onChangeHandler(event) {
    const { name, checked, value, type } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      };
    });
    console.log(formData);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("submited",formData);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">User Information</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="Saurabh"
            name="firstName"
            value={formData.firstName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="Kuntal"
            name="lastName"
            value={formData.lastName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
          <input
            type="email"
            onChange={onChangeHandler}
            placeholder="kuntal@gmail.com"
            name="email"
            value={formData.email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Street Address</label>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="Jatoli"
            name="streetAddress"
            value={formData.streetAddress}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="Bharatpur"
            name="city"
            value={formData.city}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="Rajasthan"
            name="state"
            value={formData.state}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Zip / Postal code</label>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="321206"
            name="zip"
            value={formData.zip}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

     <fieldset>
      <legend className="block text-gray-700 text-sm font-bold mb-2">By Email</legend>
      <div className="mb-4">
         
          <div className="flex items-center">
            <input
              type="checkbox"
              onChange={onChangeHandler}
              name="comments"
              id="comments"
              className="mr-2 leading-tight"
              checked={formData.comments}
            />
            <label htmlFor="comments" className="text-gray-700">Comments</label>
          </div>
          <p className="text-xs text-gray-600">Get notified when someone posts a comment on a posting</p>

          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              onChange={onChangeHandler}
              name="candidates"
              id="Candidates"
              className="mr-2 leading-tight"
              checked={formData.candidates}
            />
            <label htmlFor="Candidates" className="text-gray-700">Candidates</label>
          </div>
          <p className="text-xs text-gray-600">Get notified when a candidate applies for a job</p>

          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              onChange={onChangeHandler}
              name="offers"
              id="offers"
              className="mr-2 leading-tight"
              checked={formData.offers}
            />
            <label htmlFor="offers" className="text-gray-700">Offers</label>
          </div>
          <p className="text-xs text-gray-600">Get notified when a candidate accepts or rejects an offer</p>
        </div>
     </fieldset>

       <fieldset>
        <legend className="block text-gray-700 text-sm font-bold mb-2"> Push Notifications </legend>
        <div className="mb-4">
         
          <p className="text-xs text-gray-600 mb-2">These are delivered via SMS to your mobile phone</p>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="mode"
              value="everything"
              onChange={onChangeHandler}
              checked={formData.mode === 'everything'}
              id="everything"
              className="mr-2 leading-tight"
            />
            <label htmlFor="everything" className="text-gray-700">Everything</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="mode"
              value="Same-As-Email"
              onChange={onChangeHandler}
              checked={formData.mode === 'Same-As-Email'}
              id="sameAsEmail"
              className="mr-2 leading-tight"
            />
            <label htmlFor="sameAsEmail" className="text-gray-700">Same As Email</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="mode"
              value="No-Push-notification"
              onChange={onChangeHandler}
              checked={formData.mode === 'No-Push-notification'}
              id="notification"
              className="mr-2 leading-tight"
            />
            <label htmlFor="notification" className="text-gray-700">No Push Notification</label>
          </div>
        </div>
       </fieldset>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
