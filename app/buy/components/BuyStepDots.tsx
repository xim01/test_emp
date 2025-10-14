interface BuyStepDotsProps {
  count?: number;
}

export default function BuyStepDots({ count = 5 }: BuyStepDotsProps) {
  const dots = Array.from({ length: count });

  return (
    <div className="buy_step_dots_wrapper">
      {dots.map((_, index) => (
        <span key={index} className="buy_step_dot"></span>
      ))}
    </div>
  );
}
