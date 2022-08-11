import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import Sort from '../../components/Sort/Sort';
import Teste from '../../components/Teste/Teste';

import Product from '../../components/Product/Product';

function Home() {
    return (
        <>
            <Header />
            {/* <Sort /> */}
            <div>
                <Teste />

            </div>
            <Product />
            <Footer />
        </>
    )
}

export default Home