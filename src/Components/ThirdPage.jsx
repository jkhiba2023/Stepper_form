import { TbCircleNumber3Filled } from "react-icons/tb";

export const ThirdPage = ({
  formData,
  handleInputChange,
  nextPage,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col space-y-6 animate-fadeIn">
      <div className="flex items-center justify-center mb-4 animate-pulse">
        <TbCircleNumber3Filled size={30} className="text-blue-600" />
      </div>

      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter email"
            className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="PhoneNumber"
            className="text-gray-700 font-semibold mb-1"
          >
            Phone
          </label>
          <input
            type="number"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter phone number"
            className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
            required
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => nextPage(2)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-xl transition-transform transform hover:scale-105"
          >
            Previous
          </button>
          <button
            type="submit"
            disabled={!formData.email || !formData.PhoneNumber}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
