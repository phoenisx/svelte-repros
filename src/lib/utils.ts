import type { ActionResult } from "@sveltejs/kit";

export const impureModification = (result: ActionResult,  error: { hasError: boolean }) => {
   console.log("Result: ", result);
   switch(result.type) {
      case "failure":
         // Just for demo, not a real life example
         error = { hasError: false };
         break;
      case "error":
         error = { hasError: true };
         break;
   }
   // let x = error;
}
