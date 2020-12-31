import { XarkId, XarkDate, XarkUri } from "./Aliases";
import { IRecord } from "./IRecord";

interface IClaim extends IRecord {
	subject: XarkId;
	category: "Fact" | "Relationship" | "Role";
	type: XarkUri;
	value: string | number | XarkId | XarkUri;
	certainty?:
		| "False"
		| "Probably False"
		| "Possibly True"
		| "Probably True"
		| "True";
}

export { IClaim };
