export const ProductCard = () => {
    return (
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                    alt="tailwind logo"
                    width={300}
                    height={400}
                    className="rounded-xl p-5 sm:p-0 bg-white"
                />
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">
                    <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
                </div>
                <h3 className="font-black text-gray-800 md:text-2xl text-xl">
                    The Majestic and Wonderful Bahamas
                </h3>

                <p className="md:text-lg text-gray-500 text-base">
                    The best kept secret of The Bahamas is the country’s sheer size and diversity.
                    With 16 major islands, The Bahamas is an unmatched destination
                </p>

                <p className="text-xl font-black text-gray-800">
                    $110
                    <span className="font-normal text-gray-600 text-base"> +impuesto</span>
                </p>
            </div>
        </div>
    );
};
