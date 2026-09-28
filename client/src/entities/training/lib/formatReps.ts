export const formatReps = (reps: number[]) => {
  return [...reps].map((item) => item ?? "-").join(" / ");
};
