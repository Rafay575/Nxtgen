import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudUploadIcon,DocumentIcon } from '@heroicons/react/outline';
const AccountInfo = ({ onNext, onPrevious, submitAccountInfo, image ,closeModal}) => {
  const [imageFile, setImageFile] = useState(image);
  const [preview, setPreview] = useState(image ? image.name : null);
  const [error, setError] = useState(null);

  const handleFiles = useCallback((files) => {
    console.log("Files selected:", files);
    if (files.length === 1) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        if (file.size <= 20 * 1024 * 1024) { // 20 MB limit
          setImageFile(file);
          setPreview(file.name);
          setError(null);
        } else {
          setError('File size exceeds 20 MB limit');
          setImageFile(null);
          setPreview(null);
        }
      } else {
        setError('Only image files are allowed');
        setImageFile(null);
        setPreview(null);
      }
    } else {
      setError('Only one image can be uploaded');
      setImageFile(null);
      setPreview(null);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleFiles,
    accept: 'image/*',
    maxFiles: 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!imageFile) {
      setError('Image is required');
      return;
    }
    submitAccountInfo(imageFile)
    onNext();
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <form onSubmit={handleSubmit} className="relative w-full  p-5 bg-white rounded-lg shadow-xl">
                <button onClick={closeModal} className='absolute top-3 right-3'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 hover:text-red-600 transition-colors"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-800">Add Screen Shot of Payment</h2>

        <div className="my-4">
          <div>
            <p className="font-bold text-lg text-indigo-800">Account Number</p>
            <p className="text-gray-700 mb-2">3282393892398329</p>
            <p className="font-bold text-lg text-indigo-800">Bank</p>
            <p className="text-gray-700 mb-2">Meezan Bank</p>
            <p className="font-bold text-lg text-indigo-800">Account Title</p>
            <p className="text-gray-700 mb-2">Most Valuable Events</p>
          </div>
        </div>

        <div
          {...getRootProps()}
          className={`flex flex-col items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200 ${error ? 'border-red-500' : 'border-indigo-300 hover:border-indigo-400'} my-2`}
        >
          <input
            {...getInputProps()}
            type="file"
            className="hidden"
          />
          <CloudUploadIcon className="w-12 h-12 text-indigo-500 mb-2" />
          <p className="text-indigo-500 text-sm">Drag & Drop files or Click to Upload</p>
          <p className="text-indigo-400 text-sm">up to 20 MB image size</p>
        </div>
        {error && (
          <p className="text-red-600 text-sm mt-2">{error}</p>
        )}

        {preview && (
          <div className="mt-2">
           <p className='text-sm text-indigo-500'>  <DocumentIcon className="w-12 h-12 text-indigo-500 mb-2" /> {preview}</p>
          </div>
        )}

        <div className="flex items-center justify-between mt-6 space-x-4">
          <button
            type="button"
            onClick={onPrevious}
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
