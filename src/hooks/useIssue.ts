import { useQuery } from '@tanstack/react-query';

import { getIssue } from '../store/actions/getIssue.action';
import { getComments } from '../store/actions/getComments.action';

export const useIssue = (issueNumber: number) => {
    const issueQuery = useQuery({
        queryKey: ['issue', issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60 * 10,
        /* Cancelar los intentos de fallo con retry en false */
        retry: false,
    });

    const commentsQuery = useQuery({
        queryKey: ['issue', issueNumber, 'comments'],
        queryFn: () => getComments(issueNumber),
        staleTime: 1000 * 60 * 10,
        /* Cancelar los intentos de fallo con retry en false */
        retry: false,
        /* Evitar ejecutar query si no hay data de issueQuery */
        enabled: issueQuery.data !== undefined,
    });

    return {
        commentsQuery,
        issueQuery,
    };
};
