import React from 'react';
import './App.css';
import ButtonName from "./Button-component/Button-comp";
import Product from "./Product-component/Product-comp";
import Tile from "./Tile-component/Tile-comp";
import bagOne from './assets/bag_1.png'
import bagTwo from './assets/bag_2.png'
import bagThree from './assets/bag_3.png'
import bagFour from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'

function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <ButtonName title="to the collection"/>
                <ButtonName title="shop all bags"/>
                <ButtonName title="pre-orders"/>
            </nav>
            <main>
                <Product
                    title="Best seller"
                    image={bagOne}
                    description="The handy bag"
                    price="€400"
                />

                <Product
                    title="Best seller"
                    image={bagTwo}
                    description="The Stylish bag"
                    price="€250"
                />

                <Product
                    title="new collection"
                    image={bagThree}
                    description="The simple bag"
                    price="€300"
                />

                <Product
                    title="Best seller"
                    image={bagFour}
                    description="The trendy bag"
                    price="€150"
                />
            </main>

            <footer>
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos ipsa magnam maiores nihil nobis optio placeat, quaerat quia quidem quis reiciendis sit temporibus ullam unde velit vero voluptas voluptatum?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos ipsa magnam maiores nihil nobis optio placeat, quaerat quia quidem quis reiciendis sit temporibus ullam unde velit vero voluptas voluptatum?</p>
                </Tile>

                <Tile image={brand}/>

                <Tile image={our_story}/>

                <Tile title="The makers">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos ipsa magnam maiores nihil nobis optio placeat, quaerat quia quidem quis reiciendis sit temporibus ullam unde velit vero voluptas voluptatum?</p>
                </Tile>


            </footer>


        </div>
    );
}

export default App;




