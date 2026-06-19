
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model Villa
 * 
 */
export type Villa = $Result.DefaultSelection<Prisma.$VillaPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model VillaImage
 * 
 */
export type VillaImage = $Result.DefaultSelection<Prisma.$VillaImagePayload>
/**
 * Model VillaAmenity
 * 
 */
export type VillaAmenity = $Result.DefaultSelection<Prisma.$VillaAmenityPayload>
/**
 * Model VillaHighlight
 * 
 */
export type VillaHighlight = $Result.DefaultSelection<Prisma.$VillaHighlightPayload>
/**
 * Model VillaPolicy
 * 
 */
export type VillaPolicy = $Result.DefaultSelection<Prisma.$VillaPolicyPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model ImageArea
 * 
 */
export type ImageArea = $Result.DefaultSelection<Prisma.$ImageAreaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Settings
 * const settings = await prisma.settings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Settings
   * const settings = await prisma.settings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.villa`: Exposes CRUD operations for the **Villa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Villas
    * const villas = await prisma.villa.findMany()
    * ```
    */
  get villa(): Prisma.VillaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.villaImage`: Exposes CRUD operations for the **VillaImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VillaImages
    * const villaImages = await prisma.villaImage.findMany()
    * ```
    */
  get villaImage(): Prisma.VillaImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.villaAmenity`: Exposes CRUD operations for the **VillaAmenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VillaAmenities
    * const villaAmenities = await prisma.villaAmenity.findMany()
    * ```
    */
  get villaAmenity(): Prisma.VillaAmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.villaHighlight`: Exposes CRUD operations for the **VillaHighlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VillaHighlights
    * const villaHighlights = await prisma.villaHighlight.findMany()
    * ```
    */
  get villaHighlight(): Prisma.VillaHighlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.villaPolicy`: Exposes CRUD operations for the **VillaPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VillaPolicies
    * const villaPolicies = await prisma.villaPolicy.findMany()
    * ```
    */
  get villaPolicy(): Prisma.VillaPolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageArea`: Exposes CRUD operations for the **ImageArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageAreas
    * const imageAreas = await prisma.imageArea.findMany()
    * ```
    */
  get imageArea(): Prisma.ImageAreaDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Settings: 'Settings',
    Villa: 'Villa',
    Booking: 'Booking',
    VillaImage: 'VillaImage',
    VillaAmenity: 'VillaAmenity',
    VillaHighlight: 'VillaHighlight',
    VillaPolicy: 'VillaPolicy',
    Review: 'Review',
    User: 'User',
    Area: 'Area',
    ImageArea: 'ImageArea'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "settings" | "villa" | "booking" | "villaImage" | "villaAmenity" | "villaHighlight" | "villaPolicy" | "review" | "user" | "area" | "imageArea"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      Villa: {
        payload: Prisma.$VillaPayload<ExtArgs>
        fields: Prisma.VillaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload>
          }
          findFirst: {
            args: Prisma.VillaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload>
          }
          findMany: {
            args: Prisma.VillaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload>[]
          }
          create: {
            args: Prisma.VillaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload>
          }
          createMany: {
            args: Prisma.VillaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VillaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload>[]
          }
          delete: {
            args: Prisma.VillaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload>
          }
          update: {
            args: Prisma.VillaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload>
          }
          deleteMany: {
            args: Prisma.VillaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VillaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload>[]
          }
          upsert: {
            args: Prisma.VillaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPayload>
          }
          aggregate: {
            args: Prisma.VillaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVilla>
          }
          groupBy: {
            args: Prisma.VillaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillaCountArgs<ExtArgs>
            result: $Utils.Optional<VillaCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      VillaImage: {
        payload: Prisma.$VillaImagePayload<ExtArgs>
        fields: Prisma.VillaImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillaImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillaImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload>
          }
          findFirst: {
            args: Prisma.VillaImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillaImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload>
          }
          findMany: {
            args: Prisma.VillaImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload>[]
          }
          create: {
            args: Prisma.VillaImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload>
          }
          createMany: {
            args: Prisma.VillaImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VillaImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload>[]
          }
          delete: {
            args: Prisma.VillaImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload>
          }
          update: {
            args: Prisma.VillaImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload>
          }
          deleteMany: {
            args: Prisma.VillaImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillaImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VillaImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload>[]
          }
          upsert: {
            args: Prisma.VillaImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaImagePayload>
          }
          aggregate: {
            args: Prisma.VillaImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillaImage>
          }
          groupBy: {
            args: Prisma.VillaImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillaImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillaImageCountArgs<ExtArgs>
            result: $Utils.Optional<VillaImageCountAggregateOutputType> | number
          }
        }
      }
      VillaAmenity: {
        payload: Prisma.$VillaAmenityPayload<ExtArgs>
        fields: Prisma.VillaAmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillaAmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillaAmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload>
          }
          findFirst: {
            args: Prisma.VillaAmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillaAmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload>
          }
          findMany: {
            args: Prisma.VillaAmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload>[]
          }
          create: {
            args: Prisma.VillaAmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload>
          }
          createMany: {
            args: Prisma.VillaAmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VillaAmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload>[]
          }
          delete: {
            args: Prisma.VillaAmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload>
          }
          update: {
            args: Prisma.VillaAmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload>
          }
          deleteMany: {
            args: Prisma.VillaAmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillaAmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VillaAmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload>[]
          }
          upsert: {
            args: Prisma.VillaAmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaAmenityPayload>
          }
          aggregate: {
            args: Prisma.VillaAmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillaAmenity>
          }
          groupBy: {
            args: Prisma.VillaAmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillaAmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillaAmenityCountArgs<ExtArgs>
            result: $Utils.Optional<VillaAmenityCountAggregateOutputType> | number
          }
        }
      }
      VillaHighlight: {
        payload: Prisma.$VillaHighlightPayload<ExtArgs>
        fields: Prisma.VillaHighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillaHighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillaHighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload>
          }
          findFirst: {
            args: Prisma.VillaHighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillaHighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload>
          }
          findMany: {
            args: Prisma.VillaHighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload>[]
          }
          create: {
            args: Prisma.VillaHighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload>
          }
          createMany: {
            args: Prisma.VillaHighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VillaHighlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload>[]
          }
          delete: {
            args: Prisma.VillaHighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload>
          }
          update: {
            args: Prisma.VillaHighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload>
          }
          deleteMany: {
            args: Prisma.VillaHighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillaHighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VillaHighlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload>[]
          }
          upsert: {
            args: Prisma.VillaHighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaHighlightPayload>
          }
          aggregate: {
            args: Prisma.VillaHighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillaHighlight>
          }
          groupBy: {
            args: Prisma.VillaHighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillaHighlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillaHighlightCountArgs<ExtArgs>
            result: $Utils.Optional<VillaHighlightCountAggregateOutputType> | number
          }
        }
      }
      VillaPolicy: {
        payload: Prisma.$VillaPolicyPayload<ExtArgs>
        fields: Prisma.VillaPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillaPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillaPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload>
          }
          findFirst: {
            args: Prisma.VillaPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillaPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload>
          }
          findMany: {
            args: Prisma.VillaPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload>[]
          }
          create: {
            args: Prisma.VillaPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload>
          }
          createMany: {
            args: Prisma.VillaPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VillaPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload>[]
          }
          delete: {
            args: Prisma.VillaPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload>
          }
          update: {
            args: Prisma.VillaPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload>
          }
          deleteMany: {
            args: Prisma.VillaPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillaPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VillaPolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload>[]
          }
          upsert: {
            args: Prisma.VillaPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillaPolicyPayload>
          }
          aggregate: {
            args: Prisma.VillaPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillaPolicy>
          }
          groupBy: {
            args: Prisma.VillaPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillaPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillaPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<VillaPolicyCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
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
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      ImageArea: {
        payload: Prisma.$ImageAreaPayload<ExtArgs>
        fields: Prisma.ImageAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload>
          }
          findFirst: {
            args: Prisma.ImageAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload>
          }
          findMany: {
            args: Prisma.ImageAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload>[]
          }
          create: {
            args: Prisma.ImageAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload>
          }
          createMany: {
            args: Prisma.ImageAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageAreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload>[]
          }
          delete: {
            args: Prisma.ImageAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload>
          }
          update: {
            args: Prisma.ImageAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload>
          }
          deleteMany: {
            args: Prisma.ImageAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageAreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload>[]
          }
          upsert: {
            args: Prisma.ImageAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAreaPayload>
          }
          aggregate: {
            args: Prisma.ImageAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageArea>
          }
          groupBy: {
            args: Prisma.ImageAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageAreaCountArgs<ExtArgs>
            result: $Utils.Optional<ImageAreaCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    settings?: SettingsOmit
    villa?: VillaOmit
    booking?: BookingOmit
    villaImage?: VillaImageOmit
    villaAmenity?: VillaAmenityOmit
    villaHighlight?: VillaHighlightOmit
    villaPolicy?: VillaPolicyOmit
    review?: ReviewOmit
    user?: UserOmit
    area?: AreaOmit
    imageArea?: ImageAreaOmit
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
   * Count Type VillaCountOutputType
   */

  export type VillaCountOutputType = {
    images: number
    amenities: number
    highlights: number
    policies: number
    reviews: number
    bookings: number
  }

  export type VillaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | VillaCountOutputTypeCountImagesArgs
    amenities?: boolean | VillaCountOutputTypeCountAmenitiesArgs
    highlights?: boolean | VillaCountOutputTypeCountHighlightsArgs
    policies?: boolean | VillaCountOutputTypeCountPoliciesArgs
    reviews?: boolean | VillaCountOutputTypeCountReviewsArgs
    bookings?: boolean | VillaCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * VillaCountOutputType without action
   */
  export type VillaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaCountOutputType
     */
    select?: VillaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VillaCountOutputType without action
   */
  export type VillaCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaImageWhereInput
  }

  /**
   * VillaCountOutputType without action
   */
  export type VillaCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaAmenityWhereInput
  }

  /**
   * VillaCountOutputType without action
   */
  export type VillaCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaHighlightWhereInput
  }

  /**
   * VillaCountOutputType without action
   */
  export type VillaCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaPolicyWhereInput
  }

  /**
   * VillaCountOutputType without action
   */
  export type VillaCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * VillaCountOutputType without action
   */
  export type VillaCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    villas: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villas?: boolean | AreaCountOutputTypeCountVillasArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountVillasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    bookingConfirmationTemplate: string | null
    contactEmail: string | null
    contactPhone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    bookingConfirmationTemplate: string | null
    contactEmail: string | null
    contactPhone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    bookingConfirmationTemplate: number
    contactEmail: number
    contactPhone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SettingsMinAggregateInputType = {
    id?: true
    bookingConfirmationTemplate?: true
    contactEmail?: true
    contactPhone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    bookingConfirmationTemplate?: true
    contactEmail?: true
    contactPhone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    bookingConfirmationTemplate?: true
    contactEmail?: true
    contactPhone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    bookingConfirmationTemplate: string | null
    contactEmail: string | null
    contactPhone: string | null
    createdAt: Date
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingConfirmationTemplate?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingConfirmationTemplate?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingConfirmationTemplate?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    bookingConfirmationTemplate?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingConfirmationTemplate" | "contactEmail" | "contactPhone" | "createdAt" | "updatedAt", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingConfirmationTemplate: string | null
      contactEmail: string | null
      contactPhone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly bookingConfirmationTemplate: FieldRef<"Settings", 'String'>
    readonly contactEmail: FieldRef<"Settings", 'String'>
    readonly contactPhone: FieldRef<"Settings", 'String'>
    readonly createdAt: FieldRef<"Settings", 'DateTime'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
  }


  /**
   * Model Villa
   */

  export type AggregateVilla = {
    _count: VillaCountAggregateOutputType | null
    _avg: VillaAvgAggregateOutputType | null
    _sum: VillaSumAggregateOutputType | null
    _min: VillaMinAggregateOutputType | null
    _max: VillaMaxAggregateOutputType | null
  }

  export type VillaAvgAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    maxGuests: number | null
    size: number | null
    pricePerNight: number | null
    priceWeekend: number | null
    priceHoliday: number | null
    rating: number | null
    reviewCount: number | null
    lat: number | null
    lng: number | null
  }

  export type VillaSumAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    maxGuests: number | null
    size: number | null
    pricePerNight: number | null
    priceWeekend: number | null
    priceHoliday: number | null
    rating: number | null
    reviewCount: number | null
    lat: number | null
    lng: number | null
  }

  export type VillaMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    tagline: string | null
    description: string | null
    areaId: string | null
    address: string | null
    bedrooms: number | null
    bathrooms: number | null
    maxGuests: number | null
    size: number | null
    pricePerNight: number | null
    priceWeekend: number | null
    priceHoliday: number | null
    rating: number | null
    reviewCount: number | null
    checkIn: string | null
    checkOut: string | null
    featured: boolean | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillaMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    tagline: string | null
    description: string | null
    areaId: string | null
    address: string | null
    bedrooms: number | null
    bathrooms: number | null
    maxGuests: number | null
    size: number | null
    pricePerNight: number | null
    priceWeekend: number | null
    priceHoliday: number | null
    rating: number | null
    reviewCount: number | null
    checkIn: string | null
    checkOut: string | null
    featured: boolean | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillaCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    tagline: number
    description: number
    areaId: number
    address: number
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: number
    checkOut: number
    featured: number
    lat: number
    lng: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VillaAvgAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    size?: true
    pricePerNight?: true
    priceWeekend?: true
    priceHoliday?: true
    rating?: true
    reviewCount?: true
    lat?: true
    lng?: true
  }

  export type VillaSumAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    size?: true
    pricePerNight?: true
    priceWeekend?: true
    priceHoliday?: true
    rating?: true
    reviewCount?: true
    lat?: true
    lng?: true
  }

  export type VillaMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    description?: true
    areaId?: true
    address?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    size?: true
    pricePerNight?: true
    priceWeekend?: true
    priceHoliday?: true
    rating?: true
    reviewCount?: true
    checkIn?: true
    checkOut?: true
    featured?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillaMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    description?: true
    areaId?: true
    address?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    size?: true
    pricePerNight?: true
    priceWeekend?: true
    priceHoliday?: true
    rating?: true
    reviewCount?: true
    checkIn?: true
    checkOut?: true
    featured?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillaCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    description?: true
    areaId?: true
    address?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    size?: true
    pricePerNight?: true
    priceWeekend?: true
    priceHoliday?: true
    rating?: true
    reviewCount?: true
    checkIn?: true
    checkOut?: true
    featured?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VillaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Villa to aggregate.
     */
    where?: VillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villas to fetch.
     */
    orderBy?: VillaOrderByWithRelationInput | VillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Villas
    **/
    _count?: true | VillaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VillaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VillaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillaMaxAggregateInputType
  }

  export type GetVillaAggregateType<T extends VillaAggregateArgs> = {
        [P in keyof T & keyof AggregateVilla]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVilla[P]>
      : GetScalarType<T[P], AggregateVilla[P]>
  }




  export type VillaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaWhereInput
    orderBy?: VillaOrderByWithAggregationInput | VillaOrderByWithAggregationInput[]
    by: VillaScalarFieldEnum[] | VillaScalarFieldEnum
    having?: VillaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillaCountAggregateInputType | true
    _avg?: VillaAvgAggregateInputType
    _sum?: VillaSumAggregateInputType
    _min?: VillaMinAggregateInputType
    _max?: VillaMaxAggregateInputType
  }

  export type VillaGroupByOutputType = {
    id: string
    slug: string
    name: string
    tagline: string
    description: string
    areaId: string | null
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt: Date
    updatedAt: Date
    _count: VillaCountAggregateOutputType | null
    _avg: VillaAvgAggregateOutputType | null
    _sum: VillaSumAggregateOutputType | null
    _min: VillaMinAggregateOutputType | null
    _max: VillaMaxAggregateOutputType | null
  }

  type GetVillaGroupByPayload<T extends VillaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillaGroupByOutputType[P]>
            : GetScalarType<T[P], VillaGroupByOutputType[P]>
        }
      >
    >


  export type VillaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    areaId?: boolean
    address?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    size?: boolean
    pricePerNight?: boolean
    priceWeekend?: boolean
    priceHoliday?: boolean
    rating?: boolean
    reviewCount?: boolean
    checkIn?: boolean
    checkOut?: boolean
    featured?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areaObj?: boolean | Villa$areaObjArgs<ExtArgs>
    images?: boolean | Villa$imagesArgs<ExtArgs>
    amenities?: boolean | Villa$amenitiesArgs<ExtArgs>
    highlights?: boolean | Villa$highlightsArgs<ExtArgs>
    policies?: boolean | Villa$policiesArgs<ExtArgs>
    reviews?: boolean | Villa$reviewsArgs<ExtArgs>
    bookings?: boolean | Villa$bookingsArgs<ExtArgs>
    _count?: boolean | VillaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villa"]>

  export type VillaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    areaId?: boolean
    address?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    size?: boolean
    pricePerNight?: boolean
    priceWeekend?: boolean
    priceHoliday?: boolean
    rating?: boolean
    reviewCount?: boolean
    checkIn?: boolean
    checkOut?: boolean
    featured?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areaObj?: boolean | Villa$areaObjArgs<ExtArgs>
  }, ExtArgs["result"]["villa"]>

  export type VillaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    areaId?: boolean
    address?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    size?: boolean
    pricePerNight?: boolean
    priceWeekend?: boolean
    priceHoliday?: boolean
    rating?: boolean
    reviewCount?: boolean
    checkIn?: boolean
    checkOut?: boolean
    featured?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areaObj?: boolean | Villa$areaObjArgs<ExtArgs>
  }, ExtArgs["result"]["villa"]>

  export type VillaSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    areaId?: boolean
    address?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    size?: boolean
    pricePerNight?: boolean
    priceWeekend?: boolean
    priceHoliday?: boolean
    rating?: boolean
    reviewCount?: boolean
    checkIn?: boolean
    checkOut?: boolean
    featured?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VillaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "tagline" | "description" | "areaId" | "address" | "bedrooms" | "bathrooms" | "maxGuests" | "size" | "pricePerNight" | "priceWeekend" | "priceHoliday" | "rating" | "reviewCount" | "checkIn" | "checkOut" | "featured" | "lat" | "lng" | "createdAt" | "updatedAt", ExtArgs["result"]["villa"]>
  export type VillaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areaObj?: boolean | Villa$areaObjArgs<ExtArgs>
    images?: boolean | Villa$imagesArgs<ExtArgs>
    amenities?: boolean | Villa$amenitiesArgs<ExtArgs>
    highlights?: boolean | Villa$highlightsArgs<ExtArgs>
    policies?: boolean | Villa$policiesArgs<ExtArgs>
    reviews?: boolean | Villa$reviewsArgs<ExtArgs>
    bookings?: boolean | Villa$bookingsArgs<ExtArgs>
    _count?: boolean | VillaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VillaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areaObj?: boolean | Villa$areaObjArgs<ExtArgs>
  }
  export type VillaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areaObj?: boolean | Villa$areaObjArgs<ExtArgs>
  }

  export type $VillaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Villa"
    objects: {
      areaObj: Prisma.$AreaPayload<ExtArgs> | null
      images: Prisma.$VillaImagePayload<ExtArgs>[]
      amenities: Prisma.$VillaAmenityPayload<ExtArgs>[]
      highlights: Prisma.$VillaHighlightPayload<ExtArgs>[]
      policies: Prisma.$VillaPolicyPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      tagline: string
      description: string
      areaId: string | null
      address: string
      bedrooms: number
      bathrooms: number
      maxGuests: number
      size: number
      pricePerNight: number
      priceWeekend: number
      priceHoliday: number
      rating: number
      reviewCount: number
      checkIn: string
      checkOut: string
      featured: boolean
      lat: number
      lng: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["villa"]>
    composites: {}
  }

  type VillaGetPayload<S extends boolean | null | undefined | VillaDefaultArgs> = $Result.GetResult<Prisma.$VillaPayload, S>

  type VillaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillaCountAggregateInputType | true
    }

  export interface VillaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Villa'], meta: { name: 'Villa' } }
    /**
     * Find zero or one Villa that matches the filter.
     * @param {VillaFindUniqueArgs} args - Arguments to find a Villa
     * @example
     * // Get one Villa
     * const villa = await prisma.villa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillaFindUniqueArgs>(args: SelectSubset<T, VillaFindUniqueArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Villa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillaFindUniqueOrThrowArgs} args - Arguments to find a Villa
     * @example
     * // Get one Villa
     * const villa = await prisma.villa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillaFindUniqueOrThrowArgs>(args: SelectSubset<T, VillaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Villa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaFindFirstArgs} args - Arguments to find a Villa
     * @example
     * // Get one Villa
     * const villa = await prisma.villa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillaFindFirstArgs>(args?: SelectSubset<T, VillaFindFirstArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Villa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaFindFirstOrThrowArgs} args - Arguments to find a Villa
     * @example
     * // Get one Villa
     * const villa = await prisma.villa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillaFindFirstOrThrowArgs>(args?: SelectSubset<T, VillaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Villas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Villas
     * const villas = await prisma.villa.findMany()
     * 
     * // Get first 10 Villas
     * const villas = await prisma.villa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villaWithIdOnly = await prisma.villa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillaFindManyArgs>(args?: SelectSubset<T, VillaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Villa.
     * @param {VillaCreateArgs} args - Arguments to create a Villa.
     * @example
     * // Create one Villa
     * const Villa = await prisma.villa.create({
     *   data: {
     *     // ... data to create a Villa
     *   }
     * })
     * 
     */
    create<T extends VillaCreateArgs>(args: SelectSubset<T, VillaCreateArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Villas.
     * @param {VillaCreateManyArgs} args - Arguments to create many Villas.
     * @example
     * // Create many Villas
     * const villa = await prisma.villa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillaCreateManyArgs>(args?: SelectSubset<T, VillaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Villas and returns the data saved in the database.
     * @param {VillaCreateManyAndReturnArgs} args - Arguments to create many Villas.
     * @example
     * // Create many Villas
     * const villa = await prisma.villa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Villas and only return the `id`
     * const villaWithIdOnly = await prisma.villa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VillaCreateManyAndReturnArgs>(args?: SelectSubset<T, VillaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Villa.
     * @param {VillaDeleteArgs} args - Arguments to delete one Villa.
     * @example
     * // Delete one Villa
     * const Villa = await prisma.villa.delete({
     *   where: {
     *     // ... filter to delete one Villa
     *   }
     * })
     * 
     */
    delete<T extends VillaDeleteArgs>(args: SelectSubset<T, VillaDeleteArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Villa.
     * @param {VillaUpdateArgs} args - Arguments to update one Villa.
     * @example
     * // Update one Villa
     * const villa = await prisma.villa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillaUpdateArgs>(args: SelectSubset<T, VillaUpdateArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Villas.
     * @param {VillaDeleteManyArgs} args - Arguments to filter Villas to delete.
     * @example
     * // Delete a few Villas
     * const { count } = await prisma.villa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillaDeleteManyArgs>(args?: SelectSubset<T, VillaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Villas
     * const villa = await prisma.villa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillaUpdateManyArgs>(args: SelectSubset<T, VillaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villas and returns the data updated in the database.
     * @param {VillaUpdateManyAndReturnArgs} args - Arguments to update many Villas.
     * @example
     * // Update many Villas
     * const villa = await prisma.villa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Villas and only return the `id`
     * const villaWithIdOnly = await prisma.villa.updateManyAndReturn({
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
    updateManyAndReturn<T extends VillaUpdateManyAndReturnArgs>(args: SelectSubset<T, VillaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Villa.
     * @param {VillaUpsertArgs} args - Arguments to update or create a Villa.
     * @example
     * // Update or create a Villa
     * const villa = await prisma.villa.upsert({
     *   create: {
     *     // ... data to create a Villa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Villa we want to update
     *   }
     * })
     */
    upsert<T extends VillaUpsertArgs>(args: SelectSubset<T, VillaUpsertArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Villas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaCountArgs} args - Arguments to filter Villas to count.
     * @example
     * // Count the number of Villas
     * const count = await prisma.villa.count({
     *   where: {
     *     // ... the filter for the Villas we want to count
     *   }
     * })
    **/
    count<T extends VillaCountArgs>(
      args?: Subset<T, VillaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Villa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillaAggregateArgs>(args: Subset<T, VillaAggregateArgs>): Prisma.PrismaPromise<GetVillaAggregateType<T>>

    /**
     * Group by Villa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaGroupByArgs} args - Group by arguments.
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
      T extends VillaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillaGroupByArgs['orderBy'] }
        : { orderBy?: VillaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VillaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Villa model
   */
  readonly fields: VillaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Villa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areaObj<T extends Villa$areaObjArgs<ExtArgs> = {}>(args?: Subset<T, Villa$areaObjArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends Villa$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Villa$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenities<T extends Villa$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Villa$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    highlights<T extends Villa$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, Villa$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    policies<T extends Villa$policiesArgs<ExtArgs> = {}>(args?: Subset<T, Villa$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Villa$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Villa$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Villa$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Villa$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Villa model
   */
  interface VillaFieldRefs {
    readonly id: FieldRef<"Villa", 'String'>
    readonly slug: FieldRef<"Villa", 'String'>
    readonly name: FieldRef<"Villa", 'String'>
    readonly tagline: FieldRef<"Villa", 'String'>
    readonly description: FieldRef<"Villa", 'String'>
    readonly areaId: FieldRef<"Villa", 'String'>
    readonly address: FieldRef<"Villa", 'String'>
    readonly bedrooms: FieldRef<"Villa", 'Int'>
    readonly bathrooms: FieldRef<"Villa", 'Int'>
    readonly maxGuests: FieldRef<"Villa", 'Int'>
    readonly size: FieldRef<"Villa", 'Int'>
    readonly pricePerNight: FieldRef<"Villa", 'Float'>
    readonly priceWeekend: FieldRef<"Villa", 'Float'>
    readonly priceHoliday: FieldRef<"Villa", 'Float'>
    readonly rating: FieldRef<"Villa", 'Float'>
    readonly reviewCount: FieldRef<"Villa", 'Int'>
    readonly checkIn: FieldRef<"Villa", 'String'>
    readonly checkOut: FieldRef<"Villa", 'String'>
    readonly featured: FieldRef<"Villa", 'Boolean'>
    readonly lat: FieldRef<"Villa", 'Float'>
    readonly lng: FieldRef<"Villa", 'Float'>
    readonly createdAt: FieldRef<"Villa", 'DateTime'>
    readonly updatedAt: FieldRef<"Villa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Villa findUnique
   */
  export type VillaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    /**
     * Filter, which Villa to fetch.
     */
    where: VillaWhereUniqueInput
  }

  /**
   * Villa findUniqueOrThrow
   */
  export type VillaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    /**
     * Filter, which Villa to fetch.
     */
    where: VillaWhereUniqueInput
  }

  /**
   * Villa findFirst
   */
  export type VillaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    /**
     * Filter, which Villa to fetch.
     */
    where?: VillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villas to fetch.
     */
    orderBy?: VillaOrderByWithRelationInput | VillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villas.
     */
    cursor?: VillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villas.
     */
    distinct?: VillaScalarFieldEnum | VillaScalarFieldEnum[]
  }

  /**
   * Villa findFirstOrThrow
   */
  export type VillaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    /**
     * Filter, which Villa to fetch.
     */
    where?: VillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villas to fetch.
     */
    orderBy?: VillaOrderByWithRelationInput | VillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villas.
     */
    cursor?: VillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villas.
     */
    distinct?: VillaScalarFieldEnum | VillaScalarFieldEnum[]
  }

  /**
   * Villa findMany
   */
  export type VillaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    /**
     * Filter, which Villas to fetch.
     */
    where?: VillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villas to fetch.
     */
    orderBy?: VillaOrderByWithRelationInput | VillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Villas.
     */
    cursor?: VillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villas.
     */
    skip?: number
    distinct?: VillaScalarFieldEnum | VillaScalarFieldEnum[]
  }

  /**
   * Villa create
   */
  export type VillaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    /**
     * The data needed to create a Villa.
     */
    data: XOR<VillaCreateInput, VillaUncheckedCreateInput>
  }

  /**
   * Villa createMany
   */
  export type VillaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Villas.
     */
    data: VillaCreateManyInput | VillaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Villa createManyAndReturn
   */
  export type VillaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * The data used to create many Villas.
     */
    data: VillaCreateManyInput | VillaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Villa update
   */
  export type VillaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    /**
     * The data needed to update a Villa.
     */
    data: XOR<VillaUpdateInput, VillaUncheckedUpdateInput>
    /**
     * Choose, which Villa to update.
     */
    where: VillaWhereUniqueInput
  }

  /**
   * Villa updateMany
   */
  export type VillaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Villas.
     */
    data: XOR<VillaUpdateManyMutationInput, VillaUncheckedUpdateManyInput>
    /**
     * Filter which Villas to update
     */
    where?: VillaWhereInput
    /**
     * Limit how many Villas to update.
     */
    limit?: number
  }

  /**
   * Villa updateManyAndReturn
   */
  export type VillaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * The data used to update Villas.
     */
    data: XOR<VillaUpdateManyMutationInput, VillaUncheckedUpdateManyInput>
    /**
     * Filter which Villas to update
     */
    where?: VillaWhereInput
    /**
     * Limit how many Villas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Villa upsert
   */
  export type VillaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    /**
     * The filter to search for the Villa to update in case it exists.
     */
    where: VillaWhereUniqueInput
    /**
     * In case the Villa found by the `where` argument doesn't exist, create a new Villa with this data.
     */
    create: XOR<VillaCreateInput, VillaUncheckedCreateInput>
    /**
     * In case the Villa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillaUpdateInput, VillaUncheckedUpdateInput>
  }

  /**
   * Villa delete
   */
  export type VillaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    /**
     * Filter which Villa to delete.
     */
    where: VillaWhereUniqueInput
  }

  /**
   * Villa deleteMany
   */
  export type VillaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Villas to delete
     */
    where?: VillaWhereInput
    /**
     * Limit how many Villas to delete.
     */
    limit?: number
  }

  /**
   * Villa.areaObj
   */
  export type Villa$areaObjArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * Villa.images
   */
  export type Villa$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    where?: VillaImageWhereInput
    orderBy?: VillaImageOrderByWithRelationInput | VillaImageOrderByWithRelationInput[]
    cursor?: VillaImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VillaImageScalarFieldEnum | VillaImageScalarFieldEnum[]
  }

  /**
   * Villa.amenities
   */
  export type Villa$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    where?: VillaAmenityWhereInput
    orderBy?: VillaAmenityOrderByWithRelationInput | VillaAmenityOrderByWithRelationInput[]
    cursor?: VillaAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VillaAmenityScalarFieldEnum | VillaAmenityScalarFieldEnum[]
  }

  /**
   * Villa.highlights
   */
  export type Villa$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    where?: VillaHighlightWhereInput
    orderBy?: VillaHighlightOrderByWithRelationInput | VillaHighlightOrderByWithRelationInput[]
    cursor?: VillaHighlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VillaHighlightScalarFieldEnum | VillaHighlightScalarFieldEnum[]
  }

  /**
   * Villa.policies
   */
  export type Villa$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    where?: VillaPolicyWhereInput
    orderBy?: VillaPolicyOrderByWithRelationInput | VillaPolicyOrderByWithRelationInput[]
    cursor?: VillaPolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VillaPolicyScalarFieldEnum | VillaPolicyScalarFieldEnum[]
  }

  /**
   * Villa.reviews
   */
  export type Villa$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Villa.bookings
   */
  export type Villa$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Villa without action
   */
  export type VillaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    guests: number | null
    total: number | null
    priceAtBooking: number | null
  }

  export type BookingSumAggregateOutputType = {
    guests: number | null
    total: number | null
    priceAtBooking: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    villaId: string | null
    name: string | null
    email: string | null
    phone: string | null
    note: string | null
    checkIn: string | null
    checkOut: string | null
    guests: number | null
    total: number | null
    priceAtBooking: number | null
    bookingType: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    villaId: string | null
    name: string | null
    email: string | null
    phone: string | null
    note: string | null
    checkIn: string | null
    checkOut: string | null
    guests: number | null
    total: number | null
    priceAtBooking: number | null
    bookingType: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    villaId: number
    name: number
    email: number
    phone: number
    note: number
    checkIn: number
    checkOut: number
    guests: number
    total: number
    priceAtBooking: number
    bookingType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    guests?: true
    total?: true
    priceAtBooking?: true
  }

  export type BookingSumAggregateInputType = {
    guests?: true
    total?: true
    priceAtBooking?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    villaId?: true
    name?: true
    email?: true
    phone?: true
    note?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    total?: true
    priceAtBooking?: true
    bookingType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    villaId?: true
    name?: true
    email?: true
    phone?: true
    note?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    total?: true
    priceAtBooking?: true
    bookingType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    villaId?: true
    name?: true
    email?: true
    phone?: true
    note?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    total?: true
    priceAtBooking?: true
    bookingType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    villaId: string | null
    name: string
    email: string
    phone: string
    note: string | null
    checkIn: string
    checkOut: string
    guests: number
    total: number
    priceAtBooking: number | null
    bookingType: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    villaId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    note?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    total?: boolean
    priceAtBooking?: boolean
    bookingType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    villa?: boolean | Booking$villaArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    villaId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    note?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    total?: boolean
    priceAtBooking?: boolean
    bookingType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    villa?: boolean | Booking$villaArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    villaId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    note?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    total?: boolean
    priceAtBooking?: boolean
    bookingType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    villa?: boolean | Booking$villaArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    villaId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    note?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    total?: boolean
    priceAtBooking?: boolean
    bookingType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "villaId" | "name" | "email" | "phone" | "note" | "checkIn" | "checkOut" | "guests" | "total" | "priceAtBooking" | "bookingType" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | Booking$villaArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | Booking$villaArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | Booking$villaArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      villa: Prisma.$VillaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      villaId: string | null
      name: string
      email: string
      phone: string
      note: string | null
      checkIn: string
      checkOut: string
      guests: number
      total: number
      priceAtBooking: number | null
      bookingType: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    villa<T extends Booking$villaArgs<ExtArgs> = {}>(args?: Subset<T, Booking$villaArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly villaId: FieldRef<"Booking", 'String'>
    readonly name: FieldRef<"Booking", 'String'>
    readonly email: FieldRef<"Booking", 'String'>
    readonly phone: FieldRef<"Booking", 'String'>
    readonly note: FieldRef<"Booking", 'String'>
    readonly checkIn: FieldRef<"Booking", 'String'>
    readonly checkOut: FieldRef<"Booking", 'String'>
    readonly guests: FieldRef<"Booking", 'Int'>
    readonly total: FieldRef<"Booking", 'Float'>
    readonly priceAtBooking: FieldRef<"Booking", 'Float'>
    readonly bookingType: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.villa
   */
  export type Booking$villaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    where?: VillaWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model VillaImage
   */

  export type AggregateVillaImage = {
    _count: VillaImageCountAggregateOutputType | null
    _avg: VillaImageAvgAggregateOutputType | null
    _sum: VillaImageSumAggregateOutputType | null
    _min: VillaImageMinAggregateOutputType | null
    _max: VillaImageMaxAggregateOutputType | null
  }

  export type VillaImageAvgAggregateOutputType = {
    order: number | null
  }

  export type VillaImageSumAggregateOutputType = {
    order: number | null
  }

  export type VillaImageMinAggregateOutputType = {
    id: string | null
    villaId: string | null
    data: Bytes | null
    mimeType: string | null
    isMain: boolean | null
    order: number | null
  }

  export type VillaImageMaxAggregateOutputType = {
    id: string | null
    villaId: string | null
    data: Bytes | null
    mimeType: string | null
    isMain: boolean | null
    order: number | null
  }

  export type VillaImageCountAggregateOutputType = {
    id: number
    villaId: number
    data: number
    mimeType: number
    isMain: number
    order: number
    _all: number
  }


  export type VillaImageAvgAggregateInputType = {
    order?: true
  }

  export type VillaImageSumAggregateInputType = {
    order?: true
  }

  export type VillaImageMinAggregateInputType = {
    id?: true
    villaId?: true
    data?: true
    mimeType?: true
    isMain?: true
    order?: true
  }

  export type VillaImageMaxAggregateInputType = {
    id?: true
    villaId?: true
    data?: true
    mimeType?: true
    isMain?: true
    order?: true
  }

  export type VillaImageCountAggregateInputType = {
    id?: true
    villaId?: true
    data?: true
    mimeType?: true
    isMain?: true
    order?: true
    _all?: true
  }

  export type VillaImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillaImage to aggregate.
     */
    where?: VillaImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaImages to fetch.
     */
    orderBy?: VillaImageOrderByWithRelationInput | VillaImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillaImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VillaImages
    **/
    _count?: true | VillaImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VillaImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VillaImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillaImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillaImageMaxAggregateInputType
  }

  export type GetVillaImageAggregateType<T extends VillaImageAggregateArgs> = {
        [P in keyof T & keyof AggregateVillaImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillaImage[P]>
      : GetScalarType<T[P], AggregateVillaImage[P]>
  }




  export type VillaImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaImageWhereInput
    orderBy?: VillaImageOrderByWithAggregationInput | VillaImageOrderByWithAggregationInput[]
    by: VillaImageScalarFieldEnum[] | VillaImageScalarFieldEnum
    having?: VillaImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillaImageCountAggregateInputType | true
    _avg?: VillaImageAvgAggregateInputType
    _sum?: VillaImageSumAggregateInputType
    _min?: VillaImageMinAggregateInputType
    _max?: VillaImageMaxAggregateInputType
  }

  export type VillaImageGroupByOutputType = {
    id: string
    villaId: string | null
    data: Bytes
    mimeType: string
    isMain: boolean
    order: number
    _count: VillaImageCountAggregateOutputType | null
    _avg: VillaImageAvgAggregateOutputType | null
    _sum: VillaImageSumAggregateOutputType | null
    _min: VillaImageMinAggregateOutputType | null
    _max: VillaImageMaxAggregateOutputType | null
  }

  type GetVillaImageGroupByPayload<T extends VillaImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillaImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillaImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillaImageGroupByOutputType[P]>
            : GetScalarType<T[P], VillaImageGroupByOutputType[P]>
        }
      >
    >


  export type VillaImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    villaId?: boolean
    data?: boolean
    mimeType?: boolean
    isMain?: boolean
    order?: boolean
    villa?: boolean | VillaImage$villaArgs<ExtArgs>
  }, ExtArgs["result"]["villaImage"]>

  export type VillaImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    villaId?: boolean
    data?: boolean
    mimeType?: boolean
    isMain?: boolean
    order?: boolean
    villa?: boolean | VillaImage$villaArgs<ExtArgs>
  }, ExtArgs["result"]["villaImage"]>

  export type VillaImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    villaId?: boolean
    data?: boolean
    mimeType?: boolean
    isMain?: boolean
    order?: boolean
    villa?: boolean | VillaImage$villaArgs<ExtArgs>
  }, ExtArgs["result"]["villaImage"]>

  export type VillaImageSelectScalar = {
    id?: boolean
    villaId?: boolean
    data?: boolean
    mimeType?: boolean
    isMain?: boolean
    order?: boolean
  }

  export type VillaImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "villaId" | "data" | "mimeType" | "isMain" | "order", ExtArgs["result"]["villaImage"]>
  export type VillaImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaImage$villaArgs<ExtArgs>
  }
  export type VillaImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaImage$villaArgs<ExtArgs>
  }
  export type VillaImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaImage$villaArgs<ExtArgs>
  }

  export type $VillaImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VillaImage"
    objects: {
      villa: Prisma.$VillaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      villaId: string | null
      data: Prisma.Bytes
      mimeType: string
      isMain: boolean
      order: number
    }, ExtArgs["result"]["villaImage"]>
    composites: {}
  }

  type VillaImageGetPayload<S extends boolean | null | undefined | VillaImageDefaultArgs> = $Result.GetResult<Prisma.$VillaImagePayload, S>

  type VillaImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillaImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillaImageCountAggregateInputType | true
    }

  export interface VillaImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VillaImage'], meta: { name: 'VillaImage' } }
    /**
     * Find zero or one VillaImage that matches the filter.
     * @param {VillaImageFindUniqueArgs} args - Arguments to find a VillaImage
     * @example
     * // Get one VillaImage
     * const villaImage = await prisma.villaImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillaImageFindUniqueArgs>(args: SelectSubset<T, VillaImageFindUniqueArgs<ExtArgs>>): Prisma__VillaImageClient<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VillaImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillaImageFindUniqueOrThrowArgs} args - Arguments to find a VillaImage
     * @example
     * // Get one VillaImage
     * const villaImage = await prisma.villaImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillaImageFindUniqueOrThrowArgs>(args: SelectSubset<T, VillaImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillaImageClient<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillaImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaImageFindFirstArgs} args - Arguments to find a VillaImage
     * @example
     * // Get one VillaImage
     * const villaImage = await prisma.villaImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillaImageFindFirstArgs>(args?: SelectSubset<T, VillaImageFindFirstArgs<ExtArgs>>): Prisma__VillaImageClient<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillaImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaImageFindFirstOrThrowArgs} args - Arguments to find a VillaImage
     * @example
     * // Get one VillaImage
     * const villaImage = await prisma.villaImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillaImageFindFirstOrThrowArgs>(args?: SelectSubset<T, VillaImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillaImageClient<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VillaImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VillaImages
     * const villaImages = await prisma.villaImage.findMany()
     * 
     * // Get first 10 VillaImages
     * const villaImages = await prisma.villaImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villaImageWithIdOnly = await prisma.villaImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillaImageFindManyArgs>(args?: SelectSubset<T, VillaImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VillaImage.
     * @param {VillaImageCreateArgs} args - Arguments to create a VillaImage.
     * @example
     * // Create one VillaImage
     * const VillaImage = await prisma.villaImage.create({
     *   data: {
     *     // ... data to create a VillaImage
     *   }
     * })
     * 
     */
    create<T extends VillaImageCreateArgs>(args: SelectSubset<T, VillaImageCreateArgs<ExtArgs>>): Prisma__VillaImageClient<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VillaImages.
     * @param {VillaImageCreateManyArgs} args - Arguments to create many VillaImages.
     * @example
     * // Create many VillaImages
     * const villaImage = await prisma.villaImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillaImageCreateManyArgs>(args?: SelectSubset<T, VillaImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VillaImages and returns the data saved in the database.
     * @param {VillaImageCreateManyAndReturnArgs} args - Arguments to create many VillaImages.
     * @example
     * // Create many VillaImages
     * const villaImage = await prisma.villaImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VillaImages and only return the `id`
     * const villaImageWithIdOnly = await prisma.villaImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VillaImageCreateManyAndReturnArgs>(args?: SelectSubset<T, VillaImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VillaImage.
     * @param {VillaImageDeleteArgs} args - Arguments to delete one VillaImage.
     * @example
     * // Delete one VillaImage
     * const VillaImage = await prisma.villaImage.delete({
     *   where: {
     *     // ... filter to delete one VillaImage
     *   }
     * })
     * 
     */
    delete<T extends VillaImageDeleteArgs>(args: SelectSubset<T, VillaImageDeleteArgs<ExtArgs>>): Prisma__VillaImageClient<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VillaImage.
     * @param {VillaImageUpdateArgs} args - Arguments to update one VillaImage.
     * @example
     * // Update one VillaImage
     * const villaImage = await prisma.villaImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillaImageUpdateArgs>(args: SelectSubset<T, VillaImageUpdateArgs<ExtArgs>>): Prisma__VillaImageClient<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VillaImages.
     * @param {VillaImageDeleteManyArgs} args - Arguments to filter VillaImages to delete.
     * @example
     * // Delete a few VillaImages
     * const { count } = await prisma.villaImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillaImageDeleteManyArgs>(args?: SelectSubset<T, VillaImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillaImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VillaImages
     * const villaImage = await prisma.villaImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillaImageUpdateManyArgs>(args: SelectSubset<T, VillaImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillaImages and returns the data updated in the database.
     * @param {VillaImageUpdateManyAndReturnArgs} args - Arguments to update many VillaImages.
     * @example
     * // Update many VillaImages
     * const villaImage = await prisma.villaImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VillaImages and only return the `id`
     * const villaImageWithIdOnly = await prisma.villaImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends VillaImageUpdateManyAndReturnArgs>(args: SelectSubset<T, VillaImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VillaImage.
     * @param {VillaImageUpsertArgs} args - Arguments to update or create a VillaImage.
     * @example
     * // Update or create a VillaImage
     * const villaImage = await prisma.villaImage.upsert({
     *   create: {
     *     // ... data to create a VillaImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VillaImage we want to update
     *   }
     * })
     */
    upsert<T extends VillaImageUpsertArgs>(args: SelectSubset<T, VillaImageUpsertArgs<ExtArgs>>): Prisma__VillaImageClient<$Result.GetResult<Prisma.$VillaImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VillaImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaImageCountArgs} args - Arguments to filter VillaImages to count.
     * @example
     * // Count the number of VillaImages
     * const count = await prisma.villaImage.count({
     *   where: {
     *     // ... the filter for the VillaImages we want to count
     *   }
     * })
    **/
    count<T extends VillaImageCountArgs>(
      args?: Subset<T, VillaImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillaImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VillaImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillaImageAggregateArgs>(args: Subset<T, VillaImageAggregateArgs>): Prisma.PrismaPromise<GetVillaImageAggregateType<T>>

    /**
     * Group by VillaImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaImageGroupByArgs} args - Group by arguments.
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
      T extends VillaImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillaImageGroupByArgs['orderBy'] }
        : { orderBy?: VillaImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VillaImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillaImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VillaImage model
   */
  readonly fields: VillaImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VillaImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillaImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    villa<T extends VillaImage$villaArgs<ExtArgs> = {}>(args?: Subset<T, VillaImage$villaArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VillaImage model
   */
  interface VillaImageFieldRefs {
    readonly id: FieldRef<"VillaImage", 'String'>
    readonly villaId: FieldRef<"VillaImage", 'String'>
    readonly data: FieldRef<"VillaImage", 'Bytes'>
    readonly mimeType: FieldRef<"VillaImage", 'String'>
    readonly isMain: FieldRef<"VillaImage", 'Boolean'>
    readonly order: FieldRef<"VillaImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VillaImage findUnique
   */
  export type VillaImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    /**
     * Filter, which VillaImage to fetch.
     */
    where: VillaImageWhereUniqueInput
  }

  /**
   * VillaImage findUniqueOrThrow
   */
  export type VillaImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    /**
     * Filter, which VillaImage to fetch.
     */
    where: VillaImageWhereUniqueInput
  }

  /**
   * VillaImage findFirst
   */
  export type VillaImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    /**
     * Filter, which VillaImage to fetch.
     */
    where?: VillaImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaImages to fetch.
     */
    orderBy?: VillaImageOrderByWithRelationInput | VillaImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillaImages.
     */
    cursor?: VillaImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillaImages.
     */
    distinct?: VillaImageScalarFieldEnum | VillaImageScalarFieldEnum[]
  }

  /**
   * VillaImage findFirstOrThrow
   */
  export type VillaImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    /**
     * Filter, which VillaImage to fetch.
     */
    where?: VillaImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaImages to fetch.
     */
    orderBy?: VillaImageOrderByWithRelationInput | VillaImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillaImages.
     */
    cursor?: VillaImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillaImages.
     */
    distinct?: VillaImageScalarFieldEnum | VillaImageScalarFieldEnum[]
  }

  /**
   * VillaImage findMany
   */
  export type VillaImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    /**
     * Filter, which VillaImages to fetch.
     */
    where?: VillaImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaImages to fetch.
     */
    orderBy?: VillaImageOrderByWithRelationInput | VillaImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VillaImages.
     */
    cursor?: VillaImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaImages.
     */
    skip?: number
    distinct?: VillaImageScalarFieldEnum | VillaImageScalarFieldEnum[]
  }

  /**
   * VillaImage create
   */
  export type VillaImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    /**
     * The data needed to create a VillaImage.
     */
    data: XOR<VillaImageCreateInput, VillaImageUncheckedCreateInput>
  }

  /**
   * VillaImage createMany
   */
  export type VillaImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VillaImages.
     */
    data: VillaImageCreateManyInput | VillaImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VillaImage createManyAndReturn
   */
  export type VillaImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * The data used to create many VillaImages.
     */
    data: VillaImageCreateManyInput | VillaImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VillaImage update
   */
  export type VillaImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    /**
     * The data needed to update a VillaImage.
     */
    data: XOR<VillaImageUpdateInput, VillaImageUncheckedUpdateInput>
    /**
     * Choose, which VillaImage to update.
     */
    where: VillaImageWhereUniqueInput
  }

  /**
   * VillaImage updateMany
   */
  export type VillaImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VillaImages.
     */
    data: XOR<VillaImageUpdateManyMutationInput, VillaImageUncheckedUpdateManyInput>
    /**
     * Filter which VillaImages to update
     */
    where?: VillaImageWhereInput
    /**
     * Limit how many VillaImages to update.
     */
    limit?: number
  }

  /**
   * VillaImage updateManyAndReturn
   */
  export type VillaImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * The data used to update VillaImages.
     */
    data: XOR<VillaImageUpdateManyMutationInput, VillaImageUncheckedUpdateManyInput>
    /**
     * Filter which VillaImages to update
     */
    where?: VillaImageWhereInput
    /**
     * Limit how many VillaImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VillaImage upsert
   */
  export type VillaImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    /**
     * The filter to search for the VillaImage to update in case it exists.
     */
    where: VillaImageWhereUniqueInput
    /**
     * In case the VillaImage found by the `where` argument doesn't exist, create a new VillaImage with this data.
     */
    create: XOR<VillaImageCreateInput, VillaImageUncheckedCreateInput>
    /**
     * In case the VillaImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillaImageUpdateInput, VillaImageUncheckedUpdateInput>
  }

  /**
   * VillaImage delete
   */
  export type VillaImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
    /**
     * Filter which VillaImage to delete.
     */
    where: VillaImageWhereUniqueInput
  }

  /**
   * VillaImage deleteMany
   */
  export type VillaImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillaImages to delete
     */
    where?: VillaImageWhereInput
    /**
     * Limit how many VillaImages to delete.
     */
    limit?: number
  }

  /**
   * VillaImage.villa
   */
  export type VillaImage$villaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    where?: VillaWhereInput
  }

  /**
   * VillaImage without action
   */
  export type VillaImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaImage
     */
    select?: VillaImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaImage
     */
    omit?: VillaImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaImageInclude<ExtArgs> | null
  }


  /**
   * Model VillaAmenity
   */

  export type AggregateVillaAmenity = {
    _count: VillaAmenityCountAggregateOutputType | null
    _min: VillaAmenityMinAggregateOutputType | null
    _max: VillaAmenityMaxAggregateOutputType | null
  }

  export type VillaAmenityMinAggregateOutputType = {
    id: string | null
    name: string | null
    villaId: string | null
  }

  export type VillaAmenityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    villaId: string | null
  }

  export type VillaAmenityCountAggregateOutputType = {
    id: number
    name: number
    villaId: number
    _all: number
  }


  export type VillaAmenityMinAggregateInputType = {
    id?: true
    name?: true
    villaId?: true
  }

  export type VillaAmenityMaxAggregateInputType = {
    id?: true
    name?: true
    villaId?: true
  }

  export type VillaAmenityCountAggregateInputType = {
    id?: true
    name?: true
    villaId?: true
    _all?: true
  }

  export type VillaAmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillaAmenity to aggregate.
     */
    where?: VillaAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaAmenities to fetch.
     */
    orderBy?: VillaAmenityOrderByWithRelationInput | VillaAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillaAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VillaAmenities
    **/
    _count?: true | VillaAmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillaAmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillaAmenityMaxAggregateInputType
  }

  export type GetVillaAmenityAggregateType<T extends VillaAmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateVillaAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillaAmenity[P]>
      : GetScalarType<T[P], AggregateVillaAmenity[P]>
  }




  export type VillaAmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaAmenityWhereInput
    orderBy?: VillaAmenityOrderByWithAggregationInput | VillaAmenityOrderByWithAggregationInput[]
    by: VillaAmenityScalarFieldEnum[] | VillaAmenityScalarFieldEnum
    having?: VillaAmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillaAmenityCountAggregateInputType | true
    _min?: VillaAmenityMinAggregateInputType
    _max?: VillaAmenityMaxAggregateInputType
  }

  export type VillaAmenityGroupByOutputType = {
    id: string
    name: string
    villaId: string
    _count: VillaAmenityCountAggregateOutputType | null
    _min: VillaAmenityMinAggregateOutputType | null
    _max: VillaAmenityMaxAggregateOutputType | null
  }

  type GetVillaAmenityGroupByPayload<T extends VillaAmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillaAmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillaAmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillaAmenityGroupByOutputType[P]>
            : GetScalarType<T[P], VillaAmenityGroupByOutputType[P]>
        }
      >
    >


  export type VillaAmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villaAmenity"]>

  export type VillaAmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villaAmenity"]>

  export type VillaAmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villaAmenity"]>

  export type VillaAmenitySelectScalar = {
    id?: boolean
    name?: boolean
    villaId?: boolean
  }

  export type VillaAmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "villaId", ExtArgs["result"]["villaAmenity"]>
  export type VillaAmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }
  export type VillaAmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }
  export type VillaAmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }

  export type $VillaAmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VillaAmenity"
    objects: {
      villa: Prisma.$VillaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      villaId: string
    }, ExtArgs["result"]["villaAmenity"]>
    composites: {}
  }

  type VillaAmenityGetPayload<S extends boolean | null | undefined | VillaAmenityDefaultArgs> = $Result.GetResult<Prisma.$VillaAmenityPayload, S>

  type VillaAmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillaAmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillaAmenityCountAggregateInputType | true
    }

  export interface VillaAmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VillaAmenity'], meta: { name: 'VillaAmenity' } }
    /**
     * Find zero or one VillaAmenity that matches the filter.
     * @param {VillaAmenityFindUniqueArgs} args - Arguments to find a VillaAmenity
     * @example
     * // Get one VillaAmenity
     * const villaAmenity = await prisma.villaAmenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillaAmenityFindUniqueArgs>(args: SelectSubset<T, VillaAmenityFindUniqueArgs<ExtArgs>>): Prisma__VillaAmenityClient<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VillaAmenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillaAmenityFindUniqueOrThrowArgs} args - Arguments to find a VillaAmenity
     * @example
     * // Get one VillaAmenity
     * const villaAmenity = await prisma.villaAmenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillaAmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, VillaAmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillaAmenityClient<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillaAmenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaAmenityFindFirstArgs} args - Arguments to find a VillaAmenity
     * @example
     * // Get one VillaAmenity
     * const villaAmenity = await prisma.villaAmenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillaAmenityFindFirstArgs>(args?: SelectSubset<T, VillaAmenityFindFirstArgs<ExtArgs>>): Prisma__VillaAmenityClient<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillaAmenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaAmenityFindFirstOrThrowArgs} args - Arguments to find a VillaAmenity
     * @example
     * // Get one VillaAmenity
     * const villaAmenity = await prisma.villaAmenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillaAmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, VillaAmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillaAmenityClient<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VillaAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaAmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VillaAmenities
     * const villaAmenities = await prisma.villaAmenity.findMany()
     * 
     * // Get first 10 VillaAmenities
     * const villaAmenities = await prisma.villaAmenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villaAmenityWithIdOnly = await prisma.villaAmenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillaAmenityFindManyArgs>(args?: SelectSubset<T, VillaAmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VillaAmenity.
     * @param {VillaAmenityCreateArgs} args - Arguments to create a VillaAmenity.
     * @example
     * // Create one VillaAmenity
     * const VillaAmenity = await prisma.villaAmenity.create({
     *   data: {
     *     // ... data to create a VillaAmenity
     *   }
     * })
     * 
     */
    create<T extends VillaAmenityCreateArgs>(args: SelectSubset<T, VillaAmenityCreateArgs<ExtArgs>>): Prisma__VillaAmenityClient<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VillaAmenities.
     * @param {VillaAmenityCreateManyArgs} args - Arguments to create many VillaAmenities.
     * @example
     * // Create many VillaAmenities
     * const villaAmenity = await prisma.villaAmenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillaAmenityCreateManyArgs>(args?: SelectSubset<T, VillaAmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VillaAmenities and returns the data saved in the database.
     * @param {VillaAmenityCreateManyAndReturnArgs} args - Arguments to create many VillaAmenities.
     * @example
     * // Create many VillaAmenities
     * const villaAmenity = await prisma.villaAmenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VillaAmenities and only return the `id`
     * const villaAmenityWithIdOnly = await prisma.villaAmenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VillaAmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, VillaAmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VillaAmenity.
     * @param {VillaAmenityDeleteArgs} args - Arguments to delete one VillaAmenity.
     * @example
     * // Delete one VillaAmenity
     * const VillaAmenity = await prisma.villaAmenity.delete({
     *   where: {
     *     // ... filter to delete one VillaAmenity
     *   }
     * })
     * 
     */
    delete<T extends VillaAmenityDeleteArgs>(args: SelectSubset<T, VillaAmenityDeleteArgs<ExtArgs>>): Prisma__VillaAmenityClient<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VillaAmenity.
     * @param {VillaAmenityUpdateArgs} args - Arguments to update one VillaAmenity.
     * @example
     * // Update one VillaAmenity
     * const villaAmenity = await prisma.villaAmenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillaAmenityUpdateArgs>(args: SelectSubset<T, VillaAmenityUpdateArgs<ExtArgs>>): Prisma__VillaAmenityClient<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VillaAmenities.
     * @param {VillaAmenityDeleteManyArgs} args - Arguments to filter VillaAmenities to delete.
     * @example
     * // Delete a few VillaAmenities
     * const { count } = await prisma.villaAmenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillaAmenityDeleteManyArgs>(args?: SelectSubset<T, VillaAmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillaAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaAmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VillaAmenities
     * const villaAmenity = await prisma.villaAmenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillaAmenityUpdateManyArgs>(args: SelectSubset<T, VillaAmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillaAmenities and returns the data updated in the database.
     * @param {VillaAmenityUpdateManyAndReturnArgs} args - Arguments to update many VillaAmenities.
     * @example
     * // Update many VillaAmenities
     * const villaAmenity = await prisma.villaAmenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VillaAmenities and only return the `id`
     * const villaAmenityWithIdOnly = await prisma.villaAmenity.updateManyAndReturn({
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
    updateManyAndReturn<T extends VillaAmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, VillaAmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VillaAmenity.
     * @param {VillaAmenityUpsertArgs} args - Arguments to update or create a VillaAmenity.
     * @example
     * // Update or create a VillaAmenity
     * const villaAmenity = await prisma.villaAmenity.upsert({
     *   create: {
     *     // ... data to create a VillaAmenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VillaAmenity we want to update
     *   }
     * })
     */
    upsert<T extends VillaAmenityUpsertArgs>(args: SelectSubset<T, VillaAmenityUpsertArgs<ExtArgs>>): Prisma__VillaAmenityClient<$Result.GetResult<Prisma.$VillaAmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VillaAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaAmenityCountArgs} args - Arguments to filter VillaAmenities to count.
     * @example
     * // Count the number of VillaAmenities
     * const count = await prisma.villaAmenity.count({
     *   where: {
     *     // ... the filter for the VillaAmenities we want to count
     *   }
     * })
    **/
    count<T extends VillaAmenityCountArgs>(
      args?: Subset<T, VillaAmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillaAmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VillaAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaAmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillaAmenityAggregateArgs>(args: Subset<T, VillaAmenityAggregateArgs>): Prisma.PrismaPromise<GetVillaAmenityAggregateType<T>>

    /**
     * Group by VillaAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaAmenityGroupByArgs} args - Group by arguments.
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
      T extends VillaAmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillaAmenityGroupByArgs['orderBy'] }
        : { orderBy?: VillaAmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VillaAmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillaAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VillaAmenity model
   */
  readonly fields: VillaAmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VillaAmenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillaAmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    villa<T extends VillaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillaDefaultArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VillaAmenity model
   */
  interface VillaAmenityFieldRefs {
    readonly id: FieldRef<"VillaAmenity", 'String'>
    readonly name: FieldRef<"VillaAmenity", 'String'>
    readonly villaId: FieldRef<"VillaAmenity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VillaAmenity findUnique
   */
  export type VillaAmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    /**
     * Filter, which VillaAmenity to fetch.
     */
    where: VillaAmenityWhereUniqueInput
  }

  /**
   * VillaAmenity findUniqueOrThrow
   */
  export type VillaAmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    /**
     * Filter, which VillaAmenity to fetch.
     */
    where: VillaAmenityWhereUniqueInput
  }

  /**
   * VillaAmenity findFirst
   */
  export type VillaAmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    /**
     * Filter, which VillaAmenity to fetch.
     */
    where?: VillaAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaAmenities to fetch.
     */
    orderBy?: VillaAmenityOrderByWithRelationInput | VillaAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillaAmenities.
     */
    cursor?: VillaAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillaAmenities.
     */
    distinct?: VillaAmenityScalarFieldEnum | VillaAmenityScalarFieldEnum[]
  }

  /**
   * VillaAmenity findFirstOrThrow
   */
  export type VillaAmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    /**
     * Filter, which VillaAmenity to fetch.
     */
    where?: VillaAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaAmenities to fetch.
     */
    orderBy?: VillaAmenityOrderByWithRelationInput | VillaAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillaAmenities.
     */
    cursor?: VillaAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillaAmenities.
     */
    distinct?: VillaAmenityScalarFieldEnum | VillaAmenityScalarFieldEnum[]
  }

  /**
   * VillaAmenity findMany
   */
  export type VillaAmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    /**
     * Filter, which VillaAmenities to fetch.
     */
    where?: VillaAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaAmenities to fetch.
     */
    orderBy?: VillaAmenityOrderByWithRelationInput | VillaAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VillaAmenities.
     */
    cursor?: VillaAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaAmenities.
     */
    skip?: number
    distinct?: VillaAmenityScalarFieldEnum | VillaAmenityScalarFieldEnum[]
  }

  /**
   * VillaAmenity create
   */
  export type VillaAmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a VillaAmenity.
     */
    data: XOR<VillaAmenityCreateInput, VillaAmenityUncheckedCreateInput>
  }

  /**
   * VillaAmenity createMany
   */
  export type VillaAmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VillaAmenities.
     */
    data: VillaAmenityCreateManyInput | VillaAmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VillaAmenity createManyAndReturn
   */
  export type VillaAmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * The data used to create many VillaAmenities.
     */
    data: VillaAmenityCreateManyInput | VillaAmenityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VillaAmenity update
   */
  export type VillaAmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a VillaAmenity.
     */
    data: XOR<VillaAmenityUpdateInput, VillaAmenityUncheckedUpdateInput>
    /**
     * Choose, which VillaAmenity to update.
     */
    where: VillaAmenityWhereUniqueInput
  }

  /**
   * VillaAmenity updateMany
   */
  export type VillaAmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VillaAmenities.
     */
    data: XOR<VillaAmenityUpdateManyMutationInput, VillaAmenityUncheckedUpdateManyInput>
    /**
     * Filter which VillaAmenities to update
     */
    where?: VillaAmenityWhereInput
    /**
     * Limit how many VillaAmenities to update.
     */
    limit?: number
  }

  /**
   * VillaAmenity updateManyAndReturn
   */
  export type VillaAmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * The data used to update VillaAmenities.
     */
    data: XOR<VillaAmenityUpdateManyMutationInput, VillaAmenityUncheckedUpdateManyInput>
    /**
     * Filter which VillaAmenities to update
     */
    where?: VillaAmenityWhereInput
    /**
     * Limit how many VillaAmenities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VillaAmenity upsert
   */
  export type VillaAmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the VillaAmenity to update in case it exists.
     */
    where: VillaAmenityWhereUniqueInput
    /**
     * In case the VillaAmenity found by the `where` argument doesn't exist, create a new VillaAmenity with this data.
     */
    create: XOR<VillaAmenityCreateInput, VillaAmenityUncheckedCreateInput>
    /**
     * In case the VillaAmenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillaAmenityUpdateInput, VillaAmenityUncheckedUpdateInput>
  }

  /**
   * VillaAmenity delete
   */
  export type VillaAmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
    /**
     * Filter which VillaAmenity to delete.
     */
    where: VillaAmenityWhereUniqueInput
  }

  /**
   * VillaAmenity deleteMany
   */
  export type VillaAmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillaAmenities to delete
     */
    where?: VillaAmenityWhereInput
    /**
     * Limit how many VillaAmenities to delete.
     */
    limit?: number
  }

  /**
   * VillaAmenity without action
   */
  export type VillaAmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaAmenity
     */
    select?: VillaAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaAmenity
     */
    omit?: VillaAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaAmenityInclude<ExtArgs> | null
  }


  /**
   * Model VillaHighlight
   */

  export type AggregateVillaHighlight = {
    _count: VillaHighlightCountAggregateOutputType | null
    _avg: VillaHighlightAvgAggregateOutputType | null
    _sum: VillaHighlightSumAggregateOutputType | null
    _min: VillaHighlightMinAggregateOutputType | null
    _max: VillaHighlightMaxAggregateOutputType | null
  }

  export type VillaHighlightAvgAggregateOutputType = {
    order: number | null
  }

  export type VillaHighlightSumAggregateOutputType = {
    order: number | null
  }

  export type VillaHighlightMinAggregateOutputType = {
    id: string | null
    text: string | null
    order: number | null
    villaId: string | null
  }

  export type VillaHighlightMaxAggregateOutputType = {
    id: string | null
    text: string | null
    order: number | null
    villaId: string | null
  }

  export type VillaHighlightCountAggregateOutputType = {
    id: number
    text: number
    order: number
    villaId: number
    _all: number
  }


  export type VillaHighlightAvgAggregateInputType = {
    order?: true
  }

  export type VillaHighlightSumAggregateInputType = {
    order?: true
  }

  export type VillaHighlightMinAggregateInputType = {
    id?: true
    text?: true
    order?: true
    villaId?: true
  }

  export type VillaHighlightMaxAggregateInputType = {
    id?: true
    text?: true
    order?: true
    villaId?: true
  }

  export type VillaHighlightCountAggregateInputType = {
    id?: true
    text?: true
    order?: true
    villaId?: true
    _all?: true
  }

  export type VillaHighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillaHighlight to aggregate.
     */
    where?: VillaHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaHighlights to fetch.
     */
    orderBy?: VillaHighlightOrderByWithRelationInput | VillaHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillaHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VillaHighlights
    **/
    _count?: true | VillaHighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VillaHighlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VillaHighlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillaHighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillaHighlightMaxAggregateInputType
  }

  export type GetVillaHighlightAggregateType<T extends VillaHighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateVillaHighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillaHighlight[P]>
      : GetScalarType<T[P], AggregateVillaHighlight[P]>
  }




  export type VillaHighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaHighlightWhereInput
    orderBy?: VillaHighlightOrderByWithAggregationInput | VillaHighlightOrderByWithAggregationInput[]
    by: VillaHighlightScalarFieldEnum[] | VillaHighlightScalarFieldEnum
    having?: VillaHighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillaHighlightCountAggregateInputType | true
    _avg?: VillaHighlightAvgAggregateInputType
    _sum?: VillaHighlightSumAggregateInputType
    _min?: VillaHighlightMinAggregateInputType
    _max?: VillaHighlightMaxAggregateInputType
  }

  export type VillaHighlightGroupByOutputType = {
    id: string
    text: string
    order: number
    villaId: string
    _count: VillaHighlightCountAggregateOutputType | null
    _avg: VillaHighlightAvgAggregateOutputType | null
    _sum: VillaHighlightSumAggregateOutputType | null
    _min: VillaHighlightMinAggregateOutputType | null
    _max: VillaHighlightMaxAggregateOutputType | null
  }

  type GetVillaHighlightGroupByPayload<T extends VillaHighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillaHighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillaHighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillaHighlightGroupByOutputType[P]>
            : GetScalarType<T[P], VillaHighlightGroupByOutputType[P]>
        }
      >
    >


  export type VillaHighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villaHighlight"]>

  export type VillaHighlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villaHighlight"]>

  export type VillaHighlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villaHighlight"]>

  export type VillaHighlightSelectScalar = {
    id?: boolean
    text?: boolean
    order?: boolean
    villaId?: boolean
  }

  export type VillaHighlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "order" | "villaId", ExtArgs["result"]["villaHighlight"]>
  export type VillaHighlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }
  export type VillaHighlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }
  export type VillaHighlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }

  export type $VillaHighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VillaHighlight"
    objects: {
      villa: Prisma.$VillaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      order: number
      villaId: string
    }, ExtArgs["result"]["villaHighlight"]>
    composites: {}
  }

  type VillaHighlightGetPayload<S extends boolean | null | undefined | VillaHighlightDefaultArgs> = $Result.GetResult<Prisma.$VillaHighlightPayload, S>

  type VillaHighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillaHighlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillaHighlightCountAggregateInputType | true
    }

  export interface VillaHighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VillaHighlight'], meta: { name: 'VillaHighlight' } }
    /**
     * Find zero or one VillaHighlight that matches the filter.
     * @param {VillaHighlightFindUniqueArgs} args - Arguments to find a VillaHighlight
     * @example
     * // Get one VillaHighlight
     * const villaHighlight = await prisma.villaHighlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillaHighlightFindUniqueArgs>(args: SelectSubset<T, VillaHighlightFindUniqueArgs<ExtArgs>>): Prisma__VillaHighlightClient<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VillaHighlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillaHighlightFindUniqueOrThrowArgs} args - Arguments to find a VillaHighlight
     * @example
     * // Get one VillaHighlight
     * const villaHighlight = await prisma.villaHighlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillaHighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, VillaHighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillaHighlightClient<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillaHighlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaHighlightFindFirstArgs} args - Arguments to find a VillaHighlight
     * @example
     * // Get one VillaHighlight
     * const villaHighlight = await prisma.villaHighlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillaHighlightFindFirstArgs>(args?: SelectSubset<T, VillaHighlightFindFirstArgs<ExtArgs>>): Prisma__VillaHighlightClient<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillaHighlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaHighlightFindFirstOrThrowArgs} args - Arguments to find a VillaHighlight
     * @example
     * // Get one VillaHighlight
     * const villaHighlight = await prisma.villaHighlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillaHighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, VillaHighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillaHighlightClient<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VillaHighlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaHighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VillaHighlights
     * const villaHighlights = await prisma.villaHighlight.findMany()
     * 
     * // Get first 10 VillaHighlights
     * const villaHighlights = await prisma.villaHighlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villaHighlightWithIdOnly = await prisma.villaHighlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillaHighlightFindManyArgs>(args?: SelectSubset<T, VillaHighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VillaHighlight.
     * @param {VillaHighlightCreateArgs} args - Arguments to create a VillaHighlight.
     * @example
     * // Create one VillaHighlight
     * const VillaHighlight = await prisma.villaHighlight.create({
     *   data: {
     *     // ... data to create a VillaHighlight
     *   }
     * })
     * 
     */
    create<T extends VillaHighlightCreateArgs>(args: SelectSubset<T, VillaHighlightCreateArgs<ExtArgs>>): Prisma__VillaHighlightClient<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VillaHighlights.
     * @param {VillaHighlightCreateManyArgs} args - Arguments to create many VillaHighlights.
     * @example
     * // Create many VillaHighlights
     * const villaHighlight = await prisma.villaHighlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillaHighlightCreateManyArgs>(args?: SelectSubset<T, VillaHighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VillaHighlights and returns the data saved in the database.
     * @param {VillaHighlightCreateManyAndReturnArgs} args - Arguments to create many VillaHighlights.
     * @example
     * // Create many VillaHighlights
     * const villaHighlight = await prisma.villaHighlight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VillaHighlights and only return the `id`
     * const villaHighlightWithIdOnly = await prisma.villaHighlight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VillaHighlightCreateManyAndReturnArgs>(args?: SelectSubset<T, VillaHighlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VillaHighlight.
     * @param {VillaHighlightDeleteArgs} args - Arguments to delete one VillaHighlight.
     * @example
     * // Delete one VillaHighlight
     * const VillaHighlight = await prisma.villaHighlight.delete({
     *   where: {
     *     // ... filter to delete one VillaHighlight
     *   }
     * })
     * 
     */
    delete<T extends VillaHighlightDeleteArgs>(args: SelectSubset<T, VillaHighlightDeleteArgs<ExtArgs>>): Prisma__VillaHighlightClient<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VillaHighlight.
     * @param {VillaHighlightUpdateArgs} args - Arguments to update one VillaHighlight.
     * @example
     * // Update one VillaHighlight
     * const villaHighlight = await prisma.villaHighlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillaHighlightUpdateArgs>(args: SelectSubset<T, VillaHighlightUpdateArgs<ExtArgs>>): Prisma__VillaHighlightClient<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VillaHighlights.
     * @param {VillaHighlightDeleteManyArgs} args - Arguments to filter VillaHighlights to delete.
     * @example
     * // Delete a few VillaHighlights
     * const { count } = await prisma.villaHighlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillaHighlightDeleteManyArgs>(args?: SelectSubset<T, VillaHighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillaHighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaHighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VillaHighlights
     * const villaHighlight = await prisma.villaHighlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillaHighlightUpdateManyArgs>(args: SelectSubset<T, VillaHighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillaHighlights and returns the data updated in the database.
     * @param {VillaHighlightUpdateManyAndReturnArgs} args - Arguments to update many VillaHighlights.
     * @example
     * // Update many VillaHighlights
     * const villaHighlight = await prisma.villaHighlight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VillaHighlights and only return the `id`
     * const villaHighlightWithIdOnly = await prisma.villaHighlight.updateManyAndReturn({
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
    updateManyAndReturn<T extends VillaHighlightUpdateManyAndReturnArgs>(args: SelectSubset<T, VillaHighlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VillaHighlight.
     * @param {VillaHighlightUpsertArgs} args - Arguments to update or create a VillaHighlight.
     * @example
     * // Update or create a VillaHighlight
     * const villaHighlight = await prisma.villaHighlight.upsert({
     *   create: {
     *     // ... data to create a VillaHighlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VillaHighlight we want to update
     *   }
     * })
     */
    upsert<T extends VillaHighlightUpsertArgs>(args: SelectSubset<T, VillaHighlightUpsertArgs<ExtArgs>>): Prisma__VillaHighlightClient<$Result.GetResult<Prisma.$VillaHighlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VillaHighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaHighlightCountArgs} args - Arguments to filter VillaHighlights to count.
     * @example
     * // Count the number of VillaHighlights
     * const count = await prisma.villaHighlight.count({
     *   where: {
     *     // ... the filter for the VillaHighlights we want to count
     *   }
     * })
    **/
    count<T extends VillaHighlightCountArgs>(
      args?: Subset<T, VillaHighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillaHighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VillaHighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaHighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillaHighlightAggregateArgs>(args: Subset<T, VillaHighlightAggregateArgs>): Prisma.PrismaPromise<GetVillaHighlightAggregateType<T>>

    /**
     * Group by VillaHighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaHighlightGroupByArgs} args - Group by arguments.
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
      T extends VillaHighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillaHighlightGroupByArgs['orderBy'] }
        : { orderBy?: VillaHighlightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VillaHighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillaHighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VillaHighlight model
   */
  readonly fields: VillaHighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VillaHighlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillaHighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    villa<T extends VillaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillaDefaultArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VillaHighlight model
   */
  interface VillaHighlightFieldRefs {
    readonly id: FieldRef<"VillaHighlight", 'String'>
    readonly text: FieldRef<"VillaHighlight", 'String'>
    readonly order: FieldRef<"VillaHighlight", 'Int'>
    readonly villaId: FieldRef<"VillaHighlight", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VillaHighlight findUnique
   */
  export type VillaHighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    /**
     * Filter, which VillaHighlight to fetch.
     */
    where: VillaHighlightWhereUniqueInput
  }

  /**
   * VillaHighlight findUniqueOrThrow
   */
  export type VillaHighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    /**
     * Filter, which VillaHighlight to fetch.
     */
    where: VillaHighlightWhereUniqueInput
  }

  /**
   * VillaHighlight findFirst
   */
  export type VillaHighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    /**
     * Filter, which VillaHighlight to fetch.
     */
    where?: VillaHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaHighlights to fetch.
     */
    orderBy?: VillaHighlightOrderByWithRelationInput | VillaHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillaHighlights.
     */
    cursor?: VillaHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillaHighlights.
     */
    distinct?: VillaHighlightScalarFieldEnum | VillaHighlightScalarFieldEnum[]
  }

  /**
   * VillaHighlight findFirstOrThrow
   */
  export type VillaHighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    /**
     * Filter, which VillaHighlight to fetch.
     */
    where?: VillaHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaHighlights to fetch.
     */
    orderBy?: VillaHighlightOrderByWithRelationInput | VillaHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillaHighlights.
     */
    cursor?: VillaHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillaHighlights.
     */
    distinct?: VillaHighlightScalarFieldEnum | VillaHighlightScalarFieldEnum[]
  }

  /**
   * VillaHighlight findMany
   */
  export type VillaHighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    /**
     * Filter, which VillaHighlights to fetch.
     */
    where?: VillaHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaHighlights to fetch.
     */
    orderBy?: VillaHighlightOrderByWithRelationInput | VillaHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VillaHighlights.
     */
    cursor?: VillaHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaHighlights.
     */
    skip?: number
    distinct?: VillaHighlightScalarFieldEnum | VillaHighlightScalarFieldEnum[]
  }

  /**
   * VillaHighlight create
   */
  export type VillaHighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    /**
     * The data needed to create a VillaHighlight.
     */
    data: XOR<VillaHighlightCreateInput, VillaHighlightUncheckedCreateInput>
  }

  /**
   * VillaHighlight createMany
   */
  export type VillaHighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VillaHighlights.
     */
    data: VillaHighlightCreateManyInput | VillaHighlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VillaHighlight createManyAndReturn
   */
  export type VillaHighlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * The data used to create many VillaHighlights.
     */
    data: VillaHighlightCreateManyInput | VillaHighlightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VillaHighlight update
   */
  export type VillaHighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    /**
     * The data needed to update a VillaHighlight.
     */
    data: XOR<VillaHighlightUpdateInput, VillaHighlightUncheckedUpdateInput>
    /**
     * Choose, which VillaHighlight to update.
     */
    where: VillaHighlightWhereUniqueInput
  }

  /**
   * VillaHighlight updateMany
   */
  export type VillaHighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VillaHighlights.
     */
    data: XOR<VillaHighlightUpdateManyMutationInput, VillaHighlightUncheckedUpdateManyInput>
    /**
     * Filter which VillaHighlights to update
     */
    where?: VillaHighlightWhereInput
    /**
     * Limit how many VillaHighlights to update.
     */
    limit?: number
  }

  /**
   * VillaHighlight updateManyAndReturn
   */
  export type VillaHighlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * The data used to update VillaHighlights.
     */
    data: XOR<VillaHighlightUpdateManyMutationInput, VillaHighlightUncheckedUpdateManyInput>
    /**
     * Filter which VillaHighlights to update
     */
    where?: VillaHighlightWhereInput
    /**
     * Limit how many VillaHighlights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VillaHighlight upsert
   */
  export type VillaHighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    /**
     * The filter to search for the VillaHighlight to update in case it exists.
     */
    where: VillaHighlightWhereUniqueInput
    /**
     * In case the VillaHighlight found by the `where` argument doesn't exist, create a new VillaHighlight with this data.
     */
    create: XOR<VillaHighlightCreateInput, VillaHighlightUncheckedCreateInput>
    /**
     * In case the VillaHighlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillaHighlightUpdateInput, VillaHighlightUncheckedUpdateInput>
  }

  /**
   * VillaHighlight delete
   */
  export type VillaHighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
    /**
     * Filter which VillaHighlight to delete.
     */
    where: VillaHighlightWhereUniqueInput
  }

  /**
   * VillaHighlight deleteMany
   */
  export type VillaHighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillaHighlights to delete
     */
    where?: VillaHighlightWhereInput
    /**
     * Limit how many VillaHighlights to delete.
     */
    limit?: number
  }

  /**
   * VillaHighlight without action
   */
  export type VillaHighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaHighlight
     */
    select?: VillaHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaHighlight
     */
    omit?: VillaHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaHighlightInclude<ExtArgs> | null
  }


  /**
   * Model VillaPolicy
   */

  export type AggregateVillaPolicy = {
    _count: VillaPolicyCountAggregateOutputType | null
    _avg: VillaPolicyAvgAggregateOutputType | null
    _sum: VillaPolicySumAggregateOutputType | null
    _min: VillaPolicyMinAggregateOutputType | null
    _max: VillaPolicyMaxAggregateOutputType | null
  }

  export type VillaPolicyAvgAggregateOutputType = {
    order: number | null
  }

  export type VillaPolicySumAggregateOutputType = {
    order: number | null
  }

  export type VillaPolicyMinAggregateOutputType = {
    id: string | null
    text: string | null
    order: number | null
    villaId: string | null
  }

  export type VillaPolicyMaxAggregateOutputType = {
    id: string | null
    text: string | null
    order: number | null
    villaId: string | null
  }

  export type VillaPolicyCountAggregateOutputType = {
    id: number
    text: number
    order: number
    villaId: number
    _all: number
  }


  export type VillaPolicyAvgAggregateInputType = {
    order?: true
  }

  export type VillaPolicySumAggregateInputType = {
    order?: true
  }

  export type VillaPolicyMinAggregateInputType = {
    id?: true
    text?: true
    order?: true
    villaId?: true
  }

  export type VillaPolicyMaxAggregateInputType = {
    id?: true
    text?: true
    order?: true
    villaId?: true
  }

  export type VillaPolicyCountAggregateInputType = {
    id?: true
    text?: true
    order?: true
    villaId?: true
    _all?: true
  }

  export type VillaPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillaPolicy to aggregate.
     */
    where?: VillaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaPolicies to fetch.
     */
    orderBy?: VillaPolicyOrderByWithRelationInput | VillaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VillaPolicies
    **/
    _count?: true | VillaPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VillaPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VillaPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillaPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillaPolicyMaxAggregateInputType
  }

  export type GetVillaPolicyAggregateType<T extends VillaPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateVillaPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillaPolicy[P]>
      : GetScalarType<T[P], AggregateVillaPolicy[P]>
  }




  export type VillaPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillaPolicyWhereInput
    orderBy?: VillaPolicyOrderByWithAggregationInput | VillaPolicyOrderByWithAggregationInput[]
    by: VillaPolicyScalarFieldEnum[] | VillaPolicyScalarFieldEnum
    having?: VillaPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillaPolicyCountAggregateInputType | true
    _avg?: VillaPolicyAvgAggregateInputType
    _sum?: VillaPolicySumAggregateInputType
    _min?: VillaPolicyMinAggregateInputType
    _max?: VillaPolicyMaxAggregateInputType
  }

  export type VillaPolicyGroupByOutputType = {
    id: string
    text: string
    order: number
    villaId: string
    _count: VillaPolicyCountAggregateOutputType | null
    _avg: VillaPolicyAvgAggregateOutputType | null
    _sum: VillaPolicySumAggregateOutputType | null
    _min: VillaPolicyMinAggregateOutputType | null
    _max: VillaPolicyMaxAggregateOutputType | null
  }

  type GetVillaPolicyGroupByPayload<T extends VillaPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillaPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillaPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillaPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], VillaPolicyGroupByOutputType[P]>
        }
      >
    >


  export type VillaPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villaPolicy"]>

  export type VillaPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villaPolicy"]>

  export type VillaPolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villaPolicy"]>

  export type VillaPolicySelectScalar = {
    id?: boolean
    text?: boolean
    order?: boolean
    villaId?: boolean
  }

  export type VillaPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "order" | "villaId", ExtArgs["result"]["villaPolicy"]>
  export type VillaPolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }
  export type VillaPolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }
  export type VillaPolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }

  export type $VillaPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VillaPolicy"
    objects: {
      villa: Prisma.$VillaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      order: number
      villaId: string
    }, ExtArgs["result"]["villaPolicy"]>
    composites: {}
  }

  type VillaPolicyGetPayload<S extends boolean | null | undefined | VillaPolicyDefaultArgs> = $Result.GetResult<Prisma.$VillaPolicyPayload, S>

  type VillaPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillaPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillaPolicyCountAggregateInputType | true
    }

  export interface VillaPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VillaPolicy'], meta: { name: 'VillaPolicy' } }
    /**
     * Find zero or one VillaPolicy that matches the filter.
     * @param {VillaPolicyFindUniqueArgs} args - Arguments to find a VillaPolicy
     * @example
     * // Get one VillaPolicy
     * const villaPolicy = await prisma.villaPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillaPolicyFindUniqueArgs>(args: SelectSubset<T, VillaPolicyFindUniqueArgs<ExtArgs>>): Prisma__VillaPolicyClient<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VillaPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillaPolicyFindUniqueOrThrowArgs} args - Arguments to find a VillaPolicy
     * @example
     * // Get one VillaPolicy
     * const villaPolicy = await prisma.villaPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillaPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, VillaPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillaPolicyClient<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillaPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaPolicyFindFirstArgs} args - Arguments to find a VillaPolicy
     * @example
     * // Get one VillaPolicy
     * const villaPolicy = await prisma.villaPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillaPolicyFindFirstArgs>(args?: SelectSubset<T, VillaPolicyFindFirstArgs<ExtArgs>>): Prisma__VillaPolicyClient<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillaPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaPolicyFindFirstOrThrowArgs} args - Arguments to find a VillaPolicy
     * @example
     * // Get one VillaPolicy
     * const villaPolicy = await prisma.villaPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillaPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, VillaPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillaPolicyClient<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VillaPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VillaPolicies
     * const villaPolicies = await prisma.villaPolicy.findMany()
     * 
     * // Get first 10 VillaPolicies
     * const villaPolicies = await prisma.villaPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villaPolicyWithIdOnly = await prisma.villaPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillaPolicyFindManyArgs>(args?: SelectSubset<T, VillaPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VillaPolicy.
     * @param {VillaPolicyCreateArgs} args - Arguments to create a VillaPolicy.
     * @example
     * // Create one VillaPolicy
     * const VillaPolicy = await prisma.villaPolicy.create({
     *   data: {
     *     // ... data to create a VillaPolicy
     *   }
     * })
     * 
     */
    create<T extends VillaPolicyCreateArgs>(args: SelectSubset<T, VillaPolicyCreateArgs<ExtArgs>>): Prisma__VillaPolicyClient<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VillaPolicies.
     * @param {VillaPolicyCreateManyArgs} args - Arguments to create many VillaPolicies.
     * @example
     * // Create many VillaPolicies
     * const villaPolicy = await prisma.villaPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillaPolicyCreateManyArgs>(args?: SelectSubset<T, VillaPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VillaPolicies and returns the data saved in the database.
     * @param {VillaPolicyCreateManyAndReturnArgs} args - Arguments to create many VillaPolicies.
     * @example
     * // Create many VillaPolicies
     * const villaPolicy = await prisma.villaPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VillaPolicies and only return the `id`
     * const villaPolicyWithIdOnly = await prisma.villaPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VillaPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, VillaPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VillaPolicy.
     * @param {VillaPolicyDeleteArgs} args - Arguments to delete one VillaPolicy.
     * @example
     * // Delete one VillaPolicy
     * const VillaPolicy = await prisma.villaPolicy.delete({
     *   where: {
     *     // ... filter to delete one VillaPolicy
     *   }
     * })
     * 
     */
    delete<T extends VillaPolicyDeleteArgs>(args: SelectSubset<T, VillaPolicyDeleteArgs<ExtArgs>>): Prisma__VillaPolicyClient<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VillaPolicy.
     * @param {VillaPolicyUpdateArgs} args - Arguments to update one VillaPolicy.
     * @example
     * // Update one VillaPolicy
     * const villaPolicy = await prisma.villaPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillaPolicyUpdateArgs>(args: SelectSubset<T, VillaPolicyUpdateArgs<ExtArgs>>): Prisma__VillaPolicyClient<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VillaPolicies.
     * @param {VillaPolicyDeleteManyArgs} args - Arguments to filter VillaPolicies to delete.
     * @example
     * // Delete a few VillaPolicies
     * const { count } = await prisma.villaPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillaPolicyDeleteManyArgs>(args?: SelectSubset<T, VillaPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillaPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VillaPolicies
     * const villaPolicy = await prisma.villaPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillaPolicyUpdateManyArgs>(args: SelectSubset<T, VillaPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillaPolicies and returns the data updated in the database.
     * @param {VillaPolicyUpdateManyAndReturnArgs} args - Arguments to update many VillaPolicies.
     * @example
     * // Update many VillaPolicies
     * const villaPolicy = await prisma.villaPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VillaPolicies and only return the `id`
     * const villaPolicyWithIdOnly = await prisma.villaPolicy.updateManyAndReturn({
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
    updateManyAndReturn<T extends VillaPolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, VillaPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VillaPolicy.
     * @param {VillaPolicyUpsertArgs} args - Arguments to update or create a VillaPolicy.
     * @example
     * // Update or create a VillaPolicy
     * const villaPolicy = await prisma.villaPolicy.upsert({
     *   create: {
     *     // ... data to create a VillaPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VillaPolicy we want to update
     *   }
     * })
     */
    upsert<T extends VillaPolicyUpsertArgs>(args: SelectSubset<T, VillaPolicyUpsertArgs<ExtArgs>>): Prisma__VillaPolicyClient<$Result.GetResult<Prisma.$VillaPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VillaPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaPolicyCountArgs} args - Arguments to filter VillaPolicies to count.
     * @example
     * // Count the number of VillaPolicies
     * const count = await prisma.villaPolicy.count({
     *   where: {
     *     // ... the filter for the VillaPolicies we want to count
     *   }
     * })
    **/
    count<T extends VillaPolicyCountArgs>(
      args?: Subset<T, VillaPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillaPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VillaPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillaPolicyAggregateArgs>(args: Subset<T, VillaPolicyAggregateArgs>): Prisma.PrismaPromise<GetVillaPolicyAggregateType<T>>

    /**
     * Group by VillaPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillaPolicyGroupByArgs} args - Group by arguments.
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
      T extends VillaPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillaPolicyGroupByArgs['orderBy'] }
        : { orderBy?: VillaPolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VillaPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillaPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VillaPolicy model
   */
  readonly fields: VillaPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VillaPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillaPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    villa<T extends VillaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillaDefaultArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VillaPolicy model
   */
  interface VillaPolicyFieldRefs {
    readonly id: FieldRef<"VillaPolicy", 'String'>
    readonly text: FieldRef<"VillaPolicy", 'String'>
    readonly order: FieldRef<"VillaPolicy", 'Int'>
    readonly villaId: FieldRef<"VillaPolicy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VillaPolicy findUnique
   */
  export type VillaPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which VillaPolicy to fetch.
     */
    where: VillaPolicyWhereUniqueInput
  }

  /**
   * VillaPolicy findUniqueOrThrow
   */
  export type VillaPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which VillaPolicy to fetch.
     */
    where: VillaPolicyWhereUniqueInput
  }

  /**
   * VillaPolicy findFirst
   */
  export type VillaPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which VillaPolicy to fetch.
     */
    where?: VillaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaPolicies to fetch.
     */
    orderBy?: VillaPolicyOrderByWithRelationInput | VillaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillaPolicies.
     */
    cursor?: VillaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillaPolicies.
     */
    distinct?: VillaPolicyScalarFieldEnum | VillaPolicyScalarFieldEnum[]
  }

  /**
   * VillaPolicy findFirstOrThrow
   */
  export type VillaPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which VillaPolicy to fetch.
     */
    where?: VillaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaPolicies to fetch.
     */
    orderBy?: VillaPolicyOrderByWithRelationInput | VillaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillaPolicies.
     */
    cursor?: VillaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillaPolicies.
     */
    distinct?: VillaPolicyScalarFieldEnum | VillaPolicyScalarFieldEnum[]
  }

  /**
   * VillaPolicy findMany
   */
  export type VillaPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which VillaPolicies to fetch.
     */
    where?: VillaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillaPolicies to fetch.
     */
    orderBy?: VillaPolicyOrderByWithRelationInput | VillaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VillaPolicies.
     */
    cursor?: VillaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillaPolicies.
     */
    skip?: number
    distinct?: VillaPolicyScalarFieldEnum | VillaPolicyScalarFieldEnum[]
  }

  /**
   * VillaPolicy create
   */
  export type VillaPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a VillaPolicy.
     */
    data: XOR<VillaPolicyCreateInput, VillaPolicyUncheckedCreateInput>
  }

  /**
   * VillaPolicy createMany
   */
  export type VillaPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VillaPolicies.
     */
    data: VillaPolicyCreateManyInput | VillaPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VillaPolicy createManyAndReturn
   */
  export type VillaPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * The data used to create many VillaPolicies.
     */
    data: VillaPolicyCreateManyInput | VillaPolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VillaPolicy update
   */
  export type VillaPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a VillaPolicy.
     */
    data: XOR<VillaPolicyUpdateInput, VillaPolicyUncheckedUpdateInput>
    /**
     * Choose, which VillaPolicy to update.
     */
    where: VillaPolicyWhereUniqueInput
  }

  /**
   * VillaPolicy updateMany
   */
  export type VillaPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VillaPolicies.
     */
    data: XOR<VillaPolicyUpdateManyMutationInput, VillaPolicyUncheckedUpdateManyInput>
    /**
     * Filter which VillaPolicies to update
     */
    where?: VillaPolicyWhereInput
    /**
     * Limit how many VillaPolicies to update.
     */
    limit?: number
  }

  /**
   * VillaPolicy updateManyAndReturn
   */
  export type VillaPolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * The data used to update VillaPolicies.
     */
    data: XOR<VillaPolicyUpdateManyMutationInput, VillaPolicyUncheckedUpdateManyInput>
    /**
     * Filter which VillaPolicies to update
     */
    where?: VillaPolicyWhereInput
    /**
     * Limit how many VillaPolicies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VillaPolicy upsert
   */
  export type VillaPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the VillaPolicy to update in case it exists.
     */
    where: VillaPolicyWhereUniqueInput
    /**
     * In case the VillaPolicy found by the `where` argument doesn't exist, create a new VillaPolicy with this data.
     */
    create: XOR<VillaPolicyCreateInput, VillaPolicyUncheckedCreateInput>
    /**
     * In case the VillaPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillaPolicyUpdateInput, VillaPolicyUncheckedUpdateInput>
  }

  /**
   * VillaPolicy delete
   */
  export type VillaPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
    /**
     * Filter which VillaPolicy to delete.
     */
    where: VillaPolicyWhereUniqueInput
  }

  /**
   * VillaPolicy deleteMany
   */
  export type VillaPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillaPolicies to delete
     */
    where?: VillaPolicyWhereInput
    /**
     * Limit how many VillaPolicies to delete.
     */
    limit?: number
  }

  /**
   * VillaPolicy without action
   */
  export type VillaPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillaPolicy
     */
    select?: VillaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillaPolicy
     */
    omit?: VillaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaPolicyInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    author: string | null
    avatar: string | null
    date: string | null
    rating: number | null
    comment: string | null
    villaId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    author: string | null
    avatar: string | null
    date: string | null
    rating: number | null
    comment: string | null
    villaId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    author: number
    avatar: number
    date: number
    rating: number
    comment: number
    villaId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    author?: true
    avatar?: true
    date?: true
    rating?: true
    comment?: true
    villaId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    author?: true
    avatar?: true
    date?: true
    rating?: true
    comment?: true
    villaId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    author?: true
    avatar?: true
    date?: true
    rating?: true
    comment?: true
    villaId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    author: string
    avatar: string
    date: string
    rating: number
    comment: string
    villaId: string
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    avatar?: boolean
    date?: boolean
    rating?: boolean
    comment?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    avatar?: boolean
    date?: boolean
    rating?: boolean
    comment?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    avatar?: boolean
    date?: boolean
    rating?: boolean
    comment?: boolean
    villaId?: boolean
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    author?: boolean
    avatar?: boolean
    date?: boolean
    rating?: boolean
    comment?: boolean
    villaId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author" | "avatar" | "date" | "rating" | "comment" | "villaId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villa?: boolean | VillaDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      villa: Prisma.$VillaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author: string
      avatar: string
      date: string
      rating: number
      comment: string
      villaId: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    villa<T extends VillaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillaDefaultArgs<ExtArgs>>): Prisma__VillaClient<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly author: FieldRef<"Review", 'String'>
    readonly avatar: FieldRef<"Review", 'String'>
    readonly date: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Float'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly villaId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


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
    username: string | null
    email: string | null
    password: string | null
    fullName: string | null
    phone: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    fullName: string | null
    phone: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    fullName: number
    phone: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    fullName?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    fullName?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    fullName?: true
    phone?: true
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
    username: string
    email: string | null
    password: string
    fullName: string | null
    phone: string | null
    role: string
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
    username?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "fullName" | "phone" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string | null
      password: string
      fullName: string | null
      phone: string | null
      role: string
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    isFamous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AreaMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    isFamous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    isFamous: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AreaMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    isFamous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    isFamous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    isFamous?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string | null
    isFamous: boolean
    createdAt: Date
    updatedAt: Date
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    isFamous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    villas?: boolean | Area$villasArgs<ExtArgs>
    image?: boolean | Area$imageArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    isFamous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    isFamous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    isFamous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "isFamous" | "createdAt" | "updatedAt", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villas?: boolean | Area$villasArgs<ExtArgs>
    image?: boolean | Area$imageArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      villas: Prisma.$VillaPayload<ExtArgs>[]
      image: Prisma.$ImageAreaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      isFamous: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {AreaUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.updateManyAndReturn({
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
    updateManyAndReturn<T extends AreaUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
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
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    villas<T extends Area$villasArgs<ExtArgs> = {}>(args?: Subset<T, Area$villasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    image<T extends Area$imageArgs<ExtArgs> = {}>(args?: Subset<T, Area$imageArgs<ExtArgs>>): Prisma__ImageAreaClient<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'String'>
    readonly slug: FieldRef<"Area", 'String'>
    readonly name: FieldRef<"Area", 'String'>
    readonly description: FieldRef<"Area", 'String'>
    readonly isFamous: FieldRef<"Area", 'Boolean'>
    readonly createdAt: FieldRef<"Area", 'DateTime'>
    readonly updatedAt: FieldRef<"Area", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area updateManyAndReturn
   */
  export type AreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.villas
   */
  export type Area$villasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Villa
     */
    select?: VillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Villa
     */
    omit?: VillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillaInclude<ExtArgs> | null
    where?: VillaWhereInput
    orderBy?: VillaOrderByWithRelationInput | VillaOrderByWithRelationInput[]
    cursor?: VillaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VillaScalarFieldEnum | VillaScalarFieldEnum[]
  }

  /**
   * Area.image
   */
  export type Area$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    where?: ImageAreaWhereInput
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model ImageArea
   */

  export type AggregateImageArea = {
    _count: ImageAreaCountAggregateOutputType | null
    _min: ImageAreaMinAggregateOutputType | null
    _max: ImageAreaMaxAggregateOutputType | null
  }

  export type ImageAreaMinAggregateOutputType = {
    id: string | null
    areaId: string | null
    data: Bytes | null
    mimeType: string | null
  }

  export type ImageAreaMaxAggregateOutputType = {
    id: string | null
    areaId: string | null
    data: Bytes | null
    mimeType: string | null
  }

  export type ImageAreaCountAggregateOutputType = {
    id: number
    areaId: number
    data: number
    mimeType: number
    _all: number
  }


  export type ImageAreaMinAggregateInputType = {
    id?: true
    areaId?: true
    data?: true
    mimeType?: true
  }

  export type ImageAreaMaxAggregateInputType = {
    id?: true
    areaId?: true
    data?: true
    mimeType?: true
  }

  export type ImageAreaCountAggregateInputType = {
    id?: true
    areaId?: true
    data?: true
    mimeType?: true
    _all?: true
  }

  export type ImageAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageArea to aggregate.
     */
    where?: ImageAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageAreas to fetch.
     */
    orderBy?: ImageAreaOrderByWithRelationInput | ImageAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageAreas
    **/
    _count?: true | ImageAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageAreaMaxAggregateInputType
  }

  export type GetImageAreaAggregateType<T extends ImageAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateImageArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageArea[P]>
      : GetScalarType<T[P], AggregateImageArea[P]>
  }




  export type ImageAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageAreaWhereInput
    orderBy?: ImageAreaOrderByWithAggregationInput | ImageAreaOrderByWithAggregationInput[]
    by: ImageAreaScalarFieldEnum[] | ImageAreaScalarFieldEnum
    having?: ImageAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageAreaCountAggregateInputType | true
    _min?: ImageAreaMinAggregateInputType
    _max?: ImageAreaMaxAggregateInputType
  }

  export type ImageAreaGroupByOutputType = {
    id: string
    areaId: string
    data: Bytes
    mimeType: string
    _count: ImageAreaCountAggregateOutputType | null
    _min: ImageAreaMinAggregateOutputType | null
    _max: ImageAreaMaxAggregateOutputType | null
  }

  type GetImageAreaGroupByPayload<T extends ImageAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageAreaGroupByOutputType[P]>
            : GetScalarType<T[P], ImageAreaGroupByOutputType[P]>
        }
      >
    >


  export type ImageAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaId?: boolean
    data?: boolean
    mimeType?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageArea"]>

  export type ImageAreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaId?: boolean
    data?: boolean
    mimeType?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageArea"]>

  export type ImageAreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaId?: boolean
    data?: boolean
    mimeType?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageArea"]>

  export type ImageAreaSelectScalar = {
    id?: boolean
    areaId?: boolean
    data?: boolean
    mimeType?: boolean
  }

  export type ImageAreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "areaId" | "data" | "mimeType", ExtArgs["result"]["imageArea"]>
  export type ImageAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }
  export type ImageAreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }
  export type ImageAreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }

  export type $ImageAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageArea"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      areaId: string
      data: Prisma.Bytes
      mimeType: string
    }, ExtArgs["result"]["imageArea"]>
    composites: {}
  }

  type ImageAreaGetPayload<S extends boolean | null | undefined | ImageAreaDefaultArgs> = $Result.GetResult<Prisma.$ImageAreaPayload, S>

  type ImageAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageAreaCountAggregateInputType | true
    }

  export interface ImageAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageArea'], meta: { name: 'ImageArea' } }
    /**
     * Find zero or one ImageArea that matches the filter.
     * @param {ImageAreaFindUniqueArgs} args - Arguments to find a ImageArea
     * @example
     * // Get one ImageArea
     * const imageArea = await prisma.imageArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageAreaFindUniqueArgs>(args: SelectSubset<T, ImageAreaFindUniqueArgs<ExtArgs>>): Prisma__ImageAreaClient<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageArea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageAreaFindUniqueOrThrowArgs} args - Arguments to find a ImageArea
     * @example
     * // Get one ImageArea
     * const imageArea = await prisma.imageArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageAreaClient<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAreaFindFirstArgs} args - Arguments to find a ImageArea
     * @example
     * // Get one ImageArea
     * const imageArea = await prisma.imageArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageAreaFindFirstArgs>(args?: SelectSubset<T, ImageAreaFindFirstArgs<ExtArgs>>): Prisma__ImageAreaClient<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAreaFindFirstOrThrowArgs} args - Arguments to find a ImageArea
     * @example
     * // Get one ImageArea
     * const imageArea = await prisma.imageArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageAreaClient<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageAreas
     * const imageAreas = await prisma.imageArea.findMany()
     * 
     * // Get first 10 ImageAreas
     * const imageAreas = await prisma.imageArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageAreaWithIdOnly = await prisma.imageArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageAreaFindManyArgs>(args?: SelectSubset<T, ImageAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageArea.
     * @param {ImageAreaCreateArgs} args - Arguments to create a ImageArea.
     * @example
     * // Create one ImageArea
     * const ImageArea = await prisma.imageArea.create({
     *   data: {
     *     // ... data to create a ImageArea
     *   }
     * })
     * 
     */
    create<T extends ImageAreaCreateArgs>(args: SelectSubset<T, ImageAreaCreateArgs<ExtArgs>>): Prisma__ImageAreaClient<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageAreas.
     * @param {ImageAreaCreateManyArgs} args - Arguments to create many ImageAreas.
     * @example
     * // Create many ImageAreas
     * const imageArea = await prisma.imageArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageAreaCreateManyArgs>(args?: SelectSubset<T, ImageAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageAreas and returns the data saved in the database.
     * @param {ImageAreaCreateManyAndReturnArgs} args - Arguments to create many ImageAreas.
     * @example
     * // Create many ImageAreas
     * const imageArea = await prisma.imageArea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageAreas and only return the `id`
     * const imageAreaWithIdOnly = await prisma.imageArea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageAreaCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageArea.
     * @param {ImageAreaDeleteArgs} args - Arguments to delete one ImageArea.
     * @example
     * // Delete one ImageArea
     * const ImageArea = await prisma.imageArea.delete({
     *   where: {
     *     // ... filter to delete one ImageArea
     *   }
     * })
     * 
     */
    delete<T extends ImageAreaDeleteArgs>(args: SelectSubset<T, ImageAreaDeleteArgs<ExtArgs>>): Prisma__ImageAreaClient<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageArea.
     * @param {ImageAreaUpdateArgs} args - Arguments to update one ImageArea.
     * @example
     * // Update one ImageArea
     * const imageArea = await prisma.imageArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageAreaUpdateArgs>(args: SelectSubset<T, ImageAreaUpdateArgs<ExtArgs>>): Prisma__ImageAreaClient<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageAreas.
     * @param {ImageAreaDeleteManyArgs} args - Arguments to filter ImageAreas to delete.
     * @example
     * // Delete a few ImageAreas
     * const { count } = await prisma.imageArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageAreaDeleteManyArgs>(args?: SelectSubset<T, ImageAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageAreas
     * const imageArea = await prisma.imageArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageAreaUpdateManyArgs>(args: SelectSubset<T, ImageAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageAreas and returns the data updated in the database.
     * @param {ImageAreaUpdateManyAndReturnArgs} args - Arguments to update many ImageAreas.
     * @example
     * // Update many ImageAreas
     * const imageArea = await prisma.imageArea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageAreas and only return the `id`
     * const imageAreaWithIdOnly = await prisma.imageArea.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageAreaUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageAreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageArea.
     * @param {ImageAreaUpsertArgs} args - Arguments to update or create a ImageArea.
     * @example
     * // Update or create a ImageArea
     * const imageArea = await prisma.imageArea.upsert({
     *   create: {
     *     // ... data to create a ImageArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageArea we want to update
     *   }
     * })
     */
    upsert<T extends ImageAreaUpsertArgs>(args: SelectSubset<T, ImageAreaUpsertArgs<ExtArgs>>): Prisma__ImageAreaClient<$Result.GetResult<Prisma.$ImageAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAreaCountArgs} args - Arguments to filter ImageAreas to count.
     * @example
     * // Count the number of ImageAreas
     * const count = await prisma.imageArea.count({
     *   where: {
     *     // ... the filter for the ImageAreas we want to count
     *   }
     * })
    **/
    count<T extends ImageAreaCountArgs>(
      args?: Subset<T, ImageAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAreaAggregateArgs>(args: Subset<T, ImageAreaAggregateArgs>): Prisma.PrismaPromise<GetImageAreaAggregateType<T>>

    /**
     * Group by ImageArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAreaGroupByArgs} args - Group by arguments.
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
      T extends ImageAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageAreaGroupByArgs['orderBy'] }
        : { orderBy?: ImageAreaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageArea model
   */
  readonly fields: ImageAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImageArea model
   */
  interface ImageAreaFieldRefs {
    readonly id: FieldRef<"ImageArea", 'String'>
    readonly areaId: FieldRef<"ImageArea", 'String'>
    readonly data: FieldRef<"ImageArea", 'Bytes'>
    readonly mimeType: FieldRef<"ImageArea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImageArea findUnique
   */
  export type ImageAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    /**
     * Filter, which ImageArea to fetch.
     */
    where: ImageAreaWhereUniqueInput
  }

  /**
   * ImageArea findUniqueOrThrow
   */
  export type ImageAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    /**
     * Filter, which ImageArea to fetch.
     */
    where: ImageAreaWhereUniqueInput
  }

  /**
   * ImageArea findFirst
   */
  export type ImageAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    /**
     * Filter, which ImageArea to fetch.
     */
    where?: ImageAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageAreas to fetch.
     */
    orderBy?: ImageAreaOrderByWithRelationInput | ImageAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageAreas.
     */
    cursor?: ImageAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageAreas.
     */
    distinct?: ImageAreaScalarFieldEnum | ImageAreaScalarFieldEnum[]
  }

  /**
   * ImageArea findFirstOrThrow
   */
  export type ImageAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    /**
     * Filter, which ImageArea to fetch.
     */
    where?: ImageAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageAreas to fetch.
     */
    orderBy?: ImageAreaOrderByWithRelationInput | ImageAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageAreas.
     */
    cursor?: ImageAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageAreas.
     */
    distinct?: ImageAreaScalarFieldEnum | ImageAreaScalarFieldEnum[]
  }

  /**
   * ImageArea findMany
   */
  export type ImageAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    /**
     * Filter, which ImageAreas to fetch.
     */
    where?: ImageAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageAreas to fetch.
     */
    orderBy?: ImageAreaOrderByWithRelationInput | ImageAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageAreas.
     */
    cursor?: ImageAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageAreas.
     */
    skip?: number
    distinct?: ImageAreaScalarFieldEnum | ImageAreaScalarFieldEnum[]
  }

  /**
   * ImageArea create
   */
  export type ImageAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageArea.
     */
    data: XOR<ImageAreaCreateInput, ImageAreaUncheckedCreateInput>
  }

  /**
   * ImageArea createMany
   */
  export type ImageAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageAreas.
     */
    data: ImageAreaCreateManyInput | ImageAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageArea createManyAndReturn
   */
  export type ImageAreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * The data used to create many ImageAreas.
     */
    data: ImageAreaCreateManyInput | ImageAreaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageArea update
   */
  export type ImageAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageArea.
     */
    data: XOR<ImageAreaUpdateInput, ImageAreaUncheckedUpdateInput>
    /**
     * Choose, which ImageArea to update.
     */
    where: ImageAreaWhereUniqueInput
  }

  /**
   * ImageArea updateMany
   */
  export type ImageAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageAreas.
     */
    data: XOR<ImageAreaUpdateManyMutationInput, ImageAreaUncheckedUpdateManyInput>
    /**
     * Filter which ImageAreas to update
     */
    where?: ImageAreaWhereInput
    /**
     * Limit how many ImageAreas to update.
     */
    limit?: number
  }

  /**
   * ImageArea updateManyAndReturn
   */
  export type ImageAreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * The data used to update ImageAreas.
     */
    data: XOR<ImageAreaUpdateManyMutationInput, ImageAreaUncheckedUpdateManyInput>
    /**
     * Filter which ImageAreas to update
     */
    where?: ImageAreaWhereInput
    /**
     * Limit how many ImageAreas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageArea upsert
   */
  export type ImageAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageArea to update in case it exists.
     */
    where: ImageAreaWhereUniqueInput
    /**
     * In case the ImageArea found by the `where` argument doesn't exist, create a new ImageArea with this data.
     */
    create: XOR<ImageAreaCreateInput, ImageAreaUncheckedCreateInput>
    /**
     * In case the ImageArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageAreaUpdateInput, ImageAreaUncheckedUpdateInput>
  }

  /**
   * ImageArea delete
   */
  export type ImageAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
    /**
     * Filter which ImageArea to delete.
     */
    where: ImageAreaWhereUniqueInput
  }

  /**
   * ImageArea deleteMany
   */
  export type ImageAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageAreas to delete
     */
    where?: ImageAreaWhereInput
    /**
     * Limit how many ImageAreas to delete.
     */
    limit?: number
  }

  /**
   * ImageArea without action
   */
  export type ImageAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageArea
     */
    select?: ImageAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageArea
     */
    omit?: ImageAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageAreaInclude<ExtArgs> | null
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


  export const SettingsScalarFieldEnum: {
    id: 'id',
    bookingConfirmationTemplate: 'bookingConfirmationTemplate',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const VillaScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    tagline: 'tagline',
    description: 'description',
    areaId: 'areaId',
    address: 'address',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    maxGuests: 'maxGuests',
    size: 'size',
    pricePerNight: 'pricePerNight',
    priceWeekend: 'priceWeekend',
    priceHoliday: 'priceHoliday',
    rating: 'rating',
    reviewCount: 'reviewCount',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    featured: 'featured',
    lat: 'lat',
    lng: 'lng',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VillaScalarFieldEnum = (typeof VillaScalarFieldEnum)[keyof typeof VillaScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    villaId: 'villaId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    note: 'note',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    guests: 'guests',
    total: 'total',
    priceAtBooking: 'priceAtBooking',
    bookingType: 'bookingType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const VillaImageScalarFieldEnum: {
    id: 'id',
    villaId: 'villaId',
    data: 'data',
    mimeType: 'mimeType',
    isMain: 'isMain',
    order: 'order'
  };

  export type VillaImageScalarFieldEnum = (typeof VillaImageScalarFieldEnum)[keyof typeof VillaImageScalarFieldEnum]


  export const VillaAmenityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    villaId: 'villaId'
  };

  export type VillaAmenityScalarFieldEnum = (typeof VillaAmenityScalarFieldEnum)[keyof typeof VillaAmenityScalarFieldEnum]


  export const VillaHighlightScalarFieldEnum: {
    id: 'id',
    text: 'text',
    order: 'order',
    villaId: 'villaId'
  };

  export type VillaHighlightScalarFieldEnum = (typeof VillaHighlightScalarFieldEnum)[keyof typeof VillaHighlightScalarFieldEnum]


  export const VillaPolicyScalarFieldEnum: {
    id: 'id',
    text: 'text',
    order: 'order',
    villaId: 'villaId'
  };

  export type VillaPolicyScalarFieldEnum = (typeof VillaPolicyScalarFieldEnum)[keyof typeof VillaPolicyScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    author: 'author',
    avatar: 'avatar',
    date: 'date',
    rating: 'rating',
    comment: 'comment',
    villaId: 'villaId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    phone: 'phone',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    isFamous: 'isFamous',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const ImageAreaScalarFieldEnum: {
    id: 'id',
    areaId: 'areaId',
    data: 'data',
    mimeType: 'mimeType'
  };

  export type ImageAreaScalarFieldEnum = (typeof ImageAreaScalarFieldEnum)[keyof typeof ImageAreaScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    
  /**
   * Deep Input Types
   */


  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    bookingConfirmationTemplate?: StringNullableFilter<"Settings"> | string | null
    contactEmail?: StringNullableFilter<"Settings"> | string | null
    contactPhone?: StringNullableFilter<"Settings"> | string | null
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    bookingConfirmationTemplate?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    bookingConfirmationTemplate?: StringNullableFilter<"Settings"> | string | null
    contactEmail?: StringNullableFilter<"Settings"> | string | null
    contactPhone?: StringNullableFilter<"Settings"> | string | null
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    bookingConfirmationTemplate?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    bookingConfirmationTemplate?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
  }

  export type VillaWhereInput = {
    AND?: VillaWhereInput | VillaWhereInput[]
    OR?: VillaWhereInput[]
    NOT?: VillaWhereInput | VillaWhereInput[]
    id?: StringFilter<"Villa"> | string
    slug?: StringFilter<"Villa"> | string
    name?: StringFilter<"Villa"> | string
    tagline?: StringFilter<"Villa"> | string
    description?: StringFilter<"Villa"> | string
    areaId?: StringNullableFilter<"Villa"> | string | null
    address?: StringFilter<"Villa"> | string
    bedrooms?: IntFilter<"Villa"> | number
    bathrooms?: IntFilter<"Villa"> | number
    maxGuests?: IntFilter<"Villa"> | number
    size?: IntFilter<"Villa"> | number
    pricePerNight?: FloatFilter<"Villa"> | number
    priceWeekend?: FloatFilter<"Villa"> | number
    priceHoliday?: FloatFilter<"Villa"> | number
    rating?: FloatFilter<"Villa"> | number
    reviewCount?: IntFilter<"Villa"> | number
    checkIn?: StringFilter<"Villa"> | string
    checkOut?: StringFilter<"Villa"> | string
    featured?: BoolFilter<"Villa"> | boolean
    lat?: FloatFilter<"Villa"> | number
    lng?: FloatFilter<"Villa"> | number
    createdAt?: DateTimeFilter<"Villa"> | Date | string
    updatedAt?: DateTimeFilter<"Villa"> | Date | string
    areaObj?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    images?: VillaImageListRelationFilter
    amenities?: VillaAmenityListRelationFilter
    highlights?: VillaHighlightListRelationFilter
    policies?: VillaPolicyListRelationFilter
    reviews?: ReviewListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type VillaOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    areaId?: SortOrderInput | SortOrder
    address?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    size?: SortOrder
    pricePerNight?: SortOrder
    priceWeekend?: SortOrder
    priceHoliday?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    featured?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    areaObj?: AreaOrderByWithRelationInput
    images?: VillaImageOrderByRelationAggregateInput
    amenities?: VillaAmenityOrderByRelationAggregateInput
    highlights?: VillaHighlightOrderByRelationAggregateInput
    policies?: VillaPolicyOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type VillaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: VillaWhereInput | VillaWhereInput[]
    OR?: VillaWhereInput[]
    NOT?: VillaWhereInput | VillaWhereInput[]
    name?: StringFilter<"Villa"> | string
    tagline?: StringFilter<"Villa"> | string
    description?: StringFilter<"Villa"> | string
    areaId?: StringNullableFilter<"Villa"> | string | null
    address?: StringFilter<"Villa"> | string
    bedrooms?: IntFilter<"Villa"> | number
    bathrooms?: IntFilter<"Villa"> | number
    maxGuests?: IntFilter<"Villa"> | number
    size?: IntFilter<"Villa"> | number
    pricePerNight?: FloatFilter<"Villa"> | number
    priceWeekend?: FloatFilter<"Villa"> | number
    priceHoliday?: FloatFilter<"Villa"> | number
    rating?: FloatFilter<"Villa"> | number
    reviewCount?: IntFilter<"Villa"> | number
    checkIn?: StringFilter<"Villa"> | string
    checkOut?: StringFilter<"Villa"> | string
    featured?: BoolFilter<"Villa"> | boolean
    lat?: FloatFilter<"Villa"> | number
    lng?: FloatFilter<"Villa"> | number
    createdAt?: DateTimeFilter<"Villa"> | Date | string
    updatedAt?: DateTimeFilter<"Villa"> | Date | string
    areaObj?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    images?: VillaImageListRelationFilter
    amenities?: VillaAmenityListRelationFilter
    highlights?: VillaHighlightListRelationFilter
    policies?: VillaPolicyListRelationFilter
    reviews?: ReviewListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "slug">

  export type VillaOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    areaId?: SortOrderInput | SortOrder
    address?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    size?: SortOrder
    pricePerNight?: SortOrder
    priceWeekend?: SortOrder
    priceHoliday?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    featured?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VillaCountOrderByAggregateInput
    _avg?: VillaAvgOrderByAggregateInput
    _max?: VillaMaxOrderByAggregateInput
    _min?: VillaMinOrderByAggregateInput
    _sum?: VillaSumOrderByAggregateInput
  }

  export type VillaScalarWhereWithAggregatesInput = {
    AND?: VillaScalarWhereWithAggregatesInput | VillaScalarWhereWithAggregatesInput[]
    OR?: VillaScalarWhereWithAggregatesInput[]
    NOT?: VillaScalarWhereWithAggregatesInput | VillaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Villa"> | string
    slug?: StringWithAggregatesFilter<"Villa"> | string
    name?: StringWithAggregatesFilter<"Villa"> | string
    tagline?: StringWithAggregatesFilter<"Villa"> | string
    description?: StringWithAggregatesFilter<"Villa"> | string
    areaId?: StringNullableWithAggregatesFilter<"Villa"> | string | null
    address?: StringWithAggregatesFilter<"Villa"> | string
    bedrooms?: IntWithAggregatesFilter<"Villa"> | number
    bathrooms?: IntWithAggregatesFilter<"Villa"> | number
    maxGuests?: IntWithAggregatesFilter<"Villa"> | number
    size?: IntWithAggregatesFilter<"Villa"> | number
    pricePerNight?: FloatWithAggregatesFilter<"Villa"> | number
    priceWeekend?: FloatWithAggregatesFilter<"Villa"> | number
    priceHoliday?: FloatWithAggregatesFilter<"Villa"> | number
    rating?: FloatWithAggregatesFilter<"Villa"> | number
    reviewCount?: IntWithAggregatesFilter<"Villa"> | number
    checkIn?: StringWithAggregatesFilter<"Villa"> | string
    checkOut?: StringWithAggregatesFilter<"Villa"> | string
    featured?: BoolWithAggregatesFilter<"Villa"> | boolean
    lat?: FloatWithAggregatesFilter<"Villa"> | number
    lng?: FloatWithAggregatesFilter<"Villa"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Villa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Villa"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    villaId?: StringNullableFilter<"Booking"> | string | null
    name?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phone?: StringFilter<"Booking"> | string
    note?: StringNullableFilter<"Booking"> | string | null
    checkIn?: StringFilter<"Booking"> | string
    checkOut?: StringFilter<"Booking"> | string
    guests?: IntFilter<"Booking"> | number
    total?: FloatFilter<"Booking"> | number
    priceAtBooking?: FloatNullableFilter<"Booking"> | number | null
    bookingType?: StringFilter<"Booking"> | string
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    villa?: XOR<VillaNullableScalarRelationFilter, VillaWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    villaId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    note?: SortOrderInput | SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    total?: SortOrder
    priceAtBooking?: SortOrderInput | SortOrder
    bookingType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    villa?: VillaOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    villaId?: StringNullableFilter<"Booking"> | string | null
    name?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phone?: StringFilter<"Booking"> | string
    note?: StringNullableFilter<"Booking"> | string | null
    checkIn?: StringFilter<"Booking"> | string
    checkOut?: StringFilter<"Booking"> | string
    guests?: IntFilter<"Booking"> | number
    total?: FloatFilter<"Booking"> | number
    priceAtBooking?: FloatNullableFilter<"Booking"> | number | null
    bookingType?: StringFilter<"Booking"> | string
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    villa?: XOR<VillaNullableScalarRelationFilter, VillaWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    villaId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    note?: SortOrderInput | SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    total?: SortOrder
    priceAtBooking?: SortOrderInput | SortOrder
    bookingType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    villaId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    name?: StringWithAggregatesFilter<"Booking"> | string
    email?: StringWithAggregatesFilter<"Booking"> | string
    phone?: StringWithAggregatesFilter<"Booking"> | string
    note?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    checkIn?: StringWithAggregatesFilter<"Booking"> | string
    checkOut?: StringWithAggregatesFilter<"Booking"> | string
    guests?: IntWithAggregatesFilter<"Booking"> | number
    total?: FloatWithAggregatesFilter<"Booking"> | number
    priceAtBooking?: FloatNullableWithAggregatesFilter<"Booking"> | number | null
    bookingType?: StringWithAggregatesFilter<"Booking"> | string
    status?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type VillaImageWhereInput = {
    AND?: VillaImageWhereInput | VillaImageWhereInput[]
    OR?: VillaImageWhereInput[]
    NOT?: VillaImageWhereInput | VillaImageWhereInput[]
    id?: StringFilter<"VillaImage"> | string
    villaId?: StringNullableFilter<"VillaImage"> | string | null
    data?: BytesFilter<"VillaImage"> | Bytes
    mimeType?: StringFilter<"VillaImage"> | string
    isMain?: BoolFilter<"VillaImage"> | boolean
    order?: IntFilter<"VillaImage"> | number
    villa?: XOR<VillaNullableScalarRelationFilter, VillaWhereInput> | null
  }

  export type VillaImageOrderByWithRelationInput = {
    id?: SortOrder
    villaId?: SortOrderInput | SortOrder
    data?: SortOrder
    mimeType?: SortOrder
    isMain?: SortOrder
    order?: SortOrder
    villa?: VillaOrderByWithRelationInput
  }

  export type VillaImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VillaImageWhereInput | VillaImageWhereInput[]
    OR?: VillaImageWhereInput[]
    NOT?: VillaImageWhereInput | VillaImageWhereInput[]
    villaId?: StringNullableFilter<"VillaImage"> | string | null
    data?: BytesFilter<"VillaImage"> | Bytes
    mimeType?: StringFilter<"VillaImage"> | string
    isMain?: BoolFilter<"VillaImage"> | boolean
    order?: IntFilter<"VillaImage"> | number
    villa?: XOR<VillaNullableScalarRelationFilter, VillaWhereInput> | null
  }, "id">

  export type VillaImageOrderByWithAggregationInput = {
    id?: SortOrder
    villaId?: SortOrderInput | SortOrder
    data?: SortOrder
    mimeType?: SortOrder
    isMain?: SortOrder
    order?: SortOrder
    _count?: VillaImageCountOrderByAggregateInput
    _avg?: VillaImageAvgOrderByAggregateInput
    _max?: VillaImageMaxOrderByAggregateInput
    _min?: VillaImageMinOrderByAggregateInput
    _sum?: VillaImageSumOrderByAggregateInput
  }

  export type VillaImageScalarWhereWithAggregatesInput = {
    AND?: VillaImageScalarWhereWithAggregatesInput | VillaImageScalarWhereWithAggregatesInput[]
    OR?: VillaImageScalarWhereWithAggregatesInput[]
    NOT?: VillaImageScalarWhereWithAggregatesInput | VillaImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VillaImage"> | string
    villaId?: StringNullableWithAggregatesFilter<"VillaImage"> | string | null
    data?: BytesWithAggregatesFilter<"VillaImage"> | Bytes
    mimeType?: StringWithAggregatesFilter<"VillaImage"> | string
    isMain?: BoolWithAggregatesFilter<"VillaImage"> | boolean
    order?: IntWithAggregatesFilter<"VillaImage"> | number
  }

  export type VillaAmenityWhereInput = {
    AND?: VillaAmenityWhereInput | VillaAmenityWhereInput[]
    OR?: VillaAmenityWhereInput[]
    NOT?: VillaAmenityWhereInput | VillaAmenityWhereInput[]
    id?: StringFilter<"VillaAmenity"> | string
    name?: StringFilter<"VillaAmenity"> | string
    villaId?: StringFilter<"VillaAmenity"> | string
    villa?: XOR<VillaScalarRelationFilter, VillaWhereInput>
  }

  export type VillaAmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    villaId?: SortOrder
    villa?: VillaOrderByWithRelationInput
  }

  export type VillaAmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VillaAmenityWhereInput | VillaAmenityWhereInput[]
    OR?: VillaAmenityWhereInput[]
    NOT?: VillaAmenityWhereInput | VillaAmenityWhereInput[]
    name?: StringFilter<"VillaAmenity"> | string
    villaId?: StringFilter<"VillaAmenity"> | string
    villa?: XOR<VillaScalarRelationFilter, VillaWhereInput>
  }, "id">

  export type VillaAmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    villaId?: SortOrder
    _count?: VillaAmenityCountOrderByAggregateInput
    _max?: VillaAmenityMaxOrderByAggregateInput
    _min?: VillaAmenityMinOrderByAggregateInput
  }

  export type VillaAmenityScalarWhereWithAggregatesInput = {
    AND?: VillaAmenityScalarWhereWithAggregatesInput | VillaAmenityScalarWhereWithAggregatesInput[]
    OR?: VillaAmenityScalarWhereWithAggregatesInput[]
    NOT?: VillaAmenityScalarWhereWithAggregatesInput | VillaAmenityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VillaAmenity"> | string
    name?: StringWithAggregatesFilter<"VillaAmenity"> | string
    villaId?: StringWithAggregatesFilter<"VillaAmenity"> | string
  }

  export type VillaHighlightWhereInput = {
    AND?: VillaHighlightWhereInput | VillaHighlightWhereInput[]
    OR?: VillaHighlightWhereInput[]
    NOT?: VillaHighlightWhereInput | VillaHighlightWhereInput[]
    id?: StringFilter<"VillaHighlight"> | string
    text?: StringFilter<"VillaHighlight"> | string
    order?: IntFilter<"VillaHighlight"> | number
    villaId?: StringFilter<"VillaHighlight"> | string
    villa?: XOR<VillaScalarRelationFilter, VillaWhereInput>
  }

  export type VillaHighlightOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
    villa?: VillaOrderByWithRelationInput
  }

  export type VillaHighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VillaHighlightWhereInput | VillaHighlightWhereInput[]
    OR?: VillaHighlightWhereInput[]
    NOT?: VillaHighlightWhereInput | VillaHighlightWhereInput[]
    text?: StringFilter<"VillaHighlight"> | string
    order?: IntFilter<"VillaHighlight"> | number
    villaId?: StringFilter<"VillaHighlight"> | string
    villa?: XOR<VillaScalarRelationFilter, VillaWhereInput>
  }, "id">

  export type VillaHighlightOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
    _count?: VillaHighlightCountOrderByAggregateInput
    _avg?: VillaHighlightAvgOrderByAggregateInput
    _max?: VillaHighlightMaxOrderByAggregateInput
    _min?: VillaHighlightMinOrderByAggregateInput
    _sum?: VillaHighlightSumOrderByAggregateInput
  }

  export type VillaHighlightScalarWhereWithAggregatesInput = {
    AND?: VillaHighlightScalarWhereWithAggregatesInput | VillaHighlightScalarWhereWithAggregatesInput[]
    OR?: VillaHighlightScalarWhereWithAggregatesInput[]
    NOT?: VillaHighlightScalarWhereWithAggregatesInput | VillaHighlightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VillaHighlight"> | string
    text?: StringWithAggregatesFilter<"VillaHighlight"> | string
    order?: IntWithAggregatesFilter<"VillaHighlight"> | number
    villaId?: StringWithAggregatesFilter<"VillaHighlight"> | string
  }

  export type VillaPolicyWhereInput = {
    AND?: VillaPolicyWhereInput | VillaPolicyWhereInput[]
    OR?: VillaPolicyWhereInput[]
    NOT?: VillaPolicyWhereInput | VillaPolicyWhereInput[]
    id?: StringFilter<"VillaPolicy"> | string
    text?: StringFilter<"VillaPolicy"> | string
    order?: IntFilter<"VillaPolicy"> | number
    villaId?: StringFilter<"VillaPolicy"> | string
    villa?: XOR<VillaScalarRelationFilter, VillaWhereInput>
  }

  export type VillaPolicyOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
    villa?: VillaOrderByWithRelationInput
  }

  export type VillaPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VillaPolicyWhereInput | VillaPolicyWhereInput[]
    OR?: VillaPolicyWhereInput[]
    NOT?: VillaPolicyWhereInput | VillaPolicyWhereInput[]
    text?: StringFilter<"VillaPolicy"> | string
    order?: IntFilter<"VillaPolicy"> | number
    villaId?: StringFilter<"VillaPolicy"> | string
    villa?: XOR<VillaScalarRelationFilter, VillaWhereInput>
  }, "id">

  export type VillaPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
    _count?: VillaPolicyCountOrderByAggregateInput
    _avg?: VillaPolicyAvgOrderByAggregateInput
    _max?: VillaPolicyMaxOrderByAggregateInput
    _min?: VillaPolicyMinOrderByAggregateInput
    _sum?: VillaPolicySumOrderByAggregateInput
  }

  export type VillaPolicyScalarWhereWithAggregatesInput = {
    AND?: VillaPolicyScalarWhereWithAggregatesInput | VillaPolicyScalarWhereWithAggregatesInput[]
    OR?: VillaPolicyScalarWhereWithAggregatesInput[]
    NOT?: VillaPolicyScalarWhereWithAggregatesInput | VillaPolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VillaPolicy"> | string
    text?: StringWithAggregatesFilter<"VillaPolicy"> | string
    order?: IntWithAggregatesFilter<"VillaPolicy"> | number
    villaId?: StringWithAggregatesFilter<"VillaPolicy"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    author?: StringFilter<"Review"> | string
    avatar?: StringFilter<"Review"> | string
    date?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    villaId?: StringFilter<"Review"> | string
    villa?: XOR<VillaScalarRelationFilter, VillaWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    villaId?: SortOrder
    villa?: VillaOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    author?: StringFilter<"Review"> | string
    avatar?: StringFilter<"Review"> | string
    date?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    villaId?: StringFilter<"Review"> | string
    villa?: XOR<VillaScalarRelationFilter, VillaWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    villaId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    author?: StringWithAggregatesFilter<"Review"> | string
    avatar?: StringWithAggregatesFilter<"Review"> | string
    date?: StringWithAggregatesFilter<"Review"> | string
    rating?: FloatWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    villaId?: StringWithAggregatesFilter<"Review"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: StringFilter<"Area"> | string
    slug?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    description?: StringNullableFilter<"Area"> | string | null
    isFamous?: BoolFilter<"Area"> | boolean
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    villas?: VillaListRelationFilter
    image?: XOR<ImageAreaNullableScalarRelationFilter, ImageAreaWhereInput> | null
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isFamous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    villas?: VillaOrderByRelationAggregateInput
    image?: ImageAreaOrderByWithRelationInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    description?: StringNullableFilter<"Area"> | string | null
    isFamous?: BoolFilter<"Area"> | boolean
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    villas?: VillaListRelationFilter
    image?: XOR<ImageAreaNullableScalarRelationFilter, ImageAreaWhereInput> | null
  }, "id" | "slug">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isFamous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Area"> | string
    slug?: StringWithAggregatesFilter<"Area"> | string
    name?: StringWithAggregatesFilter<"Area"> | string
    description?: StringNullableWithAggregatesFilter<"Area"> | string | null
    isFamous?: BoolWithAggregatesFilter<"Area"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
  }

  export type ImageAreaWhereInput = {
    AND?: ImageAreaWhereInput | ImageAreaWhereInput[]
    OR?: ImageAreaWhereInput[]
    NOT?: ImageAreaWhereInput | ImageAreaWhereInput[]
    id?: StringFilter<"ImageArea"> | string
    areaId?: StringFilter<"ImageArea"> | string
    data?: BytesFilter<"ImageArea"> | Bytes
    mimeType?: StringFilter<"ImageArea"> | string
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
  }

  export type ImageAreaOrderByWithRelationInput = {
    id?: SortOrder
    areaId?: SortOrder
    data?: SortOrder
    mimeType?: SortOrder
    area?: AreaOrderByWithRelationInput
  }

  export type ImageAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    areaId?: string
    AND?: ImageAreaWhereInput | ImageAreaWhereInput[]
    OR?: ImageAreaWhereInput[]
    NOT?: ImageAreaWhereInput | ImageAreaWhereInput[]
    data?: BytesFilter<"ImageArea"> | Bytes
    mimeType?: StringFilter<"ImageArea"> | string
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
  }, "id" | "areaId">

  export type ImageAreaOrderByWithAggregationInput = {
    id?: SortOrder
    areaId?: SortOrder
    data?: SortOrder
    mimeType?: SortOrder
    _count?: ImageAreaCountOrderByAggregateInput
    _max?: ImageAreaMaxOrderByAggregateInput
    _min?: ImageAreaMinOrderByAggregateInput
  }

  export type ImageAreaScalarWhereWithAggregatesInput = {
    AND?: ImageAreaScalarWhereWithAggregatesInput | ImageAreaScalarWhereWithAggregatesInput[]
    OR?: ImageAreaScalarWhereWithAggregatesInput[]
    NOT?: ImageAreaScalarWhereWithAggregatesInput | ImageAreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImageArea"> | string
    areaId?: StringWithAggregatesFilter<"ImageArea"> | string
    data?: BytesWithAggregatesFilter<"ImageArea"> | Bytes
    mimeType?: StringWithAggregatesFilter<"ImageArea"> | string
  }

  export type SettingsCreateInput = {
    id?: string
    bookingConfirmationTemplate?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    bookingConfirmationTemplate?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingConfirmationTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingConfirmationTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateManyInput = {
    id?: string
    bookingConfirmationTemplate?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingConfirmationTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingConfirmationTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillaCreateInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    areaObj?: AreaCreateNestedOneWithoutVillasInput
    images?: VillaImageCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyCreateNestedManyWithoutVillaInput
    reviews?: ReviewCreateNestedManyWithoutVillaInput
    bookings?: BookingCreateNestedManyWithoutVillaInput
  }

  export type VillaUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    areaId?: string | null
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VillaImageUncheckedCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityUncheckedCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightUncheckedCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyUncheckedCreateNestedManyWithoutVillaInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVillaInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVillaInput
  }

  export type VillaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaObj?: AreaUpdateOneWithoutVillasNestedInput
    images?: VillaImageUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUpdateManyWithoutVillaNestedInput
    bookings?: BookingUpdateManyWithoutVillaNestedInput
  }

  export type VillaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VillaImageUncheckedUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUncheckedUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUncheckedUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUncheckedUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVillaNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVillaNestedInput
  }

  export type VillaCreateManyInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    areaId?: string | null
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    note?: string | null
    checkIn: string
    checkOut: string
    guests: number
    total: number
    priceAtBooking?: number | null
    bookingType?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    villa?: VillaCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    villaId?: string | null
    name: string
    email: string
    phone: string
    note?: string | null
    checkIn: string
    checkOut: string
    guests: number
    total: number
    priceAtBooking?: number | null
    bookingType?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    priceAtBooking?: NullableFloatFieldUpdateOperationsInput | number | null
    bookingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    villa?: VillaUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    villaId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    priceAtBooking?: NullableFloatFieldUpdateOperationsInput | number | null
    bookingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    villaId?: string | null
    name: string
    email: string
    phone: string
    note?: string | null
    checkIn: string
    checkOut: string
    guests: number
    total: number
    priceAtBooking?: number | null
    bookingType?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    priceAtBooking?: NullableFloatFieldUpdateOperationsInput | number | null
    bookingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    villaId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    priceAtBooking?: NullableFloatFieldUpdateOperationsInput | number | null
    bookingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillaImageCreateInput = {
    id?: string
    data: Bytes
    mimeType?: string
    isMain?: boolean
    order?: number
    villa?: VillaCreateNestedOneWithoutImagesInput
  }

  export type VillaImageUncheckedCreateInput = {
    id?: string
    villaId?: string | null
    data: Bytes
    mimeType?: string
    isMain?: boolean
    order?: number
  }

  export type VillaImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    villa?: VillaUpdateOneWithoutImagesNestedInput
  }

  export type VillaImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    villaId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaImageCreateManyInput = {
    id?: string
    villaId?: string | null
    data: Bytes
    mimeType?: string
    isMain?: boolean
    order?: number
  }

  export type VillaImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    villaId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaAmenityCreateInput = {
    id?: string
    name: string
    villa: VillaCreateNestedOneWithoutAmenitiesInput
  }

  export type VillaAmenityUncheckedCreateInput = {
    id?: string
    name: string
    villaId: string
  }

  export type VillaAmenityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    villa?: VillaUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type VillaAmenityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    villaId?: StringFieldUpdateOperationsInput | string
  }

  export type VillaAmenityCreateManyInput = {
    id?: string
    name: string
    villaId: string
  }

  export type VillaAmenityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VillaAmenityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    villaId?: StringFieldUpdateOperationsInput | string
  }

  export type VillaHighlightCreateInput = {
    id?: string
    text: string
    order?: number
    villa: VillaCreateNestedOneWithoutHighlightsInput
  }

  export type VillaHighlightUncheckedCreateInput = {
    id?: string
    text: string
    order?: number
    villaId: string
  }

  export type VillaHighlightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    villa?: VillaUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type VillaHighlightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    villaId?: StringFieldUpdateOperationsInput | string
  }

  export type VillaHighlightCreateManyInput = {
    id?: string
    text: string
    order?: number
    villaId: string
  }

  export type VillaHighlightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaHighlightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    villaId?: StringFieldUpdateOperationsInput | string
  }

  export type VillaPolicyCreateInput = {
    id?: string
    text: string
    order?: number
    villa: VillaCreateNestedOneWithoutPoliciesInput
  }

  export type VillaPolicyUncheckedCreateInput = {
    id?: string
    text: string
    order?: number
    villaId: string
  }

  export type VillaPolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    villa?: VillaUpdateOneRequiredWithoutPoliciesNestedInput
  }

  export type VillaPolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    villaId?: StringFieldUpdateOperationsInput | string
  }

  export type VillaPolicyCreateManyInput = {
    id?: string
    text: string
    order?: number
    villaId: string
  }

  export type VillaPolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaPolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    villaId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    author: string
    avatar?: string
    date: string
    rating: number
    comment: string
    villa: VillaCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    author: string
    avatar?: string
    date: string
    rating: number
    comment: string
    villaId: string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    villa?: VillaUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    villaId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    author: string
    avatar?: string
    date: string
    rating: number
    comment: string
    villaId: string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    villaId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email?: string | null
    password: string
    fullName?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email?: string | null
    password: string
    fullName?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email?: string | null
    password: string
    fullName?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    isFamous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    villas?: VillaCreateNestedManyWithoutAreaObjInput
    image?: ImageAreaCreateNestedOneWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    isFamous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    villas?: VillaUncheckedCreateNestedManyWithoutAreaObjInput
    image?: ImageAreaUncheckedCreateNestedOneWithoutAreaInput
  }

  export type AreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFamous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    villas?: VillaUpdateManyWithoutAreaObjNestedInput
    image?: ImageAreaUpdateOneWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFamous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    villas?: VillaUncheckedUpdateManyWithoutAreaObjNestedInput
    image?: ImageAreaUncheckedUpdateOneWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    isFamous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFamous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFamous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageAreaCreateInput = {
    id?: string
    data: Bytes
    mimeType?: string
    area: AreaCreateNestedOneWithoutImageInput
  }

  export type ImageAreaUncheckedCreateInput = {
    id?: string
    areaId: string
    data: Bytes
    mimeType?: string
  }

  export type ImageAreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutImageNestedInput
  }

  export type ImageAreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
  }

  export type ImageAreaCreateManyInput = {
    id?: string
    areaId: string
    data: Bytes
    mimeType?: string
  }

  export type ImageAreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
  }

  export type ImageAreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    bookingConfirmationTemplate?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingConfirmationTemplate?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    bookingConfirmationTemplate?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AreaNullableScalarRelationFilter = {
    is?: AreaWhereInput | null
    isNot?: AreaWhereInput | null
  }

  export type VillaImageListRelationFilter = {
    every?: VillaImageWhereInput
    some?: VillaImageWhereInput
    none?: VillaImageWhereInput
  }

  export type VillaAmenityListRelationFilter = {
    every?: VillaAmenityWhereInput
    some?: VillaAmenityWhereInput
    none?: VillaAmenityWhereInput
  }

  export type VillaHighlightListRelationFilter = {
    every?: VillaHighlightWhereInput
    some?: VillaHighlightWhereInput
    none?: VillaHighlightWhereInput
  }

  export type VillaPolicyListRelationFilter = {
    every?: VillaPolicyWhereInput
    some?: VillaPolicyWhereInput
    none?: VillaPolicyWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type VillaImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VillaAmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VillaHighlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VillaPolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VillaCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    areaId?: SortOrder
    address?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    size?: SortOrder
    pricePerNight?: SortOrder
    priceWeekend?: SortOrder
    priceHoliday?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    featured?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillaAvgOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    size?: SortOrder
    pricePerNight?: SortOrder
    priceWeekend?: SortOrder
    priceHoliday?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type VillaMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    areaId?: SortOrder
    address?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    size?: SortOrder
    pricePerNight?: SortOrder
    priceWeekend?: SortOrder
    priceHoliday?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    featured?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillaMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    areaId?: SortOrder
    address?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    size?: SortOrder
    pricePerNight?: SortOrder
    priceWeekend?: SortOrder
    priceHoliday?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    featured?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillaSumOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    size?: SortOrder
    pricePerNight?: SortOrder
    priceWeekend?: SortOrder
    priceHoliday?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VillaNullableScalarRelationFilter = {
    is?: VillaWhereInput | null
    isNot?: VillaWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    villaId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    note?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    total?: SortOrder
    priceAtBooking?: SortOrder
    bookingType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    guests?: SortOrder
    total?: SortOrder
    priceAtBooking?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    villaId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    note?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    total?: SortOrder
    priceAtBooking?: SortOrder
    bookingType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    villaId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    note?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    total?: SortOrder
    priceAtBooking?: SortOrder
    bookingType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    guests?: SortOrder
    total?: SortOrder
    priceAtBooking?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type VillaImageCountOrderByAggregateInput = {
    id?: SortOrder
    villaId?: SortOrder
    data?: SortOrder
    mimeType?: SortOrder
    isMain?: SortOrder
    order?: SortOrder
  }

  export type VillaImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type VillaImageMaxOrderByAggregateInput = {
    id?: SortOrder
    villaId?: SortOrder
    data?: SortOrder
    mimeType?: SortOrder
    isMain?: SortOrder
    order?: SortOrder
  }

  export type VillaImageMinOrderByAggregateInput = {
    id?: SortOrder
    villaId?: SortOrder
    data?: SortOrder
    mimeType?: SortOrder
    isMain?: SortOrder
    order?: SortOrder
  }

  export type VillaImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type VillaScalarRelationFilter = {
    is?: VillaWhereInput
    isNot?: VillaWhereInput
  }

  export type VillaAmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    villaId?: SortOrder
  }

  export type VillaAmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    villaId?: SortOrder
  }

  export type VillaAmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    villaId?: SortOrder
  }

  export type VillaHighlightCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
  }

  export type VillaHighlightAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type VillaHighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
  }

  export type VillaHighlightMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
  }

  export type VillaHighlightSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type VillaPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
  }

  export type VillaPolicyAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type VillaPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
  }

  export type VillaPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    villaId?: SortOrder
  }

  export type VillaPolicySumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    villaId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    villaId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    villaId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillaListRelationFilter = {
    every?: VillaWhereInput
    some?: VillaWhereInput
    none?: VillaWhereInput
  }

  export type ImageAreaNullableScalarRelationFilter = {
    is?: ImageAreaWhereInput | null
    isNot?: ImageAreaWhereInput | null
  }

  export type VillaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isFamous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isFamous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isFamous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type ImageAreaCountOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
    data?: SortOrder
    mimeType?: SortOrder
  }

  export type ImageAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
    data?: SortOrder
    mimeType?: SortOrder
  }

  export type ImageAreaMinOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
    data?: SortOrder
    mimeType?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AreaCreateNestedOneWithoutVillasInput = {
    create?: XOR<AreaCreateWithoutVillasInput, AreaUncheckedCreateWithoutVillasInput>
    connectOrCreate?: AreaCreateOrConnectWithoutVillasInput
    connect?: AreaWhereUniqueInput
  }

  export type VillaImageCreateNestedManyWithoutVillaInput = {
    create?: XOR<VillaImageCreateWithoutVillaInput, VillaImageUncheckedCreateWithoutVillaInput> | VillaImageCreateWithoutVillaInput[] | VillaImageUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaImageCreateOrConnectWithoutVillaInput | VillaImageCreateOrConnectWithoutVillaInput[]
    createMany?: VillaImageCreateManyVillaInputEnvelope
    connect?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
  }

  export type VillaAmenityCreateNestedManyWithoutVillaInput = {
    create?: XOR<VillaAmenityCreateWithoutVillaInput, VillaAmenityUncheckedCreateWithoutVillaInput> | VillaAmenityCreateWithoutVillaInput[] | VillaAmenityUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaAmenityCreateOrConnectWithoutVillaInput | VillaAmenityCreateOrConnectWithoutVillaInput[]
    createMany?: VillaAmenityCreateManyVillaInputEnvelope
    connect?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
  }

  export type VillaHighlightCreateNestedManyWithoutVillaInput = {
    create?: XOR<VillaHighlightCreateWithoutVillaInput, VillaHighlightUncheckedCreateWithoutVillaInput> | VillaHighlightCreateWithoutVillaInput[] | VillaHighlightUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaHighlightCreateOrConnectWithoutVillaInput | VillaHighlightCreateOrConnectWithoutVillaInput[]
    createMany?: VillaHighlightCreateManyVillaInputEnvelope
    connect?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
  }

  export type VillaPolicyCreateNestedManyWithoutVillaInput = {
    create?: XOR<VillaPolicyCreateWithoutVillaInput, VillaPolicyUncheckedCreateWithoutVillaInput> | VillaPolicyCreateWithoutVillaInput[] | VillaPolicyUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaPolicyCreateOrConnectWithoutVillaInput | VillaPolicyCreateOrConnectWithoutVillaInput[]
    createMany?: VillaPolicyCreateManyVillaInputEnvelope
    connect?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutVillaInput = {
    create?: XOR<ReviewCreateWithoutVillaInput, ReviewUncheckedCreateWithoutVillaInput> | ReviewCreateWithoutVillaInput[] | ReviewUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVillaInput | ReviewCreateOrConnectWithoutVillaInput[]
    createMany?: ReviewCreateManyVillaInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutVillaInput = {
    create?: XOR<BookingCreateWithoutVillaInput, BookingUncheckedCreateWithoutVillaInput> | BookingCreateWithoutVillaInput[] | BookingUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVillaInput | BookingCreateOrConnectWithoutVillaInput[]
    createMany?: BookingCreateManyVillaInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type VillaImageUncheckedCreateNestedManyWithoutVillaInput = {
    create?: XOR<VillaImageCreateWithoutVillaInput, VillaImageUncheckedCreateWithoutVillaInput> | VillaImageCreateWithoutVillaInput[] | VillaImageUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaImageCreateOrConnectWithoutVillaInput | VillaImageCreateOrConnectWithoutVillaInput[]
    createMany?: VillaImageCreateManyVillaInputEnvelope
    connect?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
  }

  export type VillaAmenityUncheckedCreateNestedManyWithoutVillaInput = {
    create?: XOR<VillaAmenityCreateWithoutVillaInput, VillaAmenityUncheckedCreateWithoutVillaInput> | VillaAmenityCreateWithoutVillaInput[] | VillaAmenityUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaAmenityCreateOrConnectWithoutVillaInput | VillaAmenityCreateOrConnectWithoutVillaInput[]
    createMany?: VillaAmenityCreateManyVillaInputEnvelope
    connect?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
  }

  export type VillaHighlightUncheckedCreateNestedManyWithoutVillaInput = {
    create?: XOR<VillaHighlightCreateWithoutVillaInput, VillaHighlightUncheckedCreateWithoutVillaInput> | VillaHighlightCreateWithoutVillaInput[] | VillaHighlightUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaHighlightCreateOrConnectWithoutVillaInput | VillaHighlightCreateOrConnectWithoutVillaInput[]
    createMany?: VillaHighlightCreateManyVillaInputEnvelope
    connect?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
  }

  export type VillaPolicyUncheckedCreateNestedManyWithoutVillaInput = {
    create?: XOR<VillaPolicyCreateWithoutVillaInput, VillaPolicyUncheckedCreateWithoutVillaInput> | VillaPolicyCreateWithoutVillaInput[] | VillaPolicyUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaPolicyCreateOrConnectWithoutVillaInput | VillaPolicyCreateOrConnectWithoutVillaInput[]
    createMany?: VillaPolicyCreateManyVillaInputEnvelope
    connect?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutVillaInput = {
    create?: XOR<ReviewCreateWithoutVillaInput, ReviewUncheckedCreateWithoutVillaInput> | ReviewCreateWithoutVillaInput[] | ReviewUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVillaInput | ReviewCreateOrConnectWithoutVillaInput[]
    createMany?: ReviewCreateManyVillaInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutVillaInput = {
    create?: XOR<BookingCreateWithoutVillaInput, BookingUncheckedCreateWithoutVillaInput> | BookingCreateWithoutVillaInput[] | BookingUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVillaInput | BookingCreateOrConnectWithoutVillaInput[]
    createMany?: BookingCreateManyVillaInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AreaUpdateOneWithoutVillasNestedInput = {
    create?: XOR<AreaCreateWithoutVillasInput, AreaUncheckedCreateWithoutVillasInput>
    connectOrCreate?: AreaCreateOrConnectWithoutVillasInput
    upsert?: AreaUpsertWithoutVillasInput
    disconnect?: AreaWhereInput | boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutVillasInput, AreaUpdateWithoutVillasInput>, AreaUncheckedUpdateWithoutVillasInput>
  }

  export type VillaImageUpdateManyWithoutVillaNestedInput = {
    create?: XOR<VillaImageCreateWithoutVillaInput, VillaImageUncheckedCreateWithoutVillaInput> | VillaImageCreateWithoutVillaInput[] | VillaImageUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaImageCreateOrConnectWithoutVillaInput | VillaImageCreateOrConnectWithoutVillaInput[]
    upsert?: VillaImageUpsertWithWhereUniqueWithoutVillaInput | VillaImageUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: VillaImageCreateManyVillaInputEnvelope
    set?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
    disconnect?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
    delete?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
    connect?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
    update?: VillaImageUpdateWithWhereUniqueWithoutVillaInput | VillaImageUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: VillaImageUpdateManyWithWhereWithoutVillaInput | VillaImageUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: VillaImageScalarWhereInput | VillaImageScalarWhereInput[]
  }

  export type VillaAmenityUpdateManyWithoutVillaNestedInput = {
    create?: XOR<VillaAmenityCreateWithoutVillaInput, VillaAmenityUncheckedCreateWithoutVillaInput> | VillaAmenityCreateWithoutVillaInput[] | VillaAmenityUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaAmenityCreateOrConnectWithoutVillaInput | VillaAmenityCreateOrConnectWithoutVillaInput[]
    upsert?: VillaAmenityUpsertWithWhereUniqueWithoutVillaInput | VillaAmenityUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: VillaAmenityCreateManyVillaInputEnvelope
    set?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
    disconnect?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
    delete?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
    connect?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
    update?: VillaAmenityUpdateWithWhereUniqueWithoutVillaInput | VillaAmenityUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: VillaAmenityUpdateManyWithWhereWithoutVillaInput | VillaAmenityUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: VillaAmenityScalarWhereInput | VillaAmenityScalarWhereInput[]
  }

  export type VillaHighlightUpdateManyWithoutVillaNestedInput = {
    create?: XOR<VillaHighlightCreateWithoutVillaInput, VillaHighlightUncheckedCreateWithoutVillaInput> | VillaHighlightCreateWithoutVillaInput[] | VillaHighlightUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaHighlightCreateOrConnectWithoutVillaInput | VillaHighlightCreateOrConnectWithoutVillaInput[]
    upsert?: VillaHighlightUpsertWithWhereUniqueWithoutVillaInput | VillaHighlightUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: VillaHighlightCreateManyVillaInputEnvelope
    set?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
    disconnect?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
    delete?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
    connect?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
    update?: VillaHighlightUpdateWithWhereUniqueWithoutVillaInput | VillaHighlightUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: VillaHighlightUpdateManyWithWhereWithoutVillaInput | VillaHighlightUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: VillaHighlightScalarWhereInput | VillaHighlightScalarWhereInput[]
  }

  export type VillaPolicyUpdateManyWithoutVillaNestedInput = {
    create?: XOR<VillaPolicyCreateWithoutVillaInput, VillaPolicyUncheckedCreateWithoutVillaInput> | VillaPolicyCreateWithoutVillaInput[] | VillaPolicyUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaPolicyCreateOrConnectWithoutVillaInput | VillaPolicyCreateOrConnectWithoutVillaInput[]
    upsert?: VillaPolicyUpsertWithWhereUniqueWithoutVillaInput | VillaPolicyUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: VillaPolicyCreateManyVillaInputEnvelope
    set?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
    disconnect?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
    delete?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
    connect?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
    update?: VillaPolicyUpdateWithWhereUniqueWithoutVillaInput | VillaPolicyUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: VillaPolicyUpdateManyWithWhereWithoutVillaInput | VillaPolicyUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: VillaPolicyScalarWhereInput | VillaPolicyScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutVillaNestedInput = {
    create?: XOR<ReviewCreateWithoutVillaInput, ReviewUncheckedCreateWithoutVillaInput> | ReviewCreateWithoutVillaInput[] | ReviewUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVillaInput | ReviewCreateOrConnectWithoutVillaInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVillaInput | ReviewUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: ReviewCreateManyVillaInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVillaInput | ReviewUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVillaInput | ReviewUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutVillaNestedInput = {
    create?: XOR<BookingCreateWithoutVillaInput, BookingUncheckedCreateWithoutVillaInput> | BookingCreateWithoutVillaInput[] | BookingUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVillaInput | BookingCreateOrConnectWithoutVillaInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVillaInput | BookingUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: BookingCreateManyVillaInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVillaInput | BookingUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVillaInput | BookingUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type VillaImageUncheckedUpdateManyWithoutVillaNestedInput = {
    create?: XOR<VillaImageCreateWithoutVillaInput, VillaImageUncheckedCreateWithoutVillaInput> | VillaImageCreateWithoutVillaInput[] | VillaImageUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaImageCreateOrConnectWithoutVillaInput | VillaImageCreateOrConnectWithoutVillaInput[]
    upsert?: VillaImageUpsertWithWhereUniqueWithoutVillaInput | VillaImageUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: VillaImageCreateManyVillaInputEnvelope
    set?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
    disconnect?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
    delete?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
    connect?: VillaImageWhereUniqueInput | VillaImageWhereUniqueInput[]
    update?: VillaImageUpdateWithWhereUniqueWithoutVillaInput | VillaImageUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: VillaImageUpdateManyWithWhereWithoutVillaInput | VillaImageUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: VillaImageScalarWhereInput | VillaImageScalarWhereInput[]
  }

  export type VillaAmenityUncheckedUpdateManyWithoutVillaNestedInput = {
    create?: XOR<VillaAmenityCreateWithoutVillaInput, VillaAmenityUncheckedCreateWithoutVillaInput> | VillaAmenityCreateWithoutVillaInput[] | VillaAmenityUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaAmenityCreateOrConnectWithoutVillaInput | VillaAmenityCreateOrConnectWithoutVillaInput[]
    upsert?: VillaAmenityUpsertWithWhereUniqueWithoutVillaInput | VillaAmenityUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: VillaAmenityCreateManyVillaInputEnvelope
    set?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
    disconnect?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
    delete?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
    connect?: VillaAmenityWhereUniqueInput | VillaAmenityWhereUniqueInput[]
    update?: VillaAmenityUpdateWithWhereUniqueWithoutVillaInput | VillaAmenityUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: VillaAmenityUpdateManyWithWhereWithoutVillaInput | VillaAmenityUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: VillaAmenityScalarWhereInput | VillaAmenityScalarWhereInput[]
  }

  export type VillaHighlightUncheckedUpdateManyWithoutVillaNestedInput = {
    create?: XOR<VillaHighlightCreateWithoutVillaInput, VillaHighlightUncheckedCreateWithoutVillaInput> | VillaHighlightCreateWithoutVillaInput[] | VillaHighlightUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaHighlightCreateOrConnectWithoutVillaInput | VillaHighlightCreateOrConnectWithoutVillaInput[]
    upsert?: VillaHighlightUpsertWithWhereUniqueWithoutVillaInput | VillaHighlightUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: VillaHighlightCreateManyVillaInputEnvelope
    set?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
    disconnect?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
    delete?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
    connect?: VillaHighlightWhereUniqueInput | VillaHighlightWhereUniqueInput[]
    update?: VillaHighlightUpdateWithWhereUniqueWithoutVillaInput | VillaHighlightUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: VillaHighlightUpdateManyWithWhereWithoutVillaInput | VillaHighlightUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: VillaHighlightScalarWhereInput | VillaHighlightScalarWhereInput[]
  }

  export type VillaPolicyUncheckedUpdateManyWithoutVillaNestedInput = {
    create?: XOR<VillaPolicyCreateWithoutVillaInput, VillaPolicyUncheckedCreateWithoutVillaInput> | VillaPolicyCreateWithoutVillaInput[] | VillaPolicyUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: VillaPolicyCreateOrConnectWithoutVillaInput | VillaPolicyCreateOrConnectWithoutVillaInput[]
    upsert?: VillaPolicyUpsertWithWhereUniqueWithoutVillaInput | VillaPolicyUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: VillaPolicyCreateManyVillaInputEnvelope
    set?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
    disconnect?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
    delete?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
    connect?: VillaPolicyWhereUniqueInput | VillaPolicyWhereUniqueInput[]
    update?: VillaPolicyUpdateWithWhereUniqueWithoutVillaInput | VillaPolicyUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: VillaPolicyUpdateManyWithWhereWithoutVillaInput | VillaPolicyUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: VillaPolicyScalarWhereInput | VillaPolicyScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutVillaNestedInput = {
    create?: XOR<ReviewCreateWithoutVillaInput, ReviewUncheckedCreateWithoutVillaInput> | ReviewCreateWithoutVillaInput[] | ReviewUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVillaInput | ReviewCreateOrConnectWithoutVillaInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVillaInput | ReviewUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: ReviewCreateManyVillaInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVillaInput | ReviewUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVillaInput | ReviewUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutVillaNestedInput = {
    create?: XOR<BookingCreateWithoutVillaInput, BookingUncheckedCreateWithoutVillaInput> | BookingCreateWithoutVillaInput[] | BookingUncheckedCreateWithoutVillaInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVillaInput | BookingCreateOrConnectWithoutVillaInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVillaInput | BookingUpsertWithWhereUniqueWithoutVillaInput[]
    createMany?: BookingCreateManyVillaInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVillaInput | BookingUpdateWithWhereUniqueWithoutVillaInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVillaInput | BookingUpdateManyWithWhereWithoutVillaInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type VillaCreateNestedOneWithoutBookingsInput = {
    create?: XOR<VillaCreateWithoutBookingsInput, VillaUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VillaCreateOrConnectWithoutBookingsInput
    connect?: VillaWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VillaUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<VillaCreateWithoutBookingsInput, VillaUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VillaCreateOrConnectWithoutBookingsInput
    upsert?: VillaUpsertWithoutBookingsInput
    disconnect?: VillaWhereInput | boolean
    delete?: VillaWhereInput | boolean
    connect?: VillaWhereUniqueInput
    update?: XOR<XOR<VillaUpdateToOneWithWhereWithoutBookingsInput, VillaUpdateWithoutBookingsInput>, VillaUncheckedUpdateWithoutBookingsInput>
  }

  export type VillaCreateNestedOneWithoutImagesInput = {
    create?: XOR<VillaCreateWithoutImagesInput, VillaUncheckedCreateWithoutImagesInput>
    connectOrCreate?: VillaCreateOrConnectWithoutImagesInput
    connect?: VillaWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Bytes
  }

  export type VillaUpdateOneWithoutImagesNestedInput = {
    create?: XOR<VillaCreateWithoutImagesInput, VillaUncheckedCreateWithoutImagesInput>
    connectOrCreate?: VillaCreateOrConnectWithoutImagesInput
    upsert?: VillaUpsertWithoutImagesInput
    disconnect?: VillaWhereInput | boolean
    delete?: VillaWhereInput | boolean
    connect?: VillaWhereUniqueInput
    update?: XOR<XOR<VillaUpdateToOneWithWhereWithoutImagesInput, VillaUpdateWithoutImagesInput>, VillaUncheckedUpdateWithoutImagesInput>
  }

  export type VillaCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<VillaCreateWithoutAmenitiesInput, VillaUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: VillaCreateOrConnectWithoutAmenitiesInput
    connect?: VillaWhereUniqueInput
  }

  export type VillaUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<VillaCreateWithoutAmenitiesInput, VillaUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: VillaCreateOrConnectWithoutAmenitiesInput
    upsert?: VillaUpsertWithoutAmenitiesInput
    connect?: VillaWhereUniqueInput
    update?: XOR<XOR<VillaUpdateToOneWithWhereWithoutAmenitiesInput, VillaUpdateWithoutAmenitiesInput>, VillaUncheckedUpdateWithoutAmenitiesInput>
  }

  export type VillaCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<VillaCreateWithoutHighlightsInput, VillaUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: VillaCreateOrConnectWithoutHighlightsInput
    connect?: VillaWhereUniqueInput
  }

  export type VillaUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<VillaCreateWithoutHighlightsInput, VillaUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: VillaCreateOrConnectWithoutHighlightsInput
    upsert?: VillaUpsertWithoutHighlightsInput
    connect?: VillaWhereUniqueInput
    update?: XOR<XOR<VillaUpdateToOneWithWhereWithoutHighlightsInput, VillaUpdateWithoutHighlightsInput>, VillaUncheckedUpdateWithoutHighlightsInput>
  }

  export type VillaCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<VillaCreateWithoutPoliciesInput, VillaUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: VillaCreateOrConnectWithoutPoliciesInput
    connect?: VillaWhereUniqueInput
  }

  export type VillaUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<VillaCreateWithoutPoliciesInput, VillaUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: VillaCreateOrConnectWithoutPoliciesInput
    upsert?: VillaUpsertWithoutPoliciesInput
    connect?: VillaWhereUniqueInput
    update?: XOR<XOR<VillaUpdateToOneWithWhereWithoutPoliciesInput, VillaUpdateWithoutPoliciesInput>, VillaUncheckedUpdateWithoutPoliciesInput>
  }

  export type VillaCreateNestedOneWithoutReviewsInput = {
    create?: XOR<VillaCreateWithoutReviewsInput, VillaUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VillaCreateOrConnectWithoutReviewsInput
    connect?: VillaWhereUniqueInput
  }

  export type VillaUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<VillaCreateWithoutReviewsInput, VillaUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VillaCreateOrConnectWithoutReviewsInput
    upsert?: VillaUpsertWithoutReviewsInput
    connect?: VillaWhereUniqueInput
    update?: XOR<XOR<VillaUpdateToOneWithWhereWithoutReviewsInput, VillaUpdateWithoutReviewsInput>, VillaUncheckedUpdateWithoutReviewsInput>
  }

  export type VillaCreateNestedManyWithoutAreaObjInput = {
    create?: XOR<VillaCreateWithoutAreaObjInput, VillaUncheckedCreateWithoutAreaObjInput> | VillaCreateWithoutAreaObjInput[] | VillaUncheckedCreateWithoutAreaObjInput[]
    connectOrCreate?: VillaCreateOrConnectWithoutAreaObjInput | VillaCreateOrConnectWithoutAreaObjInput[]
    createMany?: VillaCreateManyAreaObjInputEnvelope
    connect?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
  }

  export type ImageAreaCreateNestedOneWithoutAreaInput = {
    create?: XOR<ImageAreaCreateWithoutAreaInput, ImageAreaUncheckedCreateWithoutAreaInput>
    connectOrCreate?: ImageAreaCreateOrConnectWithoutAreaInput
    connect?: ImageAreaWhereUniqueInput
  }

  export type VillaUncheckedCreateNestedManyWithoutAreaObjInput = {
    create?: XOR<VillaCreateWithoutAreaObjInput, VillaUncheckedCreateWithoutAreaObjInput> | VillaCreateWithoutAreaObjInput[] | VillaUncheckedCreateWithoutAreaObjInput[]
    connectOrCreate?: VillaCreateOrConnectWithoutAreaObjInput | VillaCreateOrConnectWithoutAreaObjInput[]
    createMany?: VillaCreateManyAreaObjInputEnvelope
    connect?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
  }

  export type ImageAreaUncheckedCreateNestedOneWithoutAreaInput = {
    create?: XOR<ImageAreaCreateWithoutAreaInput, ImageAreaUncheckedCreateWithoutAreaInput>
    connectOrCreate?: ImageAreaCreateOrConnectWithoutAreaInput
    connect?: ImageAreaWhereUniqueInput
  }

  export type VillaUpdateManyWithoutAreaObjNestedInput = {
    create?: XOR<VillaCreateWithoutAreaObjInput, VillaUncheckedCreateWithoutAreaObjInput> | VillaCreateWithoutAreaObjInput[] | VillaUncheckedCreateWithoutAreaObjInput[]
    connectOrCreate?: VillaCreateOrConnectWithoutAreaObjInput | VillaCreateOrConnectWithoutAreaObjInput[]
    upsert?: VillaUpsertWithWhereUniqueWithoutAreaObjInput | VillaUpsertWithWhereUniqueWithoutAreaObjInput[]
    createMany?: VillaCreateManyAreaObjInputEnvelope
    set?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
    disconnect?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
    delete?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
    connect?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
    update?: VillaUpdateWithWhereUniqueWithoutAreaObjInput | VillaUpdateWithWhereUniqueWithoutAreaObjInput[]
    updateMany?: VillaUpdateManyWithWhereWithoutAreaObjInput | VillaUpdateManyWithWhereWithoutAreaObjInput[]
    deleteMany?: VillaScalarWhereInput | VillaScalarWhereInput[]
  }

  export type ImageAreaUpdateOneWithoutAreaNestedInput = {
    create?: XOR<ImageAreaCreateWithoutAreaInput, ImageAreaUncheckedCreateWithoutAreaInput>
    connectOrCreate?: ImageAreaCreateOrConnectWithoutAreaInput
    upsert?: ImageAreaUpsertWithoutAreaInput
    disconnect?: ImageAreaWhereInput | boolean
    delete?: ImageAreaWhereInput | boolean
    connect?: ImageAreaWhereUniqueInput
    update?: XOR<XOR<ImageAreaUpdateToOneWithWhereWithoutAreaInput, ImageAreaUpdateWithoutAreaInput>, ImageAreaUncheckedUpdateWithoutAreaInput>
  }

  export type VillaUncheckedUpdateManyWithoutAreaObjNestedInput = {
    create?: XOR<VillaCreateWithoutAreaObjInput, VillaUncheckedCreateWithoutAreaObjInput> | VillaCreateWithoutAreaObjInput[] | VillaUncheckedCreateWithoutAreaObjInput[]
    connectOrCreate?: VillaCreateOrConnectWithoutAreaObjInput | VillaCreateOrConnectWithoutAreaObjInput[]
    upsert?: VillaUpsertWithWhereUniqueWithoutAreaObjInput | VillaUpsertWithWhereUniqueWithoutAreaObjInput[]
    createMany?: VillaCreateManyAreaObjInputEnvelope
    set?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
    disconnect?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
    delete?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
    connect?: VillaWhereUniqueInput | VillaWhereUniqueInput[]
    update?: VillaUpdateWithWhereUniqueWithoutAreaObjInput | VillaUpdateWithWhereUniqueWithoutAreaObjInput[]
    updateMany?: VillaUpdateManyWithWhereWithoutAreaObjInput | VillaUpdateManyWithWhereWithoutAreaObjInput[]
    deleteMany?: VillaScalarWhereInput | VillaScalarWhereInput[]
  }

  export type ImageAreaUncheckedUpdateOneWithoutAreaNestedInput = {
    create?: XOR<ImageAreaCreateWithoutAreaInput, ImageAreaUncheckedCreateWithoutAreaInput>
    connectOrCreate?: ImageAreaCreateOrConnectWithoutAreaInput
    upsert?: ImageAreaUpsertWithoutAreaInput
    disconnect?: ImageAreaWhereInput | boolean
    delete?: ImageAreaWhereInput | boolean
    connect?: ImageAreaWhereUniqueInput
    update?: XOR<XOR<ImageAreaUpdateToOneWithWhereWithoutAreaInput, ImageAreaUpdateWithoutAreaInput>, ImageAreaUncheckedUpdateWithoutAreaInput>
  }

  export type AreaCreateNestedOneWithoutImageInput = {
    create?: XOR<AreaCreateWithoutImageInput, AreaUncheckedCreateWithoutImageInput>
    connectOrCreate?: AreaCreateOrConnectWithoutImageInput
    connect?: AreaWhereUniqueInput
  }

  export type AreaUpdateOneRequiredWithoutImageNestedInput = {
    create?: XOR<AreaCreateWithoutImageInput, AreaUncheckedCreateWithoutImageInput>
    connectOrCreate?: AreaCreateOrConnectWithoutImageInput
    upsert?: AreaUpsertWithoutImageInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutImageInput, AreaUpdateWithoutImageInput>, AreaUncheckedUpdateWithoutImageInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type AreaCreateWithoutVillasInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    isFamous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageAreaCreateNestedOneWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutVillasInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    isFamous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageAreaUncheckedCreateNestedOneWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutVillasInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutVillasInput, AreaUncheckedCreateWithoutVillasInput>
  }

  export type VillaImageCreateWithoutVillaInput = {
    id?: string
    data: Bytes
    mimeType?: string
    isMain?: boolean
    order?: number
  }

  export type VillaImageUncheckedCreateWithoutVillaInput = {
    id?: string
    data: Bytes
    mimeType?: string
    isMain?: boolean
    order?: number
  }

  export type VillaImageCreateOrConnectWithoutVillaInput = {
    where: VillaImageWhereUniqueInput
    create: XOR<VillaImageCreateWithoutVillaInput, VillaImageUncheckedCreateWithoutVillaInput>
  }

  export type VillaImageCreateManyVillaInputEnvelope = {
    data: VillaImageCreateManyVillaInput | VillaImageCreateManyVillaInput[]
    skipDuplicates?: boolean
  }

  export type VillaAmenityCreateWithoutVillaInput = {
    id?: string
    name: string
  }

  export type VillaAmenityUncheckedCreateWithoutVillaInput = {
    id?: string
    name: string
  }

  export type VillaAmenityCreateOrConnectWithoutVillaInput = {
    where: VillaAmenityWhereUniqueInput
    create: XOR<VillaAmenityCreateWithoutVillaInput, VillaAmenityUncheckedCreateWithoutVillaInput>
  }

  export type VillaAmenityCreateManyVillaInputEnvelope = {
    data: VillaAmenityCreateManyVillaInput | VillaAmenityCreateManyVillaInput[]
    skipDuplicates?: boolean
  }

  export type VillaHighlightCreateWithoutVillaInput = {
    id?: string
    text: string
    order?: number
  }

  export type VillaHighlightUncheckedCreateWithoutVillaInput = {
    id?: string
    text: string
    order?: number
  }

  export type VillaHighlightCreateOrConnectWithoutVillaInput = {
    where: VillaHighlightWhereUniqueInput
    create: XOR<VillaHighlightCreateWithoutVillaInput, VillaHighlightUncheckedCreateWithoutVillaInput>
  }

  export type VillaHighlightCreateManyVillaInputEnvelope = {
    data: VillaHighlightCreateManyVillaInput | VillaHighlightCreateManyVillaInput[]
    skipDuplicates?: boolean
  }

  export type VillaPolicyCreateWithoutVillaInput = {
    id?: string
    text: string
    order?: number
  }

  export type VillaPolicyUncheckedCreateWithoutVillaInput = {
    id?: string
    text: string
    order?: number
  }

  export type VillaPolicyCreateOrConnectWithoutVillaInput = {
    where: VillaPolicyWhereUniqueInput
    create: XOR<VillaPolicyCreateWithoutVillaInput, VillaPolicyUncheckedCreateWithoutVillaInput>
  }

  export type VillaPolicyCreateManyVillaInputEnvelope = {
    data: VillaPolicyCreateManyVillaInput | VillaPolicyCreateManyVillaInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutVillaInput = {
    id?: string
    author: string
    avatar?: string
    date: string
    rating: number
    comment: string
  }

  export type ReviewUncheckedCreateWithoutVillaInput = {
    id?: string
    author: string
    avatar?: string
    date: string
    rating: number
    comment: string
  }

  export type ReviewCreateOrConnectWithoutVillaInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutVillaInput, ReviewUncheckedCreateWithoutVillaInput>
  }

  export type ReviewCreateManyVillaInputEnvelope = {
    data: ReviewCreateManyVillaInput | ReviewCreateManyVillaInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutVillaInput = {
    id?: string
    name: string
    email: string
    phone: string
    note?: string | null
    checkIn: string
    checkOut: string
    guests: number
    total: number
    priceAtBooking?: number | null
    bookingType?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUncheckedCreateWithoutVillaInput = {
    id?: string
    name: string
    email: string
    phone: string
    note?: string | null
    checkIn: string
    checkOut: string
    guests: number
    total: number
    priceAtBooking?: number | null
    bookingType?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutVillaInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutVillaInput, BookingUncheckedCreateWithoutVillaInput>
  }

  export type BookingCreateManyVillaInputEnvelope = {
    data: BookingCreateManyVillaInput | BookingCreateManyVillaInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithoutVillasInput = {
    update: XOR<AreaUpdateWithoutVillasInput, AreaUncheckedUpdateWithoutVillasInput>
    create: XOR<AreaCreateWithoutVillasInput, AreaUncheckedCreateWithoutVillasInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutVillasInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutVillasInput, AreaUncheckedUpdateWithoutVillasInput>
  }

  export type AreaUpdateWithoutVillasInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFamous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageAreaUpdateOneWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutVillasInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFamous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageAreaUncheckedUpdateOneWithoutAreaNestedInput
  }

  export type VillaImageUpsertWithWhereUniqueWithoutVillaInput = {
    where: VillaImageWhereUniqueInput
    update: XOR<VillaImageUpdateWithoutVillaInput, VillaImageUncheckedUpdateWithoutVillaInput>
    create: XOR<VillaImageCreateWithoutVillaInput, VillaImageUncheckedCreateWithoutVillaInput>
  }

  export type VillaImageUpdateWithWhereUniqueWithoutVillaInput = {
    where: VillaImageWhereUniqueInput
    data: XOR<VillaImageUpdateWithoutVillaInput, VillaImageUncheckedUpdateWithoutVillaInput>
  }

  export type VillaImageUpdateManyWithWhereWithoutVillaInput = {
    where: VillaImageScalarWhereInput
    data: XOR<VillaImageUpdateManyMutationInput, VillaImageUncheckedUpdateManyWithoutVillaInput>
  }

  export type VillaImageScalarWhereInput = {
    AND?: VillaImageScalarWhereInput | VillaImageScalarWhereInput[]
    OR?: VillaImageScalarWhereInput[]
    NOT?: VillaImageScalarWhereInput | VillaImageScalarWhereInput[]
    id?: StringFilter<"VillaImage"> | string
    villaId?: StringNullableFilter<"VillaImage"> | string | null
    data?: BytesFilter<"VillaImage"> | Bytes
    mimeType?: StringFilter<"VillaImage"> | string
    isMain?: BoolFilter<"VillaImage"> | boolean
    order?: IntFilter<"VillaImage"> | number
  }

  export type VillaAmenityUpsertWithWhereUniqueWithoutVillaInput = {
    where: VillaAmenityWhereUniqueInput
    update: XOR<VillaAmenityUpdateWithoutVillaInput, VillaAmenityUncheckedUpdateWithoutVillaInput>
    create: XOR<VillaAmenityCreateWithoutVillaInput, VillaAmenityUncheckedCreateWithoutVillaInput>
  }

  export type VillaAmenityUpdateWithWhereUniqueWithoutVillaInput = {
    where: VillaAmenityWhereUniqueInput
    data: XOR<VillaAmenityUpdateWithoutVillaInput, VillaAmenityUncheckedUpdateWithoutVillaInput>
  }

  export type VillaAmenityUpdateManyWithWhereWithoutVillaInput = {
    where: VillaAmenityScalarWhereInput
    data: XOR<VillaAmenityUpdateManyMutationInput, VillaAmenityUncheckedUpdateManyWithoutVillaInput>
  }

  export type VillaAmenityScalarWhereInput = {
    AND?: VillaAmenityScalarWhereInput | VillaAmenityScalarWhereInput[]
    OR?: VillaAmenityScalarWhereInput[]
    NOT?: VillaAmenityScalarWhereInput | VillaAmenityScalarWhereInput[]
    id?: StringFilter<"VillaAmenity"> | string
    name?: StringFilter<"VillaAmenity"> | string
    villaId?: StringFilter<"VillaAmenity"> | string
  }

  export type VillaHighlightUpsertWithWhereUniqueWithoutVillaInput = {
    where: VillaHighlightWhereUniqueInput
    update: XOR<VillaHighlightUpdateWithoutVillaInput, VillaHighlightUncheckedUpdateWithoutVillaInput>
    create: XOR<VillaHighlightCreateWithoutVillaInput, VillaHighlightUncheckedCreateWithoutVillaInput>
  }

  export type VillaHighlightUpdateWithWhereUniqueWithoutVillaInput = {
    where: VillaHighlightWhereUniqueInput
    data: XOR<VillaHighlightUpdateWithoutVillaInput, VillaHighlightUncheckedUpdateWithoutVillaInput>
  }

  export type VillaHighlightUpdateManyWithWhereWithoutVillaInput = {
    where: VillaHighlightScalarWhereInput
    data: XOR<VillaHighlightUpdateManyMutationInput, VillaHighlightUncheckedUpdateManyWithoutVillaInput>
  }

  export type VillaHighlightScalarWhereInput = {
    AND?: VillaHighlightScalarWhereInput | VillaHighlightScalarWhereInput[]
    OR?: VillaHighlightScalarWhereInput[]
    NOT?: VillaHighlightScalarWhereInput | VillaHighlightScalarWhereInput[]
    id?: StringFilter<"VillaHighlight"> | string
    text?: StringFilter<"VillaHighlight"> | string
    order?: IntFilter<"VillaHighlight"> | number
    villaId?: StringFilter<"VillaHighlight"> | string
  }

  export type VillaPolicyUpsertWithWhereUniqueWithoutVillaInput = {
    where: VillaPolicyWhereUniqueInput
    update: XOR<VillaPolicyUpdateWithoutVillaInput, VillaPolicyUncheckedUpdateWithoutVillaInput>
    create: XOR<VillaPolicyCreateWithoutVillaInput, VillaPolicyUncheckedCreateWithoutVillaInput>
  }

  export type VillaPolicyUpdateWithWhereUniqueWithoutVillaInput = {
    where: VillaPolicyWhereUniqueInput
    data: XOR<VillaPolicyUpdateWithoutVillaInput, VillaPolicyUncheckedUpdateWithoutVillaInput>
  }

  export type VillaPolicyUpdateManyWithWhereWithoutVillaInput = {
    where: VillaPolicyScalarWhereInput
    data: XOR<VillaPolicyUpdateManyMutationInput, VillaPolicyUncheckedUpdateManyWithoutVillaInput>
  }

  export type VillaPolicyScalarWhereInput = {
    AND?: VillaPolicyScalarWhereInput | VillaPolicyScalarWhereInput[]
    OR?: VillaPolicyScalarWhereInput[]
    NOT?: VillaPolicyScalarWhereInput | VillaPolicyScalarWhereInput[]
    id?: StringFilter<"VillaPolicy"> | string
    text?: StringFilter<"VillaPolicy"> | string
    order?: IntFilter<"VillaPolicy"> | number
    villaId?: StringFilter<"VillaPolicy"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutVillaInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutVillaInput, ReviewUncheckedUpdateWithoutVillaInput>
    create: XOR<ReviewCreateWithoutVillaInput, ReviewUncheckedCreateWithoutVillaInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutVillaInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutVillaInput, ReviewUncheckedUpdateWithoutVillaInput>
  }

  export type ReviewUpdateManyWithWhereWithoutVillaInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutVillaInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    author?: StringFilter<"Review"> | string
    avatar?: StringFilter<"Review"> | string
    date?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    villaId?: StringFilter<"Review"> | string
  }

  export type BookingUpsertWithWhereUniqueWithoutVillaInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutVillaInput, BookingUncheckedUpdateWithoutVillaInput>
    create: XOR<BookingCreateWithoutVillaInput, BookingUncheckedCreateWithoutVillaInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutVillaInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutVillaInput, BookingUncheckedUpdateWithoutVillaInput>
  }

  export type BookingUpdateManyWithWhereWithoutVillaInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutVillaInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    villaId?: StringNullableFilter<"Booking"> | string | null
    name?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phone?: StringFilter<"Booking"> | string
    note?: StringNullableFilter<"Booking"> | string | null
    checkIn?: StringFilter<"Booking"> | string
    checkOut?: StringFilter<"Booking"> | string
    guests?: IntFilter<"Booking"> | number
    total?: FloatFilter<"Booking"> | number
    priceAtBooking?: FloatNullableFilter<"Booking"> | number | null
    bookingType?: StringFilter<"Booking"> | string
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type VillaCreateWithoutBookingsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    areaObj?: AreaCreateNestedOneWithoutVillasInput
    images?: VillaImageCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyCreateNestedManyWithoutVillaInput
    reviews?: ReviewCreateNestedManyWithoutVillaInput
  }

  export type VillaUncheckedCreateWithoutBookingsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    areaId?: string | null
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VillaImageUncheckedCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityUncheckedCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightUncheckedCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyUncheckedCreateNestedManyWithoutVillaInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVillaInput
  }

  export type VillaCreateOrConnectWithoutBookingsInput = {
    where: VillaWhereUniqueInput
    create: XOR<VillaCreateWithoutBookingsInput, VillaUncheckedCreateWithoutBookingsInput>
  }

  export type VillaUpsertWithoutBookingsInput = {
    update: XOR<VillaUpdateWithoutBookingsInput, VillaUncheckedUpdateWithoutBookingsInput>
    create: XOR<VillaCreateWithoutBookingsInput, VillaUncheckedCreateWithoutBookingsInput>
    where?: VillaWhereInput
  }

  export type VillaUpdateToOneWithWhereWithoutBookingsInput = {
    where?: VillaWhereInput
    data: XOR<VillaUpdateWithoutBookingsInput, VillaUncheckedUpdateWithoutBookingsInput>
  }

  export type VillaUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaObj?: AreaUpdateOneWithoutVillasNestedInput
    images?: VillaImageUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUpdateManyWithoutVillaNestedInput
  }

  export type VillaUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VillaImageUncheckedUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUncheckedUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUncheckedUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUncheckedUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVillaNestedInput
  }

  export type VillaCreateWithoutImagesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    areaObj?: AreaCreateNestedOneWithoutVillasInput
    amenities?: VillaAmenityCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyCreateNestedManyWithoutVillaInput
    reviews?: ReviewCreateNestedManyWithoutVillaInput
    bookings?: BookingCreateNestedManyWithoutVillaInput
  }

  export type VillaUncheckedCreateWithoutImagesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    areaId?: string | null
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amenities?: VillaAmenityUncheckedCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightUncheckedCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyUncheckedCreateNestedManyWithoutVillaInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVillaInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVillaInput
  }

  export type VillaCreateOrConnectWithoutImagesInput = {
    where: VillaWhereUniqueInput
    create: XOR<VillaCreateWithoutImagesInput, VillaUncheckedCreateWithoutImagesInput>
  }

  export type VillaUpsertWithoutImagesInput = {
    update: XOR<VillaUpdateWithoutImagesInput, VillaUncheckedUpdateWithoutImagesInput>
    create: XOR<VillaCreateWithoutImagesInput, VillaUncheckedCreateWithoutImagesInput>
    where?: VillaWhereInput
  }

  export type VillaUpdateToOneWithWhereWithoutImagesInput = {
    where?: VillaWhereInput
    data: XOR<VillaUpdateWithoutImagesInput, VillaUncheckedUpdateWithoutImagesInput>
  }

  export type VillaUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaObj?: AreaUpdateOneWithoutVillasNestedInput
    amenities?: VillaAmenityUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUpdateManyWithoutVillaNestedInput
    bookings?: BookingUpdateManyWithoutVillaNestedInput
  }

  export type VillaUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amenities?: VillaAmenityUncheckedUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUncheckedUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUncheckedUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVillaNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVillaNestedInput
  }

  export type VillaCreateWithoutAmenitiesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    areaObj?: AreaCreateNestedOneWithoutVillasInput
    images?: VillaImageCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyCreateNestedManyWithoutVillaInput
    reviews?: ReviewCreateNestedManyWithoutVillaInput
    bookings?: BookingCreateNestedManyWithoutVillaInput
  }

  export type VillaUncheckedCreateWithoutAmenitiesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    areaId?: string | null
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VillaImageUncheckedCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightUncheckedCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyUncheckedCreateNestedManyWithoutVillaInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVillaInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVillaInput
  }

  export type VillaCreateOrConnectWithoutAmenitiesInput = {
    where: VillaWhereUniqueInput
    create: XOR<VillaCreateWithoutAmenitiesInput, VillaUncheckedCreateWithoutAmenitiesInput>
  }

  export type VillaUpsertWithoutAmenitiesInput = {
    update: XOR<VillaUpdateWithoutAmenitiesInput, VillaUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<VillaCreateWithoutAmenitiesInput, VillaUncheckedCreateWithoutAmenitiesInput>
    where?: VillaWhereInput
  }

  export type VillaUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: VillaWhereInput
    data: XOR<VillaUpdateWithoutAmenitiesInput, VillaUncheckedUpdateWithoutAmenitiesInput>
  }

  export type VillaUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaObj?: AreaUpdateOneWithoutVillasNestedInput
    images?: VillaImageUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUpdateManyWithoutVillaNestedInput
    bookings?: BookingUpdateManyWithoutVillaNestedInput
  }

  export type VillaUncheckedUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VillaImageUncheckedUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUncheckedUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUncheckedUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVillaNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVillaNestedInput
  }

  export type VillaCreateWithoutHighlightsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    areaObj?: AreaCreateNestedOneWithoutVillasInput
    images?: VillaImageCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyCreateNestedManyWithoutVillaInput
    reviews?: ReviewCreateNestedManyWithoutVillaInput
    bookings?: BookingCreateNestedManyWithoutVillaInput
  }

  export type VillaUncheckedCreateWithoutHighlightsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    areaId?: string | null
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VillaImageUncheckedCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityUncheckedCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyUncheckedCreateNestedManyWithoutVillaInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVillaInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVillaInput
  }

  export type VillaCreateOrConnectWithoutHighlightsInput = {
    where: VillaWhereUniqueInput
    create: XOR<VillaCreateWithoutHighlightsInput, VillaUncheckedCreateWithoutHighlightsInput>
  }

  export type VillaUpsertWithoutHighlightsInput = {
    update: XOR<VillaUpdateWithoutHighlightsInput, VillaUncheckedUpdateWithoutHighlightsInput>
    create: XOR<VillaCreateWithoutHighlightsInput, VillaUncheckedCreateWithoutHighlightsInput>
    where?: VillaWhereInput
  }

  export type VillaUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: VillaWhereInput
    data: XOR<VillaUpdateWithoutHighlightsInput, VillaUncheckedUpdateWithoutHighlightsInput>
  }

  export type VillaUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaObj?: AreaUpdateOneWithoutVillasNestedInput
    images?: VillaImageUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUpdateManyWithoutVillaNestedInput
    bookings?: BookingUpdateManyWithoutVillaNestedInput
  }

  export type VillaUncheckedUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VillaImageUncheckedUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUncheckedUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUncheckedUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVillaNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVillaNestedInput
  }

  export type VillaCreateWithoutPoliciesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    areaObj?: AreaCreateNestedOneWithoutVillasInput
    images?: VillaImageCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightCreateNestedManyWithoutVillaInput
    reviews?: ReviewCreateNestedManyWithoutVillaInput
    bookings?: BookingCreateNestedManyWithoutVillaInput
  }

  export type VillaUncheckedCreateWithoutPoliciesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    areaId?: string | null
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VillaImageUncheckedCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityUncheckedCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightUncheckedCreateNestedManyWithoutVillaInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVillaInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVillaInput
  }

  export type VillaCreateOrConnectWithoutPoliciesInput = {
    where: VillaWhereUniqueInput
    create: XOR<VillaCreateWithoutPoliciesInput, VillaUncheckedCreateWithoutPoliciesInput>
  }

  export type VillaUpsertWithoutPoliciesInput = {
    update: XOR<VillaUpdateWithoutPoliciesInput, VillaUncheckedUpdateWithoutPoliciesInput>
    create: XOR<VillaCreateWithoutPoliciesInput, VillaUncheckedCreateWithoutPoliciesInput>
    where?: VillaWhereInput
  }

  export type VillaUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: VillaWhereInput
    data: XOR<VillaUpdateWithoutPoliciesInput, VillaUncheckedUpdateWithoutPoliciesInput>
  }

  export type VillaUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaObj?: AreaUpdateOneWithoutVillasNestedInput
    images?: VillaImageUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUpdateManyWithoutVillaNestedInput
    bookings?: BookingUpdateManyWithoutVillaNestedInput
  }

  export type VillaUncheckedUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VillaImageUncheckedUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUncheckedUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUncheckedUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVillaNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVillaNestedInput
  }

  export type VillaCreateWithoutReviewsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    areaObj?: AreaCreateNestedOneWithoutVillasInput
    images?: VillaImageCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyCreateNestedManyWithoutVillaInput
    bookings?: BookingCreateNestedManyWithoutVillaInput
  }

  export type VillaUncheckedCreateWithoutReviewsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    areaId?: string | null
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VillaImageUncheckedCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityUncheckedCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightUncheckedCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyUncheckedCreateNestedManyWithoutVillaInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVillaInput
  }

  export type VillaCreateOrConnectWithoutReviewsInput = {
    where: VillaWhereUniqueInput
    create: XOR<VillaCreateWithoutReviewsInput, VillaUncheckedCreateWithoutReviewsInput>
  }

  export type VillaUpsertWithoutReviewsInput = {
    update: XOR<VillaUpdateWithoutReviewsInput, VillaUncheckedUpdateWithoutReviewsInput>
    create: XOR<VillaCreateWithoutReviewsInput, VillaUncheckedCreateWithoutReviewsInput>
    where?: VillaWhereInput
  }

  export type VillaUpdateToOneWithWhereWithoutReviewsInput = {
    where?: VillaWhereInput
    data: XOR<VillaUpdateWithoutReviewsInput, VillaUncheckedUpdateWithoutReviewsInput>
  }

  export type VillaUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaObj?: AreaUpdateOneWithoutVillasNestedInput
    images?: VillaImageUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUpdateManyWithoutVillaNestedInput
    bookings?: BookingUpdateManyWithoutVillaNestedInput
  }

  export type VillaUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VillaImageUncheckedUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUncheckedUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUncheckedUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUncheckedUpdateManyWithoutVillaNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVillaNestedInput
  }

  export type VillaCreateWithoutAreaObjInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VillaImageCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyCreateNestedManyWithoutVillaInput
    reviews?: ReviewCreateNestedManyWithoutVillaInput
    bookings?: BookingCreateNestedManyWithoutVillaInput
  }

  export type VillaUncheckedCreateWithoutAreaObjInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VillaImageUncheckedCreateNestedManyWithoutVillaInput
    amenities?: VillaAmenityUncheckedCreateNestedManyWithoutVillaInput
    highlights?: VillaHighlightUncheckedCreateNestedManyWithoutVillaInput
    policies?: VillaPolicyUncheckedCreateNestedManyWithoutVillaInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVillaInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVillaInput
  }

  export type VillaCreateOrConnectWithoutAreaObjInput = {
    where: VillaWhereUniqueInput
    create: XOR<VillaCreateWithoutAreaObjInput, VillaUncheckedCreateWithoutAreaObjInput>
  }

  export type VillaCreateManyAreaObjInputEnvelope = {
    data: VillaCreateManyAreaObjInput | VillaCreateManyAreaObjInput[]
    skipDuplicates?: boolean
  }

  export type ImageAreaCreateWithoutAreaInput = {
    id?: string
    data: Bytes
    mimeType?: string
  }

  export type ImageAreaUncheckedCreateWithoutAreaInput = {
    id?: string
    data: Bytes
    mimeType?: string
  }

  export type ImageAreaCreateOrConnectWithoutAreaInput = {
    where: ImageAreaWhereUniqueInput
    create: XOR<ImageAreaCreateWithoutAreaInput, ImageAreaUncheckedCreateWithoutAreaInput>
  }

  export type VillaUpsertWithWhereUniqueWithoutAreaObjInput = {
    where: VillaWhereUniqueInput
    update: XOR<VillaUpdateWithoutAreaObjInput, VillaUncheckedUpdateWithoutAreaObjInput>
    create: XOR<VillaCreateWithoutAreaObjInput, VillaUncheckedCreateWithoutAreaObjInput>
  }

  export type VillaUpdateWithWhereUniqueWithoutAreaObjInput = {
    where: VillaWhereUniqueInput
    data: XOR<VillaUpdateWithoutAreaObjInput, VillaUncheckedUpdateWithoutAreaObjInput>
  }

  export type VillaUpdateManyWithWhereWithoutAreaObjInput = {
    where: VillaScalarWhereInput
    data: XOR<VillaUpdateManyMutationInput, VillaUncheckedUpdateManyWithoutAreaObjInput>
  }

  export type VillaScalarWhereInput = {
    AND?: VillaScalarWhereInput | VillaScalarWhereInput[]
    OR?: VillaScalarWhereInput[]
    NOT?: VillaScalarWhereInput | VillaScalarWhereInput[]
    id?: StringFilter<"Villa"> | string
    slug?: StringFilter<"Villa"> | string
    name?: StringFilter<"Villa"> | string
    tagline?: StringFilter<"Villa"> | string
    description?: StringFilter<"Villa"> | string
    areaId?: StringNullableFilter<"Villa"> | string | null
    address?: StringFilter<"Villa"> | string
    bedrooms?: IntFilter<"Villa"> | number
    bathrooms?: IntFilter<"Villa"> | number
    maxGuests?: IntFilter<"Villa"> | number
    size?: IntFilter<"Villa"> | number
    pricePerNight?: FloatFilter<"Villa"> | number
    priceWeekend?: FloatFilter<"Villa"> | number
    priceHoliday?: FloatFilter<"Villa"> | number
    rating?: FloatFilter<"Villa"> | number
    reviewCount?: IntFilter<"Villa"> | number
    checkIn?: StringFilter<"Villa"> | string
    checkOut?: StringFilter<"Villa"> | string
    featured?: BoolFilter<"Villa"> | boolean
    lat?: FloatFilter<"Villa"> | number
    lng?: FloatFilter<"Villa"> | number
    createdAt?: DateTimeFilter<"Villa"> | Date | string
    updatedAt?: DateTimeFilter<"Villa"> | Date | string
  }

  export type ImageAreaUpsertWithoutAreaInput = {
    update: XOR<ImageAreaUpdateWithoutAreaInput, ImageAreaUncheckedUpdateWithoutAreaInput>
    create: XOR<ImageAreaCreateWithoutAreaInput, ImageAreaUncheckedCreateWithoutAreaInput>
    where?: ImageAreaWhereInput
  }

  export type ImageAreaUpdateToOneWithWhereWithoutAreaInput = {
    where?: ImageAreaWhereInput
    data: XOR<ImageAreaUpdateWithoutAreaInput, ImageAreaUncheckedUpdateWithoutAreaInput>
  }

  export type ImageAreaUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
  }

  export type ImageAreaUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
  }

  export type AreaCreateWithoutImageInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    isFamous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    villas?: VillaCreateNestedManyWithoutAreaObjInput
  }

  export type AreaUncheckedCreateWithoutImageInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    isFamous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    villas?: VillaUncheckedCreateNestedManyWithoutAreaObjInput
  }

  export type AreaCreateOrConnectWithoutImageInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutImageInput, AreaUncheckedCreateWithoutImageInput>
  }

  export type AreaUpsertWithoutImageInput = {
    update: XOR<AreaUpdateWithoutImageInput, AreaUncheckedUpdateWithoutImageInput>
    create: XOR<AreaCreateWithoutImageInput, AreaUncheckedCreateWithoutImageInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutImageInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutImageInput, AreaUncheckedUpdateWithoutImageInput>
  }

  export type AreaUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFamous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    villas?: VillaUpdateManyWithoutAreaObjNestedInput
  }

  export type AreaUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFamous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    villas?: VillaUncheckedUpdateManyWithoutAreaObjNestedInput
  }

  export type VillaImageCreateManyVillaInput = {
    id?: string
    data: Bytes
    mimeType?: string
    isMain?: boolean
    order?: number
  }

  export type VillaAmenityCreateManyVillaInput = {
    id?: string
    name: string
  }

  export type VillaHighlightCreateManyVillaInput = {
    id?: string
    text: string
    order?: number
  }

  export type VillaPolicyCreateManyVillaInput = {
    id?: string
    text: string
    order?: number
  }

  export type ReviewCreateManyVillaInput = {
    id?: string
    author: string
    avatar?: string
    date: string
    rating: number
    comment: string
  }

  export type BookingCreateManyVillaInput = {
    id?: string
    name: string
    email: string
    phone: string
    note?: string | null
    checkIn: string
    checkOut: string
    guests: number
    total: number
    priceAtBooking?: number | null
    bookingType?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillaImageUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaImageUncheckedUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaImageUncheckedUpdateManyWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: BytesFieldUpdateOperationsInput | Bytes
    mimeType?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaAmenityUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VillaAmenityUncheckedUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VillaAmenityUncheckedUpdateManyWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VillaHighlightUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaHighlightUncheckedUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaHighlightUncheckedUpdateManyWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaPolicyUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaPolicyUncheckedUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VillaPolicyUncheckedUpdateManyWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    priceAtBooking?: NullableFloatFieldUpdateOperationsInput | number | null
    bookingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    priceAtBooking?: NullableFloatFieldUpdateOperationsInput | number | null
    bookingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutVillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    priceAtBooking?: NullableFloatFieldUpdateOperationsInput | number | null
    bookingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillaCreateManyAreaObjInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    address: string
    bedrooms: number
    bathrooms: number
    maxGuests: number
    size: number
    pricePerNight: number
    priceWeekend: number
    priceHoliday: number
    rating: number
    reviewCount: number
    checkIn: string
    checkOut: string
    featured: boolean
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillaUpdateWithoutAreaObjInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VillaImageUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUpdateManyWithoutVillaNestedInput
    bookings?: BookingUpdateManyWithoutVillaNestedInput
  }

  export type VillaUncheckedUpdateWithoutAreaObjInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VillaImageUncheckedUpdateManyWithoutVillaNestedInput
    amenities?: VillaAmenityUncheckedUpdateManyWithoutVillaNestedInput
    highlights?: VillaHighlightUncheckedUpdateManyWithoutVillaNestedInput
    policies?: VillaPolicyUncheckedUpdateManyWithoutVillaNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVillaNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVillaNestedInput
  }

  export type VillaUncheckedUpdateManyWithoutAreaObjInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    priceWeekend?: FloatFieldUpdateOperationsInput | number
    priceHoliday?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
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