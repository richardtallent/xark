import { XarkId, XarkUri } from "./Aliases";
import { IRecord } from "./IRecord";

interface ISubject extends IRecord {
	id: XarkId;
	revisionId: XarkId;
	type: XarkUri;
}

export { ISubject };
