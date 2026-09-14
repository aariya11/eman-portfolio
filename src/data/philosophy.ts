export interface Principle {
  number: string;
  title: string;
  subtitle: string;
  elaboration: string;
  actionRule: string;
}

export const philosophyData = {
  sectionTitle: "THE EDGE IS DISCIPLINE.",
  sectionSubtitle: "FOUR NON-NEGOTIABLE TENETS OF INSTITUTIONAL EXECUTION",
  principles: [
    {
      number: "01",
      title: "PROCESS OVER PREDICTION",
      subtitle: "The market does not owe certainty; it distributes probability.",
      elaboration:
        "Forecasting where price 'must' go is retail hubris. Institutional trading operates on scenario mapping: defining clear invalidation boundaries and identifying where liquidity pools reside before initiating risk.",
      actionRule: "Never execute an unscripted position. The trade plan is finalized before market open.",
    },
    {
      number: "02",
      title: "RISK BEFORE REWARD",
      subtitle: "Capital preservation is the only sovereign mandate.",
      elaboration:
        "Amateurs calculate what they might make; professionals obsess over what they can lose. Every engagement begins with predetermined stop placement derived from structural invalidation, sizing position size to never threaten equity preservation.",
      actionRule: "Fixed fractional risk capped at strictly 0.5% - 1.0% per setup without exception.",
    },
    {
      number: "03",
      title: "PATIENCE CREATES OPPORTUNITY",
      subtitle: "The greatest trading skill is the ability to sit on hands.",
      elaboration:
        "Ninety percent of market movement is noise engineered to trigger emotional participants. True institutional edges emerge during brief, distinct liquidity expansion windows. A week of silence is preferable to one forced position.",
      actionRule: "No structural trigger, no execution. Doing nothing is an active trading decision.",
    },
    {
      number: "04",
      title: "EXECUTION WITHOUT EMOTION",
      subtitle: "Complete detachment from individual trade outcomes.",
      elaboration:
        "A loss taken in accordance with the system is a triumphant execution. A win taken through recklessness is a future catastrophe. Emotional equilibrium transforms trading from an agonizing roller coaster into systematic risk management.",
      actionRule: "Zero hesitation on entries; zero negotiation on stop triggers.",
    },
  ] as Principle[],
};
