"use client";

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || []; 
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        if (ingredient) {
            const mealData = await fetchMealIdeas(ingredient);
            setMeals(mealData);
        } else {
            setMeals([]); 
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="meal-ideas bg-pink-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-pink-600 mb-6 text-center">Meal Ideas 🍓</h2>

            {meals.length === 0 ? (
                <p className="text-pink-500 text-lg text-center">
                    {ingredient ? `No meal ideas found for "${ingredient}".` : "Select an ingredient to see meal ideas!"}
                </p>
            ) : (
                <ul className="space-y-4">
                    {meals.map((meal) => (
                        <li
                            key={meal.idMeal}
                            className="meal-item bg-pink-200 p-4 rounded-lg flex items-center space-x-4 hover:bg-pink-300 transition-all shadow-lg"
                        >
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded-full border-2 border-pink-400" />
                            <span className="text-pink-700 font-semibold text-lg">{meal.strMeal}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MealIdeas;

