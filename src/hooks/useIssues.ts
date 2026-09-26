import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../store/actions/getIssues.actions';
import type { State } from '../models/issues.type';

type Props = {
    state: State;
    selectedLabels: string[];
};

export const useIssues = ({ state, selectedLabels }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedLabels, state]);

    const issueQuery = useQuery({
        queryKey: ['issues', { state, selectedLabels, currentPage }],
        queryFn: () => getIssues(state, selectedLabels, currentPage),
        staleTime: 1000 * 60 * 10,
    });

    const prevPage = () => {
        if (currentPage === 1) return;

        setCurrentPage((prevPage) => prevPage - 1);
    };

    const nextPage = () => {
        if (issueQuery.data?.length === 0) return;

        setCurrentPage(currentPage + 1);
    };

    return {
        currentPage,
        issueQuery,
        nextPage,
        prevPage,
    };
};
