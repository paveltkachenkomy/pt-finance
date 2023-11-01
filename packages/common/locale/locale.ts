export class LocaleText <T extends {[key: string] : string | number}> {
	private readonly _text: string;
	private readonly _mask: T;
	private readonly _marker: string;

	constructor(text: string, mask: T, marker: string = "%") {
		this._text = text;
		this._mask = mask;
		this._marker = marker;
	}

	private get text(): string {
		return this._text;
	}

	public getText(args?: Partial<T>): string {
		let text = this.text;

		for (const mask of Object.keys(this._mask)) {
			let replacedText:string | number = this._mask[mask];
			if (args && args[mask]) {
				replacedText = args[mask] as string | number;
			}

			text = text.replaceAll(`${this._marker+mask}`, replacedText.toString());
		}

		return text;
	}
}