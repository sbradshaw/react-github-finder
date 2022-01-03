import PropTypes from "prop-types";
import RepositoryItem from "./RepositoryItem";

function RepositoryList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Respositories
        </h2>
        {repos.map((repository) => (
          <RepositoryItem key={repository.id} repo={repository} />
        ))}
      </div>
    </div>
  );
}

RepositoryList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepositoryList;
