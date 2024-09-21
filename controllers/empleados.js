const axios = require('axios');
const {request, response} = require('express'); 

const getEmpleadoOld = (req = request, res = response) => {
  const{id:idEmpleado} = req.params;
  console.log(idEmpleado);

  axios.get('https://66d0f21f181d059277e01d3c.mockapi.io/api/v1/empleados')
  .then((response) => {
    // const {statusCode, statusMessage, data} = response
    const {data} = response

    const newArray = data.filter(item => item.id === idEmpleado)
    console.log(data);

    res.status(200).json({
      msg: 'ok',
      // data: response.data
      data:newArray
    })
    // res.status(400).json({
    //   msg: 'Error',
    //   error
    // })
  })
  .catch((error) =>{
    // handle error
    console.log(error);
  })
//   .finally(function () {
//     // always executed
//   });

}

//Forma que quiere el profe para traer el ID
const getEmpleado = (req = request, res = response) => {
  // const{id:idEmpleado} = req.params;
  const{idEmpleado} = req.params;

  console.log(idEmpleado);

  axios.get(`https://66d0f21f181d059277e01d3c.mockapi.io/api/v1/empleados${idEmpleado}`)
  .then((response) => {
    // const {statusCode, statusMessage, data} = response
    const {data} = response
    res.status(200).json({
      msg: 'ok',
      // data: response.data
      // data:newArray
      data
    })
    // res.status(400).json({
    //   msg: 'Error',
    //   error
    // })
  })
  .catch((error) =>{
    // handle error
    console.log(error);
  })
//   .finally(function () {
//     // always executed
//   });

}

// Forma sin await y sin async
const getEmpleados = (req = request, res = response) => {
  // const {lastname} = req.query;
  // const {lastname, ...rest} = req.query;
  const {lastname, year, category, page} = req.query;
  console.log(lastname, year, category, page);

  // console.log('query: ', lastname);
  // console.log('query: ', rest);

  const filtro = (lastname) ? `?lastname=${lastname}` : '';

    axios.get(`https://66d0f21f181d059277e01d3c.mockapi.io/api/v1/empleados${filtro}`)
  .then((response) => {
    // const {statusCode, statusMessage, data} = response
    const {data} = response

    // handle success
    // console.log(response);
    // console.log(statusCode, statusMessage, data);
    // console.log(data);

    // data.filter((item)=>{item.lastname === 'Grant'})
    res.status(200).json({
      msg: 'ok',
      // data: response.data
      data
    })
    res.status(400).json({
      msg: 'Error',
      error
    })
  })
  .catch((error) =>{
    // handle error
    console.log(error);
  })
//   .finally(function () {
//     // always executed
//   });

}

//forma con await y async
// const getEmpleados = async(req = request, res = response) => {
//   const respuesta = await axios.get('https://66d0f21f181d059277e01d3c.mockapi.io/api/v1/empleados')
// }

module.exports = {
    getEmpleados,
    getEmpleado
}