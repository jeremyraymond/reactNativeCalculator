export const CHANGE_COUNT = 'CHANGE_COUNT';

export function changeCount(amount) {
    return {
        type: CHANGE_COUNT,
        amount: amount
    }
}
