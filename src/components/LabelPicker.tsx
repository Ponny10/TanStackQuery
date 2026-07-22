import { useQuery } from '@tanstack/react-query';

const getLabels = async () => {
    const resp = await fetch('https://api.github.com/repositories/10270250/labels').then((r) =>
        r.json(),
    );
    return resp;
};

export const LabelPicker = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
    });

    if (labelsQuery.isLoading) {
        return <h1>Obteniendo datos, espere un momento...</h1>;
    }
    return (
        <>
            <span
                className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}>
                Primary
            </span>
        </>
    );
};
