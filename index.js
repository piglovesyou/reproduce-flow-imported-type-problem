// @flow

declare function useExported(e: ExternalType): Promise<ExternalType>;

declare function useLocal(e: LocalType): Promise<LocalType>;

declare class Hole<T> {
  constructor(T): Hole<T>;
  pipe<U>(T => U): $Call<
      & (<V>(Promise<V>) => Hole<V>)
      & (<V>(V) => Hole<V>)
      ,
      U>
}

import type { ExternalType } from './types';

type LocalType = number;

// LocalType just works fine.
new Hole(1)
    .pipe(useLocal)
    .pipe(e => (e: LocalType));

// Error: number [1] is incompatible with Promise [2].
new Hole(1)
    .pipe(useExported)
    .pipe(e => (e: ExternalType));

