import React, { useState } from 'react';

// File Explorer component
const FileExplorer = () => {
  const [folders, setFolders] = useState([]);

  // Function to add a new folder
  const addFolder = () => {
    const newFolder = {
      name: `New Folder ${folders.length + 1}`,
      files: [],
    };
    setFolders([...folders, newFolder]);
  };

  return (
    <div>
      <button onClick={addFolder}>Add Folder</button>
      {folders.map((folder, index) => (
        <Folder key={index} folder={folder} />
      ))}
    </div>
  );
};

// Folder component
const Folder = ({ folder }) => {
  const [files, setFiles] = useState([]);

  // Function to add a new file to the folder
  const addFile = () => {
    const newFile = `New File ${files.length + 1}`;
    setFiles([...files, newFile]);
  };

  return (
    <div>
      <h3>{folder.name}</h3>
      <button onClick={addFile}>Add File</button>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;
