import { requestAPI } from '../../services/requestAPI';
import type { GithubIssue } from '../../models/issues.type';

export const getComments = async (issueNumber: number): Promise<GithubIssue[]> => {
    const { data } = await requestAPI.get<GithubIssue[]>(`/issues/${issueNumber}/comments`);

    return data;
};
