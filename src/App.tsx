import React, { useState, useRef } from "react";
import './index.css';
import axios, { AxiosResponse } from 'axios';
import FormComponent from "./components/form/FormComponent";
import ResponseComponent from "./components/response/ResponseComponent";

export default function App() {
  const [responseData, setResponseData] = useState<AxiosResponse<any> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  const handleResponse = (response: AxiosResponse<any> | null, loading: boolean) => {
    setResponseData(response);
    setIsLoading(loading);
    setTimeout(() => {
      if (responseRef.current) {
        responseRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    , 100);
  };

  return (
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-1">
        <div className="px-8 py-12 lg:px-12 flex justify-center">
          <div className="w-1/2">
            <FormComponent onResponse={(response: AxiosResponse<any> | null, loaderState: boolean) => handleResponse(response, loaderState)} />
          </div>
        </div>  
      </div>

      <div className="grid lg:grid-cols-1">
        <div className="px-8 py-12 lg:px-12 flex justify-center">
          <div className="w-1/2" ref={responseRef}>
            <ResponseComponent responseData={responseData} isLoading={isLoading} />
          </div>
        </div>  
      </div>
    </div>
  );
}
