import { useState } from "react";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";

export const MultiStepperPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    email: "",
    PhoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Form Submitted Successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      email: "",
      PhoneNumber: "",
    });
    setCurrentPage(1);
  };

  return (
    <section className="w-screen h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-20 transition-all duration-500">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col space-y-6 animate-fadeIn">
        {currentPage === 1 && (
          <FirstPage
            nextPage={setCurrentPage}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {currentPage === 2 && (
          <SecondPage
            nextPage={setCurrentPage}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {currentPage === 3 && (
          <ThirdPage
            nextPage={setCurrentPage}
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </section>
  );
};
