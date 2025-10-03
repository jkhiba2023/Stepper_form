import { TbCircleNumber1Filled } from "react-icons/tb";

export const FirstPage = ({ formData, handleInputChange, nextPage }) => {
  return (
    <div className="flex flex-col space-y-6">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-4 animate-pulse">
        <TbCircleNumber1Filled size={30} className="text-blue-600" />
      </div>

      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="text-gray-700 font-semibold mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter first name"
            className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="text-gray-700 font-semibold mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter last name"
            className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
            required
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-xl transition-transform transform hover:scale-105"
            onClick={() => nextPage(1)}
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!formData.firstName || !formData.lastName}
            onClick={() => nextPage(2)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
