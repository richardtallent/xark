import { ISubject } from "./ISubject"
import { IClaim } from "./IClaim"
import { IEvent } from "./IEvent"
import { IRecord } from "./IRecord"

interface IRange {
	start: number
	end: number
}

interface IArtifact extends IRecord {
	range?: IRange
	subjects?: ISubject[]
	events?: IEvent[]
}

export { IArtifact, IRange }
