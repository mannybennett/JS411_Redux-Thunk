import React from 'react'
import { Menu, MenuItem, Container, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import { MoreVert } from '@mui/icons-material'

const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteId, setDeleteId] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event, id) => {
        setDeleteId(id)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
  };
    return (
        <Container sx={{ marginTop: 15 }}>
            <Button onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Make</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.makes.map((make, idx) => {
                            return (
                            <TableRow key={idx}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell><MoreVert onClick={(event) => handleClick(event, make.MakeId)}></MoreVert></TableCell>
                            </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={() => {props.deleteMake(deleteId) && setDeleteId(null)}}>Delete</MenuItem>
                </Menu>
            </Container>
        </Container>
    )
}

export default Import