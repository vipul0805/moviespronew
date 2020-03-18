import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Item({ match, location }) {

    useEffect(() => {
        //fetchItem();
        console.log(match)
        //console.log(location.state)
    }, [])

    //const [item, setItem] = useState({});

    // const fetchItem = async () => {
    //     const data = (await fetch("https://fortnite-api.theapinetwork.com/store/get"));
    //     const item = await data.json();
    //     console.log(item.data);
    //     setItem(item.data);
    // }
    const item = location.state.item.item;
    //console.log(item);

    return (
        < div >
            <h1>Hello</h1>

            {/* {item.map(item => (
                <h4 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h4>
            ))} */}
            < h1 >{item.name}</h1 >
            <img src={item.images.icon} />
        </div >
    );
}

export default Item;
