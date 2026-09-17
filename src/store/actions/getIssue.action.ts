import { requestAPI } from '../../services/requestAPI';
import type { GithubIssue } from '../../models/issues.type';

export const getIssue = async (issueNumber: number): Promise<GithubIssue> => {
    const { data } = await requestAPI.get<GithubIssue>(`/issues/${issueNumber}`);

    return data;
};
