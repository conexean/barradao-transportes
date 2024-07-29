interface ResultsContextInterface {
  active: boolean;
  toggle: () => void;
  resultsPerPage: number;
  results: number[];
  setResultsPerPage: (perPage: number) => void;
}

export default ResultsContextInterface;
