import { useQuery } from '@tanstack/react-query';
import { getLabels } from '../store/actions/getLabels.actions';

export const LabelPicker = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
    });

    if (labelsQuery.isLoading) {
        return <h1>Obteniendo datos, espere un momento...</h1>;
    }
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {labelsQuery.data?.map((label) => (
                <span
                    key={label.id}
                    className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                    style={{ border: `1px solid #${label.color}`, color: 'white' }}>
                    {label.name}
                </span>
            ))}
        </div>
    );
};
