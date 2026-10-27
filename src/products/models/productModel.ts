type category = `men's clothing` | 'jewelery' | `electronics` | `women's clothing`;

interface _ProductResponse {
    id: 0;
    title: 'string';
    price: 0.1;
    description: 'string';
    category: category;
    image: 'string';
    rating: {
        rate?: number;
        count?: number;
    };
}

export type { _ProductResponse };
