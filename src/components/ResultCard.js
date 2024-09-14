const ResultCard = ({ results }) => {
  return (
    <div className="px-4">
      <h3>Results</h3>
      <div className="max-h-[260px] pt-2 pr-5 overflow-y-auto">
        {results ? (
          results.map((result, index) => (
            <div key={index} className="flex">
              {index + 1}. {result.username} - {result.wordCount} words
            </div>
          ))
        ) : (
          <div>No results to show</div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
