import { DBCollectionExtension } from '../DBCollection';
import baseUserExtension from './baseUserExtension';

const userCollection = new DBCollectionExtension({}, baseUserExtension);

export default userCollection;
