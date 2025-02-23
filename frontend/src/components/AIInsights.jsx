const AIInsights = ({ insights }) => (
  <div className="mt-6">
    <ul className="list-disc pl-5 text-md ">
      {insights.suggestions?.map((suggestion, index) => (
        <li key={index} className="mb-2">{suggestion}</li>
      ))}
    </ul>
  </div>
);

export default AIInsights;
