import { ISubject } from "./ISubject";
import { IClaim } from "./IClaim";
import { IEvent } from "./IEvent";
import { IRecord } from "./IRecord";

interface IArtifact extends IRecord {
	subjects?: ISubject[];
	claims?: IClaim[];
	events?: IEvent[];
}

export { IArtifact };
