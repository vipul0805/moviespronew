import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const url = "http://www.omdbapi.com/?s=sholay&apikey=801356f9"
        const url2 = "https://fortnite-api.theapinetwork.com/store/get"
        const data = (await fetch(url2));
        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    }

    return (
        <div>
            {items.map(item => (
                <h4 key={item.itemId}>
                    <Link to={{
                        pathname: `/shop/${item.itemId}/${item.lastUpdate}`,
                        state: {
                            item
                        }

                    }}>
                        {item.item.name}
                    </Link>
                </h4>
            ))}
        </div>
    );
}

export default Shop;
