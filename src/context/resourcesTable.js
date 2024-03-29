import './recourcesTable.css'
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

function ContextTable() {

 
  const dataResources = useSelector(state => state.tables.table);
  const [data, setData] = useState(dataResources);

  useEffect(() => {
    setData(dataResources)
  }, [dataResources]);
  /*const getData =() => {
    dataResources = useSelector(state => state.tables.table)
  }*/
  setInterval(() => {
    window.location.reload()}, 12000);
 /* let resources;
  resources = dataResources; */

  /*
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 2000);
    return () => {
      clearInterval(interval);
    };
  }, []); 
  */


  //console.log(resources);
  return (
      <div class="containerRecourcesTable">
        <table class="table table-dark table-hover table-bordered">
            <thead>
            <tr>
              <th scope="col">Nombre Fuente</th>
              <th scope="col">PH</th>
              <th scope="col">Temperatura</th>
              <th scope="col">Conductividad</th>
              <th scope="col">Profundidad</th>
              <th scope="col">Turbidez</th>
              <th scope="col">Latitud</th>
              <th scope="col">Longitud</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
            </thead>
        {dataResources?.map((fuente) => {
          return (
            
            <tbody>
            <tr class>
              <td>{fuente.name}</td>
              <td>{fuente.valoracion.pH[fuente.valoracion.pH.length-1]}</td>
              <td>{fuente.valoracion.temperature[fuente.valoracion.temperature.length-1]}</td>
              <td>{fuente.valoracion.conductivity[fuente.valoracion.conductivity.length-1]}</td>
              <td>{fuente.valoracion.depth[fuente.valoracion.depth.length-1]}</td>
              <td>{fuente.valoracion.turbidity[fuente.valoracion.turbidity.length-1]}</td>
              <td>{fuente.coordenadas.latitud}</td>
              <td>{fuente.coordenadas.longitud}</td>

            </tr>
            </tbody>
            
          );
        })}
        </table>
        </div>
        
      
  );
}

export default ContextTable;

{/*
        <FoodItem
            key={food.valoracion.pH}
            itemName={food.valoracion.conductivity}
            quantity={food.valoracion.turbidity}
            foodDescription={food.valoracion.temperature}
            imageAlt={food.valoracion.depth}
          />
        
        <tbody>
        <tr th:each="fuente : ${fuentes}">
          <td th:text="${fuente.name}"></td>
          <td th:text="${fuente.valoracion.pH.get(fuente.valoracion.pH.size()-1)}"></td>
          <td th:text="${fuente.valoracion.temperature.get(fuente.valoracion.temperature.size()-1)}"></td>
          <td th:text="${fuente.valoracion.conductivity.get(fuente.valoracion.conductivity.size()-1)}"></td>
          <td th:text="${fuente.valoracion.depth.get(fuente.valoracion.depth.size()-1)}"></td>
          <td th:text="${fuente.valoracion.turbidity.get(fuente.valoracion.turbidity.size()-1)}"></td>
          <td><button class="btn btn-primary w-100"><i class="fa fa-edit"></i></button></td>
            <form th:action="@{'/watersource/delete/?id=' + ${fuente.id}}" method="post">
              <button type="submit" class="btn btn-danger w-100"><i class="fa fa-trash"></i></button>
            </form>
        </tr>
        </tbody>*/}
