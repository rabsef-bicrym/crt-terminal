// crt-terminal/packages/crt-terminal/src/utils/helpers.ts

const exhaustiveCheck =
  (msg: string) =>
  (arg: never): never => {
    throw new Error(`${msg}${arg}`);
  };

type Nullable<T> = T | null;

export type { Nullable };
export { exhaustiveCheck };
