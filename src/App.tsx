import React from "react";
import './index.css';
import FormComponent from "./components/FormComponent";

export default function App() {
  return (
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-1">
        <div className="px-8 py-12 lg:px-12 lg:py-24 flex justify-center">
          <div className="w-1/2 pt-20">
            <FormComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
