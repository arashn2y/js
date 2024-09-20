function area(base, altezza) {
    if (typeof base !== "number" || typeof altezza !== "number") {
        return undefined;
    }

    return base*altezza;
}