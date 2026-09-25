import { IssueItem } from './IssueItem';
import type { GithubIssue, State } from '../models/issues.type';

type IssueListProps = {
    issues: GithubIssue[];
    onChangeState: (state: State) => void;
    state: State;
};

export const IssueList = ({ issues, onChangeState, state }: IssueListProps) => {
    return (
        <>
            {/* Botones de All, Open, Closed */}
            <div className="flex gap-2">
                <button
                    onClick={() => onChangeState('all')}
                    className={`btn ${state === 'all' && 'active'}`}>
                    All
                </button>
                <button
                    onClick={() => onChangeState('open')}
                    className={`btn ${state === 'open' && 'active'}`}>
                    Open
                </button>
                <button
                    onClick={() => onChangeState('closed')}
                    className={`btn ${state === 'closed' && 'active'}`}>
                    Closed
                </button>
            </div>

            {/* Lista de issues */}
            <div className="flex flex-col gap-2 mt-2">
                {issues.map((issue) => (
                    <IssueItem key={issue.id} issue={issue} />
                ))}
            </div>
        </>
    );
};
