// Use the NonNullable type to infer the return type
type Key = keyof NonNullable<T['remoteConfig']>;
