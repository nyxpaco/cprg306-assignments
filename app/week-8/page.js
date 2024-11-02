"use client"; 
import React, { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import itemsData from "./items.json"; 

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName
            .split(",")[0]  // Remove anything after a comma
            .replace(/[^\w\s]/gu, "")  // Remove emojis and special characters
            .trim();
    
        setSelectedItemName(cleanedItemName);
    };
    
    return (
        <main className="p-6 min-h-screen" style={{ backgroundColor: "#083344" }}>
            <h1 className="text-4xl font-bold text-pink-500 mb-6">Shopping List</h1>
            <section className="flex justify-between items-center">
               <div className="w-1/2">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} /> 
                </div>
            </section>
        </main>
    );
}