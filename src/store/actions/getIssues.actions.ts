import { requestAPI } from '../../services/requestAPI';
import type { GithubIssue } from '../../models/issues.type';

export const getIssues = async (): Promise<GithubIssue[]> => {
    const { data } = await requestAPI.get<GithubIssue[]>('/issues');

    return data;
};
