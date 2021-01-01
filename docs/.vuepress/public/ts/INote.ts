import { IRecord } from "./IRecord"
import { XarkUri } from "./ValueTypes"

interface INote extends IRecord {
	author: XarkUri
	note: string
	type?: "text/plain" | "text/html" | "text/markdown"
	private?: boolean
}

export { INote }
