// Remove the line that imports Readonly from 'ts'
// import type { Readonly } from 'ts';

// Use the built-in Readonly type
type MyType = Readonly<{ [key: string]: string }>;
