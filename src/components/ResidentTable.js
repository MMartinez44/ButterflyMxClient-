import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as butterflyMxService from '../services/ButterflyMxService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

export const ResidentTable = () => {
    const [resident, setResidents]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        requestDataFromApi();
    }, []);

    function requestDataFromApi(){
        butterflyMxService.getAllResidents()
        .then(res => {
            setResidents(res.data);
        })
    }

    function goToUpdate(id){
        navigate(`/update/${id}`);
    }

    function deleteResident (id){
        butterflyMxService.deleteResident(id)
        .then(()=>{
            requestDataFromApi();
        })
    }

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                    Apartment Number
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        resident.map((resident)=> {
                            return(
                                <TableRow
                                    hover
                                    key={resident.id}
                                >
                                    <TableCell>
                                        {resident.id}
                                    </TableCell>
                                    <TableCell>
                                        {resident.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {resident.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {resident.email}
                                    </TableCell>
                                    <TableCell>
                                        {resident.aptNumber}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(resident.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteResident(resident.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}