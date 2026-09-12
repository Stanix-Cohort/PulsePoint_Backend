
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Donor
 * 
 */
export type Donor = $Result.DefaultSelection<Prisma.$DonorPayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model BloodRequest
 * 
 */
export type BloodRequest = $Result.DefaultSelection<Prisma.$BloodRequestPayload>
/**
 * Model RequestResponse
 * 
 */
export type RequestResponse = $Result.DefaultSelection<Prisma.$RequestResponsePayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  DONOR: 'DONOR',
  HOSPITAL: 'HOSPITAL',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BloodType: {
  A_POSITIVE: 'A_POSITIVE',
  A_NEGATIVE: 'A_NEGATIVE',
  B_POSITIVE: 'B_POSITIVE',
  B_NEGATIVE: 'B_NEGATIVE',
  AB_POSITIVE: 'AB_POSITIVE',
  AB_NEGATIVE: 'AB_NEGATIVE',
  O_POSITIVE: 'O_POSITIVE',
  O_NEGATIVE: 'O_NEGATIVE'
};

export type BloodType = (typeof BloodType)[keyof typeof BloodType]


export const RequestUrgency: {
  CRITICAL: 'CRITICAL',
  URGENT: 'URGENT',
  ROUTINE: 'ROUTINE'
};

export type RequestUrgency = (typeof RequestUrgency)[keyof typeof RequestUrgency]


export const RequestStatus: {
  OPEN: 'OPEN',
  PARTIALLY_FULFILLED: 'PARTIALLY_FULFILLED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const ResponseStatus: {
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  WITHDRAWN: 'WITHDRAWN'
};

