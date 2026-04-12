import { COMM_DATA } from "$lib";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const commData = COMM_DATA[params.comm as keyof typeof COMM_DATA];

  return {
    commData,
  };
}
