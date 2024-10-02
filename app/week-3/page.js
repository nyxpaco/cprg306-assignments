import ItemList from "./item-list.js";  

export default function Page() {
    return (
        <main className="p-6 bg-gray-900 min-h-screen">
            <h1 className="text-4xl font-bold text-blue-300 mb-6">Shopping List</h1>
            <section className="flex justify-between items-center">
                <ItemList />
            </section>
        </main>
    );
}