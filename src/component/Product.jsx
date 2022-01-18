import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';

export const Product = () =>{

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/product/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {

        return(
            <>
                Loading...
            </>
        );
    };

    const ShowProduct = () =>{
        
        return (
            <>

            </>
        );
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )
}
