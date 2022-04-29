import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import InventorySection from '../InventorySection/InventorySection';
import ThinkingSection from '../ThinkingSection/ThinkingSection';

const Home = () => {
    return (

        <div><Banner></Banner>
            <div className='row align-items-cenetr text-center border-bottom  py-5'>
                <div className="col-lg-2  text-muted">
                    <h4>Louise Poulsen</h4>
                </div>
                <div className="col-lg-2 text-muted">
                    <h4>NICHE</h4>
                </div>
                <div className="col-lg-2 text-muted">
                    <h4>JOYBRID</h4></div>
                <div className="col-lg-2 text-muted"><h4>MAGISSOs</h4></div>
                <div className="col-lg-2 text-muted"><h4>Walmart</h4></div>
                <div className="col-lg-2 text-muted"><h4>Packit</h4></div>
            </div>
            <ThinkingSection></ThinkingSection>
            <Inventory></Inventory>
            <InventorySection></InventorySection>
        </div>
    );
};

export default Home;