export const NewProduct = () => {
    return (
        <div className="w-full flex-col">
            <h1 className="text-2xl font-bold">Nuevo producto</h1>

            <form className="w-full">
                <div className="flex justify-around items-center">
                    <div className="flex-col w-[500px]">
                        <input className="mt-2" type="text" title="Titulo del producto" />
                        <input className="mt-2" type="number" title="Precio del producto" />
                        <input className="mt-2" type="url" title="Url del producto" />
                        <textarea className="mt-2" title="Descripcion del producto" />
                        <select className="rounded-md p-3 mt-2 bg-gray-800 w-full">
                            <option value="men's clothing">Men's clothing</option>
                            <option value="women's clothing">Women's clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="electronics">Electronics</option>
                        </select>

                        <br />
                        <button className="mt-2" color="primary">
                            Crear
                        </button>
                    </div>

                    <div
                        className="bg-white rounded-2xl p-10 flex items-center"
                        style={{
                            width: '500px',
                            height: '600px',
                        }}>
                        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
                    </div>
                </div>
            </form>
        </div>
    );
};
