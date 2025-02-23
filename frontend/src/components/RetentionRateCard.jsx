const RetentionRateCard = ({ retentionRate = 0 }) => (
  <div className="p-4 border rounded-lg border-[#19508b] flex justify-evenly items-center">
    <h2 className="text-[16px] md:text-xl lg:text-2xl font-bold text-[#82ca9d]">Retention Rate</h2>
    <p className="text-lg md:text-xl lg:text-2xl">{Number(retentionRate).toFixed(2)}%</p>
  </div>
);

export default RetentionRateCard;
