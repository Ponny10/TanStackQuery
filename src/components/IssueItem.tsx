import { FiCheckCircle, FiInfo, FiMessageSquare } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';

import { getIssue } from '../store/actions/getIssue.action';
import type { GithubIssue } from '../models/issues.type';

type IssueItemProps = {
    issue: GithubIssue;
};

export const IssueItem = ({ issue }: IssueItemProps) => {
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    /* prefetchQuery: Sirve para realizar peticiones en segundoplano, asimilando una rapidez en experiencia de usuario */
    const prefetchData = () => {
        queryClient.prefetchQuery({
            queryKey: ['issue', issue.number],
            queryFn: () => getIssue(issue.number),
            staleTime: 1000 * 60,
        });
    };

    /* setQueryData: Setear información que ya se sirvió una vez y que esta no cambia por un tiempo determinado */
    const presetData = () => {
        queryClient.setQueryData(['issue', issue.number], issue, {});
    };

    return (
        <div
            className="flex items-center gap-2 p-2 border rounded-md bg-slate-900 hover:bg-slate-800"
            onMouseEnter={presetData}>
            {issue.state === 'closed' ? (
                <FiCheckCircle size={30} color="green" />
            ) : (
                <FiInfo size={30} color="red" className="min-w-10" />
            )}

            <div className="flex flex-col gap-1 grow">
                <a
                    onClick={() => navigate(`/issues/issue/${issue.number}`)}
                    className="hover:underline">
                    {issue.title}
                </a>
                <span className="text-gray-500">
                    {issue.number} opened 2 days ago by{' '}
                    <span className="font-bold">{issue.user.login}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                    {issue.labels.map((label) => (
                        <p
                            key={label.id}
                            className={`text-xs p-1 rounded-md border`}
                            style={{ borderColor: `#${label.color}` }}>
                            {label.name}
                        </p>
                    ))}
                </div>
            </div>

            <img src={issue.user.avatar_url} alt="User Avatar" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col mx-2 items-center">
                <FiMessageSquare size={30} className="min-w-5" color="gray" />
                <span className="px-4 text-gray-400">{issue.comments}</span>
            </div>
        </div>
    );
};
