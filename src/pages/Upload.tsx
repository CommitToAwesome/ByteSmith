import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload as UploadIcon, X } from 'lucide-react';

export default function Upload() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf']
    }
  });

  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-white"
      >
        Upload Achievement
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl bg-white/20 backdrop-blur-sm rounded-xl p-8 text-white"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Achievement Title</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter achievement title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="input-field">
              <option value="">Select category</option>
              <option value="academic">Academic</option>
              <option value="sports">Sports</option>
              <option value="co-curricular">Co-curricular</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Date of Achievement</label>
            <input
              type="date"
              className="input-field dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              className="input-field min-h-[100px]"
              placeholder="Describe your achievement"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Upload Proof</label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-400 hover:border-blue-500'}`}
            >
              <input {...getInputProps()} />
              <UploadIcon className="mx-auto mb-4" size={32} />
              <p className="text-sm">
                {isDragActive
                  ? 'Drop the files here...'
                  : 'Drag & drop files here, or click to select files'}
              </p>
              <p className="text-xs mt-2 text-gray-300">
                Supported formats: JPEG, PNG, PDF
              </p>
            </div>
          </div>

          {files.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {files.map((file, index) => (
                <div key={index} className="relative group">
                  {file.type.startsWith('image/') ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Preview"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-sm text-gray-600">PDF</span>
                    </div>
                  )}
                  <button
                    onClick={() => removeFile(index)}
                    className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Submit Achievement
          </button>
        </form>
      </motion.div>
    </div>
  );
}