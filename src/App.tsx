import { useQuery } from '@tanstack/react-query';

import './App.css';

const App = () => {
    const { data, error, isFetching, isPending, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const response = await fetch(
                'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
            );
            return response.json();
        },
        // Evita realizar la petición cuando se hace focus en la vista
        refetchOnWindowFocus: false,
    });

    if (isPending) {
        return <h1>Cargando...</h1>;
    }

    if (error) {
        return <h1>`Error ${error.message}`</h1>;
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
            }}>
            <h1>`Hola mundo...${data}`</h1>
            {isFetching && <p>Actualizando...</p>}
            <button
                style={{ padding: '12px', width: '120px' }}
                onClick={() => refetch()}
                disabled={isFetching}>
                Actualizar
            </button>
        </div>
    );
};

export default App;
