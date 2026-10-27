import { Link } from 'react-router';
import type { _ProductResponse } from '../models/productModel';

export const ProductCard = (product: _ProductResponse) => {
    const { category, description, image, price, title } = product;
    return (
        <Link to={`/productById/${product.id}`}>
            <div className="relative flex flex-col space-y-2 rounded-xl shadow-lg p-2 border border-white bg-white">
                <div className="w-full bg-white grid place-items-center">
                    <img
                        src={image}
                        alt="tailwind logo"
                        width={160}
                        height={200}
                        className="rounded-xl p-2 bg-white w-50 h-60"
                    />
                </div>
                <div className="w-full bg-white flex flex-col p-2">
                    <div className="flex justify-between item-center">
                        <p className="text-gray-500 font-medium ">{category}</p>
                    </div>
                    <h3 className="font-black text-gray-700 text-3xl">{title}</h3>

                    <p className=" text-gray-500 text-md">{description}</p>

                    <p className="text-xl font-extrabold text-gray-700">
                        {price}
                        <span className=" text-gray-500 text-sm font-normal"> +impuesto</span>
                    </p>
                </div>
            </div>
        </Link>
    );
};
