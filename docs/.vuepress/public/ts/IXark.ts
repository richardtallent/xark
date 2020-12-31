import { IArtifact } from "./IArtifact";
import { IRecord } from "./IRecord";

interface IXark extends IRecord {
	artifacts: IArtifact[];
}

export { IXark };
