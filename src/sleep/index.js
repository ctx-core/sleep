/**
 * @param ms{number}
 * @returns {Promise<unknown>}
 */
export function sleep(ms) {
	return new Promise(resolve=>setTimeout(resolve, ms))
}
