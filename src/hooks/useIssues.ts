import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../store/actions/getIssues.actions';
import type { State } from '../models/issues.type';

type Props = {
    state: State;
    selectedLabels: string[];
};

export const useIssues = ({ state, selectedLabels }: Props) => {
    const issueQuery = useQuery({
        queryKey: ['issues', { state, selectedLabels }],
        queryFn: () => getIssues(state, selectedLabels),
        staleTime: 1000 * 60 * 10,
    });

    return {
        issueQuery,
    };
};
