import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

<<<<<<< HEAD
export default mergedResolvers;
=======
export default mergedResolvers;
>>>>>>> origin/main
