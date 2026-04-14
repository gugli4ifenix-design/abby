// Update the type inference for the return type on Line 30
// Assuming the original line was something like this:
// name: keyof (X | undefined)
// Replace it with the correct type inference:
// name: keyof NonNullable<T["remoteConfig"]>
type ReturnType = {
  name: keyof NonNullable<T["remoteConfig"]>
}
