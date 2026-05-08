from time import monotonic


class InMemoryRateLimiter:
    def __init__(self, max_hits: int, window_seconds: int):
        self.max_hits = max_hits
        self.window_seconds = window_seconds
        self._hits: dict[str, list[float]] = {}

    def allow(self, key: str) -> bool:
        now = monotonic()
        window_start = now - self.window_seconds
        hits = [hit for hit in self._hits.get(key, []) if hit >= window_start]

        if len(hits) >= self.max_hits:
            self._hits[key] = hits
            return False

        hits.append(now)
        self._hits[key] = hits
        return True
