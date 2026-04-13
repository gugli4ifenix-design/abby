// Assuming this is the line with the issue
type ReturnType = NonNullable<T["remoteConfig"]>[keyof NonNullable<T["remoteConfig"]>];
