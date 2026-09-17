import { FiCheckCircle, FiInfo, FiMessageSquare } from 'react-icons/fi';
import { data, useNavigate } from 'react-router';
import type { GithubIssue } from '../models/issues.type';

type IssueItemProps = {
    issue: GithubIssue;
};

export const IssueItem = ({ issue }: IssueItemProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800">
            {issue.state === 'close' ? (
                <FiCheckCircle size={30} color="green" />
            ) : (
                <FiInfo size={30} color="red" className="min-w-10" />
            )}

            <div className="flex flex-col grow px-2">
                <a
                    onClick={() => navigate(`/issues/issue/${issue.number}`)}
                    className="hover:underline">
                    {issue.title}
                </a>
                <span className="text-gray-500">
                    {issue.number} opened 2 days ago by{' '}
                    <span className="font-bold">{issue.user.login}</span>
                </span>
            </div>

            <img src={issue.user.avatar_url} alt="User Avatar" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col mx-2 items-center">
                <FiMessageSquare size={30} className="min-w-5" color="gray" />
                <span className="px-4 text-gray-400">{issue.comments}</span>
            </div>
        </div>
    );
};
