import { XarkId, XarkDate, XarkUri } from "./ValueTypes"
import { IRecord } from "./IRecord"
import { IPosition } from "./IPosition"
import { INote } from "./INote"

interface IClaim extends IRecord {
	subject: XarkId
	category: "Fact" | "Relationship" | "Role"
	type: XarkUri
	value?: string | number | IPosition | XarkId | XarkUri
	veracity?: "False" | "Probably False" | "Possibly True" | "Probably True" | "True"
	private?: boolean
	notes?: INote[]
}

export { IClaim }
