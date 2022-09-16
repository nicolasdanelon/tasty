import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
// import { memo } from "preact/compat";

const Home = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTest(1);
  }, []);

  return (
    <>

<div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" style={"padding: 10px"}>

<div class="px-6 flex flex-wrap">

    <div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tres Monos</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" style={"color: #862DF7"}>Solo 3 mesas disponibles!</p>
    </div>
<div>
    <h1>Donde queres tu mesa?</h1>

            <div style={"display: flex"}>     
                  <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">Ventana</button>
                                    
                  <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">Salón</button>

                  <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">Terraza</button>
                                
                  <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">Patio</button>
          </div>   

    <h1>Selecciona el horario</h1>
          <div style={"display: flex"}>     
                  <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">20:00hs.</button>
                                    
                  <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">21:00hs.</button>

                  <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">22:00hs.</button>
                                
                  <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">23:00hs.</button>
          </div>    

         
         </div>

    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://lh5.googleusercontent.com/p/AF1QipPhZuI8AC1CHnTO5VjKA9ihICsFtILK8InV2ddX=w426-h240-k-no" style={"width: 100%; border-radius: 15px"} alt=""></img>
    <div class="flex flex-col justify-between p-4 leading-normal">
       
    </div> 

    <button class="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600" style={"width: 100%; height:40px; border-radius: 10px"}>Reservar!</button>

</div>




    
            
</div>

</>

    );
};

export default Home;
