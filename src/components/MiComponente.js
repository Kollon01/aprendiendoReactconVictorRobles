import React from "react"; 

class MiComponente extends React.Component {


    render(){
        let receta = {
            nombre: "Pasta con Tomate", 
            calorias : 2.500, 
            ingedientes : [
                "1 kg de pasta", 
                "2 salsa de tomate", 
                "2 cucharadas de azucar", 
                "2 cucharadas de sal", 
                "Oregano"
            ]
        }
        return(
            <React.Fragment>
                <h1>Receta: {receta.nombre}</h1>
                <h2>Calorias: { receta.calorias}</h2>
                <ol>
                    {
                        receta.ingedientes.map((ingredientes, i) => {
                            console.log(ingredientes); 
                            return(
                                <li key= {i} >
                                    {ingredientes}
                                </li>
                            )
                        })
                    }
                </ol>    
            </React.Fragment>

        )
    }
}
export default MiComponente; 
