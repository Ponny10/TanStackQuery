import { requestAPI } from '../../services/requestAPI';
import type { GithubIssue, State } from '../../models/issues.type';

export const getIssues = async (
    state: State,
    selectedLabels: string[],
    currentPage: number,
): Promise<GithubIssue[]> => {
    const params = new URLSearchParams();

    if (state !== 'all') {
        params.append('state', state);
    }

    if (selectedLabels.length > 0) {
        params.append('labels', selectedLabels.join(','));
    }

    params.append('page', `${currentPage}`);
    params.append('per_page', '5');

    const { data } = await requestAPI.get<GithubIssue[]>('/issues', { params });

    return data;
};
