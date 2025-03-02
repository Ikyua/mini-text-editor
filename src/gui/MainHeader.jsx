// gui/MainHeader.jsx
import * as React from 'react';
import { Button } from './components/Button';
import { saveFile, saveFileAs, openDirectory } from "../files/functions";

export function MainHeader({directory, setDirectory, setFilePath, filePath, code}) {
  return (
    <nav className="fixed z-50 w-full border-b border-gray-200 dark:bg-gray-800/75 dark:border-gray-700 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] bg-white/75" style={{zIndex:1000000}}>
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start dark:text-white">
            Title
          </div>
          <div className="flex items-center justify-end dark:text-white gap-2">
            Buttons
          </div>
        </div>
      </div>
    </nav>
  );
}

