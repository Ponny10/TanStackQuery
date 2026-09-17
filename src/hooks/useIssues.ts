import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../store/actions/getIssues.actions';

export const useIssues = () => {
    const issueQuery = useQuery({
        queryKey: ['issues'],
        queryFn: getIssues,
        staleTime: 1000 * 60 * 10,
    });

    console.log(issueQuery.data);

    return {
        issueQuery,
    };
};
