import {LocaleText} from "./locale";

export const Locale = {
	helloText: new LocaleText<{name: string}>("👋 Привет %name!", {name: "Гость"}),
}
