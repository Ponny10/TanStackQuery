import type { GithubIssue } from '../models/issues.type';
import { IssueItem } from './IssueItem';

type IssueListProps = {
    issues: GithubIssue[];
};

export const IssueList = ({ issues }: IssueListProps) => {
    return (
        <>
            {/* Botones de All, Open, Closed */}
            <div className="flex gap-4">
                <button className="btn active">All</button>
                <button className="btn">Open</button>
                <button className="btn">Closed</button>
            </div>

            {/* Lista de issues */}
            <div className="mt-4">
                {issues.map((issue) => (
                    <IssueItem key={issue.id} issue={issue} />
                ))}
            </div>
        </>
    );
};
