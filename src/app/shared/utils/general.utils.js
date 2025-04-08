export const env = import.meta.env;

export function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
