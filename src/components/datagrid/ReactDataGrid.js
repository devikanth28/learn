import React from 'react'
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';


const ReactDataGrid = () => {
    
    const columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' }
    ];
    
    const rows = [
      { id: 0, title: 'Example' },
      { id: 1, title: 'Demo' }
    ];
    
      return <DataGrid rowHeight={50} columns={columns} rows={rows} />;
}

export default ReactDataGrid