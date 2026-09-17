import { useQuery } from '@tanstack/react-query';

import { getLabels } from '../store/actions/getLabels.actions';

const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60,
    });

    return {
        labelsQuery,
    };
};

export { useLabels };
