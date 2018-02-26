// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if (currency <= 0) return {};
	if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	let result = {};
	if (currency >= 50) {
		result["H"] = currency / 50 ^ 0;
		currency = currency % 50;
	}
	if (currency >= 25) {
		result["Q"] = currency / 25 ^ 0;
		currency = currency % 25;
	}
	if (currency >= 10) {
		result["D"] = currency / 10 ^ 0;
		currency = currency % 10;
	}
	if (currency >= 5) {
		result["N"] = currency / 5 ^ 0;
		currency = currency % 5;
	}
	if (currency >= 1) {
		result["P"] = currency / 1 ^ 0;
		currency = currency % 1;
	}
	return result;
}
