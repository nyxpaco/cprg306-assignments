"use client"; 
import Link from "next/link";
import { useEffect } from "react";
import {useState} from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    async function loadItems() {
        const itemList = await getItems(user.uid);
        setItems(itemList);
    }
    
    useEffect(() => {
        loadItems();
    }, [user, loadItems]);

    if (!user) {
        console.error("User is not logged in.");
        return;
    }

    const handleItemSelect = (item) => {
        console.log(item.name);
        if (typeof item.name === 'string') {
            const name = item.name.replace( /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, 
            '').trim();
            const cleanName = name.split(',')[0].trim();
            setSelectedItemName(cleanName);
        } else {
            console.error('Invalid item name', item.name);
        }
    }

    const handleAddItem = async (item) => {
        item.id = await addItem(user.uid, item);
        loadItems();
    }
    
    return (
        <main className="p-6 min-h-screen" style={{ backgroundColor: "#083344", color: "#FDF5E6" }}>
            {user ? (
                <>
                    <Link
                        href="./"
                        className="m-2 underline text-pink-300 hover:text-pink-500 text-sm"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Back to Sign In
                    </Link>
                    <h1 className="text-3xl font-extrabold text-pink-400 mb-6" style={{ textShadow: "2px 2px 4px #000" }}>
                        Shopping List
                    </h1>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-4 bg-[#122A40] rounded-lg shadow-lg">
                            <NewItem onAddItem={handleAddItem} />
                            <ItemList items={items} onItemSelect={handleItemSelect} />
                        </div>
                        <div className="p-4 bg-[#122A40] rounded-lg shadow-lg">
                            <MealIdeas ingredient={selectedItemName} />
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl font-semibold text-pink-300">Sign in to view</p>
                </div>
            )}
        </main>
    ); 

}    