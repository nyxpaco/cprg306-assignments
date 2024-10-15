"use client";
import { useState } from "react";

export default function Page() {
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');
    const [name, setName] = useState('');

    const categories = ['Produce', 'Dairy', 'Bakery', 'Meat', 'Frozen Foods', 'Canned Goods', 'Dry Goods','Beverages', 'Snacks', 'Household','Other'];

    const increment = () => {
        if (quantity < 20) { 
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleSubmit = (event) => {
      event.preventDefault();
  
      const item = { name, quantity, category };
  
      console.log(item);
      alert(`${name}, ${quantity}, ${category}`);
  
      setName('');
      setQuantity(1);
      setCategory('Produce');
    }
  
    return (
      <div className="w-80 mx-auto p-4 bg-blue-300 rounded-lg shadow-lg space-y-4">
        {/* Item Name Input */}
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full px-4 py-2 text-gray-900 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    
        {/* Quantity Control and Category Section */}
        <div className="flex items-center justify-between space-x-4">
          {/* Quantity Control */}
          <div className="flex items-center bg-gray-200 rounded-lg px-4">
            <button
              onClick={decrement}
              disabled={quantity === 1}
              className="text-xl px-4 py-2 bg-pink-300 hover:bg-pink-500 disabled:bg-gray-400 rounded-md"
            >
              -
            </button>
            <span className="px-4 text-white text-lg">{quantity}</span>
            <button
              onClick={increment}
              disabled={quantity === 20}
              className="text-xl px-4 py-2 bg-pink-300 hover:bg-pink-500 disabled:bg-gray-400 rounded-md"
            >
              +
            </button>
          </div>
    
          {/* Category Selector */}
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-32 px-2 py-2 bg-pink-300 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            {categories.map((category) => (
              <option
                key={`${category.toLowerCase().replace(' ', '-')}-category`}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
    
        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full px-4 py-2 text-white bg-pink-300 rounded-md shadow-md hover:bg-pink-500"
        >
          +
        </button>
      </div>
    );
}
