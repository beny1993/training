class ConvertTime {
	constructor(h, m) {
		let num = [
			"zero",
			"one",
			"two",
			"three",
			"four",
			"five",
			"six",
			"seven",
			"eight",
			"nine",
			"ten",
			"eleven",
			"twelve",
			"thirteen",
			"fourteen",
			"fifteen",
			"sixteen",
			"seventeen",
			"eighteen",
			"nineteen",
			"twenty",
			"twenty one",
			"twenty two",
			"twenty three",
			"twenty four",
			"twenty five",
			"twenty six",
			"twenty seven",
			"twenty eight",
			"twenty nine",
			"half",
		];
		this.num = num;

		try {
			if (13 <= h && h < 24) {
				h = num[h - 12];
			} else if (h == 0 || h == 24) {
				h = "midnight";
			} else {
				h = num[h];
			}
			if (m == 0) {
				console.log(h + " o'clock ");
			} else if (m <= 30) {
				console.log(num[m] + " minutes past " + h);
			} else if (m >= 30) {
				console.log(num[60 - m] + " minutes to " + h);
			}
		} catch (error) {
			Console.log("error");
		}
	}
}

const timing = new ConvertTime(8, 0);
