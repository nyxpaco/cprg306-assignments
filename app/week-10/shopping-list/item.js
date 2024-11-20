export default function Item ({ name, quantity, category, onSelect }) {
    return (
        <ul
            onClick={onSelect} // Make the entire item clickable
            className="flex flex-col justify-items-start p-4 bg-pink-600 shadow-md my-4 cursor-pointer hover:bg-pink-700 transition duration-300"
        >
            <div>
                <li className="text-lg font-semibold text-gray-300">{name}</li>
            </div>
            <ul className="flex items-center space-x-1 text-gray-300">
                <li>
                    Buy {quantity} in {category}
                </li>
            </ul>
        </ul>
    );
}