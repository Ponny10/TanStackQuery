import { useLabels } from '../hooks/useLabels';
import { LoadingSpinner } from '../shared/LoadingSpinner';

type Props = {
    selectedLabel: string[];
    onSelectedLabels: (label: string) => void;
};
export const LabelPicker = ({ onSelectedLabels, selectedLabel }: Props) => {
    const { labelsQuery } = useLabels();

    if (labelsQuery.isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {labelsQuery.data?.map((label) => (
                <span
                    key={label.id}
                    className={`animate-fade-in px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer
                        ${selectedLabel.includes(label.name) && 'selected-label'}`}
                    onClick={() => onSelectedLabels(label.name)}
                    style={{ border: `1px solid #${label.color}` }}>
                    {label.name}
                </span>
            ))}
        </div>
    );
};
