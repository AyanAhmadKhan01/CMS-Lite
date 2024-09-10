import { Route, Routes } from 'react-router-dom';
import Gaming from './Gaming';
import Studio from './Studio';
import Music from './Music';
import Store from './Store';
import ProductDetails from './ProductDetails';


function StoreRoutes() {
    return (
        <>
        <Routes>
        <Route path='/' element={<Store />} />
            <Route path='gaming' element={<Gaming />} />
            <Route path='studio' element={<Studio />} />
            <Route path='music' element={<Music />} />
            <Route path="/music/product/:productId" element={<ProductDetails />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
        </>
    )
}


export default StoreRoutes;