import React, { useState } from "react";
import './index.css';
import FormComponent from "./components/form/FormComponent";
import ResponseComponent from "./components/response/ResponseComponent";

export default function App() {
  const [responseData, setResponseData] = useState(null);

  return (
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-1">
        <div className="px-8 py-12 lg:px-12 flex justify-center">
          <div className="w-1/2">
            <FormComponent onResponse={setResponseData} />
          </div>
        </div>  
      </div>

      <div className="grid lg:grid-cols-1">
        <div className="px-8 py-12 lg:px-12 flex justify-center">
          <div className="w-1/2">
            {responseData && <ResponseComponent responseData={responseData} />}
          </div>
        </div>  
      </div>
    </div>
  );
}
