import monitorService from "../../services/monitorService"
import api from '../../api/api'

const data = [

]


const GET_MONITOR = "GET_MONITOR"
const GET_MONITOR_ERROR = "GET_MONITOR_ERROR"
const DELETE_RESOURCE = "DELETE_RESOURCE";
const DELETE_VALUES = "DELETE_VALUES";


export default function monitorReducer(state = data, action){
  switch (action.type) {
    case DELETE_RESOURCE:
      return {
        ...state,
        errorRes: undefined,
        monitor: action.payload
      }
    case GET_MONITOR:
      return {
        ...state,
        errorRes: undefined,
        monitor: action.payload
      }
    case GET_MONITOR_ERROR:
      return {
        ...state,
        monitor: undefined,
        errorRes: action.payload
     
      }
    case DELETE_VALUES:
      return {
        ...state,
        errorRes: undefined,
        monitor: action.payload
      }
  }
  return state
}


export const monitorActions = () => async (dispatch, getState) => {
  try {
    const monitor = await monitorService.monitorData() 
    //console.log(monitor.data)
    if(monitor.error){
      dispatch({
        type: GET_MONITOR_ERROR,
        payload: monitor.error
      })
    }
    dispatch({
      type: GET_MONITOR,
      payload: monitor
    })
  } catch (error) {
    dispatch({
      type: GET_MONITOR_ERROR,
      payload: error
    })
  }
}


export const deleteResource = (resourceId) => async (dispatch, getState) => {
  try {
    // Make the DELETE request to the API
    await api.delete(`/waterresources2/${resourceId}`);
    
    // Update the Redux store after successful deletion
    const updatedMonitor = getState().monitor.monitor.filter(resource => resource.id !== resourceId);
    dispatch({
      type: DELETE_RESOURCE,
      payload: updatedMonitor
    });
  } catch (error) {
    throw error;
  }
}

export const deleteValues = (name, index) => async (dispatch, getState) => {
  try {
    await api.delete(`/waterresources2/${name}/deleteValue/${index}`);

    const currentState = getState().monitor.monitor;

    // Create a new array with the updated values
    const updatedResources = currentState.map(resource => {
      if (resource.name === name) {
        // Clone the resource and update the value array for pH
        const updatedpH = [...resource.valoracion.pH];
        updatedpH.splice(index, 1);

        // Clone the resource and update the value array for temperature
        const updatedTemperature = [...resource.valoracion.temperature]; 
        updatedTemperature.splice(index, 1); 

        // Clone the resource and update the value array for conductivity
        const updatedConductivity = [...resource.valoracion.conductivity]; 
        updatedConductivity.splice(index, 1); 

        // Clone the resource and update the value array for depth
        const updatedDepth = [...resource.valoracion.depth]; 
        updatedDepth.splice(index, 1); 

        // Clone the resource and update the value array for date
        const updatedTurbidity = [...resource.turbidity]; 
        updatedTurbidity.splice(index, 1); 

        // Clone the resource and update the value array for date
        const updatedDate = [...resource.date]; 
        updatedDate.splice(index, 1); 

        // Clone the resource and update the valoracion object
        const updatedResource = {
          ...resource,
          date: updatedDate,
          valoracion: {
            ...resource.valoracion,
            pH: updatedpH,
            temperature: updatedTemperature,
            conductivity: updatedConductivity,
            depth: updatedDepth,
            turbidity: updatedTurbidity,
          }
        };

        return updatedResource;
      }
      return resource; // Return unchanged resources
    });


    dispatch({ 
      type: DELETE_VALUES, 
      payload: updatedResources
    });
  } catch (error) {
    throw error;
  }
};