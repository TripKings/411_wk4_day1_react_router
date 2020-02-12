import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    var car = cars.find(car =>car.id==props.match.params.id)
    return (
    <Container fixed maxWidth="xs">
        <Paper elevation={3}>
            <h1>{car.Name}</h1>
        <Chip label = {`id: ${car.id}`}></Chip>
        <Chip label = {`Name: ${car.Name}`}></Chip> 
        <Chip label = {`Miles_per_Gallon: ${car.Miles_per_Gallon}`}></Chip>
        <Chip label = {`Cylinders: ${car.Cylinders}`}></Chip>
        <Chip label = {`Displacement: ${car.Displacement}`}></Chip> 
        <Chip label = {`Horsepower: ${car.Horsepower}`}></Chip>
        <Chip label = {`Weight_in_lbs: ${car.Weight_in_lbs}`}></Chip>
        <Chip label = {`Acceleration: ${car.Acceleration}`}></Chip> 
        <Chip label = {`Year: ${car.Year}`}></Chip>
        <Chip label = {`Origin: ${car.origin}`}></Chip>
        </Paper>
    </Container> 
    )
}


export default Car