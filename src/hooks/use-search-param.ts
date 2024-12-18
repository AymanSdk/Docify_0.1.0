import { useQueryState, parseAsString } from "nuqs";

export function useSearchParam() {
  return useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
}
