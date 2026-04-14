// Assuming the line 30 is something like this:
name: keyof (T["remoteConfig"] | undefined)
// The exact fix would be to use NonNullable<T["remoteConfig"]>:
name: keyof NonNullable<T["remoteConfig"]>
