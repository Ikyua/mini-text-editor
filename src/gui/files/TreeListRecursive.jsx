// gui/files/TreeListRecursive.jsx
import * as React from 'react';
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/solid'
import { cacheDirectory } from "../../files/cacheDirectory";

export function TreeListRecursive({directory, setFilePath}) {
  
  const [displayItems, setDisplayItems] = React.useState(false);
  
  return (
    <>
      <li className="flex" onClick={function(){
        
      }}><FolderIcon height="16" className="m-1"/> {directory.split("/").pop()}</li>
      {displayItems ? (
      <ul className={"list-inside pl-4"}>
        
      </ul>
      ) : null}
    </>
  );
  
}
