import React from 'react';
import {Card, Table, TableHead} from "@mui/material";

function SelectedTable({selectedItem}) {
  return (
    <div>
        <Table>
            <TableHead>
                <tr>
                    <th>Şikayet</th>
                    <th>Hikaye</th>
                    <th>Tanı</th>
                    
                </tr>
            </TableHead>
            <tbody>
                {selectedItem.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default SelectedTable;
