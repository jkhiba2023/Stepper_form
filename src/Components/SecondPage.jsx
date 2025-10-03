import { TbCircleNumber2Filled } from "react-icons/tb";

export const SecondPage = ({ formData, handleInputChange, nextPage }) => {
  return (
    <div className="flex flex-col space-y-6 animate-fadeIn">
      <div className="flex items-center justify-center mb-4 animate-pulse">
        <TbCircleNumber2Filled size={30} className="text-blue-600" />
      </div>

      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <p className="text-gray-700 font-semibold mb-2">Gender</p>
          <div className="flex gap-4">
            {["MALE", "FEMALE", "OTHER"].map((g) => (
              <label
                key={g}
                className="flex items-center gap-2 text-gray-700 cursor-pointer"
              >
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  className="accent-blue-600 w-4 h-4"
                  onChange={handleInputChange}
                  checked={formData.gender === g}
                  required
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="age" className="text-gray-700 font-semibold mb-1">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter your age"
            className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
            required
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => nextPage(1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-xl transition-transform transform hover:scale-105"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={!formData.gender || !formData.age}
            onClick={() => nextPage(3)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
