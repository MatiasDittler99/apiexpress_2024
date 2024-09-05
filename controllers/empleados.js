const axios = require('axios');
const {request, response} = require('express'); 

// Forma sin await y sin async
const getEmpleados = (req = request, res = response) => {
    axios.get('https://66d0f21f181d059277e01d3c.mockapi.io/api/v1/empleados')
  .then((response) => {
    // const {statusCode, statusMessage, data} = response
    const {data} = response

    // handle success
    // console.log(response);
    // console.log(statusCode, statusMessage, data);
    console.log(data);

    data.filter((item)=>{item.lastname === 'Grant'})
    res.status(200).json({
      msg: 'ok',
      // data: response.data
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

//forma con await y async
// const getEmpleados = async(req = request, res = response) => {
//   const respuesta = await axios.get('https://66d0f21f181d059277e01d3c.mockapi.io/api/v1/empleados')
// }

module.exports = {
    getEmpleados
}