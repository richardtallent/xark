import { XarkUri } from "./ValueTypes"
import { IRecord } from "./IRecord"
import { IClaim } from "./IClaim"

interface ISubject extends IRecord {
	type: XarkUri
	claims?: IClaim[]
}

export { ISubject }
