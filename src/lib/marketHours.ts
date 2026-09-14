export interface MarketStatus {
  isOpen: boolean;
  statusText: "MARKETS OPEN" | "MARKETS CLOSED";
  activeSession: string;
  utcTime: string;
  timeRemaining?: string;
}

export function getMarketStatus(date: Date = new Date()): MarketStatus {
  const day = date.getUTCDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const totalMinutes = hours * 60 + minutes;

  const pad = (n: number) => n.toString().padStart(2, "0");
  const utcTime = `${pad(hours)}:${pad(minutes)} UTC`;

  // Weekend check:
  // Forex opens Sunday 21:00 UTC and closes Friday 21:00 UTC
  const isWeekend =
    day === 6 || // Saturday all day
    (day === 5 && totalMinutes >= 21 * 60) || // Friday after 21:00 UTC
    (day === 0 && totalMinutes < 21 * 60); // Sunday before 21:00 UTC

  if (isWeekend) {
    return {
      isOpen: false,
      statusText: "MARKETS CLOSED",
      activeSession: "WEEKEND SETTLEMENT • REOPENS SUN 21:00 UTC",
      utcTime,
    };
  }

  // Determine active global session during weekdays
  let activeSession = "INTERBANK LIQUIDITY ACTIVE";

  const isTokyo = totalMinutes >= 0 && totalMinutes < 9 * 60;
  const isLondon = totalMinutes >= 7 * 60 && totalMinutes < 16 * 60;
  const isNewYork = totalMinutes >= 13 * 60 && totalMinutes < 21 * 60;

  if (isLondon && isNewYork) {
    activeSession = "LONDON / NEW YORK OVERLAP (PEAK LIQUIDITY)";
  } else if (isNewYork) {
    activeSession = "NEW YORK SESSION ACTIVE";
  } else if (isLondon) {
    activeSession = "LONDON SESSION ACTIVE";
  } else if (isTokyo) {
    activeSession = "ASIAN / PACIFIC SESSION ACTIVE";
  } else {
    activeSession = "GLOBAL SYDNEY / TOKYO RUN";
  }

  return {
    isOpen: true,
    statusText: "MARKETS OPEN",
    activeSession,
    utcTime,
  };
}