export type ResponseStatus = (typeof ResponseStatus)[keyof typeof ResponseStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BloodType = $Enums.BloodType

export const BloodType: typeof $Enums.BloodType

export type RequestUrgency = $Enums.RequestUrgency

export const RequestUrgency: typeof $Enums.RequestUrgency

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type ResponseStatus = $Enums.ResponseStatus

export const ResponseStatus: typeof $Enums.ResponseStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donor`: Exposes CRUD operations for the **Donor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donors
    * const donors = await prisma.donor.findMany()
    * ```
    */
  get donor(): Prisma.DonorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodRequest`: Exposes CRUD operations for the **BloodRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloodRequests
    * const bloodRequests = await prisma.bloodRequest.findMany()
    * ```
    */
  get bloodRequest(): Prisma.BloodRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestResponse`: Exposes CRUD operations for the **RequestResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestResponses
    * const requestResponses = await prisma.requestResponse.findMany()
    * ```
    */
  get requestResponse(): Prisma.RequestResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Donor: 'Donor',
    Hospital: 'Hospital',
    BloodRequest: 'BloodRequest',
    RequestResponse: 'RequestResponse',
    Donation: 'Donation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "donor" | "hospital" | "bloodRequest" | "requestResponse" | "donation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Donor: {
        payload: Prisma.$DonorPayload<ExtArgs>
        fields: Prisma.DonorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findFirst: {
            args: Prisma.DonorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findMany: {
            args: Prisma.DonorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          create: {
            args: Prisma.DonorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          createMany: {
            args: Prisma.DonorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          delete: {
            args: Prisma.DonorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          update: {
            args: Prisma.DonorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          deleteMany: {
            args: Prisma.DonorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          upsert: {
            args: Prisma.DonorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          aggregate: {
            args: Prisma.DonorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonor>
          }
          groupBy: {
            args: Prisma.DonorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonorCountArgs<ExtArgs>
            result: $Utils.Optional<DonorCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      BloodRequest: {
        payload: Prisma.$BloodRequestPayload<ExtArgs>
        fields: Prisma.BloodRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloodRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloodRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findFirst: {
            args: Prisma.BloodRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloodRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findMany: {
            args: Prisma.BloodRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          create: {
            args: Prisma.BloodRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          createMany: {
            args: Prisma.BloodRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloodRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          delete: {
            args: Prisma.BloodRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          update: {
            args: Prisma.BloodRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          deleteMany: {
            args: Prisma.BloodRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloodRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloodRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          upsert: {
            args: Prisma.BloodRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          aggregate: {
            args: Prisma.BloodRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodRequest>
          }
          groupBy: {
            args: Prisma.BloodRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloodRequestCountArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestCountAggregateOutputType> | number
          }
        }
      }
      RequestResponse: {
        payload: Prisma.$RequestResponsePayload<ExtArgs>
        fields: Prisma.RequestResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload>
          }
          findFirst: {
            args: Prisma.RequestResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload>
          }
          findMany: {
            args: Prisma.RequestResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload>[]
          }
          create: {
            args: Prisma.RequestResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload>
          }
          createMany: {
            args: Prisma.RequestResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload>[]
          }
          delete: {
            args: Prisma.RequestResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload>
          }
          update: {
            args: Prisma.RequestResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload>
          }
          deleteMany: {
            args: Prisma.RequestResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload>[]
          }
          upsert: {
            args: Prisma.RequestResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestResponsePayload>
          }
          aggregate: {
            args: Prisma.RequestResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestResponse>
          }
          groupBy: {
            args: Prisma.RequestResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestResponseCountArgs<ExtArgs>
            result: $Utils.Optional<RequestResponseCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    donor?: DonorOmit
    hospital?: HospitalOmit
    bloodRequest?: BloodRequestOmit
    requestResponse?: RequestResponseOmit
    donation?: DonationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    donationsConfirmed: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationsConfirmed?: boolean | UserCountOutputTypeCountDonationsConfirmedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsConfirmedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }


  /**
   * Count Type DonorCountOutputType
   */

  export type DonorCountOutputType = {
    donations: number
    responses: number
  }

  export type DonorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donations?: boolean | DonorCountOutputTypeCountDonationsArgs
    responses?: boolean | DonorCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * DonorCountOutputType without action
   */
  export type DonorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorCountOutputType
     */
    select?: DonorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DonorCountOutputType without action
   */
  export type DonorCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * DonorCountOutputType without action
   */
  export type DonorCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestResponseWhereInput
  }


  /**
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    requests: number
  }

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | HospitalCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
  }


  /**
   * Count Type BloodRequestCountOutputType
   */

  export type BloodRequestCountOutputType = {
    donations: number
    responses: number
  }

  export type BloodRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donations?: boolean | BloodRequestCountOutputTypeCountDonationsArgs
    responses?: boolean | BloodRequestCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * BloodRequestCountOutputType without action
   */
  export type BloodRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequestCountOutputType
     */
    select?: BloodRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BloodRequestCountOutputType without action
   */
  export type BloodRequestCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * BloodRequestCountOutputType without action
   */
  export type BloodRequestCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | User$donorArgs<ExtArgs>
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    donationsConfirmed?: boolean | User$donationsConfirmedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | User$donorArgs<ExtArgs>
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    donationsConfirmed?: boolean | User$donationsConfirmedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      donor: Prisma.$DonorPayload<ExtArgs> | null
      hospital: Prisma.$HospitalPayload<ExtArgs> | null
      donationsConfirmed: Prisma.$DonationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends User$donorArgs<ExtArgs> = {}>(args?: Subset<T, User$donorArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hospital<T extends User$hospitalArgs<ExtArgs> = {}>(args?: Subset<T, User$hospitalArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    donationsConfirmed<T extends User$donationsConfirmedArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsConfirmedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.donor
   */
  export type User$donorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    where?: DonorWhereInput
  }

  /**
   * User.hospital
   */
  export type User$hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    where?: HospitalWhereInput
  }

  /**
   * User.donationsConfirmed
   */
  export type User$donationsConfirmedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Donor
   */

  export type AggregateDonor = {
    _count: DonorCountAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  export type DonorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    bloodType: $Enums.BloodType | null
    dateOfBirth: Date | null
    phoneNumber: string | null
    address: string | null
    state: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    bloodType: $Enums.BloodType | null
    dateOfBirth: Date | null
    phoneNumber: string | null
    address: string | null
    state: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    bloodType: number
    dateOfBirth: number
    phoneNumber: number
    address: number
    state: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonorMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    bloodType?: true
    dateOfBirth?: true
    phoneNumber?: true
    address?: true
    state?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    bloodType?: true
    dateOfBirth?: true
    phoneNumber?: true
    address?: true
    state?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    bloodType?: true
    dateOfBirth?: true
    phoneNumber?: true
    address?: true
    state?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donor to aggregate.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donors
    **/
    _count?: true | DonorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorMaxAggregateInputType
  }

  export type GetDonorAggregateType<T extends DonorAggregateArgs> = {
        [P in keyof T & keyof AggregateDonor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonor[P]>
      : GetScalarType<T[P], AggregateDonor[P]>
  }




  export type DonorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorWhereInput
    orderBy?: DonorOrderByWithAggregationInput | DonorOrderByWithAggregationInput[]
    by: DonorScalarFieldEnum[] | DonorScalarFieldEnum
    having?: DonorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorCountAggregateInputType | true
    _min?: DonorMinAggregateInputType
    _max?: DonorMaxAggregateInputType
  }

  export type DonorGroupByOutputType = {
    id: string
    userId: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date
    phoneNumber: string
    address: string
    state: string
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: DonorCountAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  type GetDonorGroupByPayload<T extends DonorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorGroupByOutputType[P]>
            : GetScalarType<T[P], DonorGroupByOutputType[P]>
        }
      >
    >


  export type DonorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    bloodType?: boolean
    dateOfBirth?: boolean
    phoneNumber?: boolean
    address?: boolean
    state?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    donations?: boolean | Donor$donationsArgs<ExtArgs>
    responses?: boolean | Donor$responsesArgs<ExtArgs>
    _count?: boolean | DonorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    bloodType?: boolean
    dateOfBirth?: boolean
    phoneNumber?: boolean
    address?: boolean
    state?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    bloodType?: boolean
    dateOfBirth?: boolean
    phoneNumber?: boolean
    address?: boolean
    state?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    bloodType?: boolean
    dateOfBirth?: boolean
    phoneNumber?: boolean
    address?: boolean
    state?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "bloodType" | "dateOfBirth" | "phoneNumber" | "address" | "state" | "isAvailable" | "createdAt" | "updatedAt", ExtArgs["result"]["donor"]>
  export type DonorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    donations?: boolean | Donor$donationsArgs<ExtArgs>
    responses?: boolean | Donor$responsesArgs<ExtArgs>
    _count?: boolean | DonorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DonorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      donations: Prisma.$DonationPayload<ExtArgs>[]
      responses: Prisma.$RequestResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullName: string
      bloodType: $Enums.BloodType
      dateOfBirth: Date
      phoneNumber: string
      address: string
      state: string
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donor"]>
    composites: {}
  }

  type DonorGetPayload<S extends boolean | null | undefined | DonorDefaultArgs> = $Result.GetResult<Prisma.$DonorPayload, S>

  type DonorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorCountAggregateInputType | true
    }

  export interface DonorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donor'], meta: { name: 'Donor' } }
    /**
     * Find zero or one Donor that matches the filter.
     * @param {DonorFindUniqueArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonorFindUniqueArgs>(args: SelectSubset<T, DonorFindUniqueArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonorFindUniqueOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonorFindUniqueOrThrowArgs>(args: SelectSubset<T, DonorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonorFindFirstArgs>(args?: SelectSubset<T, DonorFindFirstArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonorFindFirstOrThrowArgs>(args?: SelectSubset<T, DonorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donors
     * const donors = await prisma.donor.findMany()
     * 
     * // Get first 10 Donors
     * const donors = await prisma.donor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donorWithIdOnly = await prisma.donor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonorFindManyArgs>(args?: SelectSubset<T, DonorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donor.
     * @param {DonorCreateArgs} args - Arguments to create a Donor.
     * @example
     * // Create one Donor
     * const Donor = await prisma.donor.create({
     *   data: {
     *     // ... data to create a Donor
     *   }
     * })
     * 
     */
    create<T extends DonorCreateArgs>(args: SelectSubset<T, DonorCreateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donors.
     * @param {DonorCreateManyArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonorCreateManyArgs>(args?: SelectSubset<T, DonorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donors and returns the data saved in the database.
     * @param {DonorCreateManyAndReturnArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonorCreateManyAndReturnArgs>(args?: SelectSubset<T, DonorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donor.
     * @param {DonorDeleteArgs} args - Arguments to delete one Donor.
     * @example
     * // Delete one Donor
     * const Donor = await prisma.donor.delete({
     *   where: {
     *     // ... filter to delete one Donor
     *   }
     * })
     * 
     */
    delete<T extends DonorDeleteArgs>(args: SelectSubset<T, DonorDeleteArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donor.
     * @param {DonorUpdateArgs} args - Arguments to update one Donor.
     * @example
     * // Update one Donor
     * const donor = await prisma.donor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonorUpdateArgs>(args: SelectSubset<T, DonorUpdateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donors.
     * @param {DonorDeleteManyArgs} args - Arguments to filter Donors to delete.
     * @example
     * // Delete a few Donors
     * const { count } = await prisma.donor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonorDeleteManyArgs>(args?: SelectSubset<T, DonorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonorUpdateManyArgs>(args: SelectSubset<T, DonorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors and returns the data updated in the database.
     * @param {DonorUpdateManyAndReturnArgs} args - Arguments to update many Donors.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonorUpdateManyAndReturnArgs>(args: SelectSubset<T, DonorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donor.
     * @param {DonorUpsertArgs} args - Arguments to update or create a Donor.
     * @example
     * // Update or create a Donor
     * const donor = await prisma.donor.upsert({
     *   create: {
     *     // ... data to create a Donor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donor we want to update
     *   }
     * })
     */
    upsert<T extends DonorUpsertArgs>(args: SelectSubset<T, DonorUpsertArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCountArgs} args - Arguments to filter Donors to count.
     * @example
     * // Count the number of Donors
     * const count = await prisma.donor.count({
     *   where: {
     *     // ... the filter for the Donors we want to count
     *   }
     * })
    **/
    count<T extends DonorCountArgs>(
      args?: Subset<T, DonorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonorAggregateArgs>(args: Subset<T, DonorAggregateArgs>): Prisma.PrismaPromise<GetDonorAggregateType<T>>

    /**
     * Group by Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonorGroupByArgs['orderBy'] }
        : { orderBy?: DonorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donor model
   */
  readonly fields: DonorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donations<T extends Donor$donationsArgs<ExtArgs> = {}>(args?: Subset<T, Donor$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends Donor$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Donor$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donor model
   */
  interface DonorFieldRefs {
    readonly id: FieldRef<"Donor", 'String'>
    readonly userId: FieldRef<"Donor", 'String'>
    readonly fullName: FieldRef<"Donor", 'String'>
    readonly bloodType: FieldRef<"Donor", 'BloodType'>
    readonly dateOfBirth: FieldRef<"Donor", 'DateTime'>
    readonly phoneNumber: FieldRef<"Donor", 'String'>
    readonly address: FieldRef<"Donor", 'String'>
    readonly state: FieldRef<"Donor", 'String'>
    readonly isAvailable: FieldRef<"Donor", 'Boolean'>
    readonly createdAt: FieldRef<"Donor", 'DateTime'>
    readonly updatedAt: FieldRef<"Donor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donor findUnique
   */
  export type DonorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findUniqueOrThrow
   */
  export type DonorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findFirst
   */
  export type DonorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findFirstOrThrow
   */
  export type DonorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findMany
   */
  export type DonorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donors to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor create
   */
  export type DonorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The data needed to create a Donor.
     */
    data: XOR<DonorCreateInput, DonorUncheckedCreateInput>
  }

  /**
   * Donor createMany
   */
  export type DonorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donor createManyAndReturn
   */
  export type DonorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donor update
   */
  export type DonorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The data needed to update a Donor.
     */
    data: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
    /**
     * Choose, which Donor to update.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor updateMany
   */
  export type DonorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to update.
     */
    limit?: number
  }

  /**
   * Donor updateManyAndReturn
   */
  export type DonorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donor upsert
   */
  export type DonorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The filter to search for the Donor to update in case it exists.
     */
    where: DonorWhereUniqueInput
    /**
     * In case the Donor found by the `where` argument doesn't exist, create a new Donor with this data.
     */
    create: XOR<DonorCreateInput, DonorUncheckedCreateInput>
    /**
     * In case the Donor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
  }

  /**
   * Donor delete
   */
  export type DonorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter which Donor to delete.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor deleteMany
   */
  export type DonorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donors to delete
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to delete.
     */
    limit?: number
  }

  /**
   * Donor.donations
   */
  export type Donor$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donor.responses
   */
  export type Donor$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    where?: RequestResponseWhereInput
    orderBy?: RequestResponseOrderByWithRelationInput | RequestResponseOrderByWithRelationInput[]
    cursor?: RequestResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestResponseScalarFieldEnum | RequestResponseScalarFieldEnum[]
  }

  /**
   * Donor without action
   */
  export type DonorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
  }


  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    hospitalName: string | null
    licenseId: string | null
    phoneNumber: string | null
    state: string | null
    address: string | null
    logoUrl: string | null
    contactName: string | null
    contactPhone: string | null
    contactRole: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    hospitalName: string | null
    licenseId: string | null
    phoneNumber: string | null
    state: string | null
    address: string | null
    logoUrl: string | null
    contactName: string | null
    contactPhone: string | null
    contactRole: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    userId: number
    hospitalName: number
    licenseId: number
    phoneNumber: number
    state: number
    address: number
    logoUrl: number
    contactName: number
    contactPhone: number
    contactRole: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HospitalMinAggregateInputType = {
    id?: true
    userId?: true
    hospitalName?: true
    licenseId?: true
    phoneNumber?: true
    state?: true
    address?: true
    logoUrl?: true
    contactName?: true
    contactPhone?: true
    contactRole?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    userId?: true
    hospitalName?: true
    licenseId?: true
    phoneNumber?: true
    state?: true
    address?: true
    logoUrl?: true
    contactName?: true
    contactPhone?: true
    contactRole?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    userId?: true
    hospitalName?: true
    licenseId?: true
    phoneNumber?: true
    state?: true
    address?: true
    logoUrl?: true
    contactName?: true
    contactPhone?: true
    contactRole?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: string
    userId: string
    hospitalName: string
    licenseId: string
    phoneNumber: string
    state: string
    address: string
    logoUrl: string | null
    contactName: string
    contactPhone: string
    contactRole: string
    createdAt: Date
    updatedAt: Date
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hospitalName?: boolean
    licenseId?: boolean
    phoneNumber?: boolean
    state?: boolean
    address?: boolean
    logoUrl?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | Hospital$requestsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hospitalName?: boolean
    licenseId?: boolean
    phoneNumber?: boolean
    state?: boolean
    address?: boolean
    logoUrl?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hospitalName?: boolean
    licenseId?: boolean
    phoneNumber?: boolean
    state?: boolean
    address?: boolean
    logoUrl?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    userId?: boolean
    hospitalName?: boolean
    licenseId?: boolean
    phoneNumber?: boolean
    state?: boolean
    address?: boolean
    logoUrl?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "hospitalName" | "licenseId" | "phoneNumber" | "state" | "address" | "logoUrl" | "contactName" | "contactPhone" | "contactRole" | "createdAt" | "updatedAt", ExtArgs["result"]["hospital"]>
  export type HospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | Hospital$requestsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospitalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HospitalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      requests: Prisma.$BloodRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      hospitalName: string
      licenseId: string
      phoneNumber: string
      state: string
      address: string
      logoUrl: string | null
      contactName: string
      contactPhone: string
      contactRole: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }

  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalFindManyArgs>(args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
     */
    create<T extends HospitalCreateArgs>(args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalCreateManyArgs>(args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
     */
    delete<T extends HospitalDeleteArgs>(args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalUpdateArgs>(args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {HospitalUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HospitalUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requests<T extends Hospital$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hospital model
   */
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'String'>
    readonly userId: FieldRef<"Hospital", 'String'>
    readonly hospitalName: FieldRef<"Hospital", 'String'>
    readonly licenseId: FieldRef<"Hospital", 'String'>
    readonly phoneNumber: FieldRef<"Hospital", 'String'>
    readonly state: FieldRef<"Hospital", 'String'>
    readonly address: FieldRef<"Hospital", 'String'>
    readonly logoUrl: FieldRef<"Hospital", 'String'>
    readonly contactName: FieldRef<"Hospital", 'String'>
    readonly contactPhone: FieldRef<"Hospital", 'String'>
    readonly contactRole: FieldRef<"Hospital", 'String'>
    readonly createdAt: FieldRef<"Hospital", 'DateTime'>
    readonly updatedAt: FieldRef<"Hospital", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }

  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital createManyAndReturn
   */
  export type HospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital updateManyAndReturn
   */
  export type HospitalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }

  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to delete.
     */
    limit?: number
  }

  /**
   * Hospital.requests
   */
  export type Hospital$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    cursor?: BloodRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
  }


  /**
   * Model BloodRequest
   */

  export type AggregateBloodRequest = {
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  export type BloodRequestAvgAggregateOutputType = {
    units: number | null
  }

  export type BloodRequestSumAggregateOutputType = {
    units: number | null
  }

  export type BloodRequestMinAggregateOutputType = {
    id: string | null
    hospitalId: string | null
    bloodType: $Enums.BloodType | null
    units: number | null
    notes: string | null
    urgencyLevel: $Enums.RequestUrgency | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BloodRequestMaxAggregateOutputType = {
    id: string | null
    hospitalId: string | null
    bloodType: $Enums.BloodType | null
    units: number | null
    notes: string | null
    urgencyLevel: $Enums.RequestUrgency | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BloodRequestCountAggregateOutputType = {
    id: number
    hospitalId: number
    bloodType: number
    units: number
    notes: number
    urgencyLevel: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BloodRequestAvgAggregateInputType = {
    units?: true
  }

  export type BloodRequestSumAggregateInputType = {
    units?: true
  }

  export type BloodRequestMinAggregateInputType = {
    id?: true
    hospitalId?: true
    bloodType?: true
    units?: true
    notes?: true
    urgencyLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BloodRequestMaxAggregateInputType = {
    id?: true
    hospitalId?: true
    bloodType?: true
    units?: true
    notes?: true
    urgencyLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BloodRequestCountAggregateInputType = {
    id?: true
    hospitalId?: true
    bloodType?: true
    units?: true
    notes?: true
    urgencyLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BloodRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequest to aggregate.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloodRequests
    **/
    _count?: true | BloodRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodRequestMaxAggregateInputType
  }

  export type GetBloodRequestAggregateType<T extends BloodRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodRequest[P]>
      : GetScalarType<T[P], AggregateBloodRequest[P]>
  }




  export type BloodRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithAggregationInput | BloodRequestOrderByWithAggregationInput[]
    by: BloodRequestScalarFieldEnum[] | BloodRequestScalarFieldEnum
    having?: BloodRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodRequestCountAggregateInputType | true
    _avg?: BloodRequestAvgAggregateInputType
    _sum?: BloodRequestSumAggregateInputType
    _min?: BloodRequestMinAggregateInputType
    _max?: BloodRequestMaxAggregateInputType
  }

  export type BloodRequestGroupByOutputType = {
    id: string
    hospitalId: string
    bloodType: $Enums.BloodType
    units: number
    notes: string | null
    urgencyLevel: $Enums.RequestUrgency
    status: $Enums.RequestStatus
    createdAt: Date
    updatedAt: Date
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  type GetBloodRequestGroupByPayload<T extends BloodRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
        }
      >
    >


  export type BloodRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    bloodType?: boolean
    units?: boolean
    notes?: boolean
    urgencyLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    donations?: boolean | BloodRequest$donationsArgs<ExtArgs>
    responses?: boolean | BloodRequest$responsesArgs<ExtArgs>
    _count?: boolean | BloodRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    bloodType?: boolean
    units?: boolean
    notes?: boolean
    urgencyLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    bloodType?: boolean
    units?: boolean
    notes?: boolean
    urgencyLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectScalar = {
    id?: boolean
    hospitalId?: boolean
    bloodType?: boolean
    units?: boolean
    notes?: boolean
    urgencyLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BloodRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hospitalId" | "bloodType" | "units" | "notes" | "urgencyLevel" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["bloodRequest"]>
  export type BloodRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    donations?: boolean | BloodRequest$donationsArgs<ExtArgs>
    responses?: boolean | BloodRequest$responsesArgs<ExtArgs>
    _count?: boolean | BloodRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BloodRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type BloodRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $BloodRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloodRequest"
    objects: {
      hospital: Prisma.$HospitalPayload<ExtArgs>
      donations: Prisma.$DonationPayload<ExtArgs>[]
      responses: Prisma.$RequestResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hospitalId: string
      bloodType: $Enums.BloodType
      units: number
      notes: string | null
      urgencyLevel: $Enums.RequestUrgency
      status: $Enums.RequestStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bloodRequest"]>
    composites: {}
  }

  type BloodRequestGetPayload<S extends boolean | null | undefined | BloodRequestDefaultArgs> = $Result.GetResult<Prisma.$BloodRequestPayload, S>

  type BloodRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloodRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodRequestCountAggregateInputType | true
    }

  export interface BloodRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloodRequest'], meta: { name: 'BloodRequest' } }
    /**
     * Find zero or one BloodRequest that matches the filter.
     * @param {BloodRequestFindUniqueArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloodRequestFindUniqueArgs>(args: SelectSubset<T, BloodRequestFindUniqueArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BloodRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloodRequestFindUniqueOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloodRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, BloodRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloodRequestFindFirstArgs>(args?: SelectSubset<T, BloodRequestFindFirstArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloodRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, BloodRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloodRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany()
     * 
     * // Get first 10 BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloodRequestFindManyArgs>(args?: SelectSubset<T, BloodRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BloodRequest.
     * @param {BloodRequestCreateArgs} args - Arguments to create a BloodRequest.
     * @example
     * // Create one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.create({
     *   data: {
     *     // ... data to create a BloodRequest
     *   }
     * })
     * 
     */
    create<T extends BloodRequestCreateArgs>(args: SelectSubset<T, BloodRequestCreateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BloodRequests.
     * @param {BloodRequestCreateManyArgs} args - Arguments to create many BloodRequests.
     * @example
     * // Create many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloodRequestCreateManyArgs>(args?: SelectSubset<T, BloodRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BloodRequests and returns the data saved in the database.
     * @param {BloodRequestCreateManyAndReturnArgs} args - Arguments to create many BloodRequests.
     * @example
     * // Create many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BloodRequests and only return the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloodRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, BloodRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BloodRequest.
     * @param {BloodRequestDeleteArgs} args - Arguments to delete one BloodRequest.
     * @example
     * // Delete one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.delete({
     *   where: {
     *     // ... filter to delete one BloodRequest
     *   }
     * })
     * 
     */
    delete<T extends BloodRequestDeleteArgs>(args: SelectSubset<T, BloodRequestDeleteArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BloodRequest.
     * @param {BloodRequestUpdateArgs} args - Arguments to update one BloodRequest.
     * @example
     * // Update one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloodRequestUpdateArgs>(args: SelectSubset<T, BloodRequestUpdateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BloodRequests.
     * @param {BloodRequestDeleteManyArgs} args - Arguments to filter BloodRequests to delete.
     * @example
     * // Delete a few BloodRequests
     * const { count } = await prisma.bloodRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloodRequestDeleteManyArgs>(args?: SelectSubset<T, BloodRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloodRequestUpdateManyArgs>(args: SelectSubset<T, BloodRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests and returns the data updated in the database.
     * @param {BloodRequestUpdateManyAndReturnArgs} args - Arguments to update many BloodRequests.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BloodRequests and only return the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BloodRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, BloodRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BloodRequest.
     * @param {BloodRequestUpsertArgs} args - Arguments to update or create a BloodRequest.
     * @example
     * // Update or create a BloodRequest
     * const bloodRequest = await prisma.bloodRequest.upsert({
     *   create: {
     *     // ... data to create a BloodRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloodRequest we want to update
     *   }
     * })
     */
    upsert<T extends BloodRequestUpsertArgs>(args: SelectSubset<T, BloodRequestUpsertArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestCountArgs} args - Arguments to filter BloodRequests to count.
     * @example
     * // Count the number of BloodRequests
     * const count = await prisma.bloodRequest.count({
     *   where: {
     *     // ... the filter for the BloodRequests we want to count
     *   }
     * })
    **/
    count<T extends BloodRequestCountArgs>(
      args?: Subset<T, BloodRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodRequestAggregateArgs>(args: Subset<T, BloodRequestAggregateArgs>): Prisma.PrismaPromise<GetBloodRequestAggregateType<T>>

    /**
     * Group by BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloodRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloodRequestGroupByArgs['orderBy'] }
        : { orderBy?: BloodRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloodRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloodRequest model
   */
  readonly fields: BloodRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloodRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloodRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donations<T extends BloodRequest$donationsArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequest$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends BloodRequest$responsesArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequest$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BloodRequest model
   */
  interface BloodRequestFieldRefs {
    readonly id: FieldRef<"BloodRequest", 'String'>
    readonly hospitalId: FieldRef<"BloodRequest", 'String'>
    readonly bloodType: FieldRef<"BloodRequest", 'BloodType'>
    readonly units: FieldRef<"BloodRequest", 'Int'>
    readonly notes: FieldRef<"BloodRequest", 'String'>
    readonly urgencyLevel: FieldRef<"BloodRequest", 'RequestUrgency'>
    readonly status: FieldRef<"BloodRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"BloodRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"BloodRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BloodRequest findUnique
   */
  export type BloodRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findUniqueOrThrow
   */
  export type BloodRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findFirst
   */
  export type BloodRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findFirstOrThrow
   */
  export type BloodRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findMany
   */
  export type BloodRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequests to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest create
   */
  export type BloodRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a BloodRequest.
     */
    data: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
  }

  /**
   * BloodRequest createMany
   */
  export type BloodRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BloodRequest createManyAndReturn
   */
  export type BloodRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodRequest update
   */
  export type BloodRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a BloodRequest.
     */
    data: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
    /**
     * Choose, which BloodRequest to update.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest updateMany
   */
  export type BloodRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to update.
     */
    limit?: number
  }

  /**
   * BloodRequest updateManyAndReturn
   */
  export type BloodRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodRequest upsert
   */
  export type BloodRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the BloodRequest to update in case it exists.
     */
    where: BloodRequestWhereUniqueInput
    /**
     * In case the BloodRequest found by the `where` argument doesn't exist, create a new BloodRequest with this data.
     */
    create: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
    /**
     * In case the BloodRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
  }

  /**
   * BloodRequest delete
   */
  export type BloodRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter which BloodRequest to delete.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest deleteMany
   */
  export type BloodRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequests to delete
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to delete.
     */
    limit?: number
  }

  /**
   * BloodRequest.donations
   */
  export type BloodRequest$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * BloodRequest.responses
   */
  export type BloodRequest$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    where?: RequestResponseWhereInput
    orderBy?: RequestResponseOrderByWithRelationInput | RequestResponseOrderByWithRelationInput[]
    cursor?: RequestResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestResponseScalarFieldEnum | RequestResponseScalarFieldEnum[]
  }

  /**
   * BloodRequest without action
   */
  export type BloodRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
  }


  /**
   * Model RequestResponse
   */

  export type AggregateRequestResponse = {
    _count: RequestResponseCountAggregateOutputType | null
    _min: RequestResponseMinAggregateOutputType | null
    _max: RequestResponseMaxAggregateOutputType | null
  }

  export type RequestResponseMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    donorId: string | null
    status: $Enums.ResponseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequestResponseMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    donorId: string | null
    status: $Enums.ResponseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequestResponseCountAggregateOutputType = {
    id: number
    requestId: number
    donorId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequestResponseMinAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequestResponseMaxAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequestResponseCountAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequestResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestResponse to aggregate.
     */
    where?: RequestResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestResponses to fetch.
     */
    orderBy?: RequestResponseOrderByWithRelationInput | RequestResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestResponses
    **/
    _count?: true | RequestResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestResponseMaxAggregateInputType
  }

  export type GetRequestResponseAggregateType<T extends RequestResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestResponse[P]>
      : GetScalarType<T[P], AggregateRequestResponse[P]>
  }




  export type RequestResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestResponseWhereInput
    orderBy?: RequestResponseOrderByWithAggregationInput | RequestResponseOrderByWithAggregationInput[]
    by: RequestResponseScalarFieldEnum[] | RequestResponseScalarFieldEnum
    having?: RequestResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestResponseCountAggregateInputType | true
    _min?: RequestResponseMinAggregateInputType
    _max?: RequestResponseMaxAggregateInputType
  }

  export type RequestResponseGroupByOutputType = {
    id: string
    requestId: string
    donorId: string
    status: $Enums.ResponseStatus
    createdAt: Date
    updatedAt: Date
    _count: RequestResponseCountAggregateOutputType | null
    _min: RequestResponseMinAggregateOutputType | null
    _max: RequestResponseMaxAggregateOutputType | null
  }

  type GetRequestResponseGroupByPayload<T extends RequestResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestResponseGroupByOutputType[P]>
            : GetScalarType<T[P], RequestResponseGroupByOutputType[P]>
        }
      >
    >


  export type RequestResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    donation?: boolean | RequestResponse$donationArgs<ExtArgs>
  }, ExtArgs["result"]["requestResponse"]>

  export type RequestResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestResponse"]>

  export type RequestResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestResponse"]>

  export type RequestResponseSelectScalar = {
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequestResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "donorId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["requestResponse"]>
  export type RequestResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    donation?: boolean | RequestResponse$donationArgs<ExtArgs>
  }
  export type RequestResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }
  export type RequestResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }

  export type $RequestResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestResponse"
    objects: {
      request: Prisma.$BloodRequestPayload<ExtArgs>
      donor: Prisma.$DonorPayload<ExtArgs>
      donation: Prisma.$DonationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      donorId: string
      status: $Enums.ResponseStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["requestResponse"]>
    composites: {}
  }

  type RequestResponseGetPayload<S extends boolean | null | undefined | RequestResponseDefaultArgs> = $Result.GetResult<Prisma.$RequestResponsePayload, S>

  type RequestResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestResponseCountAggregateInputType | true
    }

  export interface RequestResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestResponse'], meta: { name: 'RequestResponse' } }
    /**
     * Find zero or one RequestResponse that matches the filter.
     * @param {RequestResponseFindUniqueArgs} args - Arguments to find a RequestResponse
     * @example
     * // Get one RequestResponse
     * const requestResponse = await prisma.requestResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestResponseFindUniqueArgs>(args: SelectSubset<T, RequestResponseFindUniqueArgs<ExtArgs>>): Prisma__RequestResponseClient<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestResponseFindUniqueOrThrowArgs} args - Arguments to find a RequestResponse
     * @example
     * // Get one RequestResponse
     * const requestResponse = await prisma.requestResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestResponseClient<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestResponseFindFirstArgs} args - Arguments to find a RequestResponse
     * @example
     * // Get one RequestResponse
     * const requestResponse = await prisma.requestResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestResponseFindFirstArgs>(args?: SelectSubset<T, RequestResponseFindFirstArgs<ExtArgs>>): Prisma__RequestResponseClient<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestResponseFindFirstOrThrowArgs} args - Arguments to find a RequestResponse
     * @example
     * // Get one RequestResponse
     * const requestResponse = await prisma.requestResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestResponseClient<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestResponses
     * const requestResponses = await prisma.requestResponse.findMany()
     * 
     * // Get first 10 RequestResponses
     * const requestResponses = await prisma.requestResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestResponseWithIdOnly = await prisma.requestResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestResponseFindManyArgs>(args?: SelectSubset<T, RequestResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestResponse.
     * @param {RequestResponseCreateArgs} args - Arguments to create a RequestResponse.
     * @example
     * // Create one RequestResponse
     * const RequestResponse = await prisma.requestResponse.create({
     *   data: {
     *     // ... data to create a RequestResponse
     *   }
     * })
     * 
     */
    create<T extends RequestResponseCreateArgs>(args: SelectSubset<T, RequestResponseCreateArgs<ExtArgs>>): Prisma__RequestResponseClient<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestResponses.
     * @param {RequestResponseCreateManyArgs} args - Arguments to create many RequestResponses.
     * @example
     * // Create many RequestResponses
     * const requestResponse = await prisma.requestResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestResponseCreateManyArgs>(args?: SelectSubset<T, RequestResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestResponses and returns the data saved in the database.
     * @param {RequestResponseCreateManyAndReturnArgs} args - Arguments to create many RequestResponses.
     * @example
     * // Create many RequestResponses
     * const requestResponse = await prisma.requestResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestResponses and only return the `id`
     * const requestResponseWithIdOnly = await prisma.requestResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestResponse.
     * @param {RequestResponseDeleteArgs} args - Arguments to delete one RequestResponse.
     * @example
     * // Delete one RequestResponse
     * const RequestResponse = await prisma.requestResponse.delete({
     *   where: {
     *     // ... filter to delete one RequestResponse
     *   }
     * })
     * 
     */
    delete<T extends RequestResponseDeleteArgs>(args: SelectSubset<T, RequestResponseDeleteArgs<ExtArgs>>): Prisma__RequestResponseClient<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestResponse.
     * @param {RequestResponseUpdateArgs} args - Arguments to update one RequestResponse.
     * @example
     * // Update one RequestResponse
     * const requestResponse = await prisma.requestResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestResponseUpdateArgs>(args: SelectSubset<T, RequestResponseUpdateArgs<ExtArgs>>): Prisma__RequestResponseClient<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestResponses.
     * @param {RequestResponseDeleteManyArgs} args - Arguments to filter RequestResponses to delete.
     * @example
     * // Delete a few RequestResponses
     * const { count } = await prisma.requestResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestResponseDeleteManyArgs>(args?: SelectSubset<T, RequestResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestResponses
     * const requestResponse = await prisma.requestResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestResponseUpdateManyArgs>(args: SelectSubset<T, RequestResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestResponses and returns the data updated in the database.
     * @param {RequestResponseUpdateManyAndReturnArgs} args - Arguments to update many RequestResponses.
     * @example
     * // Update many RequestResponses
     * const requestResponse = await prisma.requestResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestResponses and only return the `id`
     * const requestResponseWithIdOnly = await prisma.requestResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestResponse.
     * @param {RequestResponseUpsertArgs} args - Arguments to update or create a RequestResponse.
     * @example
     * // Update or create a RequestResponse
     * const requestResponse = await prisma.requestResponse.upsert({
     *   create: {
     *     // ... data to create a RequestResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestResponse we want to update
     *   }
     * })
     */
    upsert<T extends RequestResponseUpsertArgs>(args: SelectSubset<T, RequestResponseUpsertArgs<ExtArgs>>): Prisma__RequestResponseClient<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestResponseCountArgs} args - Arguments to filter RequestResponses to count.
     * @example
     * // Count the number of RequestResponses
     * const count = await prisma.requestResponse.count({
     *   where: {
     *     // ... the filter for the RequestResponses we want to count
     *   }
     * })
    **/
    count<T extends RequestResponseCountArgs>(
      args?: Subset<T, RequestResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestResponseAggregateArgs>(args: Subset<T, RequestResponseAggregateArgs>): Prisma.PrismaPromise<GetRequestResponseAggregateType<T>>

    /**
     * Group by RequestResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestResponseGroupByArgs['orderBy'] }
        : { orderBy?: RequestResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestResponse model
   */
  readonly fields: RequestResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends BloodRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequestDefaultArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donor<T extends DonorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonorDefaultArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donation<T extends RequestResponse$donationArgs<ExtArgs> = {}>(args?: Subset<T, RequestResponse$donationArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequestResponse model
   */
  interface RequestResponseFieldRefs {
    readonly id: FieldRef<"RequestResponse", 'String'>
    readonly requestId: FieldRef<"RequestResponse", 'String'>
    readonly donorId: FieldRef<"RequestResponse", 'String'>
    readonly status: FieldRef<"RequestResponse", 'ResponseStatus'>
    readonly createdAt: FieldRef<"RequestResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"RequestResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestResponse findUnique
   */
  export type RequestResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    /**
     * Filter, which RequestResponse to fetch.
     */
    where: RequestResponseWhereUniqueInput
  }

  /**
   * RequestResponse findUniqueOrThrow
   */
  export type RequestResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    /**
     * Filter, which RequestResponse to fetch.
     */
    where: RequestResponseWhereUniqueInput
  }

  /**
   * RequestResponse findFirst
   */
  export type RequestResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    /**
     * Filter, which RequestResponse to fetch.
     */
    where?: RequestResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestResponses to fetch.
     */
    orderBy?: RequestResponseOrderByWithRelationInput | RequestResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestResponses.
     */
    cursor?: RequestResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestResponses.
     */
    distinct?: RequestResponseScalarFieldEnum | RequestResponseScalarFieldEnum[]
  }

  /**
   * RequestResponse findFirstOrThrow
   */
  export type RequestResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    /**
     * Filter, which RequestResponse to fetch.
     */
    where?: RequestResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestResponses to fetch.
     */
    orderBy?: RequestResponseOrderByWithRelationInput | RequestResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestResponses.
     */
    cursor?: RequestResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestResponses.
     */
    distinct?: RequestResponseScalarFieldEnum | RequestResponseScalarFieldEnum[]
  }

  /**
   * RequestResponse findMany
   */
  export type RequestResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    /**
     * Filter, which RequestResponses to fetch.
     */
    where?: RequestResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestResponses to fetch.
     */
    orderBy?: RequestResponseOrderByWithRelationInput | RequestResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestResponses.
     */
    cursor?: RequestResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestResponses.
     */
    distinct?: RequestResponseScalarFieldEnum | RequestResponseScalarFieldEnum[]
  }

  /**
   * RequestResponse create
   */
  export type RequestResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestResponse.
     */
    data: XOR<RequestResponseCreateInput, RequestResponseUncheckedCreateInput>
  }

  /**
   * RequestResponse createMany
   */
  export type RequestResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestResponses.
     */
    data: RequestResponseCreateManyInput | RequestResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestResponse createManyAndReturn
   */
  export type RequestResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * The data used to create many RequestResponses.
     */
    data: RequestResponseCreateManyInput | RequestResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestResponse update
   */
  export type RequestResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestResponse.
     */
    data: XOR<RequestResponseUpdateInput, RequestResponseUncheckedUpdateInput>
    /**
     * Choose, which RequestResponse to update.
     */
    where: RequestResponseWhereUniqueInput
  }

  /**
   * RequestResponse updateMany
   */
  export type RequestResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestResponses.
     */
    data: XOR<RequestResponseUpdateManyMutationInput, RequestResponseUncheckedUpdateManyInput>
    /**
     * Filter which RequestResponses to update
     */
    where?: RequestResponseWhereInput
    /**
     * Limit how many RequestResponses to update.
     */
    limit?: number
  }

  /**
   * RequestResponse updateManyAndReturn
   */
  export type RequestResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * The data used to update RequestResponses.
     */
    data: XOR<RequestResponseUpdateManyMutationInput, RequestResponseUncheckedUpdateManyInput>
    /**
     * Filter which RequestResponses to update
     */
    where?: RequestResponseWhereInput
    /**
     * Limit how many RequestResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestResponse upsert
   */
  export type RequestResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestResponse to update in case it exists.
     */
    where: RequestResponseWhereUniqueInput
    /**
     * In case the RequestResponse found by the `where` argument doesn't exist, create a new RequestResponse with this data.
     */
    create: XOR<RequestResponseCreateInput, RequestResponseUncheckedCreateInput>
    /**
     * In case the RequestResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestResponseUpdateInput, RequestResponseUncheckedUpdateInput>
  }

  /**
   * RequestResponse delete
   */
  export type RequestResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
    /**
     * Filter which RequestResponse to delete.
     */
    where: RequestResponseWhereUniqueInput
  }

  /**
   * RequestResponse deleteMany
   */
  export type RequestResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestResponses to delete
     */
    where?: RequestResponseWhereInput
    /**
     * Limit how many RequestResponses to delete.
     */
    limit?: number
  }

  /**
   * RequestResponse.donation
   */
  export type RequestResponse$donationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
  }

  /**
   * RequestResponse without action
   */
  export type RequestResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestResponse
     */
    select?: RequestResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestResponse
     */
    omit?: RequestResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestResponseInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    units: number | null
  }

  export type DonationSumAggregateOutputType = {
    units: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    donorId: string | null
    responseId: string | null
    units: number | null
    confirmedById: string | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    donorId: string | null
    responseId: string | null
    units: number | null
    confirmedById: string | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    requestId: number
    donorId: number
    responseId: number
    units: number
    confirmedById: number
    confirmedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    units?: true
  }

  export type DonationSumAggregateInputType = {
    units?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    responseId?: true
    units?: true
    confirmedById?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    responseId?: true
    units?: true
    confirmedById?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    responseId?: true
    units?: true
    confirmedById?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: string
    requestId: string
    donorId: string
    responseId: string
    units: number
    confirmedById: string
    confirmedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    responseId?: boolean
    units?: boolean
    confirmedById?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    response?: boolean | RequestResponseDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    responseId?: boolean
    units?: boolean
    confirmedById?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    response?: boolean | RequestResponseDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    responseId?: boolean
    units?: boolean
    confirmedById?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    response?: boolean | RequestResponseDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    responseId?: boolean
    units?: boolean
    confirmedById?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "donorId" | "responseId" | "units" | "confirmedById" | "confirmedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    response?: boolean | RequestResponseDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    response?: boolean | RequestResponseDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | DonorDefaultArgs<ExtArgs>
    response?: boolean | RequestResponseDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      request: Prisma.$BloodRequestPayload<ExtArgs>
      donor: Prisma.$DonorPayload<ExtArgs>
      response: Prisma.$RequestResponsePayload<ExtArgs>
      confirmedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      donorId: string
      responseId: string
      units: number
      confirmedById: string
      confirmedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends BloodRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequestDefaultArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donor<T extends DonorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonorDefaultArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    response<T extends RequestResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestResponseDefaultArgs<ExtArgs>>): Prisma__RequestResponseClient<$Result.GetResult<Prisma.$RequestResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    confirmedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'String'>
    readonly requestId: FieldRef<"Donation", 'String'>
    readonly donorId: FieldRef<"Donation", 'String'>
    readonly responseId: FieldRef<"Donation", 'String'>
    readonly units: FieldRef<"Donation", 'Int'>
    readonly confirmedById: FieldRef<"Donation", 'String'>
    readonly confirmedAt: FieldRef<"Donation", 'DateTime'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly updatedAt: FieldRef<"Donation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DonorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    bloodType: 'bloodType',
    dateOfBirth: 'dateOfBirth',
    phoneNumber: 'phoneNumber',
    address: 'address',
    state: 'state',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonorScalarFieldEnum = (typeof DonorScalarFieldEnum)[keyof typeof DonorScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    hospitalName: 'hospitalName',
    licenseId: 'licenseId',
    phoneNumber: 'phoneNumber',
    state: 'state',
    address: 'address',
    logoUrl: 'logoUrl',
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    contactRole: 'contactRole',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const BloodRequestScalarFieldEnum: {
    id: 'id',
    hospitalId: 'hospitalId',
    bloodType: 'bloodType',
    units: 'units',
    notes: 'notes',
    urgencyLevel: 'urgencyLevel',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BloodRequestScalarFieldEnum = (typeof BloodRequestScalarFieldEnum)[keyof typeof BloodRequestScalarFieldEnum]


  export const RequestResponseScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    donorId: 'donorId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequestResponseScalarFieldEnum = (typeof RequestResponseScalarFieldEnum)[keyof typeof RequestResponseScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    donorId: 'donorId',
    responseId: 'responseId',
    units: 'units',
    confirmedById: 'confirmedById',
    confirmedAt: 'confirmedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BloodType'
   */
  export type EnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType'>
    


  /**
   * Reference to a field of type 'BloodType[]'
   */
  export type ListEnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RequestUrgency'
   */
  export type EnumRequestUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestUrgency'>
    


  /**
   * Reference to a field of type 'RequestUrgency[]'
   */
  export type ListEnumRequestUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestUrgency[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'ResponseStatus'
   */
  export type EnumResponseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseStatus'>
    


  /**
   * Reference to a field of type 'ResponseStatus[]'
   */
  export type ListEnumResponseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    donor?: XOR<DonorNullableScalarRelationFilter, DonorWhereInput> | null
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    donationsConfirmed?: DonationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donor?: DonorOrderByWithRelationInput
    hospital?: HospitalOrderByWithRelationInput
    donationsConfirmed?: DonationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    donor?: XOR<DonorNullableScalarRelationFilter, DonorWhereInput> | null
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    donationsConfirmed?: DonationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DonorWhereInput = {
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    id?: StringFilter<"Donor"> | string
    userId?: StringFilter<"Donor"> | string
    fullName?: StringFilter<"Donor"> | string
    bloodType?: EnumBloodTypeFilter<"Donor"> | $Enums.BloodType
    dateOfBirth?: DateTimeFilter<"Donor"> | Date | string
    phoneNumber?: StringFilter<"Donor"> | string
    address?: StringFilter<"Donor"> | string
    state?: StringFilter<"Donor"> | string
    isAvailable?: BoolFilter<"Donor"> | boolean
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    donations?: DonationListRelationFilter
    responses?: RequestResponseListRelationFilter
  }

  export type DonorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bloodType?: SortOrder
    dateOfBirth?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    state?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    donations?: DonationOrderByRelationAggregateInput
    responses?: RequestResponseOrderByRelationAggregateInput
  }

  export type DonorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    fullName?: StringFilter<"Donor"> | string
    bloodType?: EnumBloodTypeFilter<"Donor"> | $Enums.BloodType
    dateOfBirth?: DateTimeFilter<"Donor"> | Date | string
    phoneNumber?: StringFilter<"Donor"> | string
    address?: StringFilter<"Donor"> | string
    state?: StringFilter<"Donor"> | string
    isAvailable?: BoolFilter<"Donor"> | boolean
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    donations?: DonationListRelationFilter
    responses?: RequestResponseListRelationFilter
  }, "id" | "userId">

  export type DonorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bloodType?: SortOrder
    dateOfBirth?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    state?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonorCountOrderByAggregateInput
    _max?: DonorMaxOrderByAggregateInput
    _min?: DonorMinOrderByAggregateInput
  }

  export type DonorScalarWhereWithAggregatesInput = {
    AND?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    OR?: DonorScalarWhereWithAggregatesInput[]
    NOT?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donor"> | string
    userId?: StringWithAggregatesFilter<"Donor"> | string
    fullName?: StringWithAggregatesFilter<"Donor"> | string
    bloodType?: EnumBloodTypeWithAggregatesFilter<"Donor"> | $Enums.BloodType
    dateOfBirth?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
    phoneNumber?: StringWithAggregatesFilter<"Donor"> | string
    address?: StringWithAggregatesFilter<"Donor"> | string
    state?: StringWithAggregatesFilter<"Donor"> | string
    isAvailable?: BoolWithAggregatesFilter<"Donor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: StringFilter<"Hospital"> | string
    userId?: StringFilter<"Hospital"> | string
    hospitalName?: StringFilter<"Hospital"> | string
    licenseId?: StringFilter<"Hospital"> | string
    phoneNumber?: StringFilter<"Hospital"> | string
    state?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    logoUrl?: StringNullableFilter<"Hospital"> | string | null
    contactName?: StringFilter<"Hospital"> | string
    contactPhone?: StringFilter<"Hospital"> | string
    contactRole?: StringFilter<"Hospital"> | string
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    requests?: BloodRequestListRelationFilter
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalName?: SortOrder
    licenseId?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    requests?: BloodRequestOrderByRelationAggregateInput
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    licenseId?: string
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    hospitalName?: StringFilter<"Hospital"> | string
    phoneNumber?: StringFilter<"Hospital"> | string
    state?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    logoUrl?: StringNullableFilter<"Hospital"> | string | null
    contactName?: StringFilter<"Hospital"> | string
    contactPhone?: StringFilter<"Hospital"> | string
    contactRole?: StringFilter<"Hospital"> | string
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    requests?: BloodRequestListRelationFilter
  }, "id" | "userId" | "licenseId">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalName?: SortOrder
    licenseId?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hospital"> | string
    userId?: StringWithAggregatesFilter<"Hospital"> | string
    hospitalName?: StringWithAggregatesFilter<"Hospital"> | string
    licenseId?: StringWithAggregatesFilter<"Hospital"> | string
    phoneNumber?: StringWithAggregatesFilter<"Hospital"> | string
    state?: StringWithAggregatesFilter<"Hospital"> | string
    address?: StringWithAggregatesFilter<"Hospital"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    contactName?: StringWithAggregatesFilter<"Hospital"> | string
    contactPhone?: StringWithAggregatesFilter<"Hospital"> | string
    contactRole?: StringWithAggregatesFilter<"Hospital"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
  }

  export type BloodRequestWhereInput = {
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    id?: StringFilter<"BloodRequest"> | string
    hospitalId?: StringFilter<"BloodRequest"> | string
    bloodType?: EnumBloodTypeFilter<"BloodRequest"> | $Enums.BloodType
    units?: IntFilter<"BloodRequest"> | number
    notes?: StringNullableFilter<"BloodRequest"> | string | null
    urgencyLevel?: EnumRequestUrgencyFilter<"BloodRequest"> | $Enums.RequestUrgency
    status?: EnumRequestStatusFilter<"BloodRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
    donations?: DonationListRelationFilter
    responses?: RequestResponseListRelationFilter
  }

  export type BloodRequestOrderByWithRelationInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    bloodType?: SortOrder
    units?: SortOrder
    notes?: SortOrderInput | SortOrder
    urgencyLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospital?: HospitalOrderByWithRelationInput
    donations?: DonationOrderByRelationAggregateInput
    responses?: RequestResponseOrderByRelationAggregateInput
  }

  export type BloodRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    hospitalId?: StringFilter<"BloodRequest"> | string
    bloodType?: EnumBloodTypeFilter<"BloodRequest"> | $Enums.BloodType
    units?: IntFilter<"BloodRequest"> | number
    notes?: StringNullableFilter<"BloodRequest"> | string | null
    urgencyLevel?: EnumRequestUrgencyFilter<"BloodRequest"> | $Enums.RequestUrgency
    status?: EnumRequestStatusFilter<"BloodRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
    donations?: DonationListRelationFilter
    responses?: RequestResponseListRelationFilter
  }, "id">

  export type BloodRequestOrderByWithAggregationInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    bloodType?: SortOrder
    units?: SortOrder
    notes?: SortOrderInput | SortOrder
    urgencyLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BloodRequestCountOrderByAggregateInput
    _avg?: BloodRequestAvgOrderByAggregateInput
    _max?: BloodRequestMaxOrderByAggregateInput
    _min?: BloodRequestMinOrderByAggregateInput
    _sum?: BloodRequestSumOrderByAggregateInput
  }

  export type BloodRequestScalarWhereWithAggregatesInput = {
    AND?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    OR?: BloodRequestScalarWhereWithAggregatesInput[]
    NOT?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BloodRequest"> | string
    hospitalId?: StringWithAggregatesFilter<"BloodRequest"> | string
    bloodType?: EnumBloodTypeWithAggregatesFilter<"BloodRequest"> | $Enums.BloodType
    units?: IntWithAggregatesFilter<"BloodRequest"> | number
    notes?: StringNullableWithAggregatesFilter<"BloodRequest"> | string | null
    urgencyLevel?: EnumRequestUrgencyWithAggregatesFilter<"BloodRequest"> | $Enums.RequestUrgency
    status?: EnumRequestStatusWithAggregatesFilter<"BloodRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
  }

  export type RequestResponseWhereInput = {
    AND?: RequestResponseWhereInput | RequestResponseWhereInput[]
    OR?: RequestResponseWhereInput[]
    NOT?: RequestResponseWhereInput | RequestResponseWhereInput[]
    id?: StringFilter<"RequestResponse"> | string
    requestId?: StringFilter<"RequestResponse"> | string
    donorId?: StringFilter<"RequestResponse"> | string
    status?: EnumResponseStatusFilter<"RequestResponse"> | $Enums.ResponseStatus
    createdAt?: DateTimeFilter<"RequestResponse"> | Date | string
    updatedAt?: DateTimeFilter<"RequestResponse"> | Date | string
    request?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
    donation?: XOR<DonationNullableScalarRelationFilter, DonationWhereInput> | null
  }

  export type RequestResponseOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    request?: BloodRequestOrderByWithRelationInput
    donor?: DonorOrderByWithRelationInput
    donation?: DonationOrderByWithRelationInput
  }

  export type RequestResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId_donorId?: RequestResponseRequestIdDonorIdCompoundUniqueInput
    AND?: RequestResponseWhereInput | RequestResponseWhereInput[]
    OR?: RequestResponseWhereInput[]
    NOT?: RequestResponseWhereInput | RequestResponseWhereInput[]
    requestId?: StringFilter<"RequestResponse"> | string
    donorId?: StringFilter<"RequestResponse"> | string
    status?: EnumResponseStatusFilter<"RequestResponse"> | $Enums.ResponseStatus
    createdAt?: DateTimeFilter<"RequestResponse"> | Date | string
    updatedAt?: DateTimeFilter<"RequestResponse"> | Date | string
    request?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
    donation?: XOR<DonationNullableScalarRelationFilter, DonationWhereInput> | null
  }, "id" | "requestId_donorId">

  export type RequestResponseOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequestResponseCountOrderByAggregateInput
    _max?: RequestResponseMaxOrderByAggregateInput
    _min?: RequestResponseMinOrderByAggregateInput
  }

  export type RequestResponseScalarWhereWithAggregatesInput = {
    AND?: RequestResponseScalarWhereWithAggregatesInput | RequestResponseScalarWhereWithAggregatesInput[]
    OR?: RequestResponseScalarWhereWithAggregatesInput[]
    NOT?: RequestResponseScalarWhereWithAggregatesInput | RequestResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestResponse"> | string
    requestId?: StringWithAggregatesFilter<"RequestResponse"> | string
    donorId?: StringWithAggregatesFilter<"RequestResponse"> | string
    status?: EnumResponseStatusWithAggregatesFilter<"RequestResponse"> | $Enums.ResponseStatus
    createdAt?: DateTimeWithAggregatesFilter<"RequestResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequestResponse"> | Date | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: StringFilter<"Donation"> | string
    requestId?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    responseId?: StringFilter<"Donation"> | string
    units?: IntFilter<"Donation"> | number
    confirmedById?: StringFilter<"Donation"> | string
    confirmedAt?: DateTimeFilter<"Donation"> | Date | string
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    request?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
    response?: XOR<RequestResponseScalarRelationFilter, RequestResponseWhereInput>
    confirmedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    responseId?: SortOrder
    units?: SortOrder
    confirmedById?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    request?: BloodRequestOrderByWithRelationInput
    donor?: DonorOrderByWithRelationInput
    response?: RequestResponseOrderByWithRelationInput
    confirmedBy?: UserOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    responseId?: string
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    requestId?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    units?: IntFilter<"Donation"> | number
    confirmedById?: StringFilter<"Donation"> | string
    confirmedAt?: DateTimeFilter<"Donation"> | Date | string
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    request?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
    response?: XOR<RequestResponseScalarRelationFilter, RequestResponseWhereInput>
    confirmedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "responseId">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    responseId?: SortOrder
    units?: SortOrder
    confirmedById?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donation"> | string
    requestId?: StringWithAggregatesFilter<"Donation"> | string
    donorId?: StringWithAggregatesFilter<"Donation"> | string
    responseId?: StringWithAggregatesFilter<"Donation"> | string
    units?: IntWithAggregatesFilter<"Donation"> | number
    confirmedById?: StringWithAggregatesFilter<"Donation"> | string
    confirmedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorCreateNestedOneWithoutUserInput
    hospital?: HospitalCreateNestedOneWithoutUserInput
    donationsConfirmed?: DonationCreateNestedManyWithoutConfirmedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorUncheckedCreateNestedOneWithoutUserInput
    hospital?: HospitalUncheckedCreateNestedOneWithoutUserInput
    donationsConfirmed?: DonationUncheckedCreateNestedManyWithoutConfirmedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneWithoutUserNestedInput
    hospital?: HospitalUpdateOneWithoutUserNestedInput
    donationsConfirmed?: DonationUpdateManyWithoutConfirmedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUncheckedUpdateOneWithoutUserNestedInput
    hospital?: HospitalUncheckedUpdateOneWithoutUserNestedInput
    donationsConfirmed?: DonationUncheckedUpdateManyWithoutConfirmedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorCreateInput = {
    id?: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date | string
    phoneNumber: string
    address: string
    state: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDonorInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    responses?: RequestResponseCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateInput = {
    id?: string
    userId: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date | string
    phoneNumber: string
    address: string
    state: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    responses?: RequestResponseUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDonorNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    responses?: RequestResponseUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    responses?: RequestResponseUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type DonorCreateManyInput = {
    id?: string
    userId: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date | string
    phoneNumber: string
    address: string
    state: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalCreateInput = {
    id?: string
    hospitalName: string
    licenseId: string
    phoneNumber: string
    state: string
    address: string
    logoUrl?: string | null
    contactName: string
    contactPhone: string
    contactRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHospitalInput
    requests?: BloodRequestCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateInput = {
    id?: string
    userId: string
    hospitalName: string
    licenseId: string
    phoneNumber: string
    state: string
    address: string
    logoUrl?: string | null
    contactName: string
    contactPhone: string
    contactRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: BloodRequestUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHospitalNestedInput
    requests?: BloodRequestUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateManyInput = {
    id?: string
    userId: string
    hospitalName: string
    licenseId: string
    phoneNumber: string
    state: string
    address: string
    logoUrl?: string | null
    contactName: string
    contactPhone: string
    contactRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateInput = {
    id?: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutRequestsInput
    donations?: DonationCreateNestedManyWithoutRequestInput
    responses?: RequestResponseCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUncheckedCreateInput = {
    id?: string
    hospitalId: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donations?: DonationUncheckedCreateNestedManyWithoutRequestInput
    responses?: RequestResponseUncheckedCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutRequestsNestedInput
    donations?: DonationUpdateManyWithoutRequestNestedInput
    responses?: RequestResponseUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: DonationUncheckedUpdateManyWithoutRequestNestedInput
    responses?: RequestResponseUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestCreateManyInput = {
    id?: string
    hospitalId: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestResponseCreateInput = {
    id?: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutResponsesInput
    donor: DonorCreateNestedOneWithoutResponsesInput
    donation?: DonationCreateNestedOneWithoutResponseInput
  }

  export type RequestResponseUncheckedCreateInput = {
    id?: string
    requestId: string
    donorId: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donation?: DonationUncheckedCreateNestedOneWithoutResponseInput
  }

  export type RequestResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutResponsesNestedInput
    donor?: DonorUpdateOneRequiredWithoutResponsesNestedInput
    donation?: DonationUpdateOneWithoutResponseNestedInput
  }

  export type RequestResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donation?: DonationUncheckedUpdateOneWithoutResponseNestedInput
  }

  export type RequestResponseCreateManyInput = {
    id?: string
    requestId: string
    donorId: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateInput = {
    id?: string
    units: number
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutDonationsInput
    donor: DonorCreateNestedOneWithoutDonationsInput
    response: RequestResponseCreateNestedOneWithoutDonationInput
    confirmedBy: UserCreateNestedOneWithoutDonationsConfirmedInput
  }

  export type DonationUncheckedCreateInput = {
    id?: string
    requestId: string
    donorId: string
    responseId: string
    units: number
    confirmedById: string
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutDonationsNestedInput
    donor?: DonorUpdateOneRequiredWithoutDonationsNestedInput
    response?: RequestResponseUpdateOneRequiredWithoutDonationNestedInput
    confirmedBy?: UserUpdateOneRequiredWithoutDonationsConfirmedNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedById?: StringFieldUpdateOperationsInput | string
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateManyInput = {
    id?: string
    requestId: string
    donorId: string
    responseId: string
    units: number
    confirmedById: string
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedById?: StringFieldUpdateOperationsInput | string
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DonorNullableScalarRelationFilter = {
    is?: DonorWhereInput | null
    isNot?: DonorWhereInput | null
  }

  export type HospitalNullableScalarRelationFilter = {
    is?: HospitalWhereInput | null
    isNot?: HospitalWhereInput | null
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumBloodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodTypeFilter<$PrismaModel> | $Enums.BloodType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RequestResponseListRelationFilter = {
    every?: RequestResponseWhereInput
    some?: RequestResponseWhereInput
    none?: RequestResponseWhereInput
  }

  export type RequestResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bloodType?: SortOrder
    dateOfBirth?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    state?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bloodType?: SortOrder
    dateOfBirth?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    state?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bloodType?: SortOrder
    dateOfBirth?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    state?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBloodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel> | $Enums.BloodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BloodRequestListRelationFilter = {
    every?: BloodRequestWhereInput
    some?: BloodRequestWhereInput
    none?: BloodRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BloodRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalName?: SortOrder
    licenseId?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalName?: SortOrder
    licenseId?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalName?: SortOrder
    licenseId?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRequestUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestUrgency | EnumRequestUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.RequestUrgency[] | ListEnumRequestUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestUrgency[] | ListEnumRequestUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestUrgencyFilter<$PrismaModel> | $Enums.RequestUrgency
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type HospitalScalarRelationFilter = {
    is?: HospitalWhereInput
    isNot?: HospitalWhereInput
  }

  export type BloodRequestCountOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    bloodType?: SortOrder
    units?: SortOrder
    notes?: SortOrder
    urgencyLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestAvgOrderByAggregateInput = {
    units?: SortOrder
  }

  export type BloodRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    bloodType?: SortOrder
    units?: SortOrder
    notes?: SortOrder
    urgencyLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestMinOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    bloodType?: SortOrder
    units?: SortOrder
    notes?: SortOrder
    urgencyLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestSumOrderByAggregateInput = {
    units?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRequestUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestUrgency | EnumRequestUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.RequestUrgency[] | ListEnumRequestUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestUrgency[] | ListEnumRequestUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.RequestUrgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestUrgencyFilter<$PrismaModel>
    _max?: NestedEnumRequestUrgencyFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type EnumResponseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStatus | EnumResponseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStatusFilter<$PrismaModel> | $Enums.ResponseStatus
  }

  export type BloodRequestScalarRelationFilter = {
    is?: BloodRequestWhereInput
    isNot?: BloodRequestWhereInput
  }

  export type DonorScalarRelationFilter = {
    is?: DonorWhereInput
    isNot?: DonorWhereInput
  }

  export type DonationNullableScalarRelationFilter = {
    is?: DonationWhereInput | null
    isNot?: DonationWhereInput | null
  }

  export type RequestResponseRequestIdDonorIdCompoundUniqueInput = {
    requestId: string
    donorId: string
  }

  export type RequestResponseCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequestResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequestResponseMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumResponseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStatus | EnumResponseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResponseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseStatusFilter<$PrismaModel>
    _max?: NestedEnumResponseStatusFilter<$PrismaModel>
  }

  export type RequestResponseScalarRelationFilter = {
    is?: RequestResponseWhereInput
    isNot?: RequestResponseWhereInput
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    responseId?: SortOrder
    units?: SortOrder
    confirmedById?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    units?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    responseId?: SortOrder
    units?: SortOrder
    confirmedById?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    responseId?: SortOrder
    units?: SortOrder
    confirmedById?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    units?: SortOrder
  }

  export type DonorCreateNestedOneWithoutUserInput = {
    create?: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DonorCreateOrConnectWithoutUserInput
    connect?: DonorWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutUserInput = {
    create?: XOR<HospitalCreateWithoutUserInput, HospitalUncheckedCreateWithoutUserInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutUserInput
    connect?: HospitalWhereUniqueInput
  }

  export type DonationCreateNestedManyWithoutConfirmedByInput = {
    create?: XOR<DonationCreateWithoutConfirmedByInput, DonationUncheckedCreateWithoutConfirmedByInput> | DonationCreateWithoutConfirmedByInput[] | DonationUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutConfirmedByInput | DonationCreateOrConnectWithoutConfirmedByInput[]
    createMany?: DonationCreateManyConfirmedByInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type DonorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DonorCreateOrConnectWithoutUserInput
    connect?: DonorWhereUniqueInput
  }

  export type HospitalUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<HospitalCreateWithoutUserInput, HospitalUncheckedCreateWithoutUserInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutUserInput
    connect?: HospitalWhereUniqueInput
  }

  export type DonationUncheckedCreateNestedManyWithoutConfirmedByInput = {
    create?: XOR<DonationCreateWithoutConfirmedByInput, DonationUncheckedCreateWithoutConfirmedByInput> | DonationCreateWithoutConfirmedByInput[] | DonationUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutConfirmedByInput | DonationCreateOrConnectWithoutConfirmedByInput[]
    createMany?: DonationCreateManyConfirmedByInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DonorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DonorCreateOrConnectWithoutUserInput
    upsert?: DonorUpsertWithoutUserInput
    disconnect?: DonorWhereInput | boolean
    delete?: DonorWhereInput | boolean
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutUserInput, DonorUpdateWithoutUserInput>, DonorUncheckedUpdateWithoutUserInput>
  }

  export type HospitalUpdateOneWithoutUserNestedInput = {
    create?: XOR<HospitalCreateWithoutUserInput, HospitalUncheckedCreateWithoutUserInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutUserInput
    upsert?: HospitalUpsertWithoutUserInput
    disconnect?: HospitalWhereInput | boolean
    delete?: HospitalWhereInput | boolean
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutUserInput, HospitalUpdateWithoutUserInput>, HospitalUncheckedUpdateWithoutUserInput>
  }

  export type DonationUpdateManyWithoutConfirmedByNestedInput = {
    create?: XOR<DonationCreateWithoutConfirmedByInput, DonationUncheckedCreateWithoutConfirmedByInput> | DonationCreateWithoutConfirmedByInput[] | DonationUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutConfirmedByInput | DonationCreateOrConnectWithoutConfirmedByInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutConfirmedByInput | DonationUpsertWithWhereUniqueWithoutConfirmedByInput[]
    createMany?: DonationCreateManyConfirmedByInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutConfirmedByInput | DonationUpdateWithWhereUniqueWithoutConfirmedByInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutConfirmedByInput | DonationUpdateManyWithWhereWithoutConfirmedByInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type DonorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DonorCreateOrConnectWithoutUserInput
    upsert?: DonorUpsertWithoutUserInput
    disconnect?: DonorWhereInput | boolean
    delete?: DonorWhereInput | boolean
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutUserInput, DonorUpdateWithoutUserInput>, DonorUncheckedUpdateWithoutUserInput>
  }

  export type HospitalUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<HospitalCreateWithoutUserInput, HospitalUncheckedCreateWithoutUserInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutUserInput
    upsert?: HospitalUpsertWithoutUserInput
    disconnect?: HospitalWhereInput | boolean
    delete?: HospitalWhereInput | boolean
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutUserInput, HospitalUpdateWithoutUserInput>, HospitalUncheckedUpdateWithoutUserInput>
  }

  export type DonationUncheckedUpdateManyWithoutConfirmedByNestedInput = {
    create?: XOR<DonationCreateWithoutConfirmedByInput, DonationUncheckedCreateWithoutConfirmedByInput> | DonationCreateWithoutConfirmedByInput[] | DonationUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutConfirmedByInput | DonationCreateOrConnectWithoutConfirmedByInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutConfirmedByInput | DonationUpsertWithWhereUniqueWithoutConfirmedByInput[]
    createMany?: DonationCreateManyConfirmedByInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutConfirmedByInput | DonationUpdateWithWhereUniqueWithoutConfirmedByInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutConfirmedByInput | DonationUpdateManyWithWhereWithoutConfirmedByInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDonorInput = {
    create?: XOR<UserCreateWithoutDonorInput, UserUncheckedCreateWithoutDonorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonorInput
    connect?: UserWhereUniqueInput
  }

  export type DonationCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type RequestResponseCreateNestedManyWithoutDonorInput = {
    create?: XOR<RequestResponseCreateWithoutDonorInput, RequestResponseUncheckedCreateWithoutDonorInput> | RequestResponseCreateWithoutDonorInput[] | RequestResponseUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: RequestResponseCreateOrConnectWithoutDonorInput | RequestResponseCreateOrConnectWithoutDonorInput[]
    createMany?: RequestResponseCreateManyDonorInputEnvelope
    connect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type RequestResponseUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<RequestResponseCreateWithoutDonorInput, RequestResponseUncheckedCreateWithoutDonorInput> | RequestResponseCreateWithoutDonorInput[] | RequestResponseUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: RequestResponseCreateOrConnectWithoutDonorInput | RequestResponseCreateOrConnectWithoutDonorInput[]
    createMany?: RequestResponseCreateManyDonorInputEnvelope
    connect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
  }

  export type EnumBloodTypeFieldUpdateOperationsInput = {
    set?: $Enums.BloodType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutDonorNestedInput = {
    create?: XOR<UserCreateWithoutDonorInput, UserUncheckedCreateWithoutDonorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonorInput
    upsert?: UserUpsertWithoutDonorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonorInput, UserUpdateWithoutDonorInput>, UserUncheckedUpdateWithoutDonorInput>
  }

  export type DonationUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type RequestResponseUpdateManyWithoutDonorNestedInput = {
    create?: XOR<RequestResponseCreateWithoutDonorInput, RequestResponseUncheckedCreateWithoutDonorInput> | RequestResponseCreateWithoutDonorInput[] | RequestResponseUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: RequestResponseCreateOrConnectWithoutDonorInput | RequestResponseCreateOrConnectWithoutDonorInput[]
    upsert?: RequestResponseUpsertWithWhereUniqueWithoutDonorInput | RequestResponseUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: RequestResponseCreateManyDonorInputEnvelope
    set?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    disconnect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    delete?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    connect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    update?: RequestResponseUpdateWithWhereUniqueWithoutDonorInput | RequestResponseUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: RequestResponseUpdateManyWithWhereWithoutDonorInput | RequestResponseUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: RequestResponseScalarWhereInput | RequestResponseScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type RequestResponseUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<RequestResponseCreateWithoutDonorInput, RequestResponseUncheckedCreateWithoutDonorInput> | RequestResponseCreateWithoutDonorInput[] | RequestResponseUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: RequestResponseCreateOrConnectWithoutDonorInput | RequestResponseCreateOrConnectWithoutDonorInput[]
    upsert?: RequestResponseUpsertWithWhereUniqueWithoutDonorInput | RequestResponseUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: RequestResponseCreateManyDonorInputEnvelope
    set?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    disconnect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    delete?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    connect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    update?: RequestResponseUpdateWithWhereUniqueWithoutDonorInput | RequestResponseUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: RequestResponseUpdateManyWithWhereWithoutDonorInput | RequestResponseUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: RequestResponseScalarWhereInput | RequestResponseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHospitalInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput
    connect?: UserWhereUniqueInput
  }

  export type BloodRequestCreateNestedManyWithoutHospitalInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type BloodRequestUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutHospitalNestedInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput
    upsert?: UserUpsertWithoutHospitalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHospitalInput, UserUpdateWithoutHospitalInput>, UserUncheckedUpdateWithoutHospitalInput>
  }

  export type BloodRequestUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutHospitalInput | BloodRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutHospitalInput | BloodRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutHospitalInput | BloodRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutHospitalInput | BloodRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutHospitalInput | BloodRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutHospitalInput | BloodRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type HospitalCreateNestedOneWithoutRequestsInput = {
    create?: XOR<HospitalCreateWithoutRequestsInput, HospitalUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutRequestsInput
    connect?: HospitalWhereUniqueInput
  }

  export type DonationCreateNestedManyWithoutRequestInput = {
    create?: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput> | DonationCreateWithoutRequestInput[] | DonationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequestInput | DonationCreateOrConnectWithoutRequestInput[]
    createMany?: DonationCreateManyRequestInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type RequestResponseCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestResponseCreateWithoutRequestInput, RequestResponseUncheckedCreateWithoutRequestInput> | RequestResponseCreateWithoutRequestInput[] | RequestResponseUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestResponseCreateOrConnectWithoutRequestInput | RequestResponseCreateOrConnectWithoutRequestInput[]
    createMany?: RequestResponseCreateManyRequestInputEnvelope
    connect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput> | DonationCreateWithoutRequestInput[] | DonationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequestInput | DonationCreateOrConnectWithoutRequestInput[]
    createMany?: DonationCreateManyRequestInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type RequestResponseUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestResponseCreateWithoutRequestInput, RequestResponseUncheckedCreateWithoutRequestInput> | RequestResponseCreateWithoutRequestInput[] | RequestResponseUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestResponseCreateOrConnectWithoutRequestInput | RequestResponseCreateOrConnectWithoutRequestInput[]
    createMany?: RequestResponseCreateManyRequestInputEnvelope
    connect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRequestUrgencyFieldUpdateOperationsInput = {
    set?: $Enums.RequestUrgency
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type HospitalUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<HospitalCreateWithoutRequestsInput, HospitalUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutRequestsInput
    upsert?: HospitalUpsertWithoutRequestsInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutRequestsInput, HospitalUpdateWithoutRequestsInput>, HospitalUncheckedUpdateWithoutRequestsInput>
  }

  export type DonationUpdateManyWithoutRequestNestedInput = {
    create?: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput> | DonationCreateWithoutRequestInput[] | DonationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequestInput | DonationCreateOrConnectWithoutRequestInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutRequestInput | DonationUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: DonationCreateManyRequestInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutRequestInput | DonationUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutRequestInput | DonationUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type RequestResponseUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestResponseCreateWithoutRequestInput, RequestResponseUncheckedCreateWithoutRequestInput> | RequestResponseCreateWithoutRequestInput[] | RequestResponseUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestResponseCreateOrConnectWithoutRequestInput | RequestResponseCreateOrConnectWithoutRequestInput[]
    upsert?: RequestResponseUpsertWithWhereUniqueWithoutRequestInput | RequestResponseUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestResponseCreateManyRequestInputEnvelope
    set?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    disconnect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    delete?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    connect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    update?: RequestResponseUpdateWithWhereUniqueWithoutRequestInput | RequestResponseUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestResponseUpdateManyWithWhereWithoutRequestInput | RequestResponseUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestResponseScalarWhereInput | RequestResponseScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput> | DonationCreateWithoutRequestInput[] | DonationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequestInput | DonationCreateOrConnectWithoutRequestInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutRequestInput | DonationUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: DonationCreateManyRequestInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutRequestInput | DonationUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutRequestInput | DonationUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type RequestResponseUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestResponseCreateWithoutRequestInput, RequestResponseUncheckedCreateWithoutRequestInput> | RequestResponseCreateWithoutRequestInput[] | RequestResponseUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestResponseCreateOrConnectWithoutRequestInput | RequestResponseCreateOrConnectWithoutRequestInput[]
    upsert?: RequestResponseUpsertWithWhereUniqueWithoutRequestInput | RequestResponseUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestResponseCreateManyRequestInputEnvelope
    set?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    disconnect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    delete?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    connect?: RequestResponseWhereUniqueInput | RequestResponseWhereUniqueInput[]
    update?: RequestResponseUpdateWithWhereUniqueWithoutRequestInput | RequestResponseUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestResponseUpdateManyWithWhereWithoutRequestInput | RequestResponseUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestResponseScalarWhereInput | RequestResponseScalarWhereInput[]
  }

  export type BloodRequestCreateNestedOneWithoutResponsesInput = {
    create?: XOR<BloodRequestCreateWithoutResponsesInput, BloodRequestUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutResponsesInput
    connect?: BloodRequestWhereUniqueInput
  }

  export type DonorCreateNestedOneWithoutResponsesInput = {
    create?: XOR<DonorCreateWithoutResponsesInput, DonorUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: DonorCreateOrConnectWithoutResponsesInput
    connect?: DonorWhereUniqueInput
  }

  export type DonationCreateNestedOneWithoutResponseInput = {
    create?: XOR<DonationCreateWithoutResponseInput, DonationUncheckedCreateWithoutResponseInput>
    connectOrCreate?: DonationCreateOrConnectWithoutResponseInput
    connect?: DonationWhereUniqueInput
  }

  export type DonationUncheckedCreateNestedOneWithoutResponseInput = {
    create?: XOR<DonationCreateWithoutResponseInput, DonationUncheckedCreateWithoutResponseInput>
    connectOrCreate?: DonationCreateOrConnectWithoutResponseInput
    connect?: DonationWhereUniqueInput
  }

  export type EnumResponseStatusFieldUpdateOperationsInput = {
    set?: $Enums.ResponseStatus
  }

  export type BloodRequestUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<BloodRequestCreateWithoutResponsesInput, BloodRequestUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutResponsesInput
    upsert?: BloodRequestUpsertWithoutResponsesInput
    connect?: BloodRequestWhereUniqueInput
    update?: XOR<XOR<BloodRequestUpdateToOneWithWhereWithoutResponsesInput, BloodRequestUpdateWithoutResponsesInput>, BloodRequestUncheckedUpdateWithoutResponsesInput>
  }

  export type DonorUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<DonorCreateWithoutResponsesInput, DonorUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: DonorCreateOrConnectWithoutResponsesInput
    upsert?: DonorUpsertWithoutResponsesInput
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutResponsesInput, DonorUpdateWithoutResponsesInput>, DonorUncheckedUpdateWithoutResponsesInput>
  }

  export type DonationUpdateOneWithoutResponseNestedInput = {
    create?: XOR<DonationCreateWithoutResponseInput, DonationUncheckedCreateWithoutResponseInput>
    connectOrCreate?: DonationCreateOrConnectWithoutResponseInput
    upsert?: DonationUpsertWithoutResponseInput
    disconnect?: DonationWhereInput | boolean
    delete?: DonationWhereInput | boolean
    connect?: DonationWhereUniqueInput
    update?: XOR<XOR<DonationUpdateToOneWithWhereWithoutResponseInput, DonationUpdateWithoutResponseInput>, DonationUncheckedUpdateWithoutResponseInput>
  }

  export type DonationUncheckedUpdateOneWithoutResponseNestedInput = {
    create?: XOR<DonationCreateWithoutResponseInput, DonationUncheckedCreateWithoutResponseInput>
    connectOrCreate?: DonationCreateOrConnectWithoutResponseInput
    upsert?: DonationUpsertWithoutResponseInput
    disconnect?: DonationWhereInput | boolean
    delete?: DonationWhereInput | boolean
    connect?: DonationWhereUniqueInput
    update?: XOR<XOR<DonationUpdateToOneWithWhereWithoutResponseInput, DonationUpdateWithoutResponseInput>, DonationUncheckedUpdateWithoutResponseInput>
  }

  export type BloodRequestCreateNestedOneWithoutDonationsInput = {
    create?: XOR<BloodRequestCreateWithoutDonationsInput, BloodRequestUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonationsInput
    connect?: BloodRequestWhereUniqueInput
  }

  export type DonorCreateNestedOneWithoutDonationsInput = {
    create?: XOR<DonorCreateWithoutDonationsInput, DonorUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: DonorCreateOrConnectWithoutDonationsInput
    connect?: DonorWhereUniqueInput
  }

  export type RequestResponseCreateNestedOneWithoutDonationInput = {
    create?: XOR<RequestResponseCreateWithoutDonationInput, RequestResponseUncheckedCreateWithoutDonationInput>
    connectOrCreate?: RequestResponseCreateOrConnectWithoutDonationInput
    connect?: RequestResponseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonationsConfirmedInput = {
    create?: XOR<UserCreateWithoutDonationsConfirmedInput, UserUncheckedCreateWithoutDonationsConfirmedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsConfirmedInput
    connect?: UserWhereUniqueInput
  }

  export type BloodRequestUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<BloodRequestCreateWithoutDonationsInput, BloodRequestUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonationsInput
    upsert?: BloodRequestUpsertWithoutDonationsInput
    connect?: BloodRequestWhereUniqueInput
    update?: XOR<XOR<BloodRequestUpdateToOneWithWhereWithoutDonationsInput, BloodRequestUpdateWithoutDonationsInput>, BloodRequestUncheckedUpdateWithoutDonationsInput>
  }

  export type DonorUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<DonorCreateWithoutDonationsInput, DonorUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: DonorCreateOrConnectWithoutDonationsInput
    upsert?: DonorUpsertWithoutDonationsInput
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutDonationsInput, DonorUpdateWithoutDonationsInput>, DonorUncheckedUpdateWithoutDonationsInput>
  }

  export type RequestResponseUpdateOneRequiredWithoutDonationNestedInput = {
    create?: XOR<RequestResponseCreateWithoutDonationInput, RequestResponseUncheckedCreateWithoutDonationInput>
    connectOrCreate?: RequestResponseCreateOrConnectWithoutDonationInput
    upsert?: RequestResponseUpsertWithoutDonationInput
    connect?: RequestResponseWhereUniqueInput
    update?: XOR<XOR<RequestResponseUpdateToOneWithWhereWithoutDonationInput, RequestResponseUpdateWithoutDonationInput>, RequestResponseUncheckedUpdateWithoutDonationInput>
  }

  export type UserUpdateOneRequiredWithoutDonationsConfirmedNestedInput = {
    create?: XOR<UserCreateWithoutDonationsConfirmedInput, UserUncheckedCreateWithoutDonationsConfirmedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsConfirmedInput
    upsert?: UserUpsertWithoutDonationsConfirmedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsConfirmedInput, UserUpdateWithoutDonationsConfirmedInput>, UserUncheckedUpdateWithoutDonationsConfirmedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBloodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodTypeFilter<$PrismaModel> | $Enums.BloodType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel> | $Enums.BloodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestUrgency | EnumRequestUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.RequestUrgency[] | ListEnumRequestUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestUrgency[] | ListEnumRequestUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestUrgencyFilter<$PrismaModel> | $Enums.RequestUrgency
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRequestUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestUrgency | EnumRequestUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.RequestUrgency[] | ListEnumRequestUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestUrgency[] | ListEnumRequestUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.RequestUrgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestUrgencyFilter<$PrismaModel>
    _max?: NestedEnumRequestUrgencyFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumResponseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStatus | EnumResponseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStatusFilter<$PrismaModel> | $Enums.ResponseStatus
  }

  export type NestedEnumResponseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStatus | EnumResponseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResponseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseStatusFilter<$PrismaModel>
    _max?: NestedEnumResponseStatusFilter<$PrismaModel>
  }

  export type DonorCreateWithoutUserInput = {
    id?: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date | string
    phoneNumber: string
    address: string
    state: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    donations?: DonationCreateNestedManyWithoutDonorInput
    responses?: RequestResponseCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date | string
    phoneNumber: string
    address: string
    state: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    responses?: RequestResponseUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorCreateOrConnectWithoutUserInput = {
    where: DonorWhereUniqueInput
    create: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
  }

  export type HospitalCreateWithoutUserInput = {
    id?: string
    hospitalName: string
    licenseId: string
    phoneNumber: string
    state: string
    address: string
    logoUrl?: string | null
    contactName: string
    contactPhone: string
    contactRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: BloodRequestCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutUserInput = {
    id?: string
    hospitalName: string
    licenseId: string
    phoneNumber: string
    state: string
    address: string
    logoUrl?: string | null
    contactName: string
    contactPhone: string
    contactRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: BloodRequestUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutUserInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutUserInput, HospitalUncheckedCreateWithoutUserInput>
  }

  export type DonationCreateWithoutConfirmedByInput = {
    id?: string
    units: number
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutDonationsInput
    donor: DonorCreateNestedOneWithoutDonationsInput
    response: RequestResponseCreateNestedOneWithoutDonationInput
  }

  export type DonationUncheckedCreateWithoutConfirmedByInput = {
    id?: string
    requestId: string
    donorId: string
    responseId: string
    units: number
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutConfirmedByInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutConfirmedByInput, DonationUncheckedCreateWithoutConfirmedByInput>
  }

  export type DonationCreateManyConfirmedByInputEnvelope = {
    data: DonationCreateManyConfirmedByInput | DonationCreateManyConfirmedByInput[]
    skipDuplicates?: boolean
  }

  export type DonorUpsertWithoutUserInput = {
    update: XOR<DonorUpdateWithoutUserInput, DonorUncheckedUpdateWithoutUserInput>
    create: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    where?: DonorWhereInput
  }

  export type DonorUpdateToOneWithWhereWithoutUserInput = {
    where?: DonorWhereInput
    data: XOR<DonorUpdateWithoutUserInput, DonorUncheckedUpdateWithoutUserInput>
  }

  export type DonorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: DonationUpdateManyWithoutDonorNestedInput
    responses?: RequestResponseUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    responses?: RequestResponseUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type HospitalUpsertWithoutUserInput = {
    update: XOR<HospitalUpdateWithoutUserInput, HospitalUncheckedUpdateWithoutUserInput>
    create: XOR<HospitalCreateWithoutUserInput, HospitalUncheckedCreateWithoutUserInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutUserInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutUserInput, HospitalUncheckedUpdateWithoutUserInput>
  }

  export type HospitalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: BloodRequestUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type DonationUpsertWithWhereUniqueWithoutConfirmedByInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutConfirmedByInput, DonationUncheckedUpdateWithoutConfirmedByInput>
    create: XOR<DonationCreateWithoutConfirmedByInput, DonationUncheckedCreateWithoutConfirmedByInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutConfirmedByInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutConfirmedByInput, DonationUncheckedUpdateWithoutConfirmedByInput>
  }

  export type DonationUpdateManyWithWhereWithoutConfirmedByInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutConfirmedByInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: StringFilter<"Donation"> | string
    requestId?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    responseId?: StringFilter<"Donation"> | string
    units?: IntFilter<"Donation"> | number
    confirmedById?: StringFilter<"Donation"> | string
    confirmedAt?: DateTimeFilter<"Donation"> | Date | string
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
  }

  export type UserCreateWithoutDonorInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalCreateNestedOneWithoutUserInput
    donationsConfirmed?: DonationCreateNestedManyWithoutConfirmedByInput
  }

  export type UserUncheckedCreateWithoutDonorInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalUncheckedCreateNestedOneWithoutUserInput
    donationsConfirmed?: DonationUncheckedCreateNestedManyWithoutConfirmedByInput
  }

  export type UserCreateOrConnectWithoutDonorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonorInput, UserUncheckedCreateWithoutDonorInput>
  }

  export type DonationCreateWithoutDonorInput = {
    id?: string
    units: number
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutDonationsInput
    response: RequestResponseCreateNestedOneWithoutDonationInput
    confirmedBy: UserCreateNestedOneWithoutDonationsConfirmedInput
  }

  export type DonationUncheckedCreateWithoutDonorInput = {
    id?: string
    requestId: string
    responseId: string
    units: number
    confirmedById: string
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutDonorInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationCreateManyDonorInputEnvelope = {
    data: DonationCreateManyDonorInput | DonationCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type RequestResponseCreateWithoutDonorInput = {
    id?: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutResponsesInput
    donation?: DonationCreateNestedOneWithoutResponseInput
  }

  export type RequestResponseUncheckedCreateWithoutDonorInput = {
    id?: string
    requestId: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donation?: DonationUncheckedCreateNestedOneWithoutResponseInput
  }

  export type RequestResponseCreateOrConnectWithoutDonorInput = {
    where: RequestResponseWhereUniqueInput
    create: XOR<RequestResponseCreateWithoutDonorInput, RequestResponseUncheckedCreateWithoutDonorInput>
  }

  export type RequestResponseCreateManyDonorInputEnvelope = {
    data: RequestResponseCreateManyDonorInput | RequestResponseCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDonorInput = {
    update: XOR<UserUpdateWithoutDonorInput, UserUncheckedUpdateWithoutDonorInput>
    create: XOR<UserCreateWithoutDonorInput, UserUncheckedCreateWithoutDonorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonorInput, UserUncheckedUpdateWithoutDonorInput>
  }

  export type UserUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneWithoutUserNestedInput
    donationsConfirmed?: DonationUpdateManyWithoutConfirmedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUncheckedUpdateOneWithoutUserNestedInput
    donationsConfirmed?: DonationUncheckedUpdateManyWithoutConfirmedByNestedInput
  }

  export type DonationUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
  }

  export type DonationUpdateManyWithWhereWithoutDonorInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutDonorInput>
  }

  export type RequestResponseUpsertWithWhereUniqueWithoutDonorInput = {
    where: RequestResponseWhereUniqueInput
    update: XOR<RequestResponseUpdateWithoutDonorInput, RequestResponseUncheckedUpdateWithoutDonorInput>
    create: XOR<RequestResponseCreateWithoutDonorInput, RequestResponseUncheckedCreateWithoutDonorInput>
  }

  export type RequestResponseUpdateWithWhereUniqueWithoutDonorInput = {
    where: RequestResponseWhereUniqueInput
    data: XOR<RequestResponseUpdateWithoutDonorInput, RequestResponseUncheckedUpdateWithoutDonorInput>
  }

  export type RequestResponseUpdateManyWithWhereWithoutDonorInput = {
    where: RequestResponseScalarWhereInput
    data: XOR<RequestResponseUpdateManyMutationInput, RequestResponseUncheckedUpdateManyWithoutDonorInput>
  }

  export type RequestResponseScalarWhereInput = {
    AND?: RequestResponseScalarWhereInput | RequestResponseScalarWhereInput[]
    OR?: RequestResponseScalarWhereInput[]
    NOT?: RequestResponseScalarWhereInput | RequestResponseScalarWhereInput[]
    id?: StringFilter<"RequestResponse"> | string
    requestId?: StringFilter<"RequestResponse"> | string
    donorId?: StringFilter<"RequestResponse"> | string
    status?: EnumResponseStatusFilter<"RequestResponse"> | $Enums.ResponseStatus
    createdAt?: DateTimeFilter<"RequestResponse"> | Date | string
    updatedAt?: DateTimeFilter<"RequestResponse"> | Date | string
  }

  export type UserCreateWithoutHospitalInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorCreateNestedOneWithoutUserInput
    donationsConfirmed?: DonationCreateNestedManyWithoutConfirmedByInput
  }

  export type UserUncheckedCreateWithoutHospitalInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorUncheckedCreateNestedOneWithoutUserInput
    donationsConfirmed?: DonationUncheckedCreateNestedManyWithoutConfirmedByInput
  }

  export type UserCreateOrConnectWithoutHospitalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
  }

  export type BloodRequestCreateWithoutHospitalInput = {
    id?: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donations?: DonationCreateNestedManyWithoutRequestInput
    responses?: RequestResponseCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUncheckedCreateWithoutHospitalInput = {
    id?: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donations?: DonationUncheckedCreateNestedManyWithoutRequestInput
    responses?: RequestResponseUncheckedCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestCreateOrConnectWithoutHospitalInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput>
  }

  export type BloodRequestCreateManyHospitalInputEnvelope = {
    data: BloodRequestCreateManyHospitalInput | BloodRequestCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHospitalInput = {
    update: XOR<UserUpdateWithoutHospitalInput, UserUncheckedUpdateWithoutHospitalInput>
    create: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHospitalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHospitalInput, UserUncheckedUpdateWithoutHospitalInput>
  }

  export type UserUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneWithoutUserNestedInput
    donationsConfirmed?: DonationUpdateManyWithoutConfirmedByNestedInput
  }

  export type UserUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUncheckedUpdateOneWithoutUserNestedInput
    donationsConfirmed?: DonationUncheckedUpdateManyWithoutConfirmedByNestedInput
  }

  export type BloodRequestUpsertWithWhereUniqueWithoutHospitalInput = {
    where: BloodRequestWhereUniqueInput
    update: XOR<BloodRequestUpdateWithoutHospitalInput, BloodRequestUncheckedUpdateWithoutHospitalInput>
    create: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput>
  }

  export type BloodRequestUpdateWithWhereUniqueWithoutHospitalInput = {
    where: BloodRequestWhereUniqueInput
    data: XOR<BloodRequestUpdateWithoutHospitalInput, BloodRequestUncheckedUpdateWithoutHospitalInput>
  }

  export type BloodRequestUpdateManyWithWhereWithoutHospitalInput = {
    where: BloodRequestScalarWhereInput
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyWithoutHospitalInput>
  }

  export type BloodRequestScalarWhereInput = {
    AND?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    OR?: BloodRequestScalarWhereInput[]
    NOT?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    id?: StringFilter<"BloodRequest"> | string
    hospitalId?: StringFilter<"BloodRequest"> | string
    bloodType?: EnumBloodTypeFilter<"BloodRequest"> | $Enums.BloodType
    units?: IntFilter<"BloodRequest"> | number
    notes?: StringNullableFilter<"BloodRequest"> | string | null
    urgencyLevel?: EnumRequestUrgencyFilter<"BloodRequest"> | $Enums.RequestUrgency
    status?: EnumRequestStatusFilter<"BloodRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
  }

  export type HospitalCreateWithoutRequestsInput = {
    id?: string
    hospitalName: string
    licenseId: string
    phoneNumber: string
    state: string
    address: string
    logoUrl?: string | null
    contactName: string
    contactPhone: string
    contactRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutRequestsInput = {
    id?: string
    userId: string
    hospitalName: string
    licenseId: string
    phoneNumber: string
    state: string
    address: string
    logoUrl?: string | null
    contactName: string
    contactPhone: string
    contactRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalCreateOrConnectWithoutRequestsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutRequestsInput, HospitalUncheckedCreateWithoutRequestsInput>
  }

  export type DonationCreateWithoutRequestInput = {
    id?: string
    units: number
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: DonorCreateNestedOneWithoutDonationsInput
    response: RequestResponseCreateNestedOneWithoutDonationInput
    confirmedBy: UserCreateNestedOneWithoutDonationsConfirmedInput
  }

  export type DonationUncheckedCreateWithoutRequestInput = {
    id?: string
    donorId: string
    responseId: string
    units: number
    confirmedById: string
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutRequestInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput>
  }

  export type DonationCreateManyRequestInputEnvelope = {
    data: DonationCreateManyRequestInput | DonationCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type RequestResponseCreateWithoutRequestInput = {
    id?: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: DonorCreateNestedOneWithoutResponsesInput
    donation?: DonationCreateNestedOneWithoutResponseInput
  }

  export type RequestResponseUncheckedCreateWithoutRequestInput = {
    id?: string
    donorId: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donation?: DonationUncheckedCreateNestedOneWithoutResponseInput
  }

  export type RequestResponseCreateOrConnectWithoutRequestInput = {
    where: RequestResponseWhereUniqueInput
    create: XOR<RequestResponseCreateWithoutRequestInput, RequestResponseUncheckedCreateWithoutRequestInput>
  }

  export type RequestResponseCreateManyRequestInputEnvelope = {
    data: RequestResponseCreateManyRequestInput | RequestResponseCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type HospitalUpsertWithoutRequestsInput = {
    update: XOR<HospitalUpdateWithoutRequestsInput, HospitalUncheckedUpdateWithoutRequestsInput>
    create: XOR<HospitalCreateWithoutRequestsInput, HospitalUncheckedCreateWithoutRequestsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutRequestsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutRequestsInput, HospitalUncheckedUpdateWithoutRequestsInput>
  }

  export type HospitalUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUpsertWithWhereUniqueWithoutRequestInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutRequestInput, DonationUncheckedUpdateWithoutRequestInput>
    create: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutRequestInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutRequestInput, DonationUncheckedUpdateWithoutRequestInput>
  }

  export type DonationUpdateManyWithWhereWithoutRequestInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutRequestInput>
  }

  export type RequestResponseUpsertWithWhereUniqueWithoutRequestInput = {
    where: RequestResponseWhereUniqueInput
    update: XOR<RequestResponseUpdateWithoutRequestInput, RequestResponseUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestResponseCreateWithoutRequestInput, RequestResponseUncheckedCreateWithoutRequestInput>
  }

  export type RequestResponseUpdateWithWhereUniqueWithoutRequestInput = {
    where: RequestResponseWhereUniqueInput
    data: XOR<RequestResponseUpdateWithoutRequestInput, RequestResponseUncheckedUpdateWithoutRequestInput>
  }

  export type RequestResponseUpdateManyWithWhereWithoutRequestInput = {
    where: RequestResponseScalarWhereInput
    data: XOR<RequestResponseUpdateManyMutationInput, RequestResponseUncheckedUpdateManyWithoutRequestInput>
  }

  export type BloodRequestCreateWithoutResponsesInput = {
    id?: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutRequestsInput
    donations?: DonationCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUncheckedCreateWithoutResponsesInput = {
    id?: string
    hospitalId: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donations?: DonationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestCreateOrConnectWithoutResponsesInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutResponsesInput, BloodRequestUncheckedCreateWithoutResponsesInput>
  }

  export type DonorCreateWithoutResponsesInput = {
    id?: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date | string
    phoneNumber: string
    address: string
    state: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDonorInput
    donations?: DonationCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateWithoutResponsesInput = {
    id?: string
    userId: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date | string
    phoneNumber: string
    address: string
    state: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorCreateOrConnectWithoutResponsesInput = {
    where: DonorWhereUniqueInput
    create: XOR<DonorCreateWithoutResponsesInput, DonorUncheckedCreateWithoutResponsesInput>
  }

  export type DonationCreateWithoutResponseInput = {
    id?: string
    units: number
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutDonationsInput
    donor: DonorCreateNestedOneWithoutDonationsInput
    confirmedBy: UserCreateNestedOneWithoutDonationsConfirmedInput
  }

  export type DonationUncheckedCreateWithoutResponseInput = {
    id?: string
    requestId: string
    donorId: string
    units: number
    confirmedById: string
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutResponseInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutResponseInput, DonationUncheckedCreateWithoutResponseInput>
  }

  export type BloodRequestUpsertWithoutResponsesInput = {
    update: XOR<BloodRequestUpdateWithoutResponsesInput, BloodRequestUncheckedUpdateWithoutResponsesInput>
    create: XOR<BloodRequestCreateWithoutResponsesInput, BloodRequestUncheckedCreateWithoutResponsesInput>
    where?: BloodRequestWhereInput
  }

  export type BloodRequestUpdateToOneWithWhereWithoutResponsesInput = {
    where?: BloodRequestWhereInput
    data: XOR<BloodRequestUpdateWithoutResponsesInput, BloodRequestUncheckedUpdateWithoutResponsesInput>
  }

  export type BloodRequestUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutRequestsNestedInput
    donations?: DonationUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: DonationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type DonorUpsertWithoutResponsesInput = {
    update: XOR<DonorUpdateWithoutResponsesInput, DonorUncheckedUpdateWithoutResponsesInput>
    create: XOR<DonorCreateWithoutResponsesInput, DonorUncheckedCreateWithoutResponsesInput>
    where?: DonorWhereInput
  }

  export type DonorUpdateToOneWithWhereWithoutResponsesInput = {
    where?: DonorWhereInput
    data: XOR<DonorUpdateWithoutResponsesInput, DonorUncheckedUpdateWithoutResponsesInput>
  }

  export type DonorUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDonorNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type DonationUpsertWithoutResponseInput = {
    update: XOR<DonationUpdateWithoutResponseInput, DonationUncheckedUpdateWithoutResponseInput>
    create: XOR<DonationCreateWithoutResponseInput, DonationUncheckedCreateWithoutResponseInput>
    where?: DonationWhereInput
  }

  export type DonationUpdateToOneWithWhereWithoutResponseInput = {
    where?: DonationWhereInput
    data: XOR<DonationUpdateWithoutResponseInput, DonationUncheckedUpdateWithoutResponseInput>
  }

  export type DonationUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutDonationsNestedInput
    donor?: DonorUpdateOneRequiredWithoutDonationsNestedInput
    confirmedBy?: UserUpdateOneRequiredWithoutDonationsConfirmedNestedInput
  }

  export type DonationUncheckedUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedById?: StringFieldUpdateOperationsInput | string
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateWithoutDonationsInput = {
    id?: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutRequestsInput
    responses?: RequestResponseCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUncheckedCreateWithoutDonationsInput = {
    id?: string
    hospitalId: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: RequestResponseUncheckedCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestCreateOrConnectWithoutDonationsInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutDonationsInput, BloodRequestUncheckedCreateWithoutDonationsInput>
  }

  export type DonorCreateWithoutDonationsInput = {
    id?: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date | string
    phoneNumber: string
    address: string
    state: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDonorInput
    responses?: RequestResponseCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateWithoutDonationsInput = {
    id?: string
    userId: string
    fullName: string
    bloodType: $Enums.BloodType
    dateOfBirth: Date | string
    phoneNumber: string
    address: string
    state: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: RequestResponseUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorCreateOrConnectWithoutDonationsInput = {
    where: DonorWhereUniqueInput
    create: XOR<DonorCreateWithoutDonationsInput, DonorUncheckedCreateWithoutDonationsInput>
  }

  export type RequestResponseCreateWithoutDonationInput = {
    id?: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutResponsesInput
    donor: DonorCreateNestedOneWithoutResponsesInput
  }

  export type RequestResponseUncheckedCreateWithoutDonationInput = {
    id?: string
    requestId: string
    donorId: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestResponseCreateOrConnectWithoutDonationInput = {
    where: RequestResponseWhereUniqueInput
    create: XOR<RequestResponseCreateWithoutDonationInput, RequestResponseUncheckedCreateWithoutDonationInput>
  }

  export type UserCreateWithoutDonationsConfirmedInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorCreateNestedOneWithoutUserInput
    hospital?: HospitalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDonationsConfirmedInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorUncheckedCreateNestedOneWithoutUserInput
    hospital?: HospitalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDonationsConfirmedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsConfirmedInput, UserUncheckedCreateWithoutDonationsConfirmedInput>
  }

  export type BloodRequestUpsertWithoutDonationsInput = {
    update: XOR<BloodRequestUpdateWithoutDonationsInput, BloodRequestUncheckedUpdateWithoutDonationsInput>
    create: XOR<BloodRequestCreateWithoutDonationsInput, BloodRequestUncheckedCreateWithoutDonationsInput>
    where?: BloodRequestWhereInput
  }

  export type BloodRequestUpdateToOneWithWhereWithoutDonationsInput = {
    where?: BloodRequestWhereInput
    data: XOR<BloodRequestUpdateWithoutDonationsInput, BloodRequestUncheckedUpdateWithoutDonationsInput>
  }

  export type BloodRequestUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutRequestsNestedInput
    responses?: RequestResponseUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: RequestResponseUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type DonorUpsertWithoutDonationsInput = {
    update: XOR<DonorUpdateWithoutDonationsInput, DonorUncheckedUpdateWithoutDonationsInput>
    create: XOR<DonorCreateWithoutDonationsInput, DonorUncheckedCreateWithoutDonationsInput>
    where?: DonorWhereInput
  }

  export type DonorUpdateToOneWithWhereWithoutDonationsInput = {
    where?: DonorWhereInput
    data: XOR<DonorUpdateWithoutDonationsInput, DonorUncheckedUpdateWithoutDonationsInput>
  }

  export type DonorUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDonorNestedInput
    responses?: RequestResponseUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: RequestResponseUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type RequestResponseUpsertWithoutDonationInput = {
    update: XOR<RequestResponseUpdateWithoutDonationInput, RequestResponseUncheckedUpdateWithoutDonationInput>
    create: XOR<RequestResponseCreateWithoutDonationInput, RequestResponseUncheckedCreateWithoutDonationInput>
    where?: RequestResponseWhereInput
  }

  export type RequestResponseUpdateToOneWithWhereWithoutDonationInput = {
    where?: RequestResponseWhereInput
    data: XOR<RequestResponseUpdateWithoutDonationInput, RequestResponseUncheckedUpdateWithoutDonationInput>
  }

  export type RequestResponseUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutResponsesNestedInput
    donor?: DonorUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type RequestResponseUncheckedUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutDonationsConfirmedInput = {
    update: XOR<UserUpdateWithoutDonationsConfirmedInput, UserUncheckedUpdateWithoutDonationsConfirmedInput>
    create: XOR<UserCreateWithoutDonationsConfirmedInput, UserUncheckedCreateWithoutDonationsConfirmedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsConfirmedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsConfirmedInput, UserUncheckedUpdateWithoutDonationsConfirmedInput>
  }

  export type UserUpdateWithoutDonationsConfirmedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneWithoutUserNestedInput
    hospital?: HospitalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsConfirmedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUncheckedUpdateOneWithoutUserNestedInput
    hospital?: HospitalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DonationCreateManyConfirmedByInput = {
    id?: string
    requestId: string
    donorId: string
    responseId: string
    units: number
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateWithoutConfirmedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutDonationsNestedInput
    donor?: DonorUpdateOneRequiredWithoutDonationsNestedInput
    response?: RequestResponseUpdateOneRequiredWithoutDonationNestedInput
  }

  export type DonationUncheckedUpdateWithoutConfirmedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyWithoutConfirmedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateManyDonorInput = {
    id?: string
    requestId: string
    responseId: string
    units: number
    confirmedById: string
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestResponseCreateManyDonorInput = {
    id?: string
    requestId: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutDonationsNestedInput
    response?: RequestResponseUpdateOneRequiredWithoutDonationNestedInput
    confirmedBy?: UserUpdateOneRequiredWithoutDonationsConfirmedNestedInput
  }

  export type DonationUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedById?: StringFieldUpdateOperationsInput | string
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedById?: StringFieldUpdateOperationsInput | string
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestResponseUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutResponsesNestedInput
    donation?: DonationUpdateOneWithoutResponseNestedInput
  }

  export type RequestResponseUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donation?: DonationUncheckedUpdateOneWithoutResponseNestedInput
  }

  export type RequestResponseUncheckedUpdateManyWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateManyHospitalInput = {
    id?: string
    bloodType: $Enums.BloodType
    units: number
    notes?: string | null
    urgencyLevel: $Enums.RequestUrgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: DonationUpdateManyWithoutRequestNestedInput
    responses?: RequestResponseUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: DonationUncheckedUpdateManyWithoutRequestNestedInput
    responses?: RequestResponseUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    units?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    urgencyLevel?: EnumRequestUrgencyFieldUpdateOperationsInput | $Enums.RequestUrgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateManyRequestInput = {
    id?: string
    donorId: string
    responseId: string
    units: number
    confirmedById: string
    confirmedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestResponseCreateManyRequestInput = {
    id?: string
    donorId: string
    status: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneRequiredWithoutDonationsNestedInput
    response?: RequestResponseUpdateOneRequiredWithoutDonationNestedInput
    confirmedBy?: UserUpdateOneRequiredWithoutDonationsConfirmedNestedInput
  }

  export type DonationUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedById?: StringFieldUpdateOperationsInput | string
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    confirmedById?: StringFieldUpdateOperationsInput | string
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestResponseUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneRequiredWithoutResponsesNestedInput
    donation?: DonationUpdateOneWithoutResponseNestedInput
  }

  export type RequestResponseUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donation?: DonationUncheckedUpdateOneWithoutResponseNestedInput
  }

  export type RequestResponseUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}