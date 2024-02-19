import React, { useEffect, useState } from 'react';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleRelatorios.css';
import '../../assets/stylesFull.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function Relatorios() {
    const[cars, setCars] = useState([]);
    const [showToast, setShowToast] = useState(true);

    /**Buscando da API */
    useEffect( () => {
        function loadCars() {
            let url = "https://myfakeapi.com/api/cars/";

            setTimeout(() => {
                    fetch(url)
                    .then((r) => r.json())
                    .then((data) => {
                        /**Limito os dados da API para 50 carros */
                        const carsData = data.cars.slice(0, 50);
                        setCars(carsData);
                        setShowToast(false); // Ocultar o toast
                    })
                    .catch((error) => {
                        console.error("Erro ao mostrar os carros: ", error);
                    });
              }, 500); // 1 seg
        }
        loadCars();
    },[]);

    /**Exibindo Toast */
    useEffect(() => {
        // Exibe o toast "Carregando..." apenas no primeiro render
        if (showToast && cars.length === 0) {
            toast.info("Carregando...");
        }
    }, [showToast, cars]);
 
    /**Caso a lista esteja vazia, aparece o Toast */
    if(cars.length === 0) {
        return (
            <>
                <div className='fullAlignFlex espacoTopo espacoLateral'>
                    <p>Nenhum carro encontrado.</p>
                </div>
                <ToastContainer autoClose={3000} position="top-right"/>
            </>
        );
    }
    
    /**Carregando os carros */
    if (Array.isArray(cars) && cars.length > 0) {
        return (
        <>
        <div className='fullAlignFlex espacoTopo espacoLateral relatorioMediaQuery'>
                <table className='relatorios'>
                    <thead>
                        <tr className='relatoriosRow'>
                            <th>ID</th>
                            <th>Carro</th>
                            <th>Modelo</th>
                            <th>Cor</th>
                            <th>Ano do Modelo</th>
                            <th>VIN</th>
                            <th>Preço</th>
                            <th>Disponibilidade</th>
                        </tr>
                    </thead>
                    <tbody className='relatoriosBody'>
                        {cars.map((car) => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.car}</td>
                            <td>{car.car_model}</td>
                            <td>{car.car_color}</td>
                            <td>{car.car_model_year}</td>
                            <td>{car.car_vin}</td>
                            <td>{car.price}</td>
                            <td>{car.availability ? "Disponível" : "Indisponível"}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </>
        );
    } 
}

export default Relatorios;