import {ResidentTable} from "../components/ResidentTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export const Resident =() => {
    const navigate = useNavigate();

    function addUser(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addUser()}>Add User</Button>
            <ResidentTable />
        </>
    )
}

