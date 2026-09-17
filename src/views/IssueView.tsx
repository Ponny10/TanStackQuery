import { Navigate, useNavigate, useParams } from 'react-router';

import { FiSkipBack } from 'react-icons/fi';

import { IssueComment } from '../components/IssueComment';
import { useIssue } from '../hooks/useIssue';
import { LoadingSpinner } from '../shared/LoadingSpinner';

export const IssueView = () => {
    const navigate = useNavigate();
    const params = useParams();

    const { issueQuery, commentsQuery } = useIssue(Number(params.issueNumber));

    if (issueQuery.isLoading) {
        return <div>Cargando issue...</div>;
    }

    if (!issueQuery.data) {
        return <Navigate to={'/404'} />;
    }

    return (
        <div className="mb-5">
            <div className="mb-4">
                <button
                    onClick={() => navigate(-1)}
                    className="hover:underline text-blue-400 flex items-center">
                    <FiSkipBack />
                    Regresar
                </button>
            </div>

            {/* Primer comentario */}
            <IssueComment issue={issueQuery.data} />

            {commentsQuery.isLoading ? (
                <LoadingSpinner />
            ) : (
                commentsQuery.data?.map((issue) => <IssueComment key={issue.id} issue={issue} />)
            )}
        </div>
    );
};
