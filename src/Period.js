const RawData = require("../lib/RawData");

class Period extends RawData {
	/**
	 * Creates an instance of Period.
	 * @param {import("../lib/RawData").RawDataObject} [data=null]
	 * @memberof Period
	 */
	constructor(data = null) {
		super(data);

		/**
		 * @type {string}
		 */
		this.id = data.id;

		/**
		* @type {string}
		*/
		this.name = data.name;

		/**
		 * @type {string}
		 */
		this.short = data.short;

		/**
		 * @type {string}
		 */
		this.startTime = data.starttime;

		/**
		 * @type {string}
		 */
		this.endTime = data.endtime;
	}
}

module.exports = Period;